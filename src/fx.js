import * as THREE from 'three';
import { glowScale, fogUniform, makeGlowMaterial } from './world.js';

export class Snow {
  constructor(scene, n) {
    const p = new Float32Array(n * 3), s = new Float32Array(n);
    for (let i = 0; i < n; i++) { p[i * 3] = Math.random(); p[i * 3 + 1] = Math.random(); p[i * 3 + 2] = Math.random(); s[i] = Math.random(); }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(p, 3)); g.setAttribute('aSeed', new THREE.BufferAttribute(s, 1));
    this.u = { uTime: { value: 0 }, uCam: { value: new THREE.Vector3() }, uBox: { value: new THREE.Vector3(72, 42, 72) }, uScale: glowScale, uCar: { value: new THREE.Vector3() }, uCarDir: { value: new THREE.Vector3(0, 0, 1) }, uHead: { value: 0 } };
    this.n = n;
    this.pts = new THREE.Points(g, new THREE.ShaderMaterial({
      uniforms: this.u, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false,
      vertexShader: `attribute float aSeed; uniform float uTime; uniform vec3 uCam; uniform vec3 uBox; uniform float uScale; uniform vec3 uCar; uniform vec3 uCarDir; uniform float uHead;
        varying float vA; varying vec3 vC;
        void main(){ vec3 p = position*uBox;
          p.y -= uTime*(2.2 + aSeed*2.4);
          p.x += sin(uTime*0.6 + aSeed*40.0)*1.2 + uTime*1.7; p.z += cos(uTime*0.5 + aSeed*31.0)*1.2 + uTime*0.7;
          p = mod(p - uCam, uBox) - uBox*0.5 + uCam;
          vec4 mv = viewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv; float d = max(-mv.z, 0.5);
          gl_PointSize = clamp((0.07 + aSeed*0.08)*uScale/d, 1.0, 26.0);
          float low = 1.0 - smoothstep(3.0, 15.0, p.y);
          vC = mix(vec3(0.5,0.62,0.95), vec3(1.0,0.76,0.5), low*0.8);
          vec3 tc = p - uCar; float al = dot(tc, uCarDir); float pr = length(tc - uCarDir*al);
          vC += vec3(1.8,1.7,1.4)*uHead*smoothstep(0.5,4.0,al)*(1.0-smoothstep(10.0,36.0,al))*(1.0-smoothstep(0.0,1.0,pr/(1.2+al*0.26)));
          vA = (0.3 + 0.55*low)*smoothstep(0.6,3.0,d)*(1.0-smoothstep(26.0,36.0,d)); }`,
      fragmentShader: `varying float vA; varying vec3 vC; void main(){ float r = length(gl_PointCoord-0.5)*2.0; gl_FragColor = vec4(vC*vA*(1.0-smoothstep(0.15,1.0,r)),1.0); }`,
    }));
    this.pts.frustumCulled = false; this.pts.renderOrder = 8; scene.add(this.pts);
  }
  density(k) { this.pts.geometry.setDrawRange(0, Math.floor(this.n * k)); }
}

// ring-buffer particle spray (snow from wheels, sparks, fireworks)
export class Spray {
  constructor(scene, n = 420) {
    this.n = n; this.i = 0;
    const g = new THREE.BufferGeometry();
    this.p = new Float32Array(n * 3); this.v = new Float32Array(n * 3); this.t = new Float32Array(n * 2).fill(-99); this.c = new Float32Array(n * 3);
    g.setAttribute('position', new THREE.BufferAttribute(this.p, 3)); g.setAttribute('aVel', new THREE.BufferAttribute(this.v, 3));
    g.setAttribute('aT', new THREE.BufferAttribute(this.t, 2)); g.setAttribute('aColor', new THREE.BufferAttribute(this.c, 3));
    this.u = { uTime: { value: 0 }, uScale: glowScale };
    this.pts = new THREE.Points(g, new THREE.ShaderMaterial({
      uniforms: this.u, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false,
      vertexShader: `attribute vec3 aVel; attribute vec2 aT; attribute vec3 aColor; uniform float uTime; uniform float uScale; varying vec3 vC;
        void main(){ float age = uTime - aT.x; float k = clamp(age/aT.y, 0.0, 1.0);
          vec3 p = position + aVel*age; p.y -= 4.0*age*age;
          vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
          gl_PointSize = (age < 0.0 || k >= 1.0) ? 0.0 : clamp(0.3*uScale/max(-mv.z,0.5)*(0.5+k), 1.0, 48.0);
          vC = aColor*(1.0-k)*(1.0-k); }`,
      fragmentShader: `varying vec3 vC; void main(){ float r = length(gl_PointCoord-0.5)*2.0; gl_FragColor = vec4(vC*(1.0-smoothstep(0.0,1.0,r)),1.0); }`,
    }));
    this.pts.frustumCulled = false; this.pts.renderOrder = 9; scene.add(this.pts); this.dirty = false;
  }
  emit(x, y, z, vx, vy, vz, life, r, g, b) {
    const i = this.i; this.i = (i + 1) % this.n;
    this.p[i * 3] = x; this.p[i * 3 + 1] = y; this.p[i * 3 + 2] = z; this.v[i * 3] = vx; this.v[i * 3 + 1] = vy; this.v[i * 3 + 2] = vz;
    this.t[i * 2] = this.u.uTime.value; this.t[i * 2 + 1] = life; this.c[i * 3] = r; this.c[i * 3 + 1] = g; this.c[i * 3 + 2] = b; this.dirty = true;
  }
  burst(x, y, z, n, sp, life, r, g, b) {
    for (let i = 0; i < n; i++) { const a = Math.random() * 6.283, u = Math.random() * 2 - 1, s = Math.sqrt(1 - u * u) * sp * (0.5 + Math.random() * 0.5); this.emit(x, y, z, Math.cos(a) * s, u * sp, Math.sin(a) * s, life * (0.6 + Math.random() * 0.4), r, g, b); }
  }
  update(t) {
    this.u.uTime.value = t;
    if (this.dirty) { const a = this.pts.geometry.attributes; a.position.needsUpdate = a.aVel.needsUpdate = a.aT.needsUpdate = a.aColor.needsUpdate = true; this.dirty = false; }
  }
}

