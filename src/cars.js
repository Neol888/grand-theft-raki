import * as THREE from 'three';
import { Batch, C, M, clamp, angDiff } from './util.js';
import { litMaterial, surface, RX, RZ, BOUND_X, BOUND_Z } from './world.js';

const cyl = new THREE.CylinderGeometry(1, 1, 1, 12);
let mBody, mEm;
const snow = C(0xe8eef8), glass = C(0x10141c), tire = C(0x0c0c0e);

function carGeo(colorHex, kind) {
  const b = new Batch(), e = new Batch(), c = C(colorHex), dk = C(0x15171c), chrome = C(0x8f98a3);
  const wheels = (zs) => { for (const x of [-0.9, 0.9]) for (const z of zs) { b.add(cyl, M(x, 0.36, z, 0.37, 0.27, 0.37, 0, 0, Math.PI / 2), tire); b.add(cyl, M(x * 1.02, 0.36, z, 0.17, 0.29, 0.17, 0, 0, Math.PI / 2), chrome); } };
  // остеклённая кабина с наклонными стёклами: y0..y1, перед zf, зад zr, крыша zf2..zr2
  const cabin = (y0, y1, zf, zr, zf2, zr2, w0, w1, roof) => {
    b.quad([-w0, y0, zf], [w0, y0, zf], [w1, y1, zf2], [-w1, y1, zf2], glass); b.quad([w0, y0, zr], [-w0, y0, zr], [-w1, y1, zr2], [w1, y1, zr2], glass);
    b.quad([w0, y0, zf], [w0, y0, zr], [w1, y1, zr2], [w1, y1, zf2], glass); b.quad([-w0, y0, zr], [-w0, y0, zf], [-w1, y1, zf2], [-w1, y1, zr2], glass);
    b.quad([-w1, y1, zf2], [w1, y1, zf2], [w1, y1, zr2], [-w1, y1, zr2], roof);
  };
  if (kind === 'van') { // маршрутка
    b.box(-0.92, 0.92, 0.36, 1.25, -2.25, 2.0, c); b.box(-0.95, 0.95, 0.3, 0.5, -2.3, 2.1, dk);
    cabin(1.25, 2.02, 2.0, -2.25, 1.55, -2.2, 0.9, 0.86, snow);
    for (const z of [-1.5, -0.4, 0.6]) b.box(-0.93, 0.93, 1.25, 2.0, z - 0.06, z + 0.06, c);
    e.box(-0.5, 0.5, 2.03, 2.2, 1.35, 1.5, [2.4, 1.5, 0.3]); wheels([-1.45, 1.35]);
  } else if (kind === 'plow') { // снегоуборщик
    b.box(-1.0, 1.0, 0.45, 1.3, -2.4, 2.2, c); b.box(-1.02, 1.02, 0.34, 0.6, -2.45, 2.25, dk);
    cabin(1.3, 2.15, 2.2, 0.7, 1.9, 0.75, 0.96, 0.9, snow);
    b.box(-0.98, 0.98, 1.3, 2.0, -2.35, 0.55, C(0x3a3f4a), snow);
    b.quad([-1.5, 0.12, 2.75], [1.5, 0.12, 3.05], [1.5, 1.0, 3.2], [-1.5, 1.0, 2.9], C(0xd9a520)); b.quad([1.5, 0.12, 3.05], [-1.5, 0.12, 2.75], [-1.5, 1.0, 2.9], [1.5, 1.0, 3.2], C(0x8a6a10));
    b.box(-0.2, 0.2, 0.5, 0.8, 2.2, 2.9, dk); e.box(-0.14, 0.14, 2.16, 2.34, 1.2, 1.5, [2.6, 1.3, 0.1]); wheels([-1.6, 1.45]);
  } else { // трёхобъёмный седан
    b.box(-0.88, 0.88, 0.36, 0.93, -2.12, 2.12, c); b.box(-0.9, 0.9, 0.3, 0.5, -2.05, 2.05, dk);
    cabin(0.93, 1.47, 0.78, -1.28, 0.36, -0.98, 0.84, 0.72, snow);
    b.box(-0.86, 0.86, 0.93, 1.46, -0.34, -0.26, c);
    b.box(-0.92, 0.92, 0.4, 0.55, 2.1, 2.22, chrome); b.box(-0.92, 0.92, 0.4, 0.55, -2.22, -2.1, chrome);
    b.box(-0.45, 0.45, 0.6, 0.84, 2.11, 2.14, dk); b.box(-0.7, 0.7, 0.93, 0.97, 1.15, 2.0, snow);
    if (kind === 'mod') b.box(-0.9, 0.9, 0.55, 0.75, -2.14, 2.14, C(0x1a4fd0));
    wheels([-1.35, 1.35]);
  }
  const fz = kind === 'plow' ? 2.22 : kind === 'van' ? 2.02 : 2.14, rz = kind === 'plow' ? -2.42 : kind === 'van' ? -2.27 : -2.14;
  for (const x of [-0.62, 0.62]) { e.box(x - 0.17, x + 0.17, 0.62, 0.84, fz, fz + 0.04, [3.2, 3.0, 2.4]); e.box(x - 0.2, x + 0.2, 0.66, 0.82, rz - 0.05, rz, [2.6, 0.12, 0.08]); }
  return [b.build(), e.build()];
}

