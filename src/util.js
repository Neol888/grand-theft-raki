import * as THREE from 'three';

export function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const smooth = (t) => { t = clamp(t, 0, 1); return t * t * (3 - 2 * t); };
export function angDiff(a, b) { return ((b - a + Math.PI) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI) - Math.PI; }
export const damp = (rate, dt) => 1 - Math.exp(-rate * dt);

const _c = new THREE.Color();
export function C(hex, mul = 1) { _c.setHex(hex); return [_c.r * mul, _c.g * mul, _c.b * mul]; }

const _p = new THREE.Vector3(), _q = new THREE.Quaternion(), _s = new THREE.Vector3(), _e = new THREE.Euler();
export function M(x, y, z, sx = 1, sy = 1, sz = 1, ry = 0, rx = 0, rz = 0) {
  _p.set(x, y, z); _e.set(rx, ry, rz, 'YXZ'); _q.setFromEuler(_e); _s.set(sx, sy, sz);
  return new THREE.Matrix4().compose(_p, _q, _s);
}

// Accumulates geometry into one merged BufferGeometry (position/normal/color/uv).
export class Batch {
  constructor() { this.p = []; this.n = []; this.c = []; this.u = []; this.i = []; }
  get count() { return this.p.length / 3; }
  quad(a, b, c, d, col, uv) {
    const i0 = this.count;
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2];
    const vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    const l = Math.hypot(nx, ny, nz) || 1; nx /= l; ny /= l; nz /= l;
    const P = [a, b, c, d];
    const multi = Array.isArray(col[0]);
    for (let k = 0; k < 4; k++) {
      this.p.push(P[k][0], P[k][1], P[k][2]); this.n.push(nx, ny, nz);
      const cc = multi ? col[k] : col; this.c.push(cc[0], cc[1], cc[2]);
      if (uv) this.u.push(uv[k][0], uv[k][1]); else this.u.push(k === 1 || k === 2 ? 1 : 0, k >= 2 ? 1 : 0);
    }
    this.i.push(i0, i0 + 1, i0 + 2, i0, i0 + 2, i0 + 3);
  }
  // axis-aligned box given by min/max; top gets topCol if provided
  box(x0, x1, y0, y1, z0, z1, col, topCol) {
    this.quad([x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1], col);
    this.quad([x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0], col);
    this.quad([x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1], col);
    this.quad([x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0], col);
    this.quad([x0, y1, z1], [x1, y1, z1], [x1, y1, z0], [x0, y1, z0], topCol || col);
  }
  // billboard record: 4 verts at the same point, normal.xy = half size, uv = corner
  bill(x, y, z, hw, hh, col) {
    const i0 = this.count;
    const U = [[0, 0], [1, 0], [1, 1], [0, 1]];
    for (let k = 0; k < 4; k++) { this.p.push(x, y, z); this.n.push(hw, hh, 0); this.c.push(col[0], col[1], col[2]); this.u.push(U[k][0], U[k][1]); }
    this.i.push(i0, i0 + 1, i0 + 2, i0, i0 + 2, i0 + 3);
  }
  // bake a THREE geometry; col is [r,g,b] or fn(localPos:Vector3)->[r,g,b]
  add(geo, m4, col) {
    const g = geo.index ? geo.toNonIndexed() : geo;
    const pos = g.attributes.position, nor = g.attributes.normal, uv = g.attributes.uv;
    const nm = new THREE.Matrix3().getNormalMatrix(m4);
    const v = new THREE.Vector3(), w = new THREE.Vector3();
    const i0 = this.count, fn = typeof col === 'function';
    for (let k = 0; k < pos.count; k++) {
      v.fromBufferAttribute(pos, k);
      const cc = fn ? col(v) : col;
      w.copy(v).applyMatrix4(m4); this.p.push(w.x, w.y, w.z);
      w.fromBufferAttribute(nor, k).applyMatrix3(nm).normalize(); this.n.push(w.x, w.y, w.z);
      this.c.push(cc[0], cc[1], cc[2]);
      if (uv) this.u.push(uv.getX(k), uv.getY(k)); else this.u.push(0, 0);
      this.i.push(i0 + k);
    }
    return this;
  }
  worldUV(s) { for (let k = 0, j = 0; k < this.p.length; k += 3, j += 2) { this.u[j] = this.p[k] * s; this.u[j + 1] = this.p[k + 2] * s; } return this; }
  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.p, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.n, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.c, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.u, 2));
    g.setIndex(this.i);
    g.computeBoundingSphere(); g.computeBoundingBox();
    return g;
  }
}

