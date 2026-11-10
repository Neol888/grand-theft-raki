import * as THREE from 'three';
import { Batch, C, M, beam, canvasTex } from './util.js';
import { litMaterial } from './world.js';

const G = { sph: new THREE.SphereGeometry(1, 12, 9), cyl: new THREE.CylinderGeometry(1, 1, 1, 10), cone: new THREE.ConeGeometry(1, 1, 8), box: new THREE.BoxGeometry(1, 1, 1) };
let mBody, mEm, mKlimt;
const SHELL = { arkasha: 0xc8402e, max: 0xdb5a3c, dima: 0x0d1118, igor: 0xf0f0f0, geisler: 0xc23b52, pasha: 0xe0b030, nikita: 0xcf5a33, kos: 0x2f8fdc, artem: 0x4cb84a, sanya: 0x9c9c9c, misha: 0xd8623a };
const white = C(0xf4f4f4), black = C(0x08080a), gold = C(0xe0a81c);
const mulc = (c, k) => [c[0] * k, c[1] * k, c[2] * k];

function badge(text, bg, fg) {
  const t = canvasTex(128, 128, (g) => {
    g.clearRect(0, 0, 128, 128); g.fillStyle = bg; g.beginPath(); g.arc(64, 64, 60, 0, 7); g.fill();
    g.strokeStyle = fg; g.lineWidth = 5; g.stroke();
    g.fillStyle = fg; g.font = '900 58px "Arial Black", system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(text, 64, 68);
  }, { repeat: false });
  const m = new THREE.Mesh(new THREE.CircleGeometry(0.19, 20), new THREE.MeshBasicMaterial({ map: t, transparent: true }));
  m.position.set(0, 1.08, 0.405); return m;
}

