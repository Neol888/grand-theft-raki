import * as THREE from 'three';

const VS = `varying vec2 vUv; void main(){ vUv = position.xy*0.5+0.5; gl_Position = vec4(position.xy,0.0,1.0); }`;
const mk = (fs, uniforms) => new THREE.ShaderMaterial({ vertexShader: VS, fragmentShader: fs, uniforms, depthTest: false, depthWrite: false });

const FS_PRE = `
uniform sampler2D tD; uniform vec2 uTexel; uniform float uThr; varying vec2 vUv;
void main(){
  vec3 c = texture2D(tD, vUv + uTexel*vec2(-1.,-1.)).rgb + texture2D(tD, vUv + uTexel*vec2(1.,-1.)).rgb
         + texture2D(tD, vUv + uTexel*vec2(-1.,1.)).rgb + texture2D(tD, vUv + uTexel*vec2(1.,1.)).rgb;
  c = min(c*0.25, vec3(14.0));
  float br = max(c.r, max(c.g, c.b));
  float w = max(br - uThr, 0.0) / max(br, 1e-4);
  gl_FragColor = vec4(c*w, 1.0);
}`;
const FS_DOWN = `
uniform sampler2D tD; uniform vec2 uTexel; varying vec2 vUv;
void main(){
  vec3 c = texture2D(tD, vUv).rgb*4.0;
  c += texture2D(tD, vUv + uTexel*vec2(-1.,-1.)).rgb; c += texture2D(tD, vUv + uTexel*vec2(1.,-1.)).rgb;
  c += texture2D(tD, vUv + uTexel*vec2(-1.,1.)).rgb;  c += texture2D(tD, vUv + uTexel*vec2(1.,1.)).rgb;
  gl_FragColor = vec4(c*0.125, 1.0);
}`;
const FS_UP = `
uniform sampler2D tD; uniform sampler2D tAdd; uniform vec2 uTexel; varying vec2 vUv;
void main(){
  vec2 t = uTexel;
  vec3 c = texture2D(tD, vUv + vec2(-2.*t.x,0.)).rgb + texture2D(tD, vUv + vec2(2.*t.x,0.)).rgb
         + texture2D(tD, vUv + vec2(0.,-2.*t.y)).rgb + texture2D(tD, vUv + vec2(0.,2.*t.y)).rgb;
  c += 2.0*(texture2D(tD, vUv + vec2(-t.x,t.y)).rgb + texture2D(tD, vUv + vec2(t.x,t.y)).rgb
          + texture2D(tD, vUv + vec2(-t.x,-t.y)).rgb + texture2D(tD, vUv + vec2(t.x,-t.y)).rgb);
  gl_FragColor = vec4(c/12.0 + texture2D(tAdd, vUv).rgb, 1.0);
}`;
const FS_FINAL = `
uniform sampler2D tScene; uniform sampler2D tBloom; uniform float uBloom; uniform float uTime; uniform float uExp; uniform float uFlash; uniform float uSat; uniform vec3 uTint;
varying vec2 vUv;
vec3 aces(vec3 x){ return clamp((x*(2.51*x+0.03))/(x*(2.43*x+0.59)+0.14), 0.0, 1.0); }
void main(){
  vec2 d = vUv - 0.5;
  float ca = dot(d,d)*0.006;
  vec3 c;
  c.r = texture2D(tScene, vUv + d*ca).r; c.g = texture2D(tScene, vUv).g; c.b = texture2D(tScene, vUv - d*ca).b;
  c += texture2D(tBloom, vUv).rgb * uBloom;
  c = aces(c * uExp);
  float lum = dot(c, vec3(0.299,0.587,0.114));
  c = mix(vec3(lum), c, uSat);
  c += vec3(0.004, 0.008, 0.022)*(1.0 - lum);
  c *= uTint;
  float v = 1.0 - smoothstep(0.3, 0.95, length(d*vec2(1.0,0.92)));
  c *= mix(0.55, 1.0, v);
  float n = fract(sin(dot(gl_FragCoord.xy + fract(uTime)*91.7, vec2(12.9898,78.233)))*43758.5453);
  c += (n - 0.5)*0.022;
  c = pow(max(c, 0.0), vec3(1.0/2.2));
  gl_FragColor = vec4(c + uFlash, 1.0);
}`;