export class Car {
  constructor(scene, x, z, h, colorHex, kind = 'sedan') {
    if (!mBody) { mBody = litMaterial({ vertexColors: true }); mEm = new THREE.MeshBasicMaterial({ vertexColors: true }); }
    const [gb, ge] = carGeo(colorHex, kind);
    this.g = new THREE.Group(); this.body = new THREE.Group(); this.g.add(this.body);
    const m = new THREE.Mesh(gb, mBody); m.castShadow = true; this.body.add(m, new THREE.Mesh(ge, mEm));
    if (kind === 'mod') {
      this.barMat = new THREE.MeshBasicMaterial({ color: 0x2244ff });
      const bar = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.14, 0.3), this.barMat); bar.position.set(0, 1.68, -0.2); this.body.add(bar);
    }
    this.g.rotation.order = 'YXZ'; scene.add(this.g);
    this.e = { x, z, y: 0, vx: 0, vz: 0, layer: 0 }; this.e.y = surface(this.e);
    this.h = h; this.steer = 0; this.vy = 0; this.kind = kind; this.color = colorHex; this.ai = null; this.slip = 0; this.maxSpeed = 38; this.vf = 0; this.roll = 0; this.spin = 0; this.stun = 0;
    this.sync(0);
  }
  drive(dt, thr, st, hand, col) {
    const e = this.e, ice = e.layer === 2;
    this.steer += (st - this.steer) * Math.min(1, dt * 9);
    let fx = Math.sin(this.h), fz = Math.cos(this.h);
    let vf = e.vx * fx + e.vz * fz;
    const air = e.y > surface(e) + 0.5;
    if (!air) this.h -= this.steer * (2.6 / (1 + Math.abs(vf) / 28)) * dt * clamp(vf / 5, -1, 1);
    fx = Math.sin(this.h); fz = Math.cos(this.h); const rx = -fz, rz = fx;
    vf = e.vx * fx + e.vz * fz; let vl = e.vx * rx + e.vz * rz;
    if (!air) {
      const max = this.maxSpeed * (ice ? 0.88 : 1); let acc = 0;
      if (thr > 0) acc = 23 * thr * (1 - clamp(vf / max, 0, 1)) * (vf < -1 ? 2 : 1);
      else if (thr < 0) acc = vf > 1 ? 36 * thr : 13 * thr * (1 - clamp(-vf / 11, 0, 1));
      if (ice) acc *= 0.5;
      vf += acc * dt; vf -= vf * (thr === 0 ? 0.8 : 0.12) * dt;
      let grip = ice ? 1.0 : 6.0; if (hand) { grip *= 0.2; vf -= vf * 1.3 * dt; }
      this.slip = Math.abs(vl); vl -= vl * Math.min(1, grip * dt);
    }
    e.vx = fx * vf + rx * vl; e.vz = fz * vf + rz * vl; this.vf = vf;
    this.roll += (clamp(-vl * 0.035, -0.22, 0.22) - this.roll) * Math.min(1, dt * 6);
    return this.move(dt, col);
  }
  move(dt, col) {
    const e = this.e;
    e.x += e.vx * dt; e.z += e.vz * dt;
    const hit = col.resolve(e, 1.5, e.layer, 0.25);
    if (Math.abs(e.x) > BOUND_X) { e.x = Math.sign(e.x) * BOUND_X; e.vx *= -0.3; }
    if (Math.abs(e.z) > BOUND_Z) { e.z = Math.sign(e.z) * BOUND_Z; e.vz *= -0.3; }
    const gh = surface(e);
    if (this.vy > 0 || e.y > gh + 0.4) { this.vy -= 26 * dt; e.y += this.vy * dt; this.spin += dt * 5; if (e.y <= gh) { e.y = gh; this.vy = 0; this.spin = 0; } }
    else e.y += (gh - e.y) * Math.min(1, dt * 14);
    return hit;
  }
  launch(v) { this.vy = v; this.e.y += 0.5; }
  sync() { const e = this.e; this.g.position.set(e.x, e.y, e.z); this.g.rotation.set(this.spin, this.h, this.roll); }
  get speed() { return Math.hypot(this.e.vx, this.e.vz); }
}