// tyre tracks: ring buffer of quads
export class Tracks {
  constructor(scene, n = 700) {
    this.n = n; this.i = 0; this.p = new Float32Array(n * 12);
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(this.p, 3));
    const idx = []; for (let i = 0; i < n; i++) idx.push(i * 4, i * 4 + 1, i * 4 + 2, i * 4, i * 4 + 2, i * 4 + 3); g.setIndex(idx);
    this.m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: 0x05070c, transparent: true, opacity: 0.42, depthWrite: false, side: THREE.DoubleSide }));
    this.m.frustumCulled = false; this.m.renderOrder = 1; scene.add(this.m); this.last = null;
  }
  // a,b: previous wheel pos, current wheel pos ([x,y,z]); w: half width
  seg(ax, ay, az, bx, by, bz, w) {
    const dx = bx - ax, dz = bz - az, l = Math.hypot(dx, dz) || 1, nx = -dz / l * w, nz = dx / l * w, o = this.i * 12, p = this.p;
    p[o] = ax - nx; p[o + 1] = ay; p[o + 2] = az - nz; p[o + 3] = ax + nx; p[o + 4] = ay; p[o + 5] = az + nz;
    p[o + 6] = bx + nx; p[o + 7] = by; p[o + 8] = bz + nz; p[o + 9] = bx - nx; p[o + 10] = by; p[o + 11] = bz - nz;
    this.i = (this.i + 1) % this.n; this.m.geometry.attributes.position.needsUpdate = true;
  }
}

// per-frame rebuilt glow points (car lights, pickups, flashers, fire)
export class DynGlow {
  constructor(scene, n = 400) {
    this.n = n; this.k = 0; this.p = new Float32Array(n * 3); this.s = new Float32Array(n); this.c = new Float32Array(n * 3);
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(this.p, 3)); g.setAttribute('aSize', new THREE.BufferAttribute(this.s, 1)); g.setAttribute('aColor', new THREE.BufferAttribute(this.c, 3));
    this.pts = new THREE.Points(g, makeGlowMaterial()); this.pts.frustumCulled = false; this.pts.renderOrder = 6; scene.add(this.pts);
  }
  begin() { this.k = 0; }
  add(x, y, z, size, r, g, b) { const k = this.k; if (k >= this.n) return; this.p[k * 3] = x; this.p[k * 3 + 1] = y; this.p[k * 3 + 2] = z; this.s[k] = size; this.c[k * 3] = r; this.c[k * 3 + 1] = g; this.c[k * 3 + 2] = b; this.k++; }
  end() { const a = this.pts.geometry.attributes; a.position.needsUpdate = a.aSize.needsUpdate = a.aColor.needsUpdate = true; this.pts.geometry.setDrawRange(0, this.k); }
}

// mission marker: light pillar + ground ring
export class Marker {
  constructor(scene) {
    const mat = new THREE.ShaderMaterial({
      uniforms: { uColor: { value: new THREE.Color(1, 0.8, 0.2) }, uTime: { value: 0 }, uFog: fogUniform }, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, side: THREE.DoubleSide,
      vertexShader: `varying vec2 vUv; varying float vF; uniform float uFog; void main(){ vUv = uv; vec4 mv = modelViewMatrix*vec4(position,1.0); float d = length(mv.xyz); vF = exp(-uFog*uFog*d*d*0.25); gl_Position = projectionMatrix*mv; }`,
      fragmentShader: `uniform vec3 uColor; uniform float uTime; varying vec2 vUv; varying float vF; void main(){ float iy = clamp(1.0-vUv.y, 0.0, 1.0); float a = pow(iy, 2.2)*0.9 + 0.05*iy; a *= 0.75 + 0.25*sin(uTime*4.0 - vUv.y*30.0); gl_FragColor = vec4(uColor*a*vF*1.6, 1.0); }`,
    });
    this.mat = mat;
    this.g = new THREE.Group();
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 2.2, 70, 20, 1, true), mat); beam.position.y = 35; this.g.add(beam);
    this.ring = new THREE.Mesh(new THREE.RingGeometry(3.6, 4.4, 40), new THREE.MeshBasicMaterial({ color: 0xffcc33, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    this.ring.rotation.x = -Math.PI / 2; this.ring.position.y = 0.3; this.g.add(this.ring);
    this.g.visible = false; this.g.renderOrder = 7; scene.add(this.g);
  }
  set(x, y, z, hex) { this.g.position.set(x, y, z); this.g.visible = true; this.mat.uniforms.uColor.value.setHex(hex); this.ring.material.color.setHex(hex); }
  hide() { this.g.visible = false; }
  update(t) { this.mat.uniforms.uTime.value = t; const s = 1 + Math.sin(t * 3) * 0.12; this.ring.scale.set(s, s, 1); }
}