export function makeRak(id) {
  if (!mBody) {
    mBody = litMaterial({ vertexColors: true });
    mEm = new THREE.MeshBasicMaterial({ vertexColors: true });
    mKlimt = litMaterial({ vertexColors: true, map: canvasTex(128, 128, (g) => {
      g.fillStyle = '#f2c94c'; g.fillRect(0, 0, 128, 128); const cs = ['#1b1b1b', '#ffffff', '#c0392b', '#1f8a70', '#8e6b00', '#f7e08a'];
      for (let i = 0; i < 90; i++) { g.fillStyle = cs[i % cs.length]; const s = 3 + (i * 7 % 9); g.fillRect((i * 37) % 128, (i * 53) % 128, s, s + (i % 3) * 3); }
      g.strokeStyle = '#7a5a00'; g.lineWidth = 1.5; for (let i = 0; i < 9; i++) { g.beginPath(); g.arc((i * 47) % 128, (i * 71) % 128, 6 + i % 4, 0, 5); g.stroke(); }
    }) });
  }
  const g = new THREE.Group(), inner = new THREE.Group(); g.add(inner);
  const b = new Batch(), e = new Batch();
  const shell = C(SHELL[id]), dk = mulc(shell, 0.6), belly = id === 'dima' ? C(0x161c28) : id === 'igor' ? C(0xdcdcdc) : id === 'pasha' ? C(0xf5d76e) : id === 'sanya' ? C(0xc8c8c8) : C(0xf2cfa6);
  const limb = id === 'igor' ? black : shell, limbD = id === 'igor' ? black : dk;
  const mat = id === 'pasha' ? mKlimt : mBody;
  const suit = id === 'arkasha', hood = id === 'nikita';
  // torso + belly
  b.add(G.sph, M(0, 1.0, 0, 0.44, 0.56, 0.38), suit ? C(0x14161c) : hood ? C(0x17171b) : shell);
  if (!suit && !hood) b.add(G.sph, M(0, 0.98, 0.13, 0.33, 0.44, 0.28), belly);
  // head
  b.add(G.sph, M(0, 1.62, 0.02, 0.4, 0.34, 0.36), shell);
  b.add(G.box, M(0, 1.52, 0.34, 0.16, 0.03, 0.04), black);
  // eyes on stalks
  for (const s of [-1, 1]) {
    beam(b, [s * 0.15, 1.85, 0.1], [s * 0.19, 2.12, 0.14], 0.035, shell, 5);
    b.add(G.sph, M(s * 0.19, 2.16, 0.15, 0.1, 0.1, 0.1), white);
    if (id === 'dima') e.add(G.sph, M(s * 0.19, 2.165, 0.235, 0.055, 0.055, 0.03), [0.3, 2.4, 2.8]); else b.add(G.sph, M(s * 0.19, 2.165, 0.235, 0.05, 0.05, 0.03), black);
    beam(b, [s * 0.1, 1.9, 0.25], [s * 0.45, 2.55, -0.2], 0.016, limbD, 4);
    for (let k = 0; k < 3; k++) { beam(b, [s * 0.36, 1.0 - k * 0.17, 0], [s * 0.6, 0.86 - k * 0.17, 0.08], 0.035, limbD, 4); beam(b, [s * 0.6, 0.86 - k * 0.17, 0.08], [s * 0.68, 0.6 - k * 0.17, 0.14], 0.028, limbD, 4); }
  }
  // tail
  b.add(G.sph, M(0, 0.62, -0.18, 0.36, 0.26, 0.3), limb); b.add(G.sph, M(0, 0.42, -0.38, 0.3, 0.2, 0.26), limbD);
  b.add(G.sph, M(0, 0.26, -0.6, 0.3, 0.07, 0.24), limb); for (const s of [-1, 1]) b.add(G.sph, M(s * 0.26, 0.26, -0.56, 0.2, 0.06, 0.2, s * 0.5), limbD);

  // limbs
  const arm = (s) => {
    const a = new Batch();
    beam(a, [0, 0, 0], [s * 0.3, -0.22, 0.2], 0.07, limbD, 5);
    if (id === 'max') a.add(G.sph, M(s * 0.36, -0.26, 0.4, 0.27, 0.27, 0.27), C(0xd01818));
    else {
      a.add(G.sph, M(s * 0.3, -0.22, 0.2, 0.09, 0.09, 0.09), limb);
      a.add(G.sph, M(s * 0.36, -0.26, 0.42, 0.2, 0.27, 0.18), limb);
      a.add(G.cone, M(s * 0.36, -0.1, 0.74, 0.13, 0.5, 0.1, 0, Math.PI / 2 - 0.28), limb);
      a.add(G.cone, M(s * 0.36, -0.42, 0.66, 0.09, 0.36, 0.08, 0, Math.PI / 2 + 0.32), limbD);
    }
    if (id === 'artem' && s > 0) { a.add(G.cyl, M(0.38, -0.02, 0.5, 0.11, 0.26, 0.11), C(0xe0a020)); a.add(G.cyl, M(0.38, 0.14, 0.5, 0.115, 0.06, 0.115), white); }
    if (id === 'artem' && s < 0) { a.add(G.sph, M(-0.38, 0.02, 0.56, 0.07, 0.11, 0.26), C(0x8a97a6)); a.add(G.cone, M(-0.38, 0.02, 0.86, 0.02, 0.14, 0.12, 0, -Math.PI / 2), C(0x6a7786)); }
    const m = new THREE.Mesh(a.build(), mat); m.position.set(s * 0.42, 1.3, 0.05); m.castShadow = true; inner.add(m); return m;
  };
  const leg = (s) => {
    const a = new Batch();
    a.add(G.cyl, M(0, -0.25, 0, 0.09, 0.5, 0.09), limbD); a.add(G.sph, M(0, -0.5, 0.07, 0.13, 0.07, 0.2), limb);
    const m = new THREE.Mesh(a.build(), mat); m.position.set(s * 0.17, 0.57, 0); m.castShadow = true; inner.add(m); return m;
  };
  const armL = arm(-1), armR = arm(1), legL = leg(-1), legR = leg(1);
  let glow = null;

  // accessories
  if (id === 'arkasha') {
    b.add(G.sph, M(0, 1.08, 0.2, 0.19, 0.36, 0.24), white);
    b.add(G.box, M(-0.09, 1.4, 0.42, 0.14, 0.1, 0.05, 0, 0, 0.3), C(0x9a1228)); b.add(G.box, M(0.09, 1.4, 0.42, 0.14, 0.1, 0.05, 0, 0, -0.3), C(0x9a1228)); b.add(G.box, M(0, 1.4, 0.44, 0.05, 0.07, 0.05), C(0x6a0c1c));
    b.add(G.sph, M(0, 1.48, 0.2, 0.33, 0.2, 0.22), C(0x5a3a22));
  } else if (id === 'max') {
    b.add(G.cyl, M(0, 0.72, 0, 0.43, 0.24, 0.37), C(0x1c3fa8)); b.add(G.cyl, M(0, 0.86, 0, 0.44, 0.05, 0.38), white);
  } else if (id === 'dima') {
    b.add(G.box, M(0, 1.08, -0.42, 0.52, 0.62, 0.26), C(0x1a2230)); b.add(G.box, M(0, 1.2, -0.56, 0.3, 0.2, 0.06), C(0x263248));
    glow = { y: 0.4, c: [0.25, 0.4, 0.7], s: 4.5 };
  } else if (id === 'igor') {
    inner.add(badge('ИБ', '#ffffff', '#000000'));
  } else if (id === 'geisler') {
    b.add(G.cone, M(0, 0.98, -0.14, 0.66, 1.3, 0.44), C(0x5a1f7a));
    b.add(G.cyl, M(0, 1.99, 0, 0.2, 0.1, 0.2), gold); for (let i = 0; i < 5; i++) { const a = i * Math.PI * 2 / 5; b.add(G.cone, M(Math.sin(a) * 0.17, 2.1, Math.cos(a) * 0.17, 0.04, 0.14, 0.04), gold); }
    beam(e, [0, 2.75, 0], [0, 3.0, 0], 0.015, [1.2, 0.9, 0.4], 4);
    for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3; e.add(G.sph, M(Math.sin(a) * 0.26, 2.72, Math.cos(a) * 0.26, 0.05, 0.07, 0.05), [3.2, 2.3, 1.0]); }
    e.add(G.cyl, M(0, 2.76, 0, 0.27, 0.02, 0.27), [1.4, 1.0, 0.4]);
    glow = { y: 2.72, c: [1.5, 1.0, 0.45], s: 2.6 };
  } else if (id === 'pasha') {
    glow = { y: 1.2, c: [0.8, 0.55, 0.12], s: 3.2 };
  } else if (id === 'nikita') {
    b.add(G.sph, M(0, 1.66, -0.09, 0.45, 0.38, 0.36), C(0x17171b));
    b.add(G.box, M(0, 2.16, 0.22, 0.62, 0.15, 0.1), black); e.add(G.box, M(-0.17, 2.19, 0.275, 0.16, 0.02, 0.01), [0.6, 0.8, 1.2]);
  } else if (id === 'kos') {
    inner.add(badge('СК', '#35a7e8', '#ffffff'));
    b.add(G.cyl, M(0, 1.46, 0.36, 0.09, 0.14, 0.09, 0, Math.PI / 2), C(0x333a33));
    b.add(G.sph, M(0, 1.7, -0.1, 0.43, 0.34, 0.34), C(0x3f5a34));
  } else if (id === 'artem') {
    inner.add(badge('АК', '#58c152', '#ffffff'));
  } else if (id === 'sanya') {
    b.add(G.sph, M(0, 1.47, 0.2, 0.33, 0.22, 0.22), C(0x242424));
    b.add(G.box, M(0.5, 1.0, 0.14, 0.05, 0.36, 0.5), C(0x30343c)); e.add(G.box, M(0.53, 1.0, 0.14, 0.01, 0.3, 0.44), [0.5, 0.9, 1.5]);
  } else if (id === 'misha') {
    b.add(G.cyl, M(0, 1.99, -0.02, 0.27, 0.14, 0.27), C(0x6b6b3a)); b.add(G.cyl, M(0, 1.93, -0.02, 0.44, 0.03, 0.44), C(0x6b6b3a));
    const bx = -0.52, by = 1.62;
    b.add(G.sph, M(bx, by, 0, 0.15, 0.13, 0.13), shell);
    for (const s of [-1, 1]) { b.add(G.sph, M(bx + s * 0.06, by + 0.16, 0.06, 0.04, 0.04, 0.04), white); b.add(G.sph, M(bx + s * 0.06, by + 0.165, 0.095, 0.02, 0.02, 0.015), black); b.add(G.sph, M(bx + s * 0.17, by + 0.02, 0.08, 0.06, 0.08, 0.05), shell); }
  }
  // крупные аксессуары, чтобы рак узнавался издалека и на аватарке
  const red = C(0xc81828), tri = new THREE.CylinderGeometry(1, 1, 1, 3), tor = new THREE.TorusGeometry(0.42, 0.035, 6, 20);
  if (id === 'arkasha') {
    b.add(G.cone, M(-0.17, 1.4, 0.45, 0.13, 0.3, 0.07, 0, 0, -Math.PI / 2), red); b.add(G.cone, M(0.17, 1.4, 0.45, 0.13, 0.3, 0.07, 0, 0, Math.PI / 2), red); b.add(G.sph, M(0, 1.4, 0.46, 0.06, 0.06, 0.05), C(0x7a0c1c));
    for (const s of [-1, 1]) b.add(G.box, M(s * 0.15, 1.13, 0.37, 0.1, 0.42, 0.03, 0, 0, -s * 0.38), C(0x2c303a));
    b.add(G.box, M(-0.25, 1.2, 0.36, 0.09, 0.06, 0.03), white);
  } else if (id === 'max') {
    b.add(G.cyl, M(0, 1.8, 0.02, 0.4, 0.07, 0.36), red); b.add(G.cyl, M(0, 0.86, 0.37, 0.15, 0.05, 0.15, 0, Math.PI / 2), gold);
  } else if (id === 'dima') {
    for (const s of [-1, 1]) b.add(G.box, M(s * 0.2, 1.15, 0.34, 0.07, 0.6, 0.05), C(0x2a3852));
    e.add(G.box, M(0, 1.25, -0.566, 0.18, 0.1, 0.02), [0.3, 2.2, 2.6]);
  } else if (id === 'igor') {
    b.add(G.cyl, M(0, 1.97, -0.04, 0.52, 0.03, 0.48), black); b.add(G.cyl, M(0, 2.09, -0.06, 0.24, 0.22, 0.22), black); b.add(G.cyl, M(0, 2.01, -0.06, 0.246, 0.05, 0.226), white);
  } else if (id === 'pasha') {
    e.add(tor, M(0, 1.74, -0.3), [1.7, 1.15, 0.25]);
  } else if (id === 'kos') {
    b.add(G.sph, M(0, 1.56, 0.3, 0.21, 0.19, 0.14), C(0x262b26));
    for (const s of [-1, 1]) b.add(G.cyl, M(s * 0.17, 1.5, 0.41, 0.08, 0.1, 0.08, 0, Math.PI / 2), C(0x4a5246));
    e.add(G.box, M(0.2, 1.0, 0.4, 0.08, 0.12, 0.02), [0.4, 2.2, 0.6]);
  } else if (id === 'artem') {
    b.add(tri, M(0, 1.98, -0.02, 0.56, 0.06, 0.56, Math.PI), C(0x15171c)); b.add(tri, M(0, 1.975, -0.02, 0.6, 0.02, 0.6, Math.PI), gold); b.add(G.cyl, M(0, 2.07, -0.04, 0.22, 0.16, 0.22), C(0x15171c));
    b.add(G.box, M(0.19, 2.16, 0.24, 0.12, 0.1, 0.03), black);
  } else if (id === 'sanya') {
    b.add(tor, M(0, 1.64, 0), C(0x1a1a1e)); for (const s of [-1, 1]) b.add(G.cyl, M(s * 0.43, 1.62, 0, 0.13, 0.09, 0.13, 0, 0, Math.PI / 2), C(0x1a1a1e));
  } else if (id === 'misha') {
    b.add(G.cone, M(-0.52, 1.84, 0, 0.11, 0.13, 0.11), C(0xf2c230));
  } else if (id === 'nikita') {
    b.add(G.box, M(0, 2.16, 0.23, 0.7, 0.18, 0.1), black); e.add(G.box, M(0.17, 2.2, 0.285, 0.16, 0.025, 0.01), [0.6, 0.8, 1.2]);
  } else if (id === 'geisler') {
    e.add(G.sph, M(0, 2.26, 0.17, 0.045, 0.045, 0.045), [2.6, 0.4, 0.5]);
  }
  const body = new THREE.Mesh(b.build(), mat); body.castShadow = true; inner.add(body);
  if (e.count) inner.add(new THREE.Mesh(e.build(), mEm));
  g.userData = { id, inner, armL, armR, legL, legR, ph: Math.random() * 6, glow };
  return g;
}