export class Post {
  constructor(renderer) {
    this.r = renderer;
    const ext = renderer.extensions;
    this.hdr = renderer.capabilities.isWebGL2 && (ext.has('EXT_color_buffer_float') || ext.has('EXT_color_buffer_half_float'));
    this.type = this.hdr ? THREE.HalfFloatType : THREE.UnsignedByteType;
    this.cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3));
    this.tri = new THREE.Mesh(g, null); this.tri.frustumCulled = false;
    this.scene = new THREE.Scene(); this.scene.add(this.tri);
    this.mPre = mk(FS_PRE, { tD: { value: null }, uTexel: { value: new THREE.Vector2() }, uThr: { value: this.hdr ? 1.0 : 0.72 } });
    this.mDown = mk(FS_DOWN, { tD: { value: null }, uTexel: { value: new THREE.Vector2() } });
    this.mUp = mk(FS_UP, { tD: { value: null }, tAdd: { value: null }, uTexel: { value: new THREE.Vector2() } });
    this.mFinal = mk(FS_FINAL, {
      tScene: { value: null }, tBloom: { value: null }, uBloom: { value: 0.65 }, uTime: { value: 0 }, uExp: { value: 0.9 },
      uFlash: { value: 0 }, uSat: { value: 1.12 }, uTint: { value: new THREE.Color(1, 1, 1) },
    });
    this.black = new THREE.DataTexture(new Uint8Array([0, 0, 0, 255]), 1, 1); this.black.needsUpdate = true;
    this.levels = 5; this.bloom = true; this.down = []; this.up = []; this.sceneRT = null;
  }
  setSize(w, h, samples) {
    if (this.sceneRT) this.sceneRT.dispose();
    this.down.forEach(t => t.dispose()); this.up.forEach(t => t.dispose()); this.down = []; this.up = [];
    const o = { type: this.type, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, depthBuffer: false };
    this.sceneRT = new THREE.WebGLRenderTarget(w, h, Object.assign({}, o, { depthBuffer: true, samples: samples || 0 }));
    let cw = w, ch = h;
    for (let i = 0; i < this.levels; i++) {
      cw = Math.max(2, cw >> 1); ch = Math.max(2, ch >> 1);
      this.down.push(new THREE.WebGLRenderTarget(cw, ch, o));
      if (i < this.levels - 1) this.up.push(new THREE.WebGLRenderTarget(cw, ch, o));
    }
    this.w = w; this.h = h;
  }
  pass(m, target) { this.tri.material = m; this.r.setRenderTarget(target); this.r.render(this.scene, this.cam); }
  render(scene, camera, time) {
    const r = this.r;
    r.setRenderTarget(this.sceneRT); r.render(scene, camera);
    let cur = this.black;
    if (this.bloom) {
      const L = this.levels;
      this.mPre.uniforms.tD.value = this.sceneRT.texture; this.mPre.uniforms.uTexel.value.set(0.5 / this.w, 0.5 / this.h);
      this.pass(this.mPre, this.down[0]);
      for (let i = 1; i < L; i++) {
        const s = this.down[i - 1];
        this.mDown.uniforms.tD.value = s.texture; this.mDown.uniforms.uTexel.value.set(0.5 / s.width, 0.5 / s.height);
        this.pass(this.mDown, this.down[i]);
      }
      let c = this.down[L - 1];
      for (let i = L - 2; i >= 0; i--) {
        this.mUp.uniforms.tD.value = c.texture; this.mUp.uniforms.tAdd.value = this.down[i].texture;
        this.mUp.uniforms.uTexel.value.set(0.5 / c.width, 0.5 / c.height);
        this.pass(this.mUp, this.up[i]); c = this.up[i];
      }
      cur = c.texture;
    }
    const u = this.mFinal.uniforms;
    u.tScene.value = this.sceneRT.texture; u.tBloom.value = cur; u.uTime.value = time;
    this.pass(this.mFinal, null);
  }
}