// beam between two points (thin cylinder)
const _up = new THREE.Vector3(0, 1, 0), _d = new THREE.Vector3();
const _cyl = {};
export function beam(batch, a, b, r, col, seg = 5) {
  _d.set(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
  const len = _d.length(); _d.normalize();
  const q = new THREE.Quaternion().setFromUnitVectors(_up, _d);
  const m = new THREE.Matrix4().compose(new THREE.Vector3((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2), q, new THREE.Vector3(r, len, r));
  const geo = _cyl[seg] || (_cyl[seg] = new THREE.CylinderGeometry(1, 1, 1, seg, 1, true));
  batch.add(geo, m, col);
}

export function canvasTex(w, h, draw, opts = {}) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d'); draw(g, w, h);
  const t = new THREE.CanvasTexture(c);
  if (opts.repeat !== false) { t.wrapS = t.wrapT = THREE.RepeatWrapping; }
  if (opts.srgb !== false) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = opts.aniso || 4;
  return t;
}

// Spatial hash of static colliders. layer: 0 = everyone, 1 = bridge deck only, 2 = river ice only
export class Colliders {
  constructor(cell = 24) { this.cell = cell; this.map = new Map(); this.stamp = 0; this.out = []; }
  _ins(c, x0, x1, z0, z1) {
    const s = this.cell;
    for (let ix = Math.floor(x0 / s); ix <= Math.floor(x1 / s); ix++)
      for (let iz = Math.floor(z0 / s); iz <= Math.floor(z1 / s); iz++) {
        const k = (ix + 512) * 2048 + (iz + 512);
        let a = this.map.get(k); if (!a) this.map.set(k, a = []); a.push(c);
      }
  }
  box(x0, x1, z0, z1, layer = 0) { const c = { t: 0, x0, x1, z0, z1, layer, s: 0 }; this._ins(c, x0, x1, z0, z1); return c; }
  circle(x, z, r, layer = 0) { const c = { t: 1, x, z, r, layer, s: 0 }; this._ins(c, x - r, x + r, z - r, z + r); return c; }
  query(x, z, r) {
    const s = this.cell, out = this.out; out.length = 0; const st = ++this.stamp;
    for (let ix = Math.floor((x - r) / s); ix <= Math.floor((x + r) / s); ix++)
      for (let iz = Math.floor((z - r) / s); iz <= Math.floor((z + r) / s); iz++) {
        const a = this.map.get((ix + 512) * 2048 + (iz + 512)); if (!a) continue;
        for (let k = 0; k < a.length; k++) { const c = a[k]; if (c.s !== st) { c.s = st; out.push(c); } }
      }
    return out;
  }
  // e: {x,z,vx,vz}. Pushes out of colliders, kills normal velocity. Returns impact speed.
  resolve(e, r, lay, rest = 0.2) {
    let hit = 0; const list = this.query(e.x, e.z, r + 0.2);
    for (let k = 0; k < list.length; k++) {
      const c = list[k]; if (c.layer && c.layer !== lay) continue;
      let nx, nz, pen;
      if (c.t === 0) {
        const px = clamp(e.x, c.x0, c.x1), pz = clamp(e.z, c.z0, c.z1);
        const dx = e.x - px, dz = e.z - pz, d2 = dx * dx + dz * dz;
        if (d2 > r * r) continue;
        if (d2 > 1e-8) { const d = Math.sqrt(d2); nx = dx / d; nz = dz / d; pen = r - d; }
        else {
          const l = e.x - c.x0, rr = c.x1 - e.x, t = e.z - c.z0, b = c.z1 - e.z, m = Math.min(l, rr, t, b);
          if (m === l) { nx = -1; nz = 0; pen = l + r; } else if (m === rr) { nx = 1; nz = 0; pen = rr + r; }
          else if (m === t) { nx = 0; nz = -1; pen = t + r; } else { nx = 0; nz = 1; pen = b + r; }
        }
      } else {
        const dx = e.x - c.x, dz = e.z - c.z, d2 = dx * dx + dz * dz, rr = r + c.r;
        if (d2 > rr * rr) continue;
        const d = Math.sqrt(d2) || 1e-4; nx = dx / d; nz = dz / d; pen = rr - d;
      }
      e.x += nx * pen; e.z += nz * pen;
      const vn = e.vx * nx + e.vz * nz;
      if (vn < 0) { e.vx -= vn * nx * (1 + rest); e.vz -= vn * nz * (1 + rest); if (-vn > hit) hit = -vn; }
    }
    return hit;
  }
  near(x, z, r) {
    const list = this.query(x, z, r);
    for (let k = 0; k < list.length; k++) {
      const c = list[k];
      if (c.t === 0) { const dx = x - clamp(x, c.x0, c.x1), dz = z - clamp(z, c.z0, c.z1); if (dx * dx + dz * dz < r * r) return true; }
      else if (Math.hypot(x - c.x, z - c.z) < r + c.r) return true;
    }
    return false;
  }
  blocked(x, z) {
    const list = this.query(x, z, 0.1);
    for (let k = 0; k < list.length; k++) { const c = list[k]; if (c.t === 0 && !c.layer && x > c.x0 && x < c.x1 && z > c.z0 && z < c.z1) return true; }
    return false;
  }
}