// ---------- road graph & traffic ----------
export const NODES = [];
for (let xi = 0; xi < RX.length; xi++) for (let zi = 0; zi < RZ.length; zi++) NODES.push({ x: RX[xi], z: RZ[zi], xi, zi, nb: [] });
const nid = (xi, zi) => xi * RZ.length + zi;
for (const n of NODES) {
  if (n.zi > 0) n.nb.push(nid(n.xi, n.zi - 1)); if (n.zi < RZ.length - 1) n.nb.push(nid(n.xi, n.zi + 1));
  for (const d of [-1, 1]) {
    const x2 = n.xi + d; if (x2 < 0 || x2 >= RX.length) continue;
    const cross = (n.xi < 4) !== (x2 < 4);
    if (!cross || RZ[n.zi] === -60 || RZ[n.zi] === 120) n.nb.push(nid(x2, n.zi));
  }
}
export function nearestNode(x, z, minD = 0, maxD = 1e9) {
  let best = -1, bd = 1e9;
  for (let i = 0; i < NODES.length; i++) { const d = Math.hypot(NODES[i].x - x, NODES[i].z - z); if (d >= minD && d <= maxD && d < bd) { bd = d; best = i; } }
  return best;
}
const lane = (A, B) => (A.x === 140 && B.x === 140 ? 7.6 : 3.3);
export function placeTraffic(car, from, to) {
  const A = NODES[from], B = NODES[to], dx = B.x - A.x, dz = B.z - A.z, l = Math.hypot(dx, dz), ux = dx / l, uz = dz / l;
  car.ai = { type: 'traffic', from, to, sp: 0, max: 9 + Math.random() * 5 };
  const ln = lane(A, B); car.e.x = A.x + ux * l * 0.5 - uz * ln; car.e.z = A.z + uz * l * 0.5 + ux * ln; car.h = Math.atan2(ux, uz); car.e.y = 0; car.sync();
}
export function driveTraffic(car, dt, px, pz) {
  const ai = car.ai, e = car.e, A = NODES[ai.from], B = NODES[ai.to];
  const dx = B.x - A.x, dz = B.z - A.z, l = Math.hypot(dx, dz), ux = dx / l, uz = dz / l;
  const s = (e.x - A.x) * ux + (e.z - A.z) * uz;
  if (s > l - 8) {
    const prev = ai.from, opts = B.nb.filter(n => n !== prev); ai.from = ai.to; ai.to = opts.length ? opts[Math.floor(Math.random() * opts.length)] : prev;
    return;
  }
  const ts = Math.min(s + 8, l), ln = lane(A, B), tx = A.x + ux * ts - uz * ln, tz = A.z + uz * ts + ux * ln;
  car.h += angDiff(car.h, Math.atan2(tx - e.x, tz - e.z)) * Math.min(1, dt * 3.2);
  const fx = Math.sin(car.h), fz = Math.cos(car.h), pdx = px - e.x, pdz = pz - e.z, pd = Math.hypot(pdx, pdz);
  let target = ai.max; if (car.stun > 0) { car.stun -= dt; target = 0; }
  if (pd < 10 && (pdx * fx + pdz * fz) / (pd + 0.01) > 0.55) target = 0;
  ai.sp += (target - ai.sp) * Math.min(1, dt * 2.5);
  e.vx = fx * ai.sp; e.vz = fz * ai.sp; e.x += e.vx * dt; e.z += e.vz * dt;
  e.y = surface(e); car.vf = ai.sp; car.sync();
}
