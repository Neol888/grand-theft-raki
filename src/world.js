import * as THREE from 'three';
import { rng, clamp, lerp, smooth, C, M, Batch, beam, canvasTex, Colliders } from './util.js';

export const RX = [-280, -210, -140, -70, 70, 140, 210, 280];
export const RZ = [-180, -120, -60, 0, 60, 120, 180];
export const hwX = (x) => (x === 140 ? 11 : 7);
export const BRIDGES = [{ z: -60, name: 'Коммунальный мост' }, { z: 120, name: 'Бугринский мост' }];
export const BOUND_X = 296, BOUND_Z = 196;
const COLS = [[-273, -217], [-203, -147], [-133, -77], [77, 129], [151, 203], [217, 273]];
const ROWS = [[-173, -127], [-113, -67], [-53, -7], [7, 53], [67, 113], [127, 173]];
const TYPES = [
  ['zone', 'ind', 'panel', 'palace', 'classic', 'panel'],
  ['ind', 'ind', 'panel', 'classic', 'classic', 'panel'],
  ['panel', 'panel', 'classic', 'park', 'opera', 'classic'],
  ['panel', 'garages', 'panel', 'classic', 'classic', 'panel'],
  ['panel', 'panel', 'fpark', 'panel', 'classic', 'mall'],
  ['vatutina', 'panel', 'panel', 'panel', 'panel', 'panel'],
];

export const POI = {
  start: [147.4, 14],
  arkasha: [152.4, -30], max: [127.5, 90], dima: [57.5, 30], igor: [218.6, 30], geisler: [103, -133],
  pasha: [177, 68.6], nikita: [127.6, 17], kos: [-215.6, -143.5], artem: [245, -128.6], sanya: [-78.5, 30], misha: [-105, 70.5],
  garage: [-149.5, 22], shop: [218.6, 90], vatutina: [-234, 171.5], gate: [-215.6, -150], artifact: [-262, -152],
  tower1: [-78.5, -128.5], tower2: [201.5, 51.5], tower3: [-148.5, 111.5],
  leak1: [61, -80], leak2: [103, -9.5], leak3: [146.5, 31],
};
export const LANDMARKS = [
  { x: 180, z: -30, r: 45, name: 'Оперный театр' }, { x: 140, z: 30, r: 22, name: 'Часовня на Красном проспекте' },
  { x: 0, z: 120, r: 50, name: 'Бугринский мост' }, { x: 0, z: -60, r: 50, name: 'Коммунальный мост' },
  { x: -245, z: -150, r: 40, name: 'Промзона. Территория Коса' }, { x: -175, z: 30, r: 32, name: 'Гаражи. Тут сидят «типы»' },
  { x: -245, z: 150, r: 34, name: 'Ватутина. Далековато' }, { x: 103, z: -30, r: 30, name: 'Михайловская набережная' },
  { x: 103, z: -150, r: 30, name: 'Дворец Гайслера' }, { x: -105, z: 90, r: 30, name: 'Парк. Батя на природе' },
  { x: 245, z: 90, r: 32, name: 'ТЦ «ТехноРак»' },
];

export function bankH(ax) { return ax >= 52 ? 0 : ax <= 40 ? -3 : -3 + 3 * (ax - 40) / 12; }
// sets e.layer and returns ground height under entity e {x,y,z}
export function surface(e) {
  const ax = Math.abs(e.x);
  if (ax < 52) for (let i = 0; i < 2; i++) if (Math.abs(e.z - BRIDGES[i].z) < 8.6 && e.y > -1.5) { e.layer = 1; return 0; }
  const h = bankH(ax); e.layer = h < -1.5 ? 2 : 0; return h;
}
export function isRoad(x, z) {
  if (Math.abs(z) <= 187) for (let i = 0; i < RX.length; i++) if (Math.abs(x - RX[i]) < hwX(RX[i])) return true;
  const ax = Math.abs(x);
  for (let i = 0; i < RZ.length; i++) if (Math.abs(z - RZ[i]) < 7) {
    if (ax >= 63 && ax <= 287) return true;
    if (ax < 63 && (RZ[i] === -60 || RZ[i] === 120)) return true;
  }
  return false;
}

export const fogUniform = { value: 0.0052 };
const ADD_VS = `
attribute vec3 color; varying vec2 vUv; varying vec3 vC; varying float vF; uniform float uFog;
void main(){ vec4 mv = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*mv; vUv = uv; vC = color; float d = length(mv.xyz); vF = exp(-uFog*uFog*d*d); }`;
const addMat = (fs, extra = {}, vs = ADD_VS) => new THREE.ShaderMaterial({
  vertexShader: vs, fragmentShader: fs, uniforms: Object.assign({ uFog: fogUniform }, extra),
  blending: THREE.AdditiveBlending, transparent: true, depthWrite: false,
});
export function makeGlowMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { uScale: glowScale, uFog: fogUniform },
    vertexShader: `attribute float aSize; attribute vec3 aColor; varying vec3 vC; uniform float uScale; uniform float uFog;
      void main(){ vec4 mv = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*mv; float d = max(-mv.z, 0.1);
      gl_PointSize = min(aSize*uScale/d, 200.0); vC = aColor*exp(-uFog*uFog*d*d*0.5); }`,
    fragmentShader: `varying vec3 vC; void main(){ float r = length(gl_PointCoord-0.5)*2.0; float a = pow(max(1.0-r,0.0),2.4)*0.75 + (1.0-smoothstep(0.0,0.22,r))*0.9; gl_FragColor = vec4(vC*a,1.0); }`,
    blending: THREE.AdditiveBlending, transparent: true, depthWrite: false,
  });
}
export const glowScale = { value: 800 };

function streetGlow(mat, glow) {
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uGlow = glow;
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying float vWY;')
      .replace('#include <project_vertex>', '#include <project_vertex>\n{ vec4 wp = vec4(transformed,1.0);\n#ifdef USE_INSTANCING\n wp = instanceMatrix*wp;\n#endif\n vWY = (modelMatrix*wp).y; }');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying float vWY; uniform vec3 uGlow;')
      .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n totalEmissiveRadiance += diffuseColor.rgb * uGlow * exp(-abs(vWY)*0.13);');
  };
  return mat;
}
export const glowUniform = { value: new THREE.Vector3(0.26, 0.13, 0.05) };
export function litMaterial(opts) { return streetGlow(new THREE.MeshLambertMaterial(opts), glowUniform); }

function facadeTex(style, R) {
  const S = 512, cell = 64;
  const em = document.createElement('canvas'); em.width = em.height = S; const ge = em.getContext('2d');
  ge.fillStyle = '#000'; ge.fillRect(0, 0, S, S);
  const lit = ['#ffcf8a', '#ffb866', '#ffe2b0', '#ffd9a0', '#ffc070', '#fff0d0', '#bfe0ff', '#8fb4ff', '#d49cff', '#ff9f6a'];
  const map = canvasTex(S, S, (g) => {
    for (let cy = 0; cy < 8; cy++) for (let cx = 0; cx < 8; cx++) {
      const px = cx * cell, py = cy * cell; let wx, wy, ww, wh;
      if (style === 0) {
        g.fillStyle = ['#c3c6cc', '#b9bcc2', '#cdcfd3', '#bfc2c8'][Math.floor(R() * 4)]; g.fillRect(px, py, cell, cell);
        g.strokeStyle = '#8b8f97'; g.lineWidth = 2; g.strokeRect(px + 1, py + 1, cell - 2, cell - 2);
        wx = px + 14; wy = py + 12; ww = 36; wh = 28;
        if (cx % 4 === 1) { g.fillStyle = '#a4a8b0'; g.fillRect(px + 8, py + 42, 48, 16); g.fillStyle = '#8d9199'; g.fillRect(px + 8, py + 42, 48, 3); }
        g.fillStyle = '#e4e6ea'; g.fillRect(wx - 2, wy - 2, ww + 4, wh + 4);
      } else {
        g.fillStyle = ['#d6d0c6', '#cfc9be', '#dcd6cc'][Math.floor(R() * 3)]; g.fillRect(px, py, cell, cell);
        g.fillStyle = '#b3ad9f'; g.fillRect(px, py + 58, cell, 4); g.fillStyle = '#c4beb1'; g.fillRect(px, py, 5, cell);
        wx = px + 22; wy = py + 10; ww = 24; wh = 40;
        g.fillStyle = '#efeadf'; g.fillRect(wx - 3, wy - 3, ww + 6, wh + 6);
        g.fillStyle = '#e2dccf'; g.fillRect(wx - 5, wy + wh + 3, ww + 10, 3);
      }
      const on = R() < (style === 0 ? 0.36 : 0.42);
      if (on) {
        const c = lit[Math.floor(R() * R() * lit.length)];
        g.fillStyle = c; g.fillRect(wx, wy, ww, wh);
        const gr = ge.createLinearGradient(0, wy, 0, wy + wh); gr.addColorStop(0, c); gr.addColorStop(1, '#6b4a2a');
        ge.fillStyle = gr; ge.fillRect(wx, wy, ww, wh);
        if (R() < 0.5) { ge.fillStyle = 'rgba(0,0,0,0.45)'; ge.fillRect(wx, wy, ww * (0.2 + R() * 0.3), wh); }
        ge.fillStyle = '#000'; ge.fillRect(wx + ww / 2 - 1, wy, 2, wh);
      } else { g.fillStyle = ['#18202e', '#1d2738', '#141a26'][Math.floor(R() * 3)]; g.fillRect(wx, wy, ww, wh); }
      g.fillStyle = 'rgba(40,44,52,0.9)'; g.fillRect(wx + ww / 2 - 1, wy, 2, wh);
    }
  });
  const emissiveMap = new THREE.CanvasTexture(em); emissiveMap.wrapS = emissiveMap.wrapT = THREE.RepeatWrapping; emissiveMap.colorSpace = THREE.SRGBColorSpace; emissiveMap.anisotropy = 4;
  return { map, emissiveMap };
}