export function animRak(r, t, walk, talk) {
  const p = r.userData, w = t * 11, idle = 1 - walk, snap = Math.pow(Math.max(0, Math.sin(t * 1.9 + p.ph)), 10), tk = talk ? 1 : 0;
  p.inner.position.y = Math.abs(Math.sin(w)) * 0.07 * walk + Math.sin(t * 2 + p.ph) * 0.025;
  p.inner.rotation.z = Math.sin(w) * 0.07 * walk + Math.sin(t * 1.3 + p.ph) * 0.045 * idle;
  p.inner.rotation.x = Math.sin(t * 0.9 + p.ph) * 0.03 * idle;
  p.inner.rotation.y = Math.sin(t * 0.7 + p.ph * 2) * 0.12 * idle;
  p.inner.scale.y = 1 + Math.sin(t * 2.4 + p.ph) * 0.015;
  p.legL.rotation.x = Math.sin(w) * 0.9 * walk; p.legR.rotation.x = -Math.sin(w) * 0.9 * walk;
  const sw = Math.sin(t * 1.7 + p.ph) * 0.1;
  p.armL.rotation.x = -Math.sin(w) * 0.5 * walk + sw - snap * 0.5 * idle - tk * (0.9 + Math.sin(t * 9) * 0.35);
  p.armR.rotation.x = Math.sin(w) * 0.5 * walk - sw - Math.pow(Math.max(0, Math.sin(t * 1.9 + p.ph + 1.6)), 10) * 0.5 * idle - tk * (0.5 + Math.cos(t * 7) * 0.3);
  p.armL.rotation.z = -tk * 0.3 - snap * 0.25 * idle; p.armR.rotation.z = tk * 0.3 + snap * 0.25 * idle;
}

export function nameSprite(text, css) {
  const t = canvasTex(256, 64, (g) => {
    g.font = '800 34px system-ui, "Segoe UI", sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    const w = Math.min(250, g.measureText(text).width + 36);
    g.fillStyle = 'rgba(10,14,24,0.78)'; g.beginPath(); g.roundRect ? g.roundRect(128 - w / 2, 8, w, 48, 24) : g.rect(128 - w / 2, 8, w, 48); g.fill();
    g.fillStyle = css; g.fillText(text, 128, 34);
  }, { repeat: false });
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, depthWrite: false, fog: false }));
  s.scale.set(2.6, 0.65, 1); s.position.y = 2.95; return s;
}