export function buildWorld(scene) {
  const R = rng(20261119);
  const pick = (a) => a[Math.floor(R() * a.length)];
  const col = new Colliders();
  const B = { fa: new Batch(), fb: new Batch(), pl: new Batch(), em: new Batch(), gr: new Batch(), rd: new Batch(), br: new Batch(), brE: new Batch(), sg: new Batch(), pool: new Batch(), cone: new Batch(), streak: new Batch() };
  const lamps = [], glows = [], smokes = [], blocks = [], anomalies = [];
  const snow = C(0xe6ecf7), snowB = C(0xd3dcee), curb = C(0x9aa3b5), dark = C(0x2a2e38), concrete = C(0x6a6e78);
  const SOD = [1.0, 0.55, 0.2], WARM = [1.0, 0.74, 0.42], COOL = [0.62, 0.8, 1.0];
  const mulc = (c, k) => [c[0] * k, c[1] * k, c[2] * k];
  const cylGeo = new THREE.CylinderGeometry(1, 1, 1, 10), coneGeo = new THREE.ConeGeometry(1, 1, 7), coneOpen = new THREE.ConeGeometry(1, 1, 14, 1, true);
  const sphGeo = new THREE.SphereGeometry(1, 14, 10), boxGeo = new THREE.BoxGeometry(1, 1, 1);

  // ---------- ground ----------
  const gbox = (x0, x1, z0, z1) => B.gr.box(x0, x1, 0, 0.15, z0, z1, curb, snow);
  for (let ci = 0; ci < 6; ci++) for (let ri = 0; ri < 6; ri++) {
    const b = { ci, ri, x0: COLS[ci][0], x1: COLS[ci][1], z0: ROWS[ri][0], z1: ROWS[ri][1], type: TYPES[ri][ci] };
    b.cx = (b.x0 + b.x1) / 2; b.cz = (b.z0 + b.z1) / 2; blocks.push(b); gbox(b.x0, b.x1, b.z0, b.z1);
  }
  for (const s of [-1, 1]) {
    const xa = s > 0 ? 52 : -63, xb = s > 0 ? 63 : -52;
    for (const [z0, z1] of [[-187, -67], [-53, 113], [127, 187]]) gbox(xa, xb, z0, z1);
    const ox0 = s > 0 ? 52 : -900, ox1 = s > 0 ? 900 : -52;
    gbox(ox0, ox1, -900, -187); gbox(ox0, ox1, 187, 900);
    gbox(s > 0 ? 287 : -900, s > 0 ? 900 : -287, -187, 187);
    if (s > 0) B.gr.quad([40, -3, 900], [52, 0.15, 900], [52, 0.15, -900], [40, -3, -900], snowB);
    else B.gr.quad([-52, 0.15, 900], [-40, -3, 900], [-40, -3, -900], [-52, 0.15, -900], snowB);
  }
  B.gr.worldUV(1 / 24);
  // roads
  const rq = (x0, x1, z0, z1, ns) => {
    const uv = ns ? [[0, z1 / 16], [1, z1 / 16], [1, z0 / 16], [0, z0 / 16]] : [[1, x0 / 16], [1, x1 / 16], [0, x1 / 16], [0, x0 / 16]];
    B.rd.quad([x0, 0, z1], [x1, 0, z1], [x1, 0, z0], [x0, 0, z0], [1, 1, 1], uv);
  };
  for (const x of RX) rq(x - hwX(x), x + hwX(x), -187, 187, true);
  for (const z of RZ) {
    for (const side of [0, 4]) for (let i = side; i < side + 3; i++) rq(RX[i] + hwX(RX[i]), RX[i + 1] - hwX(RX[i + 1]), z - 7, z + 7, false);
    if (z === -60 || z === 120) rq(-63, 63, z - 7, z + 7, false);
  }

  // ---------- helpers ----------
  const lamp = (x, z, hx, hz, h, c, pr, my = 0, bridge = false) => lamps.push({ x, z, hx, hz, h, c, pr, my, bridge });
  const glow = (x, y, z, size, c) => glows.push(x, y, z, size, c[0], c[1], c[2]);
  const pool = (x, z, r, c, y = 0.22) => B.pool.quad([x - r, y, z + r], [x + r, y, z + r], [x + r, y, z - r], [x - r, y, z - r], c);
  function facade(b, x0, x1, z0, z1, y0, y1, tint) {
    const fl = Math.max(1, Math.round((y1 - y0) / 3)), v0 = Math.floor(R() * 8) / 8, v1 = v0 + fl / 8;
    const wall = (a, bb, c, d, len) => { const n = Math.max(1, Math.round(len / 3.2)), u0 = Math.floor(R() * 8) / 8, u1 = u0 + n / 8; b.quad(a, bb, c, d, tint, [[u0, v0], [u1, v0], [u1, v1], [u0, v1]]); };
    wall([x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1], x1 - x0);
    wall([x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0], x1 - x0);
    wall([x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1], z1 - z0);
    wall([x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0], z1 - z0);
  }
  function bld(fb, x0, x1, z0, z1, h, tint, noCol) {
    facade(fb, x0, x1, z0, z1, 0.15, h, tint);
    B.pl.box(x0 - 0.3, x1 + 0.3, h, h + 0.5, z0 - 0.3, z1 + 0.3, mulc(tint, 0.5), snow);
    if (R() < 0.7) { const w = 2 + R() * 3, d = 2 + R() * 3, cx = lerp(x0 + 3, x1 - 3, R()), cz = lerp(z0 + 3, z1 - 3, R()); B.pl.box(cx - w / 2, cx + w / 2, h + 0.5, h + 2 + R() * 1.5, cz - d / 2, cz + d / 2, C(0x3a3f4a), snow); }
    if (!noCol) col.box(x0, x1, z0, z1);
  }
  const shopCols = [[1.7, 1.15, 0.6], [1.1, 1.4, 1.8], [1.8, 0.55, 1.1], [0.5, 1.6, 0.85], [1.9, 0.95, 0.25], [1.5, 1.3, 1.0]];
  function shops(x0, x1, z, dir) {
    for (let x = x0 + 1; x + 3 < x1; x += 4) {
      if (R() < 0.22) continue; const c = pick(shopCols), zz = z + dir * 0.06;
      const c2 = mulc(c, 0.45);
      if (dir > 0) B.em.quad([x, 0.7, zz], [x + 3, 0.7, zz], [x + 3, 3.1, zz], [x, 3.1, zz], [c2, c2, c, c]);
      else B.em.quad([x + 3, 0.7, zz], [x, 0.7, zz], [x, 3.1, zz], [x + 3, 3.1, zz], [c2, c2, c, c]);
      pool(x + 1.5, z + dir * 3, 4.5, mulc(c, 0.1));
    }
  }
  // neon signs atlas
  const SG = { cv: document.createElement('canvas'), n: 0, slots: {} };
  SG.cv.width = 1024; SG.cv.height = 2048; SG.g = SG.cv.getContext('2d'); SG.g.fillStyle = '#000'; SG.g.fillRect(0, 0, 1024, 2048);
  function sign(text, css, x, y, z, w, dir, board = true) {
    let s = SG.slots[text + css];
    if (s === undefined) {
      s = SG.slots[text + css] = SG.n++; const g = SG.g, sx = (s % 2) * 512, sy = Math.floor(s / 2) * 64;
      g.save(); g.beginPath(); g.rect(sx, sy, 512, 64); g.clip();
      let fs = 44; g.font = `900 ${fs}px "Arial Black", "Segoe UI", system-ui, sans-serif`;
      const mw = g.measureText(text).width; if (mw > 480) { fs = Math.floor(fs * 480 / mw); g.font = `900 ${fs}px "Arial Black", "Segoe UI", system-ui, sans-serif`; }
      g.textAlign = 'center'; g.textBaseline = 'middle';
      g.shadowColor = css; g.shadowBlur = 14; g.fillStyle = css; g.fillText(text, sx + 256, sy + 34); g.fillText(text, sx + 256, sy + 34);
      g.shadowBlur = 0; g.fillStyle = 'rgba(255,255,255,0.72)'; g.fillText(text, sx + 256, sy + 34);
      g.restore();
    }
    const u0 = (s % 2) * 0.5, u1 = u0 + 0.5, v1 = 1 - Math.floor(s / 2) / 32, v0 = v1 - 1 / 32, h = w / 8, a = w / 2, hh = h / 2;
    const uv = [[u0, v0], [u1, v0], [u1, v1], [u0, v1]], cw = [1, 1, 1], o = 0.12;
    if (dir === '+z') { B.sg.quad([x - a, y - hh, z + o], [x + a, y - hh, z + o], [x + a, y + hh, z + o], [x - a, y + hh, z + o], cw, uv); if (board) B.pl.box(x - a - 0.2, x + a + 0.2, y - hh - 0.15, y + hh + 0.15, z - 0.1, z + 0.08, dark); }
    else if (dir === '-z') { B.sg.quad([x + a, y - hh, z - o], [x - a, y - hh, z - o], [x - a, y + hh, z - o], [x + a, y + hh, z - o], cw, uv); if (board) B.pl.box(x - a - 0.2, x + a + 0.2, y - hh - 0.15, y + hh + 0.15, z - 0.08, z + 0.1, dark); }
    else if (dir === '+x') { B.sg.quad([x + o, y - hh, z + a], [x + o, y - hh, z - a], [x + o, y + hh, z - a], [x + o, y + hh, z + a], cw, uv); if (board) B.pl.box(x - 0.1, x + 0.08, y - hh - 0.15, y + hh + 0.15, z - a - 0.2, z + a + 0.2, dark); }
    else { B.sg.quad([x - o, y - hh, z - a], [x - o, y - hh, z + a], [x - o, y + hh, z + a], [x - o, y + hh, z - a], cw, uv); if (board) B.pl.box(x - 0.08, x + 0.1, y - hh - 0.15, y + hh + 0.15, z - a - 0.2, z + a + 0.2, dark); }
  }
  const SIGNS = [['BEAM STORE', '#3df2ff'], ['ИГРЫ ОТ 390 ₽', '#ff4fd8'], ['П2 · П3 · ОБМЕН', '#ffd23d'], ['БАР «НА СЕРГЕЯ СТОЛИК»', '#ffae3d'], ['РЫБА · ПИВО', '#6dff8a'],
    ['КИНОТЕАТР 11.1.4', '#b98cff'], ['ШАУРМА «ПЛОТВА»', '#ff7a3d'], ['БОЖЕ, ХРАНИ ПИРАТОВ', '#ff4f6a'], ['ЦИВА · ЕЩЁ ОДИН ХОД', '#3dffb5'], ['ОПЕРАТИВКА ДЛЯ САНИ', '#3da8ff'],
    ['МЕГАФИГ · СВЯЗЬ К 19-МУ', '#5dff5d'], ['TEKKEN С ДЕТЬМИ', '#ff5d3d'], ['ПОДПИСКА EXTRA', '#5d8bff'], ['НЕ БЕРИ ПОДПИСКУ', '#ff9d3d'], ['КОФЕЙНЯ', '#ffcf8a'],
    ['VR2 · ПРОДАМ', '#c58cff'], ['212 ГБ СВОБОДНО', '#3dfff0'], ['ТЕЛЕКИ · ЖДИ В СБ', '#ffe23d'], ['ЛОМБАРД «144 КАРТОЧКИ»', '#ff5d9d'], ['АТЕЛЬЕ «БАБОЧКА»', '#ffd9a0'],
    ['БАРБЕРШОП «ДО ЩЕТИНЫ»', '#8affd0'], ['ВСЁ ТАК, ТОЛЬКО НАОБОРОТ', '#ff6ad5'],
    ['МЕСЯЦ…', '#ff9d3d'], ['21 ДЕНЬ..', '#3df2ff'], ['ЛЕТС ГОУ', '#6dff8a'], ['ДИМАН, СОРЯН', '#c58cff'], ['ЗБС · ВЭРИ ГУД', '#ffd23d'], ['ЗАКАПЫВАЕМСЯ', '#ff7a3d']];
  let sgi = 0;
  const autoSign = (x, z, dir, len) => { const s = SIGNS[sgi++ % SIGNS.length], w = clamp(len - 6, 6, 12); sign(s[0], s[1], x, 4.7, z + dir * 0.2, w, dir > 0 ? '+z' : '-z'); };
  const firCol = (v) => { const t = smooth((v.y + 0.5) * 1.5 - 0.15); return [lerp(0.012, 0.8, t), lerp(0.05, 0.86, t), lerp(0.03, 0.95, t)]; };
  function fir(x, z, s) {
    B.pl.add(cylGeo, M(x, 0.15 + 0.6 * s, z, 0.22 * s, 1.2 * s, 0.22 * s), C(0x2b1e16));
    for (let k = 0; k < 3; k++) { const r = (2.3 - 0.55 * k) * s, h = 2.7 * s; B.pl.add(coneGeo, M(x, 0.15 + (1.0 + 1.45 * k) * s + h / 2, z, r, h, r, R() * 3), firCol); }
    col.circle(x, z, 0.5 * s);
  }
  function trees(b, n, avoid = [], m = 3) {
    const pts = [];
    for (let i = 0; i < n * 6 && pts.length < n; i++) {
      const x = lerp(b.x0 + m, b.x1 - m, R()), z = lerp(b.z0 + m, b.z1 - m, R());
      if (col.near(x, z, 2.6)) continue;
      if (avoid.some(a => Math.hypot(a[0] - x, a[1] - z) < (a[2] || 6)) || pts.some(a => Math.hypot(a[0] - x, a[1] - z) < 4)) continue;
      pts.push([x, z]); fir(x, z, 0.75 + R() * 0.8);
    }
  }
  const classicT = [C(0xd8c7a0), C(0xcfb49a), C(0xbfc4c9), C(0xd4b8b0), C(0xc9cfb8), C(0xc7a98c)];
  const panelT = [C(0xb8bcc4), C(0xa9b3bd), C(0xc4bcae), C(0xa8b0a8), C(0xbfb0b0), C(0x9fb0c4)];

  function classic(b, tall) {
    const m = 3, X0 = b.x0 + m, X1 = b.x1 - m, Z0 = b.z0 + m, Z1 = b.z1 - m;
    for (const row of [0, 1]) {
      const d = 12.8 + Math.floor(R() * 2) * 1.6, za = row ? Z1 - d : Z0, zb = row ? Z1 : Z0 + d, dir = row ? 1 : -1, zf = row ? zb : za;
      let segs; if (R() < 0.6) { const cut = lerp(X0 + 17, X1 - 17, R()); segs = [[X0, cut - 2.4], [cut + 2.4, X1]]; } else segs = [[X0, X1]];
      for (const [xa, xb] of segs) {
        const h = 0.15 + 3 * (4 + Math.floor(R() * (tall ? 8 : 5)));
        bld(B.fb, xa, xb, za, zb, h, pick(classicT)); shops(xa, xb, zf, dir); if (R() < 0.9) autoSign((xa + xb) / 2, zf, dir, xb - xa);
      }
    }
    trees(b, 3);
  }
  function panel(b) {
    const m = 4, X0 = b.x0 + m, X1 = b.x1 - m, Z0 = b.z0 + m, Z1 = b.z1 - m, v = R();
    if (v < 0.45) { bld(B.fa, X0, X1, Z0, Z0 + 12.8, 27.15, pick(panelT)); bld(B.fa, X0, X1, Z1 - 12.8, Z1, 27.15, pick(panelT)); }
    else if (v < 0.8) { bld(B.fa, X0, X1, Z0, Z0 + 12.8, 27.15, pick(panelT)); const tx = lerp(X0 + 10, X1 - 10, R()); bld(B.fa, tx - 9.6, tx + 9.6, Z1 - 19.2, Z1, 48.15, pick(panelT)); }
    else { bld(B.fa, X0, X0 + 12.8, Z0, Z1, 27.15, pick(panelT)); bld(B.fa, X1 - 12.8, X1, Z0, Z1, 36.15, pick(panelT)); }
    // playground bits + trees
    const px = b.cx + (R() - 0.5) * 10, pz = b.cz + (R() - 0.5) * 3;
    B.pl.box(px - 1.5, px + 1.5, 0.15, 0.5, pz - 1.5, pz + 1.5, C(0x8a5a2a), snow);
    beam(B.pl, [px + 3, 0.15, pz], [px + 3, 2.4, pz], 0.08, C(0xc23a3a)); beam(B.pl, [px + 5, 0.15, pz], [px + 5, 2.4, pz], 0.08, C(0xc23a3a)); beam(B.pl, [px + 3, 2.4, pz], [px + 5, 2.4, pz], 0.08, C(0x3a6ac2));
    trees(b, 5, [[px, pz, 7]]);
    lamp(b.cx - 12, b.cz, b.cx - 12, b.cz, 4.6, WARM, 8);
  }
  function garages(b) {
    const X0 = b.x0 + 4, X1 = b.x1 - 4, doors = [C(0x6b3a2a), C(0x2f4a3a), C(0x3a4658), C(0x5a5a52), C(0x7a4a1e), C(0x4a2f3a)];
    for (let r = 0; r < 3; r++) {
      const zc = b.z0 + 8 + r * 14, z0 = zc - 3, z1 = zc + 3;
      B.pl.box(X0, X1, 0.15, 2.9, z0, z1, C(0x4a4c52), snow); col.box(X0, X1, z0, z1);
      for (let x = X0 + 0.4; x + 3 < X1; x += 3.6) {
        B.pl.quad([x, 0.2, z1 + 0.05], [x + 3, 0.2, z1 + 0.05], [x + 3, 2.5, z1 + 0.05], [x, 2.5, z1 + 0.05], pick(doors));
        B.pl.quad([x + 3, 0.2, z0 - 0.05], [x, 0.2, z0 - 0.05], [x, 2.5, z0 - 0.05], [x + 3, 2.5, z0 - 0.05], pick(doors));
      }
    }
    sign('ТИПЫ · ДИСКИ 390 ₽', '#ff4fd8', X1 + 0.2, 4.0, b.z0 + 22, 6, '+x');
    lamp(X1 - 6, b.z0 + 15, X1 - 6, b.z0 + 15, 4.6, SOD, 9); lamp(b.cx, b.z0 + 29, b.cx, b.z0 + 29, 4.6, SOD, 9);
    // barrel fire
    const fx = X1 - 9, fz = b.z0 + 15;
    B.pl.add(cylGeo, M(fx, 0.6, fz, 0.45, 0.9, 0.45), C(0x3a2a22)); col.circle(fx, fz, 0.6);
    return { fire: [fx, 1.3, fz] };
  }
  function chimney(x, z, h) {
    const n = 6, sh = h / n;
    for (let i = 0; i < n; i++) { const r = 2.0 - i * 0.12; B.pl.add(cylGeo, M(x, 0.15 + sh * (i + 0.5), z, r, sh, r), i % 2 ? C(0xd8d8d8) : C(0xb02a22)); }
    B.em.add(sphGeo, M(x, h + 0.5, z, 0.35, 0.35, 0.35), [3, 0.2, 0.15]); glow(x, h + 0.5, z, 5, [2.2, 0.15, 0.1]);
    glow(x, h * 0.6, z + 2.1, 3, [1.8, 0.12, 0.08]);
    col.circle(x, z, 2.2); smokes.push([x, h + 1, z]);
  }
  function ind(b) {
    const metal = [C(0x39424d), C(0x45403a), C(0x2f3d42), C(0x4a3f3f)];
    const hx0 = b.x0 + 4, hx1 = hx0 + 32, hz0 = b.z0 + 5, hz1 = hz0 + 19, hh = 10 + R() * 4;
    B.pl.box(hx0, hx1, 0.15, hh, hz0, hz1, pick(metal), snow); col.box(hx0, hx1, hz0, hz1);
    for (let x = hx0 + 2; x + 4 < hx1; x += 6) { const c = [0.45, 1.1, 1.3]; B.em.quad([x, hh - 3, hz1 + 0.05], [x + 4, hh - 3, hz1 + 0.05], [x + 4, hh - 1.6, hz1 + 0.05], [x, hh - 1.6, hz1 + 0.05], c); }
    chimney(b.x1 - 9, b.z0 + 10, 38 + R() * 14);
    for (let i = 0; i < 2; i++) { const tx = b.x1 - 9 - i * 11, tz = b.z1 - 9; B.pl.add(cylGeo, M(tx, 4.15, tz, 4.5, 8, 4.5), C(0x59616b)); B.pl.add(coneGeo, M(tx, 8.9, tz, 4.6, 1.5, 4.6), snow); col.circle(tx, tz, 4.6); }
    B.pl.box(b.x0 + 4, b.x1 - 22, 4.6, 5.3, b.z1 - 16, b.z1 - 15.3, C(0x6b5a3a), snow);
    for (let x = b.x0 + 6; x < b.x1 - 23; x += 8) { B.pl.box(x - 0.15, x + 0.15, 0.15, 4.6, b.z1 - 15.8, b.z1 - 15.5, dark); }
    lamp(b.x0 + 20, b.z1 - 8, b.x0 + 20, b.z1 - 8, 7, COOL, 12);
  }
  function zone(b) {
    const x0 = b.x0 + 2, x1 = b.x1 - 2, z0 = b.z0 + 2, z1 = b.z1 - 2, T = 0.4, H = 2.9, fc = C(0x5b5f66), gz = b.cz;
    const w = (a, bb, c, d) => { B.pl.box(a, bb, 0.15, H, c, d, fc, snow); col.box(a, bb, c, d); };
    w(x0, x1, z0, z0 + T); w(x0, x1, z1 - T, z1); w(x0, x0 + T, z0, z1); w(x1 - T, x1, z0, gz - 2.8); w(x1 - T, x1, gz + 2.8, z1);
    B.pl.box(x1 - 1, x1 + 0.6, 0.15, 1.3, gz - 0.8, gz + 0.8, concrete, snow); col.box(x1 - 1, x1 + 0.6, gz - 0.8, gz + 0.8);
    sign('ЗОНА · ВХОД ПЕШКОМ', '#7dff5d', x1 + 0.1, 3.9, gz + 8, 7, '+x');
    // wrecks
    const rust = [C(0x5a3a26), C(0x4a4038), C(0x3d4a4a)];
    for (const [wx, wz, ww, wd, wh] of [[-236, -158, 7, 2.6, 2.6], [-250, -139, 3, 8, 2.8], [-266, -163, 6, 6, 4], [-228, -137, 2.5, 6, 2.4], [-252, -168, 9, 2.5, 3]]) {
      B.pl.box(wx - ww / 2, wx + ww / 2, 0.15, wh, wz - wd / 2, wz + wd / 2, pick(rust), snow); col.box(wx - ww / 2, wx + ww / 2, wz - wd / 2, wz + wd / 2);
    }
    for (const [ax, az, ph] of [[-231, -150, 0], [-242, -141, 1.3], [-243, -160, 2.1], [-254, -150, 3.3], [-258, -163, 4.4], [-236, -166, 5.2], [-262, -141, 0.7]]) anomalies.push({ x0: ax, z0: az, x: ax, z: az, ph, r: 2.6 });
    lamp(-240, -130, -240, -132, 7, [0.5, 1.0, 0.6], 12);
  }
  function park(b, wheel) {
    const avoid = wheel ? [[b.cx, b.cz, 13]] : [[POI.misha[0], POI.misha[1], 7]];
    for (const [dx, dz] of [[-16, -12], [16, -12], [-16, 12], [16, 12], [0, 18], [0, -18]]) { lamp(b.cx + dx, b.cz + dz, b.cx + dx, b.cz + dz, 4.6, WARM, 9); avoid.push([b.cx + dx, b.cz + dz, 3]); }
    if (wheel) pool(b.cx, b.cz, 16, [0.5, 0.3, 0.6]);
    trees(b, wheel ? 16 : 34, avoid);
  }
  function opera(b) {
    const wallC = C(0xdccba4), colC = C(0xeee9dc), domeC = C(0x8f9aa6), cx = 181, cz = -30;
    B.pl.add(new THREE.CylinderGeometry(1, 1, 1, 24), M(cx, 8.15, cz, 15, 16, 15), wallC);
    B.em.add(new THREE.SphereGeometry(1, 28, 10, 0, Math.PI * 2, 0, Math.PI / 2), M(cx, 16.1, cz, 15.6, 9.6, 15.6), (v) => { const t = smooth(v.y * 1.25), rib = 0.86 + 0.14 * Math.sign(Math.sin(Math.atan2(v.z, v.x) * 14)), f = (0.75 + 0.25 * (-v.x)) * rib; return [lerp(0.62, 0.11, t) * f, lerp(0.47, 0.14, t) * f, lerp(0.3, 0.22, t) * f]; });
    B.pl.add(cylGeo, M(cx, 26.3, cz, 1.6, 1.6, 1.6), colC); B.pl.add(coneGeo, M(cx, 28.6, cz, 1.2, 3, 1.2), domeC);
    B.pl.box(cx - 15.2, cx + 15.2, 16, 16.9, cz - 15.2, cz + 15.2, colC);
    B.pl.box(190, 201, 0.15, 21, cz - 12, cz + 12, wallC, snow);
    B.pl.box(160, 170, 0.15, 13, cz - 14, cz + 14, wallC, snow);
    for (let i = 0; i < 8; i++) { const z = cz - 12 + i * 24 / 7; B.pl.add(cylGeo, M(158.8, 5.65, z, 0.85, 11, 0.85), colC); }
    B.pl.box(157.4, 160.4, 11.1, 13, cz - 14.2, cz + 14.2, colC, snow);
    B.pl.box(157.8, 160.2, 13, 14.4, cz - 10, cz + 10, colC, snow); B.pl.box(158.2, 160, 14.4, 15.4, cz - 5.5, cz + 5.5, colC, snow);
    for (let i = 0; i < 3; i++) B.pl.box(153.8 + i * 1.1, 157.6, 0.15, 0.95 - i * 0.27, cz - 14.5, cz + 14.5, C(0x9a958c), snow);
    for (let i = 0; i < 5; i++) { const z = cz - 8.5 + i * 4.25; B.em.quad([159.94, 1.2, z - 1.1], [159.94, 1.2, z + 1.1], [159.94, 6.5, z + 1.1], [159.94, 6.5, z - 1.1], [[0.7, 0.42, 0.18], [0.7, 0.42, 0.18], [1.7, 1.1, 0.55], [1.7, 1.1, 0.55]]); }
    col.box(158, 201, cz - 14, cz + 14); col.box(166, 196, cz - 15, cz + 15);
    for (const [px, pz] of [[156, -30], [156, -42], [156, -18], [170, -48], [170, -12], [192, -48], [192, -12]]) pool(px, pz, 13, [0.4, 0.26, 0.12]);
    for (const z of [-44, -16]) { glow(155.5, 0.6, z, 2.2, [2.0, 1.3, 0.6]); glow(155.5, 0.6, z + 9, 2.2, [2.0, 1.3, 0.6]); }
    // monument to a rak
    B.pl.box(154, 156.4, 0.15, 2.2, -9.2, -6.8, C(0x55585f), snow); col.box(154, 156.4, -9.2, -6.8);
    B.pl.add(sphGeo, M(155.2, 3.1, -8, 0.95, 0.8, 0.8), C(0xa8442e));
    B.pl.add(sphGeo, M(154.2, 4.0, -7.2, 0.45, 0.6, 0.35), C(0xa8442e)); B.pl.add(sphGeo, M(156.2, 4.0, -7.2, 0.45, 0.6, 0.35), C(0xa8442e));
    pool(155.2, -6, 6, [0.6, 0.4, 0.2]);
    trees(b, 4, [[160, -30, 22]]);
  }
  function palace(b) {
    const cr = C(0xeadfc6), x0 = 90, x1 = 116, z0 = -164, z1 = -146;
    B.pl.box(x0, x1, 0.15, 11, z0, z1, cr, snow); col.box(x0, x1, z0, z1);
    B.pl.box(x0 - 0.6, x1 + 0.6, 11, 11.8, z0 - 0.6, z1 + 0.6, C(0xf4efe2), snow);
    B.pl.add(new THREE.SphereGeometry(1, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), M(103, 11.8, -155, 5, 4, 5), C(0xb9963a));
    for (let i = 0; i < 7; i++) {
      const x = x0 + 2.2 + i * 3.6; const c0 = [1.3, 0.8, 0.3], c1 = [2.8, 2.0, 0.95];
      B.em.quad([x - 0.9, 1.6, z1 + 0.06], [x + 0.9, 1.6, z1 + 0.06], [x + 0.9, 7.6, z1 + 0.06], [x - 0.9, 7.6, z1 + 0.06], [c0, c0, c1, c1]);
      if (i < 6) B.pl.add(cylGeo, M(x + 1.8, 4.9, z1 + 0.7, 0.4, 9.5, 0.4), C(0xf4efe2));
    }
    for (const x of [96, 103, 110]) { glow(x, 6.5, z1 + 0.4, 6, [1.6, 1.1, 0.5]); pool(x, z1 + 6, 9, [0.75, 0.5, 0.22]); }
    B.pl.quad([101.5, 0.17, -128], [104.5, 0.17, -128], [104.5, 0.17, -146], [101.5, 0.17, -146], C(0x9a1228));
    sign('ДВОРЕЦ ГАЙСЛЕРА', '#ffd98a', 103, 10.2, z1 + 0.1, 12, '+z', false);
    trees(b, 12, [[103, -137, 9]]);
  }
  function mall(b) {
    const x0 = 223, x1 = 267, z0 = 74, z1 = 106;
    B.pl.box(x0, x1, 0.15, 9.2, z0, z1, C(0x2b3140), snow); col.box(x0, x1, z0, z1);
    const g0 = [0.25, 0.5, 0.7], g1 = [0.7, 1.2, 1.6];
    B.em.quad([x0 - 0.06, 0.8, z0 + 2], [x0 - 0.06, 0.8, z1 - 2], [x0 - 0.06, 4.2, z1 - 2], [x0 - 0.06, 4.2, z0 + 2], [g0, g0, g1, g1]);
    B.em.quad([x0 + 2, 0.8, z1 + 0.06], [x1 - 2, 0.8, z1 + 0.06], [x1 - 2, 4.2, z1 + 0.06], [x0 + 2, 4.2, z1 + 0.06], [g0, g0, g1, g1]);
    B.em.quad([x1 - 2, 0.8, z0 - 0.06], [x0 + 2, 0.8, z0 - 0.06], [x0 + 2, 4.2, z0 - 0.06], [x1 - 2, 4.2, z0 - 0.06], [g0, g0, g1, g1]);
    sign('ТЕХНОРАК · SSD · 212 ГБ', '#3df2ff', x0 - 0.2, 6.6, 90, 16, '-x', false);
    sign('ТЕЛЕКИ · ЖДИ В СБ', '#ffe23d', 245, 6.6, z1 + 0.2, 14, '+z', false);
    sign('ПОДПИСКА EXTRA', '#5d8bff', 245, 6.6, z0 - 0.2, 14, '-z', false);
    pool(x0 - 5, 90, 14, [0.25, 0.5, 0.7]); pool(245, z1 + 5, 14, [0.25, 0.5, 0.7]);
  }
  function vatutina(b) {
    bld(B.fa, b.x0 + 4, b.x1 - 4, b.z0 + 4, b.z0 + 16.8, 27.15, pick(panelT));
    const x0 = -240, x1 = -228, z0 = 160, z1 = 168;
    B.pl.box(x0, x1, 0.15, 4, z0, z1, C(0x3a4250), snow); col.box(x0, x1, z0, z1);
    B.em.quad([x0 + 1, 0.9, z1 + 0.06], [x1 - 1, 0.9, z1 + 0.06], [x1 - 1, 3, z1 + 0.06], [x0 + 1, 3, z1 + 0.06], [[0.4, 0.9, 0.6], [0.4, 0.9, 0.6], [0.8, 1.9, 1.2], [0.8, 1.9, 1.2]]);
    sign('ЧИСТКА PS5 ОТ ПЫЛИ', '#6dff8a', -234, 4.9, z1 + 0.1, 11, '+z');
    sign('УЛ. ВАТУТИНА', '#ffffff', -222, 3.4, 172.6, 5, '+z');
    beam(B.pl, [-222, 0.15, 172.5], [-222, 3, 172.5], 0.1, dark);
    pool(-234, 172, 9, [0.3, 0.8, 0.5]);
    trees(b, 6);
  }

  let fire = null;
  for (const b of blocks) {
    if (b.type === 'classic') classic(b, b.ci === 3 || b.ci === 4);
    else if (b.type === 'panel') panel(b);
    else if (b.type === 'garages') fire = garages(b).fire;
    else if (b.type === 'ind') ind(b);
    else if (b.type === 'zone') zone(b);
    else if (b.type === 'park') park(b, true);
    else if (b.type === 'fpark') park(b, false);
    else if (b.type === 'opera') opera(b);
    else if (b.type === 'palace') palace(b);
    else if (b.type === 'mall') mall(b);
    else if (b.type === 'vatutina') vatutina(b);
  }

  // chapel on Krasny prospekt
  {
    const x = 140, z = 30, wh = C(0xf2efe8), rd = C(0x9a3a2a), gold = C(0xe0a81c);
    B.pl.add(new THREE.CylinderGeometry(1, 1.15, 1, 16), M(x, 0.35, z, 4.6, 0.7, 4.6), snow);
    B.pl.box(x - 2.4, x + 2.4, 0.7, 6.4, z - 2.4, z + 2.4, wh, snow);
    for (const [dx, dz] of [[-2.4, -2.4], [2.4, -2.4], [-2.4, 2.4], [2.4, 2.4]]) B.pl.box(x + dx - 0.3, x + dx + 0.3, 0.7, 6.5, z + dz - 0.3, z + dz + 0.3, C(0xfbf9f3), snow);
    B.pl.box(x - 2.55, x + 2.55, 0.7, 1.5, z - 2.55, z + 2.55, rd);
    B.pl.box(x - 2.7, x + 2.7, 6.4, 6.75, z - 2.7, z + 2.7, rd, snow);
    for (const s of [-1, 1]) { B.pl.add(boxGeo, M(x, 6.85, z + s * 2.42, 2.3, 2.3, 0.3, 0, 0, Math.PI / 4), wh); B.pl.add(boxGeo, M(x + s * 2.42, 6.85, z, 0.3, 2.3, 2.3, 0, Math.PI / 4, 0), wh); }
    B.pl.add(new THREE.CylinderGeometry(1, 1, 1, 8), M(x, 8.1, z, 1.5, 2.4, 1.5), wh);
    const prof = [[0.05, 0], [1.0, 0.25], [1.25, 0.9], [0.95, 1.7], [0.4, 2.4], [0.08, 3.1]].map(p => new THREE.Vector2(p[0], p[1]));
    B.pl.add(new THREE.LatheGeometry(prof, 12), M(x, 9.2, z, 1.25, 1.1, 1.25), gold);
    B.em.box(x - 0.07, x + 0.07, 12.5, 14.1, z - 0.07, z + 0.07, [2.2, 1.5, 0.3]); B.em.box(x - 0.45, x + 0.45, 13.4, 13.55, z - 0.07, z + 0.07, [2.2, 1.5, 0.3]);
    for (const [dx, dz] of [[0, 2.45], [0, -2.45]]) { const zz = z + dz + Math.sign(dz) * 0.02, c0 = [1.9, 1.2, 0.5]; if (dz > 0) B.em.quad([x - 0.6, 1.5, zz], [x + 0.6, 1.5, zz], [x + 0.6, 4.2, zz], [x - 0.6, 4.2, zz], c0); else B.em.quad([x + 0.6, 1.5, zz], [x - 0.6, 1.5, zz], [x - 0.6, 4.2, zz], [x + 0.6, 4.2, zz], c0); }
    col.circle(x, z, 4.7); pool(x, z, 14, [0.9, 0.6, 0.3]); glow(x, 10.6, z, 5, [1.4, 0.9, 0.25]);
  }
  // cell towers (Geisler)
  const towers = [];
  for (const k of ['tower1', 'tower2', 'tower3']) {
    const [x, z] = POI[k], h = 26, st = C(0x8a8f99);
    for (const [dx, dz] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) beam(B.pl, [x + dx * 1.3, 0.15, z + dz * 1.3], [x + dx * 0.25, h, z + dz * 0.25], 0.09, st, 4);
    for (let y = 3; y < h; y += 4) { const s = lerp(1.3, 0.25, y / h); B.pl.box(x - s, x + s, y, y + 0.12, z - s, z + s, st); }
    B.em.box(x - 0.5, x + 0.5, h - 4, h - 2.2, z - 0.5, z + 0.5, [0.3, 1.6, 0.4]);
    col.circle(x, z, 1.5); towers.push({ x, z, h });
  }
  // embankment promenade + billboard
  for (const s of [-1, 1]) for (let z = -170, zi = 0; z <= 170; z += 20, zi++) {
    if (Math.abs(z + 60) < 12 || Math.abs(z - 120) < 12) continue;
    if (zi % 2 === 0) lamp(s * 55, z, s * 55, z, 4.6, COOL, 9); else if (Math.hypot(s * 58.5 - POI.dima[0], z - POI.dima[1]) > 8) fir(s * 58.5, z + (R() - 0.5) * 6, 0.8 + R() * 0.5);
  }
  {
    const x = 58, z = -80;
    beam(B.pl, [x, 0.15, z - 5], [x, 9, z - 5], 0.22, dark); beam(B.pl, [x, 0.15, z + 5], [x, 9, z + 5], 0.22, dark);
    B.pl.box(x - 0.25, x + 0.25, 5.5, 12, z - 8.5, z + 8.5, dark); col.circle(x, z - 5, 0.4); col.circle(x, z + 5, 0.4);
    sign('ТА САМАЯ ИГРА', '#ff4fd8', x - 0.3, 10.2, z, 15, '-x', false); sign('19.11.2026 · 212 ГБ', '#3df2ff', x - 0.3, 7.8, z, 15, '-x', false);
    sign('ТА САМАЯ ИГРА', '#ff4fd8', x + 0.3, 10.2, z, 15, '+x', false); sign('ОСВОБОДИ МЕСТО', '#ffd23d', x + 0.3, 7.8, z, 15, '+x', false);
  }
  // гирлянды над Красным проспектом и сугробы у бордюров
  const gcol = [[1.5, 0.9, 0.4], [1.5, 0.25, 0.3], [0.3, 1.4, 0.6], [0.4, 0.7, 1.6]];
  for (let z = -160, gi = 0; z <= 160; z += 20) { if (RZ.some(r => Math.abs(z - r) < 9) || Math.abs(z - 30) < 12) continue; for (let i = 0; i <= 10; i++) { const u = i / 10; glow(129.5 + u * 21, 7.6 - Math.sin(u * Math.PI) * 1.5, z, 0.9, gcol[(gi + i) % 4]); } gi++; }
  const sphLow = new THREE.SphereGeometry(1, 8, 5);
  for (const bl of blocks) for (let i = 0; i < 5; i++) {
    const side = Math.floor(R() * 4), t = R(), x = side < 2 ? lerp(bl.x0 + 2, bl.x1 - 2, t) : side === 2 ? bl.x0 + 1 : bl.x1 - 1, z = side >= 2 ? lerp(bl.z0 + 2, bl.z1 - 2, t) : side === 0 ? bl.z0 + 1 : bl.z1 - 1;
    if (col.near(x, z, 1.2)) continue; B.pl.add(sphLow, M(x, 0.12, z, side < 2 ? 1.6 + R() * 1.6 : 0.9, 0.35 + R() * 0.3, side < 2 ? 0.9 : 1.6 + R() * 1.6), snow);
  }
  // билборды с цитатами из чата вдоль набережных
  const bcol = ['#ff4fd8', '#3df2ff', '#ffd23d', '#6dff8a'];
  const billboard = (x, z, a1, a2, b1, b2, k) => {
    beam(B.pl, [x, 0.15, z - 5], [x, 9, z - 5], 0.22, dark); beam(B.pl, [x, 0.15, z + 5], [x, 9, z + 5], 0.22, dark);
    B.pl.box(x - 0.25, x + 0.25, 5.5, 12, z - 8.5, z + 8.5, dark); col.circle(x, z - 5, 0.4); col.circle(x, z + 5, 0.4);
    sign(a1, bcol[k % 4], x - 0.3, 10.2, z, 15, '-x', false); sign(a2, bcol[(k + 1) % 4], x - 0.3, 7.8, z, 15, '-x', false);
    sign(b1, bcol[(k + 2) % 4], x + 0.3, 10.2, z, 15, '+x', false); sign(b2, bcol[(k + 3) % 4], x + 0.3, 7.8, z, 15, '+x', false);
    glow(x, 12.4, z, 3, [0.9, 0.8, 0.6]);
  };
  billboard(-58, -10, 'ПЕЙ ПИВО', 'РУКИ ДОЛЖНЫ БЫТЬ В РЫБЕ', 'БОЖЕ, ХРАНИ ПИРАТОВ', 'АМИНЬ', 0);
  billboard(-58, 70, 'ДАВНО НЕ ВОЕВАЛИ', 'ГОУ ВСЕ НА ВОЙНУ', 'ПОТЕРПИ ЧУТЬ-ЧУТЬ!!', 'ОНО СТОИТ ТОГО В 20 КРАТ', 1);
  billboard(-58, -130, 'КАК РАЗ К 19-МУ', 'ДОКАЧАЕТСЯ', 'БАТЯ В ЗДАНИИ!', 'ВРЕМЕНИ ТУПО НЕТ', 2);
  billboard(58, 150, 'ВКЛЮЧИЛ, ВЫКЛЮЧИЛ', 'ДВА ДНЯ ПРОШЛО', 'ЧТО ЭТО?', 'ЧАТ ВЛАДЕЛЬЦЕВ PS5', 3);
  billboard(58, -130, 'ОЧЕНЬ ПЛОХОЕ СООБЩЕНИЕ', 'ОНО МНЕ ОЧЕНЬ НЕ НРАВИТСЯ', 'КРОМЕ LOA И RDR', 'НИЧЕГО НЕ ЗАЕБИСЬ', 0);
  // skyline ring
  for (let i = 0; i < 90; i++) {
    const a = R() * Math.PI * 2, rad = 330 + R() * 240, x = Math.cos(a) * rad * 1.3, z = Math.sin(a) * rad;
    if (Math.abs(x) < 80 || (Math.abs(x) < 300 && Math.abs(z) < 200)) continue;
    const w = 16 + Math.floor(R() * 8) * 3.2, d = 12.8 + Math.floor(R() * 4) * 3.2, h = 0.15 + 3 * (7 + Math.floor(R() * 18)), pa = R() < 0.6;
    facade(pa ? B.fa : B.fb, x - w / 2, x + w / 2, z - d / 2, z + d / 2, 0.15, h, pick(pa ? panelT : classicT));
    B.pl.quad([x - w / 2, h, z + d / 2], [x + w / 2, h, z + d / 2], [x + w / 2, h, z - d / 2], [x - w / 2, h, z - d / 2], snow);
    if (h > 50) glow(x, h + 1, z, 5, [2, 0.15, 0.1]);
  }

  // ---------- street lamps ----------
  for (const x of RX) {
    const hw = hwX(x); let k = 0;
    for (let z = -170; z <= 170; z += 34, k++) { if (RZ.some(r => Math.abs(z - r) < 9)) continue; const s = k % 2 ? 1 : -1; lamp(x + s * (hw + 0.9), z, x + s * (hw - 1.6), z, 8.2, x === 140 ? WARM : SOD, 13); }
    if (x === 140) for (let z = -153; z <= 170; z += 34) { if (RZ.some(r => Math.abs(z - r) < 9)) continue; lamp(x + 11.9, z, x + 9.4, z, 8.2, WARM, 13); lamp(x - 11.9, z, x - 9.4, z, 8.2, WARM, 13); }
  }
  for (const z of RZ) for (const side of [0, 4]) {
    let k = 0;
    for (let x = RX[side] + 22; x < RX[side + 3]; x += 35, k++) { if (RX.some(r => Math.abs(x - r) < hwX(r) + 3)) continue; const s = k % 2 ? 1 : -1; lamp(x, z + s * 7.9, x, z + s * 5.4, 8.2, SOD, 13); }
  }
  for (const b of BRIDGES) for (let x = -51; x <= 51; x += 17) for (const s of [-1, 1]) lamp(x, b.z + s * 8.1, x, b.z + s * 6.2, 7, COOL, 11, -3, true);
  const pole = C(0x2c3038);
  for (const L of lamps) {
    const bt = L.bridge ? B.br : B.pl;
    bt.box(L.x - 0.12, L.x + 0.12, 0, L.h, L.z - 0.12, L.z + 0.12, pole);
    if (L.x !== L.hx || L.z !== L.hz) bt.box(Math.min(L.x, L.hx) - 0.08, Math.max(L.x, L.hx) + 0.08, L.h - 0.1, L.h + 0.1, Math.min(L.z, L.hz) - 0.08, Math.max(L.z, L.hz) + 0.08, pole);
    (L.bridge ? B.brE : B.em).box(L.hx - 0.3, L.hx + 0.3, L.h - 0.28, L.h - 0.1, L.hz - 0.3, L.hz + 0.3, mulc(L.c, 5));
    glow(L.hx, L.h - 0.3, L.hz, L.h > 6 ? 3.0 : 2.0, mulc(L.c, 1.6));
    pool(L.hx, L.hz, L.pr, mulc(L.c, L.h > 6 ? 0.3 : 0.25));
    B.cone.add(coneOpen, M(L.hx, L.h / 2, L.hz, L.pr * 0.42, L.h, L.pr * 0.42), mulc(L.c, 0.36));
    B.streak.bill(L.hx, 2 * L.my - L.h * 1.1, L.hz, L.h > 6 ? 1.1 : 0.8, L.h * 0.9, mulc(L.c, L.bridge ? 3.2 : 2.6));
  }

  // ---------- bridges ----------
  for (const b of BRIDGES) {
    const z = b.z;
    B.br.box(-52, 52, -0.9, -0.02, z - 8.6, z + 8.6, concrete, snow);
    for (const s of [-1, 1]) {
      B.br.box(-52, 52, 0, 1.0, z + s * 8.45 - 0.1, z + s * 8.45 + 0.1, C(0x4a4f5a), snow);
      col.box(-52, 52, z + s * 8.3 - 0.3, z + s * 8.3 + 0.3, 1);
      for (const sx of [-1, 1]) { col.box(sx > 0 ? 40 : -52, sx > 0 ? 52 : -40, z + s * 8.6 - 0.5, z + s * 8.6 + 0.5, 0); }
    }
    for (const sx of [-1, 1]) col.box(sx > 0 ? 41 : -43, sx > 0 ? 43 : -41, z - 8.6, z + 8.6, 2);
    for (const px of [-26, 0, 26]) { B.br.box(px - 1.5, px + 1.5, -3.2, -0.9, z - 6, z + 6, C(0x565a64)); col.box(px - 1.5, px + 1.5, z - 6, z + 6, 2); }
    if (z === 120) {
      // Bugrinsky: one big red network arch
      const red = [1.5, 0.1, 0.07], L = 50, H = 30;
      for (const s of [-1, 1]) {
        const pts = []; for (let i = 0; i <= 24; i++) { const x = -L + 2 * L * i / 24, t = 1 - (x / L) * (x / L); pts.push(new THREE.Vector3(x, H * t + 0.3, z + s * (9.2 - 5.5 * t))); }
        B.brE.add(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 48, 0.75, 6), new THREE.Matrix4(), red);
        for (let x = -42; x <= 42; x += 6) for (const dxx of [-7, 7]) {
          const t = 1 - (x / L) * (x / L), x2 = clamp(x + dxx, -50, 50);
          beam(B.br, [x, H * t, z + s * (9.2 - 5.5 * t)], [x2, 0.9, z + s * 8.4], 0.06, C(0xc8ccd4), 3);
        }
      }
      for (let i = 0; i <= 6; i++) { const x = -30 + i * 10, t = 1 - (x / L) * (x / L); beam(B.brE, [x, H * t + 0.3, z - (9.2 - 5.5 * t)], [x, H * t + 0.3, z + (9.2 - 5.5 * t)], 0.3, red, 5); }
      glow(0, H + 1.5, z, 7, [2.2, 0.2, 0.15]);
    } else {
      // Kommunalny: three steel arches with garlands
      const st = C(0x5f7f86);
      for (let a = 0; a < 3; a++) for (const s of [-1, 1]) {
        const xc = -34 + a * 34, pts = [];
        for (let i = 0; i <= 12; i++) { const u = -1 + i / 6, y = 10.5 * (1 - u * u) + 0.4; pts.push(new THREE.Vector3(xc + u * 17, y, z + s * 8.4)); if (i % 2 === 0) glows.push(xc + u * 17, y + 0.5, z + s * 8.4, 1.5, 1.7, 1.25, 0.6); if (i > 0 && i < 12) beam(B.br, [xc + u * 17, y, z + s * 8.4], [xc + u * 17, 0.9, z + s * 8.4], 0.07, st, 3); }
        B.br.add(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 20, 0.4, 5), new THREE.Matrix4(), st);
      }
    }
  }

  // ---------- materials & meshes ----------
  const fA = facadeTex(0, R), fB = facadeTex(1, R);
  const mFA = litMaterial({ map: fA.map, emissiveMap: fA.emissiveMap, emissive: 0xffffff, emissiveIntensity: 1.5, vertexColors: true });
  const mFB = litMaterial({ map: fB.map, emissiveMap: fB.emissiveMap, emissive: 0xffffff, emissiveIntensity: 1.5, vertexColors: true });
  const mPL = litMaterial({ vertexColors: true });
  const mEM = new THREE.MeshBasicMaterial({ vertexColors: true });
  const sgTex = new THREE.CanvasTexture(SG.cv); sgTex.colorSpace = THREE.SRGBColorSpace; sgTex.anisotropy = 4;
  const mSG = addMat(`uniform sampler2D map; varying vec2 vUv; varying vec3 vC; varying float vF; void main(){ vec3 t = texture2D(map, vUv).rgb; gl_FragColor = vec4(t*t*2.6*vC*vF, 1.0); }`, { map: { value: sgTex } });
  const snowTex = canvasTex(256, 256, (g) => {
    g.fillStyle = '#eef2fa'; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 60; i++) { const x = R() * 256, y = R() * 256, r = 10 + R() * 40; const gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, R() < 0.5 ? 'rgba(196,208,232,0.5)' : 'rgba(255,255,255,0.6)'); gr.addColorStop(1, 'rgba(230,236,247,0)'); g.fillStyle = gr; g.fillRect(x - r, y - r, r * 2, r * 2); }
    for (let i = 0; i < 500; i++) { g.fillStyle = R() < 0.5 ? 'rgba(255,255,255,0.9)' : 'rgba(170,185,215,0.5)'; g.fillRect(R() * 256, R() * 256, 1.5, 1.5); }
  });
  const roadTex = canvasTex(256, 256, (g) => {
    g.fillStyle = '#20232b'; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 1400; i++) { g.fillStyle = `rgba(${150 + R() * 100},${160 + R() * 90},${190 + R() * 60},${R() * 0.16})`; g.fillRect(R() * 256, R() * 256, 1 + R() * 2, 1 + R() * 3); }
    for (const [f, w] of [[0.5, 26], [0.02, 30], [0.98, 30]]) { const gr = g.createLinearGradient(f * 256 - w, 0, f * 256 + w, 0); gr.addColorStop(0, 'rgba(215,224,240,0)'); gr.addColorStop(0.5, f === 0.5 ? 'rgba(190,200,222,0.5)' : 'rgba(228,234,246,0.98)'); gr.addColorStop(1, 'rgba(215,224,240,0)'); g.fillStyle = gr; g.fillRect(f * 256 - w, 0, w * 2, 256); }
    for (const f of [0.2, 0.36, 0.64, 0.8]) { const gr = g.createLinearGradient(f * 256 - 12, 0, f * 256 + 12, 0); gr.addColorStop(0, 'rgba(8,9,12,0)'); gr.addColorStop(0.5, 'rgba(8,9,12,0.75)'); gr.addColorStop(1, 'rgba(8,9,12,0)'); g.fillStyle = gr; g.fillRect(f * 256 - 12, 0, 24, 256); }
    for (let i = 0; i < 50; i++) { g.fillStyle = 'rgba(225,232,245,0.5)'; const f = [0.1, 0.28, 0.5, 0.72, 0.9][Math.floor(R() * 5)]; g.fillRect(f * 256 - 8 + R() * 16, R() * 256, 3 + R() * 8, 2 + R() * 4); }
  }, { aniso: 8 });
  const iceTex = canvasTex(512, 512, (g) => {
    g.fillStyle = '#1e3f5c'; g.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 40; i++) { const x = R() * 512, y = R() * 512, r = 30 + R() * 90; const gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, R() < 0.65 ? 'rgba(228,238,252,0.8)' : 'rgba(10,30,50,0.5)'); gr.addColorStop(1, 'rgba(30,63,92,0)'); g.fillStyle = gr; g.fillRect(x - r, y - r, r * 2, r * 2); }
    g.strokeStyle = 'rgba(200,230,255,0.4)';
    for (let i = 0; i < 26; i++) { g.lineWidth = 0.6 + R() * 1.6; g.beginPath(); let x = R() * 512, y = R() * 512; g.moveTo(x, y); for (let k = 0; k < 6; k++) { x += (R() - 0.5) * 120; y += (R() - 0.5) * 120; g.lineTo(x, y); } g.stroke(); }
  });
  const mGR = new THREE.MeshLambertMaterial({ map: snowTex, vertexColors: true });
  const mRD = new THREE.MeshLambertMaterial({ map: roadTex, transparent: true, opacity: 0.88 });
  const mICE = new THREE.MeshLambertMaterial({ map: iceTex, transparent: true, opacity: 0.68, color: 0xdfeaf6 });

  const mesh = (geo, mat, shadow = 3) => { const m = new THREE.Mesh(geo, mat); m.castShadow = !!(shadow & 1); m.receiveShadow = !!(shadow & 2); return m; };
  const city = new THREE.Group(), mirror = new THREE.Group(), bridges = new THREE.Group(), bridgesM = new THREE.Group();
  const gFA = B.fa.build(), gFB = B.fb.build(), gPL = B.pl.build(), gEM = B.em.build(), gSG = B.sg.build(), gBR = B.br.build(), gBRE = B.brE.build();
  city.add(mesh(gFA, mFA), mesh(gFB, mFB), mesh(gPL, mPL), mesh(gEM, mEM, 0), mesh(gSG, mSG, 0));
  mirror.add(mesh(gFA, mFA, 0), mesh(gFB, mFB, 0), mesh(gPL, mPL, 0), mesh(gEM, mEM, 0), mesh(gSG, mSG, 0));
  mirror.scale.y = -1;
  bridges.add(mesh(gBR, mPL), mesh(gBRE, mEM, 0));
  bridgesM.add(mesh(gBR, mPL, 0), mesh(gBRE, mEM, 0)); bridgesM.scale.y = -1; bridgesM.position.y = -6;
  const ground = mesh(B.gr.build(), mGR, 2);
  const roads = mesh(B.rd.build(), mRD, 2); roads.renderOrder = -10;
  const iceG = new Batch(); iceG.quad([-40, -3, 900], [40, -3, 900], [40, -3, -900], [-40, -3, -900], [1, 1, 1]); iceG.worldUV(1 / 70);
  const ice = mesh(iceG.build(), mICE, 2); ice.renderOrder = -11;
  scene.add(city, mirror, bridges, bridgesM, ground, roads, ice);

  const pools = new THREE.Mesh(B.pool.build(), addMat(`varying vec2 vUv; varying vec3 vC; varying float vF; void main(){ float r = length(vUv-0.5)*2.0; float a = pow(max(1.0-r,0.0),1.8); gl_FragColor = vec4(vC*a*vF,1.0); }`));
  pools.renderOrder = 2;
  const cones = new THREE.Mesh(B.cone.build(), addMat(`varying vec3 vC; varying float vF; varying vec3 vN; varying vec3 vV; varying vec2 vUv;
    void main(){ float f = abs(dot(normalize(vN), normalize(vV))); float a = f*f*pow(clamp(vUv.y,0.0,1.0),1.5); gl_FragColor = vec4(vC*a*vF,1.0); }`, {},
    `attribute vec3 color; varying vec2 vUv; varying vec3 vC; varying float vF; varying vec3 vN; varying vec3 vV; uniform float uFog;
    void main(){ vec4 mv = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*mv; vUv = uv; vC = color; vN = normalMatrix*normal; vV = -mv.xyz; float d = length(mv.xyz); vF = exp(-uFog*uFog*d*d); }`));
  cones.material.side = THREE.DoubleSide; cones.renderOrder = 3;
  const streaks = new THREE.Mesh(B.streak.build(), addMat(`varying vec2 vUv; varying vec3 vC; varying float vF;
    void main(){ float dx = (vUv.x-0.5)*3.6; float dy = (vUv.y-0.55)*2.4; float gx = exp(-dx*dx); float gy = exp(-dy*dy); gl_FragColor = vec4(vC*gx*gy*vF,1.0); }`, {},
    `attribute vec3 color; varying vec2 vUv; varying vec3 vC; varying float vF; uniform float uFog;
    void main(){ vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
      vec3 wp = position + right*(uv.x-0.5)*2.0*normal.x + vec3(0.0,1.0,0.0)*(uv.y-0.5)*2.0*normal.y;
      vec4 mv = viewMatrix*vec4(wp,1.0); gl_Position = projectionMatrix*mv; vUv = uv; vC = color; float d = length(mv.xyz); vF = exp(-uFog*uFog*d*d); }`));
  streaks.frustumCulled = false; streaks.renderOrder = -20;
  scene.add(pools, cones, streaks);

  // static glow points (+ mirrored copy is skipped: streaks do that job)
  const glowMat = makeGlowMaterial();
  const ng = glows.length / 7, gp = new Float32Array(ng * 3), gs = new Float32Array(ng), gc = new Float32Array(ng * 3);
  for (let i = 0; i < ng; i++) { gp.set(glows.slice(i * 7, i * 7 + 3), i * 3); gs[i] = glows[i * 7 + 3]; gc.set(glows.slice(i * 7 + 4, i * 7 + 7), i * 3); }
  const gg = new THREE.BufferGeometry(); gg.setAttribute('position', new THREE.BufferAttribute(gp, 3)); gg.setAttribute('aSize', new THREE.BufferAttribute(gs, 1)); gg.setAttribute('aColor', new THREE.BufferAttribute(gc, 3));
  const glowPts = new THREE.Points(gg, glowMat); glowPts.frustumCulled = false; glowPts.renderOrder = 5; scene.add(glowPts);

  // ---------- sky ----------
  const moonDir = new THREE.Vector3(-0.45, 0.62, -0.64).normalize();
  const fogCol = new THREE.Color(0.05, 0.058, 0.115);
  const sky = new THREE.Mesh(new THREE.SphereGeometry(900, 24, 16), new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { uMoon: { value: moonDir }, uHor: { value: fogCol } },
    vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
    fragmentShader: `varying vec3 vDir; uniform vec3 uMoon; uniform vec3 uHor;
      void main(){ vec3 d = normalize(vDir); d.y = abs(d.y); float h = d.y;
        float ih = clamp(1.0-h, 0.0, 1.0);
        vec3 c = mix(vec3(0.008,0.014,0.04), uHor, pow(ih, 3.2));
        c += vec3(0.30,0.15,0.10)*pow(ih, 7.0)*(0.55 + 0.45*d.x);
        float m = max(dot(d, uMoon), 0.0);
        c += vec3(0.75,0.85,1.0)*(smoothstep(0.9993,0.9996,m)*3.0 + pow(m,90.0)*0.35 + pow(m,10.0)*0.08);
        gl_FragColor = vec4(c,1.0); }`,
  }));
  sky.renderOrder = -100; sky.frustumCulled = false; scene.add(sky);
  scene.fog = new THREE.FogExp2(fogCol, fogUniform.value);
  scene.background = fogCol;

  // ---------- lights ----------
  const hemi = new THREE.HemisphereLight(new THREE.Color(0.3, 0.4, 0.78), new THREE.Color(0.2, 0.15, 0.17), 0.7);
  const moon = new THREE.DirectionalLight(new THREE.Color(0.58, 0.72, 1.0), 1.0);
  moon.shadow.mapSize.set(2048, 2048); moon.shadow.bias = -0.0006; moon.shadow.normalBias = 0.6;
  const sc = moon.shadow.camera; sc.left = -110; sc.right = 110; sc.top = 110; sc.bottom = -110; sc.near = 10; sc.far = 520;
  scene.add(hemi, moon, moon.target);

  // ---------- animated bits ----------
  // ferris wheel
  const wb = new Batch(), wr = 15;
  for (const sx of [-1.2, 1.2]) {
    wb.add(new THREE.TorusGeometry(wr, 0.2, 5, 48), M(sx, 0, 0, 1, 1, 1, Math.PI / 2), C(0x7a8496));
    for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6; beam(wb, [sx, 0, 0], [sx, Math.cos(a) * wr, Math.sin(a) * wr], 0.07, C(0x6a7486), 3); }
  }
  const cabC = [C(0xd9423a), C(0x3a8ad9), C(0xe0b23a), C(0x4ac27a)];
  for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6 + 0.26; wb.add(boxGeo, M(0, Math.cos(a) * wr, Math.sin(a) * wr, 2.0, 1.7, 1.7, 0, -a), cabC[i % 4]); }
  const wheel = new THREE.Group(); wheel.position.set(103, 17.4, -30);
  wheel.add(new THREE.Mesh(wb.build(), mPL));
  const wn = 48, wp = new Float32Array(wn * 3), ws = new Float32Array(wn), wc = new Float32Array(wn * 3);
  const neon = [[2.2, 0.3, 1.4], [0.3, 1.8, 2.2], [2.2, 1.5, 0.3], [0.5, 2.2, 0.8]];
  for (let i = 0; i < wn; i++) { const a = i / wn * Math.PI * 2; wp.set([0, Math.cos(a) * wr, Math.sin(a) * wr], i * 3); ws[i] = 1.5; wc.set(neon[Math.floor(i / 4) % 4], i * 3); }
  const wg = new THREE.BufferGeometry(); wg.setAttribute('position', new THREE.BufferAttribute(wp, 3)); wg.setAttribute('aSize', new THREE.BufferAttribute(ws, 1)); wg.setAttribute('aColor', new THREE.BufferAttribute(wc, 3));
  const wPts = new THREE.Points(wg, glowMat); wPts.frustumCulled = false; wheel.add(wPts);
  scene.add(wheel);
  const legs = new Batch();
  for (const sz of [-7, 7]) for (const sx of [-2.4, 2.4]) beam(legs, [103 + sx, 0.15, -30 + sz], [103 + sx * 0.5, 17.4, -30], 0.28, C(0x596273), 5);
  const legsM = mesh(legs.build(), mPL, 1); scene.add(legsM); col.circle(103, -37, 1.6); col.circle(103, -23, 1.6);

  // smoke
  const smokeTex = canvasTex(64, 64, (g) => { const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(255,255,255,0.9)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); }, { repeat: false });
  const puffs = [];
  for (const s of smokes) for (let i = 0; i < 6; i++) {
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: smokeTex, color: new THREE.Color(0.34, 0.3, 0.36), transparent: true, opacity: 0, depthWrite: false }));
    scene.add(sp); puffs.push({ sp, s, ph: i / 6 });
  }
  // anomalies
  const anoMat = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } }, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false,
    vertexShader: `uniform float uTime; varying vec3 vN; varying vec3 vV; void main(){ vec3 p = position*(1.0+0.14*sin(uTime*3.0+position.y*3.0+position.x*2.0)); vec4 mv = modelViewMatrix*vec4(p,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }`,
    fragmentShader: `uniform float uTime; varying vec3 vN; varying vec3 vV; void main(){ float f = clamp(1.0-abs(dot(normalize(vN),vV)),0.0,1.0); float a = f*f*1.8+0.06; vec3 c = mix(vec3(0.2,1.2,0.6), vec3(0.7,0.3,1.3), 0.5+0.5*sin(uTime*2.0+f*6.0)); gl_FragColor = vec4(c*a,1.0); }`,
  });
  const anoGeo = new THREE.IcosahedronGeometry(2.3, 2);
  for (const a of anomalies) { a.mesh = new THREE.Mesh(anoGeo, anoMat); a.mesh.position.set(a.x, 2.2, a.z); scene.add(a.mesh); }

  const world = {
    col, lamps, blocks, towers, anomalies, fire, moon, moonDir, hemi, mirror, bridgesM, sky, cones, streaks, pools, glowMat, mPL, mEM, roadsMat: mRD,
    update(dt, t, camera) {
      wheel.rotation.x += dt * 0.12;
      anoMat.uniforms.uTime.value = t;
      for (const a of anomalies) { a.x = a.x0 + Math.sin(t * 0.7 + a.ph) * 3.2; a.z = a.z0 + Math.cos(t * 0.55 + a.ph * 1.7) * 3.2; a.mesh.position.set(a.x, 2.2 + Math.sin(t * 2 + a.ph) * 0.3, a.z); }
      for (const p of puffs) { const k = (t * 0.05 + p.ph) % 1; p.sp.position.set(p.s[0] + k * 34, p.s[1] + k * 22, p.s[2] + k * 12); const sc2 = 5 + k * 26; p.sp.scale.set(sc2, sc2, 1); p.sp.material.opacity = 0.5 * (1 - k) * smooth(k * 8); }
      sky.position.copy(camera.position);
    },
    setShadowCenter(x, z) {
      const sx = Math.round(x / 4) * 4, sz = Math.round(z / 4) * 4;
      moon.target.position.set(sx, 0, sz); moon.position.set(sx + moonDir.x * 260, moonDir.y * 260, sz + moonDir.z * 260); moon.target.updateMatrixWorld();
    },
    drawMap(g, s) { // s = px per meter, origin at world (-300,-200)
      const X = (x) => (x + 300) * s, Z = (z) => (z + 200) * s;
      g.fillStyle = '#0d1220'; g.fillRect(0, 0, 600 * s, 400 * s);
      g.fillStyle = '#17304a'; g.fillRect(X(-52), 0, 104 * s, 400 * s); g.fillStyle = '#21486b'; g.fillRect(X(-40), 0, 80 * s, 400 * s);
      const tc = { park: '#17382a', fpark: '#17382a', zone: '#2c2140', ind: '#2a2622', opera: '#3a3122', garages: '#2a2a2e', palace: '#33301f', mall: '#1d2a3c' };
      for (const b of blocks) { g.fillStyle = tc[b.type] || '#1a2132'; g.fillRect(X(b.x0), Z(b.z0), (b.x1 - b.x0) * s, (b.z1 - b.z0) * s); }
      g.fillStyle = '#465068';
      for (const x of RX) g.fillRect(X(x - hwX(x)), Z(-187), hwX(x) * 2 * s, 374 * s);
      for (const z of RZ) { g.fillRect(X(-287), Z(z - 7), 224 * s, 14 * s); g.fillRect(X(63), Z(z - 7), 224 * s, 14 * s); }
      g.fillStyle = '#8b6f6f'; g.fillRect(X(-63), Z(-67), 126 * s, 14 * s); g.fillStyle = '#c0483c'; g.fillRect(X(-63), Z(113), 126 * s, 14 * s);
      g.fillStyle = '#d8c79a'; g.beginPath(); g.arc(X(181), Z(-30), 14 * s, 0, 7); g.fill();
      g.fillStyle = '#e0b040'; g.beginPath(); g.arc(X(140), Z(30), 4 * s, 0, 7); g.fill();
    },
  };
  world.setShadowCenter(POI.start[0], POI.start[1]);
  return world;
}
