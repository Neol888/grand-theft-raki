import * as THREE from 'three';
import { clamp, angDiff, damp, rng, Batch, M } from './util.js';
import { Post } from './post.js';
import { buildWorld, POI, LANDMARKS, surface, isRoad, bankH, glowScale, BOUND_X, BOUND_Z, RX, RZ } from './world.js';
import { makeRak, animRak, nameSprite } from './raki.js';
import { Car, NODES, nearestNode, placeTraffic, driveTraffic } from './cars.js';
import { Snow, Spray, Tracks, DynGlow, Marker } from './fx.js';
import { Audio } from './audio.js';
import { RAKI, BY_ID, MISSIONS, ORDER, EXCUSES, AMBIENT, COUNTDOWN, FINALE, RANKS, QUIZ, TIPS, ENDING } from './data.js';

const $ = (id) => document.getElementById(id);
const isTouch = (window.matchMedia && matchMedia('(pointer: coarse)').matches) || 'ontouchstart' in window;
if (isTouch) document.body.classList.add('touch');
const QS = new URLSearchParams(location.search);
$('tip').textContent = TIPS[Math.floor(Math.random() * TIPS.length)];

// ---------- renderer / world ----------
const canvas = $('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, stencil: false, powerPreference: 'high-performance' });
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap; renderer.setClearColor(0x05070f);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(58, 1, 0.5, 1100);
const world = buildWorld(scene);
const post = new Post(renderer);
const snow = new Snow(scene, isTouch ? 3600 : 6500);
const spray = new Spray(scene), tracks = new Tracks(scene), dyn = new DynGlow(scene);
const markers = [new Marker(scene), new Marker(scene), new Marker(scene)];
const audio = new Audio();
const head = new THREE.SpotLight(0xfff0d8, 0, 80, 0.5, 0.8, 1.0); scene.add(head, head.target);

const beams = (() => {
  const b = new Batch(); for (const s of [-0.62, 0.62]) b.add(new THREE.ConeGeometry(1, 1, 12, 1, true), M(s, 0.72, 9.2, 2.0, 14, 2.0, 0, -Math.PI / 2), [0.42, 0.4, 0.32]);
  const cm = new THREE.Mesh(b.build(), world.cones.material); cm.renderOrder = 4; cm.frustumCulled = false;
  const p = new Batch(); p.quad([-4.5, 0.2, 26], [4.5, 0.2, 26], [4.5, 0.2, 2.4], [-4.5, 0.2, 2.4], [0.5, 0.47, 0.36]);
  const pm = new THREE.Mesh(p.build(), world.pools.material); pm.renderOrder = 2; pm.frustumCulled = false;
  const g = new THREE.Group(); g.add(cm, pm); return g;
})();
const raki = {};
for (const r of RAKI) { const m = makeRak(r.id); m.visible = false; scene.add(m); raki[r.id] = m; }
const avatars = (() => {
  const s = new THREE.Scene(); s.add(new THREE.HemisphereLight(0xcfdcff, 0x665544, 2.4)); const d = new THREE.DirectionalLight(0xfff0e0, 2.6); d.position.set(1.5, 2, 3); s.add(d);
  const cam = new THREE.PerspectiveCamera(30, 1, 0.1, 20); cam.position.set(0.45, 1.98, 3.0); cam.lookAt(0, 1.68, 0);
  renderer.setPixelRatio(1); renderer.setSize(128, 128, false); const out = {};
  for (const r of RAKI) {
    const m = raki[r.id]; s.add(m); m.visible = true; m.position.set(0, 0, 0); m.rotation.set(0, 0.3, 0);
    s.background = new THREE.Color(r.css).multiplyScalar(0.3).add(new THREE.Color(0x121a30));
    renderer.render(s, cam); out[r.id] = canvas.toDataURL('image/png'); scene.add(m); m.visible = false;
  }
  const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d'); g.fillStyle = '#2f7fe0'; g.fillRect(0, 0, 64, 64); g.font = '40px system-ui'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('⚡', 32, 35); out.beam = c.toDataURL();
  return out;
})();
const NC = { nikita: '#aab3cc', dima: '#8fa6dd', igor: '#f0f0f0' };

// ---------- state ----------
const S = { state: 'boot', t: 0, time: 0, left: 360, score: 0, pid: null, mode: 'car', car: null, cars: [], mods: [], npcs: [], sayQ: [], sayT: 0, mission: null, queue: [], nextM: 6, wanted: 0, caught: 0, busy: 0, modal: false,
  flags: {}, stats: { missions: 0, total: 0, cards: 0, feathers: 0, orchids: 0, bans: 0, stolen: 0 }, amb: 0, cd: 0, acc: 1, lastBump: 0, shake: 0, hudT: 0, placeT: 0, lastPlace: null };
const P = { x: 0, z: 0, y: 0, vx: 0, vz: 0, layer: 0, h: 0, vy: 0, walk: 0 };
const cam = { yaw: 0, off: 0, pitch: 0.26, manual: 9, pos: new THREE.Vector3(), init: false };
let rak = null, pname = '';

// ---------- quality ----------
const QL = [
  { scale: 2.0, msaa: 4, shadow: 2048, snow: 1.0, bloom: 5, mirror: true },
  { scale: 1.5, msaa: 0, shadow: 2048, snow: 0.85, bloom: 5, mirror: true },
  { scale: 1.2, msaa: 0, shadow: 1024, snow: 0.65, bloom: 5, mirror: true },
  { scale: 0.95, msaa: 0, shadow: 0, snow: 0.5, bloom: 4, mirror: true },
  { scale: 0.72, msaa: 0, shadow: 0, snow: 0.35, bloom: 4, mirror: false },
  { scale: 0.55, msaa: 0, shadow: 0, snow: 0.25, bloom: 0, mirror: false },
];
const QLT = [
  { scale: 2.0, msaa: 0, shadow: 1024, snow: 0.75, bloom: 5, mirror: true },
  { scale: 1.5, msaa: 0, shadow: 0, snow: 0.55, bloom: 4, mirror: true },
  { scale: 1.25, msaa: 0, shadow: 0, snow: 0.4, bloom: 4, mirror: false },
  { scale: 1.0, msaa: 0, shadow: 0, snow: 0.3, bloom: 3, mirror: false },
  { scale: 0.75, msaa: 0, shadow: 0, snow: 0.22, bloom: 0, mirror: false },
];
const QT = isTouch ? QLT : QL;
let ql = QS.has('q') ? clamp(+QS.get('q') || 0, 0, QT.length - 1) : (isTouch ? 1 : 0), rh = 720, qlSaid = false, upTried = false, good = 0;
const ql0 = ql;
function applyQuality() {
  const q = QT[ql], dpr = Math.min(window.devicePixelRatio || 1, q.scale);
  let w = innerWidth * dpr, h = innerHeight * dpr; const k = Math.min(1, Math.sqrt((isTouch ? 1.7e6 : 4.4e6) / (w * h)));
  w = Math.max(160, Math.round(w * k)); h = Math.max(160, Math.round(h * k)); rh = h;
  renderer.setPixelRatio(1); renderer.setSize(w, h, false);
  post.levels = q.bloom || 1; post.bloom = q.bloom > 0; post.setSize(w, h, q.msaa);
  const sh = world.moon.shadow;
  world.moon.castShadow = q.shadow > 0;
  if (q.shadow && sh.mapSize.x !== q.shadow) { sh.mapSize.set(q.shadow, q.shadow); if (sh.map) { sh.map.dispose(); sh.map = null; } }
  world.mirror.visible = world.bridgesM.visible = world.streaks.visible = q.mirror;
  snow.density(q.snow);
  const a = innerWidth / innerHeight; camera.aspect = a; baseFov = a >= 1.3 ? 58 : Math.min(88, 2 * Math.atan(Math.tan(29 * Math.PI / 180) * 1.3 / a) * 180 / Math.PI);
}
let baseFov = 58;
addEventListener('resize', () => applyQuality());
addEventListener('orientationchange', () => setTimeout(applyQuality, 250));

// ---------- chat ----------
const feed = $('feed'), plog = $('plog');
const esc = (s) => String(s).replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
const voiceHTML = (sec) => `<div class="voice"><div class="p">▶</div><div class="w"></div><div class="d">${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}</div><div class="u"></div></div>`;
function msgEl(from, body) {
  const me = from === S.pid, el = document.createElement('div'); el.className = 'msg' + (me ? ' me' : '') + (from === 'sys' ? ' sys' : '');
  if (from === 'sys') el.innerHTML = `<div class="b">${esc(body)}</div>`;
  else {
    const r = from === 'beam' ? { name: 'Beam Store 🤖', css: '#5db0ff' } : BY_ID[from];
    const content = typeof body === 'object' ? voiceHTML(body.voice) : esc(body).replace('@P', pname);
    el.innerHTML = (me ? '' : `<img src="${avatars[from]}" alt="">`) + `<div class="b">${me ? '' : `<div class="n" style="color:${NC[from] || r.css}">${r.name}</div>`}${content}</div>`;
  }
  return el;
}
function say(from, body) {
  const el = msgEl(from, body); feed.appendChild(el); while (feed.children.length > 5) feed.firstChild.remove();
  plog.appendChild(el.cloneNode(true)); plog.scrollTop = 1e9; setTimeout(() => el.remove(), 9600);
  audio.play(typeof body === 'object' ? 'voice' : 'msg');
}
const sayQ = (list) => { for (const m of list) S.sayQ.push(m); };
function showBig(a, b) { const e = $('big'); e.innerHTML = esc(a) + (b ? `<small>${esc(b)}</small>` : ''); e.classList.remove('show'); void e.offsetWidth; e.classList.add('show'); }
function addScore(n) { S.score = Math.max(0, S.score + n); $('score').textContent = S.score; }
let promptT = 0;
function prompt(t, sec = 0) { const e = $('prompt'); if (!t) { if (S.time > promptT) e.classList.add('hidden'); return; } e.textContent = t; e.classList.remove('hidden'); promptT = sec ? S.time + sec : 0; }
function openChoice(ch, cb) {
  S.modal = true; $('mtitle').textContent = ch.title; $('mtext').textContent = ch.text; const o = $('mopts'); o.innerHTML = '';
  ch.opts.forEach((op) => { const b = document.createElement('button'); b.textContent = op.label; b.onclick = () => { $('modal').classList.add('hidden'); S.modal = false; cb(op); }; o.appendChild(b); });
  $('modal').classList.remove('hidden');
}

// ---------- menu ----------
let sel = 0; try { sel = clamp(+(localStorage.getItem('gtr_sel') || 2), 0, RAKI.length - 1) || 0; } catch (e) { sel = 2; }
function buildMenu() {
  const strip = $('strip');
  RAKI.forEach((r, i) => { const im = document.createElement('img'); im.src = avatars[r.id]; im.alt = r.name; im.onclick = () => { audio.init(); select(i); }; strip.appendChild(im); });
  $('prev').onclick = () => { audio.init(); select((sel + RAKI.length - 1) % RAKI.length); };
  $('next').onclick = () => { audio.init(); select((sel + 1) % RAKI.length); };
  $('play').onclick = () => { audio.init(); startGame(); };
  $('hint').textContent = isTouch ? 'Левый палец — руль и газ · правый — камера · 🚪 выйти из машины · звук включится после касания' : 'WASD — ехать · Пробел — ручник · E — выйти / сесть · мышь с зажатой кнопкой — камера · T — чат · M — звук';
  select(sel);
}
function select(i) {
  sel = i; const r = RAKI[i];
  $('cname').textContent = r.name; $('ctag').textContent = r.tag; $('cdesc').textContent = r.desc; $('play').textContent = 'Играть за: ' + r.name;
  [...$('strip').children].forEach((c, k) => c.classList.toggle('on', k === i));
  for (const q of RAKI) raki[q.id].visible = q.id === r.id;
  const m = raki[r.id]; m.position.set(149.6, 0, -29); m.rotation.set(0, -Math.PI / 2, 0); m.userData.pop = 1; audio.play('tick');
}
function updateMenu(dt) {
  const r = raki[RAKI[sel].id], t = S.time; r.userData.pop = Math.max(0, (r.userData.pop || 0) - dt * 3);
  r.rotation.y = -Math.PI / 2 + Math.sin(t * 0.6) * 0.35 + r.userData.pop * 2.5; animRak(r, t, 0, (t % 5) < 1.4);
  const port = camera.aspect < 1, short = !port && innerHeight < 520, sh = short ? 1.9 : 0;
  camera.position.set(143.2 + Math.sin(t * 0.21) * 0.5 - (port ? 2.5 : 0), 1.5 + Math.sin(t * 0.3) * 0.12, -26.4 + Math.cos(t * 0.17) * 0.5);
  camera.lookAt(150.2 + 0.477 * sh, port ? 1.05 : short ? 1.25 : 0.8, -30.2 + 0.879 * sh); camera.fov = port ? 48 : short ? 30 : 36; camera.updateProjectionMatrix();
  for (const c of S.cars) if (c.ai) driveTraffic(c, dt, 1e5, 1e5);
  world.setShadowCenter(150, -30);
  dyn.begin(); carGlows(); npcGlow(r); dyn.end();
}

// ---------- collectibles ----------
const COL = [];
const colMesh = new THREE.InstancedMesh(new THREE.BoxGeometry(0.8, 1.1, 0.07), new THREE.MeshBasicMaterial(), 36);
colMesh.frustumCulled = false; scene.add(colMesh);
(function genCollectibles() {
  const R = rng(144), add = (x, z, type, y = 0) => { let n = 0; while (world.col.near(x, z, 1.8) && n++ < 40) x += 2.5; COL.push({ x, z, y, type, got: false }); };
  for (let i = 0; i < 12; i++) { const x = RX[(i * 3 + 1) % 8], z = -165 + R() * 330; add(x + (R() < 0.5 ? -3.3 : 3.3), RZ.some(r => Math.abs(r - z) < 9) ? z + 16 : z, 0); }
  for (let i = 0; i < 6; i++) { const z = RZ[(i * 2 + 1) % 7], s = i % 2 ? 1 : -1; add(s * (90 + R() * 170), z + (R() < 0.5 ? -3.3 : 3.3), 0); }
  add(0, -60, 0); add(-20, 120, 0);
  for (const [x, z] of [[175, 30], [-245, 30], [245, -90], [-105, -150]]) add(x, z, 0);
  for (const z of [-165, -112, -15, 42, 78, 168]) add(-28 + R() * 56, z, 1, -3);
  for (const [x, z] of [[103, -12], [-105, 106], [57, -128], [-57, 62], [-262, -137], [120, -134]]) add(x, z, 2);
  const cc = [new THREE.Color(3.0, 2.1, 0.5), new THREE.Color(1.6, 2.4, 3.0), new THREE.Color(3.0, 0.7, 2.2)];
  COL.forEach((c, i) => colMesh.setColorAt(i, cc[c.type]));
})();
const _m4 = new THREE.Matrix4(), _q = new THREE.Quaternion(), _v = new THREE.Vector3(), _sc = new THREE.Vector3(), _ax = new THREE.Vector3(0, 1, 0);
const CG = [[1.5, 1.0, 0.25], [0.7, 1.1, 1.5], [1.5, 0.3, 1.1]];
function updateCollectibles(play) {
  const t = S.time, rr = S.mode === 'car' ? 3.4 : 2.1;
  for (let i = 0; i < COL.length; i++) {
    const c = COL[i]; const y = c.y + 1.5 + Math.sin(t * 2 + i) * 0.25;
    _q.setFromAxisAngle(_ax, t * 2.2 + i); _v.set(c.x, y, c.z); _sc.setScalar(c.got ? 0.0001 : 1); _m4.compose(_v, _q, _sc); colMesh.setMatrixAt(i, _m4);
    if (c.got) continue;
    dyn.add(c.x, y, c.z, 3.0, CG[c.type][0], CG[c.type][1], CG[c.type][2]);
    if (play && Math.abs(P.x - c.x) < rr && Math.abs(P.z - c.z) < rr && Math.abs(P.y - c.y) < 2.6) collect(c);
  }
  colMesh.instanceMatrix.needsUpdate = true;
}
function collect(c) {
  c.got = true; audio.play('pick'); spray.burst(c.x, c.y + 1.5, c.z, 14, 6, 0.7, CG[c.type][0], CG[c.type][1], CG[c.type][2]);
  const st = S.stats;
  if (c.type === 0) {
    st.cards += 6; addScore(30);
    if (st.cards === 6 && S.pid !== 'igor') sayQ([['igor', 'Мне 144 карточки в рдр надо найти'], ['geisler', 'До выхода гта 6 ?'], ['igor', 'Ага']]);
    if (st.cards === 72) sayQ([['igor', 'Неделю ебучих птиц собирал😓 Настало время ахуенных карточек)']]);
    if (st.cards % 144 === 0) { S.acc++; addScore(500); showBig('144 из 144', '+500 · и всё заново'); sayQ([['igor', 'У меня новый аккаунт и мне надо закрыть рдр на 100% на нем))'], ['artem', 'Пока ее Игорь пройдёт на 100% несколько раз)']]); for (const k of COL) if (k.type === 0) k.got = false; }
  } else if (c.type === 1) { st.feathers++; addScore(120); if (st.feathers === 6) sayQ([['igor', 'Самое пиздец что я собрал все перья цапель'], ['geisler', 'А зачем второй раз?)😅']]); }
  else { st.orchids++; addScore(120); if (st.orchids === 6) sayQ([['geisler', 'Ты их уже находил, но просто не помнишь куда сложил)']]); }
  $('coll').textContent = `🃏 ${st.cards % 144 || (st.cards ? 144 : 0)}/144${S.acc > 1 ? ' (акк №' + S.acc + ')' : ''} · 🪶 ${st.feathers}/6 · 🌸 ${st.orchids}/6`;
}

// ---------- cars ----------
const CARCOL = [0x8a2a2a, 0x2a4a8a, 0x6a6f78, 0x1f2a36, 0xcfd3da, 0x2f6a4a, 0x7a5a2a, 0x3a3a3a, 0x8a8f2a, 0x5a2a6a];
for (let i = 0; i < 11; i++) {
  const van = i % 5 === 4, c = new Car(scene, 0, 0, 0, van ? 0xe0b020 : CARCOL[i % CARCOL.length], van ? 'van' : 'sedan');
  const from = (i * 17 + 3) % NODES.length, nb = NODES[from].nb; placeTraffic(c, from, nb[i % nb.length]); S.cars.push(c);
}
function carGlows() {
  const cx = camera.position.x, cz = camera.position.z;
  for (const c of S.cars) {
    const e = c.e; if (Math.abs(e.x - cx) > 190 || Math.abs(e.z - cz) > 190) continue;
    const fx = Math.sin(c.h), fz = Math.cos(c.h), rx = -fz, rz = fx, on = c.ai || c === S.car ? 1 : 0.25;
    for (const s of [-0.62, 0.62]) {
      dyn.add(e.x + fx * 2.25 + rx * s, e.y + 0.74, e.z + fz * 2.25 + rz * s, 2.1, 1.7 * on, 1.6 * on, 1.25 * on);
      dyn.add(e.x - fx * 2.25 + rx * s, e.y + 0.76, e.z - fz * 2.25 + rz * s, 1.3, 1.5 * on, 0.1 * on, 0.06 * on);
    }
    if (c.kind === 'mod') { const b = (S.time * 7 | 0) % 2; dyn.add(e.x, e.y + 2.0, e.z, 7, b ? 0.3 : 2.6, 0.2, b ? 3.0 : 0.3); }
  }
}
function npcGlow(r) { const g = r.userData.glow; if (g) dyn.add(r.position.x, r.position.y + g.y, r.position.z, g.s, g.c[0], g.c[1], g.c[2]); }

// ---------- input ----------
const keys = {}; let stickId = null, stickX = 0, stickY = 0, sx0 = 0, sy0 = 0, lookId = null, lx = 0, ly = 0, handHeld = false;
addEventListener('keydown', (e) => {
  keys[e.code] = true; if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.code)) e.preventDefault();
  if (e.repeat) return; audio.init();
  if (S.state === 'menu') { if (e.code === 'ArrowLeft' || e.code === 'KeyA') $('prev').onclick(); else if (e.code === 'ArrowRight' || e.code === 'KeyD') $('next').onclick(); else if (e.code === 'Enter' || e.code === 'Space') startGame(); return; }
  if (S.state !== 'play') return;
  if (e.code === 'KeyE' || e.code === 'KeyF' || e.code === 'Enter') action(); else if (e.code === 'KeyT' || e.code === 'Tab') togglePhone(); else if (e.code === 'KeyM') toggleMute();
});
addEventListener('keyup', (e) => { keys[e.code] = false; });
addEventListener('blur', () => { for (const k in keys) keys[k] = false; });
addEventListener('contextmenu', (e) => e.preventDefault());
addEventListener('gesturestart', (e) => e.preventDefault());
document.addEventListener('visibilitychange', () => { const c = audio.ctx; if (!c) return; if (document.hidden) c.suspend(); else c.resume(); last = performance.now(); });
canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault(); setTimeout(() => location.reload(), 400); });
const stickEl = $('stick'), knob = $('knob');
canvas.addEventListener('pointerdown', (e) => {
  audio.init(); if (S.state !== 'play') return;
  if (e.pointerType !== 'mouse' && e.clientX < innerWidth * 0.5 && stickId === null) {
    stickId = e.pointerId; sx0 = e.clientX; sy0 = e.clientY; stickEl.style.left = (sx0 - 64) + 'px'; stickEl.style.top = (sy0 - 64) + 'px'; stickEl.style.bottom = 'auto';
  } else if (lookId === null) { lookId = e.pointerId; lx = e.clientX; ly = e.clientY; }
  try { canvas.setPointerCapture(e.pointerId); } catch (er) { /* ignore */ }
});
canvas.addEventListener('pointermove', (e) => {
  if (e.pointerId === stickId) {
    let dx = (e.clientX - sx0) / 52, dy = (e.clientY - sy0) / 52; const l = Math.hypot(dx, dy); if (l > 1) { dx /= l; dy /= l; }
    stickX = dx; stickY = dy; knob.style.transform = `translate(${dx * 40}px,${dy * 40}px)`;
  } else if (e.pointerId === lookId) {
    const d = (e.clientX - lx) * 0.006; if (S.mode === 'car') cam.off = clamp(cam.off + d, -2.8, 2.8); else cam.yaw += d;
    cam.pitch = clamp(cam.pitch + (e.clientY - ly) * 0.004, 0.04, 0.95); lx = e.clientX; ly = e.clientY; cam.manual = 0;
  }
});
const pUp = (e) => { if (e.pointerId === stickId) { stickId = null; stickX = stickY = 0; knob.style.transform = ''; } if (e.pointerId === lookId) lookId = null; };
canvas.addEventListener('pointerup', pUp); canvas.addEventListener('pointercancel', pUp);
const tap = (el, fn) => el.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); audio.init(); fn(); });
tap($('bAct'), () => action());
$('bHand').addEventListener('pointerdown', (e) => { e.preventDefault(); handHeld = true; $('bHand').classList.add('on'); });
for (const ev of ['pointerup', 'pointercancel', 'pointerleave']) $('bHand').addEventListener(ev, () => { handHeld = false; $('bHand').classList.remove('on'); });
tap($('bPhone'), () => togglePhone()); tap($('bMute'), () => toggleMute()); tap($('pclose'), () => togglePhone());
function togglePhone() { $('phone').classList.toggle('hidden'); plog.scrollTop = 1e9; }
function toggleMute() { audio.setMuted(!audio.muted); $('bMute').textContent = audio.muted ? '🔇' : '🔊'; }
function controls() {
  let thr = 0, st = 0;
  if (keys.KeyW || keys.ArrowUp) thr += 1; if (keys.KeyS || keys.ArrowDown) thr -= 1; if (keys.KeyD || keys.ArrowRight) st += 1; if (keys.KeyA || keys.ArrowLeft) st -= 1;
  if (stickId !== null) { st = Math.abs(stickX) > 0.12 ? stickX : 0; thr = Math.abs(stickY) > 0.15 ? -stickY : 0; }
  if (S.modal || S.busy > 0) return { thr: 0, st: 0, hand: true };
  return { thr, st, hand: !!keys.Space || handHeld };
}

// ---------- game start ----------
function startGame() {
  if (S.state !== 'menu') return;
  const r = RAKI[sel]; S.pid = r.id; pname = r.name; try { localStorage.setItem('gtr_sel', sel); } catch (e) { /* ignore */ }
  $('fade').style.opacity = 1;
  setTimeout(() => {
    $('menu').classList.add('hidden'); $('hud').classList.remove('hidden');
    rak = raki[r.id]; rak.visible = false; rak.rotation.set(0, 0, 0);
    for (const q of RAKI) if (q.id !== r.id) {
      const m = raki[q.id], [x, z] = POI[q.id]; m.visible = true; m.position.set(x, 0.15, z); m.rotation.set(0, Math.atan2(140 - x, 0 - z), 0);
      m.add(nameSprite(q.name, NC[q.id] || q.css)); world.col.circle(x, z, 0.55);
      S.npcs.push({ id: q.id, x, z, rak: m, cool: 3 + Math.random() * 6, talk: 0 });
    }
    const car = new Car(scene, POI.start[0], POI.start[1], Math.PI, new THREE.Color(r.css).multiplyScalar(0.8).getHex(), 'sedan'); S.cars.push(car); S.car = car; S.mode = 'car'; car.g.add(beams);
    P.x = car.e.x; P.z = car.e.z; cam.yaw = Math.PI; cam.init = false;
    S.queue = ORDER.filter(id => id !== S.pid); S.stats.total = S.queue.length;
    S.state = 'play'; S.t = 0; grace = 4; bad = 0; applyQuality(); $('fade').style.opacity = 0;
    showBig('23:54', 'До релиза шесть минут');
    prompt(isTouch ? 'Левый палец — руль и газ · правый — камера' : 'WASD — ехать · Пробел — ручник · E — выйти из машины', 7);
    if (QS.has('t')) S.left = +QS.get('t');
  }, 520);
}

// ---------- player ----------
const wl = [0, 0, 0, 0, 0, 0, false];
function updatePlayer(dt) {
  const ctl = controls(); if (S.busy > 0) S.busy -= dt;
  if (S.mode === 'car') {
    const c = S.car, hit = c.drive(dt, ctl.thr, ctl.st, ctl.hand, world.col), e = c.e;
    if (hit > 5 && S.t - S.lastBump > 0.3) { audio.play('bump'); S.lastBump = S.t; S.shake = Math.min(1, hit / 22); spray.burst(e.x, e.y + 0.6, e.z, 12, 6, 0.5, 1.6, 1.2, 0.7); }
    for (const o of S.cars) {
      if (o === c) continue; const dx = e.x - o.e.x, dz = e.z - o.e.z, d = Math.hypot(dx, dz);
      if (d < 3.1 && d > 0.01 && Math.abs(e.y - o.e.y) < 1.5) {
        const nx = dx / d, nz = dz / d; e.x += nx * (3.1 - d); e.z += nz * (3.1 - d); const vn = e.vx * nx + e.vz * nz;
        if (vn < 0) { e.vx -= vn * nx * 1.4; e.vz -= vn * nz * 1.4; if (vn < -4 && S.t - S.lastBump > 0.4) { audio.play('bump'); S.lastBump = S.t; S.shake = 0.5; if (o.ai && o.ai.type === 'traffic') { o.stun = 1.5; audio.play('honk'); } } }
      }
    }
    c.sync(); P.x = e.x; P.z = e.z; P.y = e.y; P.layer = e.layer; P.h = c.h;
    // tyre tracks + snow spray
    const fx = Math.sin(c.h), fz = Math.cos(c.h), rx = -fz, rz = fx, sp = c.speed, air = c.vy !== 0;
    const gy = e.layer === 2 ? e.y + 0.04 : isRoad(e.x, e.z) ? 0.035 : 0.19;
    const ax = e.x - fx * 1.35 - rx * 0.9, az = e.z - fz * 1.35 - rz * 0.9, bx = e.x - fx * 1.35 + rx * 0.9, bz = e.z - fz * 1.35 + rz * 0.9;
    if (wl[6] && !air) {
      const d = Math.hypot(ax - wl[0], az - wl[2]);
      if (d > 4) wl[6] = false;
      else if (d > 0.7) { tracks.seg(wl[0], wl[1], wl[2], ax, gy, az, 0.16); tracks.seg(wl[3], wl[4], wl[5], bx, gy, bz, 0.16); wl[0] = ax; wl[1] = gy; wl[2] = az; wl[3] = bx; wl[4] = gy; wl[5] = bz; }
    }
    if (!wl[6] && !air) { wl[0] = ax; wl[1] = gy; wl[2] = az; wl[3] = bx; wl[4] = gy; wl[5] = bz; wl[6] = true; }
    if (!air && sp > 5) {
      const n = c.slip > 4 ? 3 : (Math.random() < sp / 26 ? 1 : 0);
      for (let i = 0; i < n; i++) { const s = Math.random() < 0.5 ? -0.9 : 0.9; spray.emit(e.x - fx * 1.5 + rx * s, e.y + 0.15, e.z - fz * 1.5 + rz * s, -fx * 2 + (Math.random() - 0.5) * 4 + e.vx * 0.3, 1.5 + Math.random() * 2.5, -fz * 2 + (Math.random() - 0.5) * 4 + e.vz * 0.3, 0.6, 0.2, 0.24, 0.34); }
    }
    head.intensity += (26 - head.intensity) * damp(5, dt);
    head.position.set(e.x + fx * 1.6, e.y + 1.0, e.z + fz * 1.6); head.target.position.set(e.x + fx * 22, e.y - 1.2, e.z + fz * 22); head.target.updateMatrixWorld();
    snow.u.uCar.value.set(e.x + fx * 2, e.y + 0.8, e.z + fz * 2); snow.u.uCarDir.value.set(fx, -0.02, fz); snow.u.uHead.value = 1; prompt('');
  } else {
    const len = Math.hypot(ctl.st, ctl.thr);
    if (len > 0.1) {
      const fx = Math.sin(cam.yaw), fz = Math.cos(cam.yaw); let mx = fx * ctl.thr - fz * ctl.st, mz = fz * ctl.thr + fx * ctl.st; const l = Math.hypot(mx, mz); mx /= l; mz /= l;
      const sp = 7.4 * Math.min(1, len); P.vx += (mx * sp - P.vx) * damp(12, dt); P.vz += (mz * sp - P.vz) * damp(12, dt); P.h += angDiff(P.h, Math.atan2(mx, mz)) * damp(12, dt);
    } else { P.vx -= P.vx * damp(10, dt); P.vz -= P.vz * damp(10, dt); }
    P.x += P.vx * dt; P.z += P.vz * dt; world.col.resolve(P, 0.45, P.layer, 0);
    for (const o of S.cars) { const dx = P.x - o.e.x, dz = P.z - o.e.z, d = Math.hypot(dx, dz); if (d < 2.0 && d > 0.01 && Math.abs(P.y - o.e.y) < 1.5) { P.x += dx / d * (2.0 - d); P.z += dz / d * (2.0 - d); } }
    P.x = clamp(P.x, -BOUND_X, BOUND_X); P.z = clamp(P.z, -BOUND_Z, BOUND_Z);
    const gh = surface(P);
    if (P.vy > 0 || P.y > gh + 0.3) { P.vy -= 26 * dt; P.y += P.vy * dt; if (P.y <= gh) { P.y = gh; P.vy = 0; } } else P.y += (gh - P.y) * damp(14, dt);
    P.walk = clamp(Math.hypot(P.vx, P.vz) / 7, 0, 1);
    rak.position.set(P.x, P.y + (P.layer === 0 && !isRoad(P.x, P.z) ? 0.15 : 0), P.z); rak.rotation.set(P.vy !== 0 ? S.time * 10 : 0, P.h, 0); animRak(rak, S.time, P.walk, false);
    head.intensity += (0 - head.intensity) * damp(5, dt); snow.u.uHead.value = 0;
    const near = nearestCar(5); prompt(near ? (isTouch ? 'Жми 🚗, чтобы сесть' + (near.ai ? ' (угон!)' : '') : 'E — сесть в машину' + (near.ai ? ' (угон!)' : '')) : '');
    $('bAct').textContent = near ? '🚗' : '🦀';
  }
  // anomalies
  for (const a of world.anomalies) {
    if (Math.hypot(P.x - a.x, P.z - a.z) < a.r + (S.mode === 'car' ? 1.2 : 0.3) && P.y < 2 && S.t - (S.zapT || 0) > 1.2) {
      S.zapT = S.t; audio.play('zap'); S.shake = 1; post.mFinal.uniforms.uFlash.value = 0.5; spray.burst(a.x, 2, a.z, 40, 10, 0.9, 0.6, 2.2, 1.2);
      const ang = Math.atan2(P.x - a.x, P.z - a.z) + (Math.random() - 0.5);
      if (S.mode === 'car') { S.car.e.vx = Math.sin(ang) * 16; S.car.e.vz = Math.cos(ang) * 16; S.car.launch(13); } else { P.vx = Math.sin(ang) * 13; P.vz = Math.cos(ang) * 13; P.vy = 12; P.y += 0.4; }
      if (!S.flags.zap) { S.flags.zap = 1; sayQ([['kos', 'Я же сказал: в аномалии не лезь'], ['dima', 'Это не баг. Это новая реальность)']]); }
    }
  }
}
function nearestCar(r) { let b = null, bd = r; for (const c of S.cars) { if (c.kind === 'mod') continue; const d = Math.hypot(c.e.x - P.x, c.e.z - P.z); if (d < bd && Math.abs(c.e.y - P.y) < 2) { bd = d; b = c; } } return b; }
function action() {
  if (S.state !== 'play' || S.modal) return;
  if (S.mode === 'car') {
    const c = S.car; if (c.speed > 9) { prompt('Сначала притормози', 1.4); return; }
    let lx2 = Math.cos(c.h), lz2 = -Math.sin(c.h); if (world.col.near(c.e.x + lx2 * 2, c.e.z + lz2 * 2, 0.5)) { lx2 = -lx2; lz2 = -lz2; }
    P.x = c.e.x + lx2 * 2; P.z = c.e.z + lz2 * 2; P.y = c.e.y; P.vx = P.vz = 0; P.h = c.h; c.e.vx = c.e.vz = 0; c.vf = 0;
    S.mode = 'foot'; rak.visible = true; cam.yaw += cam.off; cam.off = 0; audio.play('door');
  } else {
    const c = nearestCar(5); if (!c) return;
    if (c.ai) {
      c.ai = null; c.stun = 0; S.stats.stolen++; addScore(60); showBig('УГОН', '+60 · теперь ты как типы');
      if (S.stats.stolen === 1) sayQ([['sys', 'Сигналка орёт голосом Макса. Никто не слушает'], ['max', { voice: 23 }]]);
      startWanted(15);
    }
    c.maxSpeed = c.kind === 'van' ? 31 : 38; S.car = c; c.g.add(beams); S.mode = 'car'; rak.visible = false; prompt(''); $('bAct').textContent = '🚪'; audio.play('door'); wl[6] = false;
  }
}

// ---------- NPC ----------
let speakT = 0;
function updateNPCs(dt) {
  for (const n of S.npcs) {
    const d = Math.hypot(P.x - n.x, P.z - n.z); n.cool -= dt; n.talk -= dt;
    if (d < 90) {
      animRak(n.rak, S.time, 0, n.talk > 0); npcGlow(n.rak);
      if (d < 16) n.rak.rotation.y += angDiff(n.rak.rotation.y, Math.atan2(P.x - n.x, P.z - n.z)) * damp(5, dt);
      if (d < 7.5 && n.cool <= 0 && S.time > speakT) {
        const q = BY_ID[n.id].quotes; n.cool = 14; n.talk = 3.2; speakT = S.time + 3.4;
        const e = $('speak'); e.innerHTML = `<b>${BY_ID[n.id].name}:</b> ${esc(q[Math.floor(Math.random() * q.length)])}`; e.style.opacity = 1; setTimeout(() => { e.style.opacity = 0; }, 3200);
      }
    }
  }
}

// ---------- wanted: PlayStation moderators ----------
function startWanted(sec) {
  S.wanted = Math.max(S.wanted, sec); $('wanted').classList.remove('hidden');
  let tries = 0;
  while (S.mods.length < 2 && tries++ < 80) {
    const ni = nearestNode(P.x + (Math.random() - 0.5) * 200, P.z + (Math.random() - 0.5) * 200, 0), nd = NODES[ni];
    const d = Math.hypot(nd.x - P.x, nd.z - P.z); if (d < 55 || d > 190) continue;
    const m = new Car(scene, nd.x, nd.z, Math.atan2(P.x - nd.x, P.z - nd.z), 0xe8eef8, 'mod'); m.ai = { type: 'mod', stuck: 0, rev: 0 }; m.maxSpeed = 28; S.mods.push(m); S.cars.push(m);
  }
}
function endWanted(escaped) {
  S.wanted = 0; S.caught = 0; $('wanted').classList.add('hidden');
  for (const m of S.mods) { scene.remove(m.g); S.cars.splice(S.cars.indexOf(m), 1); } S.mods.length = 0;
  if (escaped) { addScore(150); showBig('ОТОРВАЛСЯ', '+150'); if (!S.flags.esc) { S.flags.esc = 1; sayQ([['geisler', 'Меня удивляет почему пс до сих пор эту лавочку не прикрыли))']]); } }
}
function updateWanted(dt) {
  if (S.wanted <= 0) return;
  S.wanted -= dt; $('wt').textContent = Math.ceil(S.wanted) + ' с'; let close = false;
  for (const m of S.mods) {
    const e = m.e, dx = P.x - e.x, dz = P.z - e.z, d = Math.hypot(dx, dz), diff = angDiff(m.h, Math.atan2(dx, dz));
    let st = clamp(-diff * 2.2, -1, 1), thr = 1;
    if (m.ai.rev > 0) { m.ai.rev -= dt; thr = -1; st = -st; } else { if (m.speed < 1.5) m.ai.stuck += dt; else m.ai.stuck = 0; if (m.ai.stuck > 1.1) { m.ai.rev = 0.9; m.ai.stuck = 0; } }
    if (Math.abs(diff) > 1.2 && m.speed > 12) thr = -0.4;
    if (S.modal) { thr = 0; st = 0; }
    m.drive(dt, thr, st, false, world.col); m.sync(); m.barMat.color.setHex((S.time * 7 | 0) % 2 ? 0x2244ff : 0xff2233);
    if (d < 5.2 && Math.abs(P.y - e.y) < 2) close = true;
    if (d > 240) { const ni = nearestNode(P.x, P.z, 70, 150); if (ni >= 0) { e.x = NODES[ni].x; e.z = NODES[ni].z; e.y = 0; e.vx = e.vz = 0; } }
  }
  S.caught = close ? S.caught + dt : Math.max(0, S.caught - dt * 0.5);
  if (S.caught > 1.0 && !S.modal) {
    S.stats.bans++; audio.play('bad'); S.shake = 1; const q = QUIZ[Math.floor(Math.random() * QUIZ.length)];
    if (S.mode === 'car') { S.car.e.vx = S.car.e.vz = 0; }
    openChoice({ title: '🚨 БАН! Вопрос от модератора', text: q[0], opts: [{ label: q[1] }, { label: q[2] }] }, () => {
      sayQ([['arkasha', 'Все так, только наоборот'], ['sys', 'Бан: −8 секунд и −150 очков']]); S.left = Math.max(3, S.left - 8); addScore(-150); S.busy = 0.4; endWanted(false);
    });
    S.caught = 0;
  } else if (S.wanted <= 0 && !S.modal) endWanted(true);
}

// ---------- missions ----------
function startMission(id) {
  const def = MISSIONS[id]; S.mission = { id, def, steps: def.steps.slice(), si: -1, t0: S.t, bonus: 0, pts: [] };
  sayQ(def.intro); S.introHold = S.t + def.intro.length * 1.15; nextStep();
}
function resolvePts(st) {
  if (st.raki) { const ids = ['arkasha', 'max', 'igor', 'pasha', 'nikita', 'geisler'].filter(i => i !== S.pid).slice(0, st.raki); return ids.map(i => ({ x: POI[i][0], z: POI[i][1], who: i, done: false })); }
  return st.pts.map(k => ({ x: POI[k][0], z: POI[k][1], done: false }));
}
function nextStep() {
  const M = S.mission; M.si++;
  if (M.si >= M.steps.length) return finishMission();
  const st = M.steps[M.si];
  if (st.choice) { M.pts = []; openChoice(st.choice, (op) => { if (op.say) sayQ(op.say); if (op.bonus) M.bonus += op.bonus; if (op.flag) S.flags[op.flag] = 1; if (op.add) M.steps.splice(M.si + 1, 0, ...op.add); nextStep(); }); return; }
  M.pts = resolvePts(st); $('objtext').textContent = st.text; audio.play('step');
}
function finishMission() {
  const M = S.mission, tb = Math.max(0, Math.round((M.def.par - (S.t - M.t0)) * 8)), total = M.def.reward + M.bonus + tb;
  addScore(total); S.stats.missions++; showBig('✔ ' + M.def.title, `+${total}` + (tb ? ` · за скорость +${tb}` : '')); audio.play('win'); sayQ(M.def.outro);
  S.mission = null; S.nextM = S.t + 4.5; markers.forEach(m => m.hide());
  $('objtext').textContent = S.queue.length ? 'Жди сообщений в чате' : 'Поручения кончились. Собирай карточки Игоря'; $('dist').textContent = '';
}
function updateMission(dt) {
  if (!S.mission) { if (S.queue.length && S.t > S.nextM && !S.sayQ.length) startMission(S.queue.shift()); return; }
  const M = S.mission, st = M.steps[M.si]; if (!st || st.choice) return;
  let left = 0, bd = 1e9, bp = null, mi = 0;
  for (const p of M.pts) {
    if (p.done) continue; const d = Math.hypot(P.x - p.x, P.z - p.z);
    const okFoot = !st.foot || S.mode === 'foot';
    if (d < (st.r || 7.5) && okFoot) {
      p.done = true; audio.play('step'); spray.burst(p.x, 1.5, p.z, 24, 7, 0.8, 2.2, 1.6, 0.4);
      if (p.who) { say(p.who, EXCUSES[p.who] || 'Я пас'); const n = S.npcs.find(q => q.id === p.who); if (n) n.talk = 3; }
      if (st.each) { const k = M.pts.filter(q => q.done).length; say('sys', st.each + [34, 61, 97][k - 1] + '%'); }
      continue;
    }
    if (st.foot && S.mode === 'car' && d < 60) prompt('В Зону только пешком: выйди из машины', 0.3);
    left++; if (d < bd) { bd = d; bp = p; }
    if (mi < 3) { const e = { x: p.x, z: p.z, y: 0 }; markers[mi++].set(p.x, surface(e), p.z, st.foot ? 0x7dff5d : 0xffc83d); }
  }
  for (; mi < 3; mi++) markers[mi].hide();
  if (!left) { if (st.say) sayQ(st.say); if (st.wanted) startWanted(st.wanted); nextStep(); return; }
  S.target = bp; S.targetD = bd;
}

// ---------- HUD ----------
const mapBg = document.createElement('canvas'); mapBg.width = 1200; mapBg.height = 800; world.drawMap(mapBg.getContext('2d'), 2);
const mapG = $('map').getContext('2d');
function drawMap() {
  const g = mapG, k = 300 / 420; g.setTransform(1, 0, 0, 1, 0, 0); g.fillStyle = '#0a0e1a'; g.fillRect(0, 0, 300, 300);
  g.setTransform(k, 0, 0, k, 150 - (P.x + 300) * 2 * k, 150 - (P.z + 200) * 2 * k); g.drawImage(mapBg, 0, 0);
  const dot = (x, z, r, c) => { g.fillStyle = c; g.beginPath(); g.arc((x + 300) * 2, (z + 200) * 2, r, 0, 7); g.fill(); };
  for (const c of COL) if (!c.got) dot(c.x, c.z, 5, c.type === 0 ? '#ffd24a' : c.type === 1 ? '#9fe0ff' : '#ff6ad5');
  for (const m of S.mods) dot(m.e.x, m.e.z, 9, (S.time * 6 | 0) % 2 ? '#4a7dff' : '#ff4a5a');
  g.setTransform(1, 0, 0, 1, 0, 0);
  if (S.mission) for (const p of S.mission.pts) {
    if (p.done) continue; let mx = (p.x - P.x) * 2 * k, mz = (p.z - P.z) * 2 * k; const l = Math.hypot(mx, mz); if (l > 138) { mx *= 138 / l; mz *= 138 / l; }
    g.fillStyle = '#ffc83d'; g.strokeStyle = '#000'; g.lineWidth = 3; g.beginPath(); g.arc(150 + mx, 150 + mz, 10 + Math.sin(S.time * 5) * 2, 0, 7); g.fill(); g.stroke();
  }
  g.translate(150, 150); g.rotate(-P.h); g.fillStyle = '#fff'; g.strokeStyle = '#ff3d8a'; g.lineWidth = 4; g.beginPath(); g.moveTo(0, 14); g.lineTo(9, -10); g.lineTo(0, -5); g.lineTo(-9, -10); g.closePath(); g.fill(); g.stroke();
  g.setTransform(1, 0, 0, 1, 0, 0);
}
let lastSec = -1;
function updateHUD(dt) {
  const sec = Math.max(0, Math.ceil(S.left));
  if (sec !== lastSec) {
    lastSec = sec; const t = $('timer'); t.textContent = String(Math.floor(sec / 60)).padStart(2, '0') + ':' + String(sec % 60).padStart(2, '0'); t.classList.toggle('hot', sec <= 30);
    if (sec <= 10 && sec > 0) audio.play('tick');
  }
  S.hudT -= dt; if (S.hudT > 0) return; S.hudT = 0.1;
  drawMap();
  if (S.mission && S.target && S.mission.pts.length) {
    $('dist').textContent = '· ' + Math.round(S.targetD) + ' м';
    const rel = angDiff(cam.yaw + (S.mode === 'car' ? cam.off : 0), Math.atan2(S.target.x - P.x, S.target.z - P.z)); $('arrow').style.transform = `rotate(${-rel}rad)`;
  }
  S.placeT -= 0.1;
  for (const L of LANDMARKS) if (Math.hypot(P.x - L.x, P.z - L.z) < L.r && S.lastPlace !== L && S.placeT <= 0) { S.lastPlace = L; S.placeT = 6; const e = $('place'); e.textContent = L.name; e.style.opacity = 1; setTimeout(() => { e.style.opacity = 0; }, 3500); }
}

// ---------- camera ----------
function updateCamera(dt) {
  let tx, ty, tz, dist; cam.manual += dt;
  if (S.mode === 'car') {
    const c = S.car, sp = c.speed; tx = c.e.x; ty = c.e.y + 1.25; tz = c.e.z; dist = 8.4 + sp * 0.085;
    if (cam.manual > 1.6 && lookId === null) cam.off -= cam.off * damp(2.2, dt);
    cam.yaw += angDiff(cam.yaw, c.h) * damp(3.4 + sp * 0.06, dt);
    camera.fov = baseFov + clamp(sp * 0.26, 0, 9);
  } else {
    tx = P.x; ty = P.y + 1.55; tz = P.z; dist = 6.4; camera.fov = baseFov;
    if (cam.manual > 2.2 && P.walk > 0.3 && lookId === null) cam.yaw += angDiff(cam.yaw, P.h) * damp(1.1, dt);
  }
  const yaw = cam.yaw + (S.mode === 'car' ? cam.off : 0), cp = Math.cos(cam.pitch), spp = Math.sin(cam.pitch), fx = Math.sin(yaw), fz = Math.cos(yaw);
  let k = 1;
  for (let i = 1; i <= 7; i++) { const f = i / 7; if (world.col.blocked(tx - fx * dist * cp * f, tz - fz * dist * cp * f)) { k = Math.max(0.16, (i - 1) / 7); break; } }
  const cx = tx - fx * dist * cp * k, cz = tz - fz * dist * cp * k, cy = ty + 0.7 + dist * spp * (0.55 + 0.45 * k) + (1 - k) * 5;
  if (!cam.init) { cam.pos.set(cx, cy, cz); cam.init = true; } else { const a = damp(10, dt); cam.pos.x += (cx - cam.pos.x) * a; cam.pos.y += (cy - cam.pos.y) * a; cam.pos.z += (cz - cam.pos.z) * a; }
  cam.pos.y = Math.max(cam.pos.y, bankH(Math.abs(cam.pos.x)) + 0.7);
  S.shake = Math.max(0, S.shake - dt * 3);
  camera.position.set(cam.pos.x + (Math.random() - 0.5) * S.shake * 0.5, cam.pos.y + (Math.random() - 0.5) * S.shake * 0.5, cam.pos.z);
  camera.lookAt(tx + fx * 3, ty + 0.5, tz + fz * 3);
  const fc = window.__gtr.free; if (fc) { camera.position.set(fc[0], fc[1], fc[2]); camera.lookAt(fc[3], fc[4], fc[5]); }
  camera.updateProjectionMatrix();
}

// ---------- play loop ----------
function updatePlay(dt) {
  S.t += dt; S.left -= dt;
  updatePlayer(dt);
  for (const c of S.cars) if (c.ai && c.ai.type === 'traffic') driveTraffic(c, dt, P.x, P.z);
  dyn.begin();
  updateWanted(dt); updateNPCs(dt); updateMission(dt); updateCollectibles(true); carGlows();
  if (world.fire) { const f = world.fire, fl = 0.7 + Math.random() * 0.5; dyn.add(f[0], f[1], f[2], 4.5 * fl, 2.4 * fl, 0.9 * fl, 0.2); if (Math.random() < 0.3) spray.emit(f[0], f[1], f[2], (Math.random() - 0.5) * 1.5, 3 + Math.random() * 3, (Math.random() - 0.5) * 1.5, 1.2, 2.5, 0.9, 0.2); }
  if (S.mission && S.mission.id === 'kos' && S.mission.si <= 1) { const a = POI.artifact; dyn.add(a[0], 1.4 + Math.sin(S.time * 3) * 0.2, a[1], 5, 2.6, 1.3, 0.2); }
  for (const tw of world.towers) dyn.add(tw.x, tw.h + 0.6, tw.z, 4, (S.time * 2 | 0) % 2 ? 2.2 : 0.3, 0.2, 0.15);
  dyn.end();
  // chat pacing
  S.sayT -= dt; if (S.sayQ.length && S.sayT <= 0) { const m = S.sayQ.shift(); say(m[0], m[1]); S.sayT = 1.15; }
  while (S.amb < AMBIENT.length && AMBIENT[S.amb][0] <= S.t) { const a = AMBIENT[S.amb++]; if (!(a[1] === 'kos' && S.flags.witcher && a[2] === 'На Сергея столик')) S.sayQ.push([a[1], a[2]]); }
  while (S.cd < COUNTDOWN.length && S.left <= COUNTDOWN[S.cd][0]) { const c = COUNTDOWN[S.cd++]; if (S.left > c[0] - 3) S.sayQ.push(['arkasha', c[1]]); }
  if (S.left < 150 && !S.flags.delay) { S.flags.delay = 1; S.left += 15; sayQ([['pasha', 'Перенесли!'], ['sys', 'Релиз перенесли на 15 секунд. +15 сек'], ['pasha', 'Ну обещают без переносов']]); showBig('ПЕРЕНОС', '+15 секунд'); }
  if (qlDropped && !qlSaid) { qlSaid = true; sayQ([['sanya', 'Пришлось оперативки докупить, чтобы графика норм была😅'], ['sys', 'Графика понижена: так плавнее']]); }
  audio.intensity += ((S.left < 60 ? 1 : S.wanted > 0 ? 0.85 : 0.5) - audio.intensity) * damp(1, dt);
  world.setShadowCenter(P.x, P.z);
  updateCamera(dt); updateHUD(dt);
  if (S.left <= 0) finale();
}

// ---------- finale ----------
let fin = null;
function finale() {
  S.state = 'final'; audio.play('bell'); audio.intensity = 1; $('hud').classList.add('hidden'); $('modal').classList.add('hidden'); $('phone').classList.add('hidden'); $('final').classList.remove('hidden');
  post.mFinal.uniforms.uFlash.value = 1; if (rak) rak.visible = false; head.intensity = 0; snow.u.uHead.value = 0; markers.forEach(m => m.hide());
  const st = S.stats; let rank = RANKS[0]; for (const r of RANKS) if (S.score >= r[0]) rank = r;
  let best = 0; try { best = +(localStorage.getItem('gtr_best') || 0); if (S.score > best) localStorage.setItem('gtr_best', S.score); } catch (e) { /* ignore */ }
  fin = { t: 0, i: 0, fw: 0, rank, best };
  const url = location.origin + location.pathname;
  const text = `🦀 Grand Theft Raki: Новосибирск\nИграл за: ${pname}\nСчёт: ${S.score} — звание ${rank[1]}\nПоручений: ${st.missions}/${st.total} · карточек Игоря: ${st.cards} из 144 · банов от модераторов: ${st.bans}\n${url}`;
  $('frank').textContent = rank[1]; $('fscore').textContent = S.score + ' очк.'; $('fnote').innerHTML = esc(rank[2]) + '<br><i>' + esc(ENDING[S.pid] || '') + '</i>';
  $('fstats').innerHTML = `Играл за: <b>${esc(pname)}</b> · поручений ${st.missions}/${st.total}<br>карточки ${st.cards}/144 · перья ${st.feathers}/6 · орхидеи ${st.orchids}/6 · угонов ${st.stolen} · банов ${st.bans}` + (best ? `<br>прошлый рекорд на этом устройстве: ${best}` : '');
  $('fcopy').onclick = async () => {
    let ok = false; try { await navigator.clipboard.writeText(text); ok = true; } catch (e) { /* fallback below */ }
    if (!ok) { const ta = document.createElement('textarea'); ta.value = text; ta.style.cssText = 'position:fixed;left:0;top:0;opacity:0'; document.body.appendChild(ta); ta.focus(); ta.select(); try { ok = document.execCommand('copy'); } catch (e) { ok = false; } ta.remove(); }
    if (ok) $('fcopy').textContent = 'Скопировано ✔ вставляй в чат';
    else { $('fstats').innerHTML = `<textarea readonly style="width:100%;height:120px;font:13px system-ui;background:#111a2a;color:#fff;border:1px solid #445;border-radius:10px;padding:8px;-webkit-user-select:text;user-select:text">${esc(text)}</textarea>`; $('fcopy').textContent = 'Выдели и скопируй текст выше'; }
  };
  $('fagain').onclick = () => location.reload();
}
function updateFinal(dt) {
  fin.t += dt; const u = post.mFinal.uniforms; u.uFlash.value = Math.max(0, u.uFlash.value - dt * 1.2);
  const a = fin.t * 0.12 + 2.6; camera.fov = baseFov; camera.position.set(176 + Math.cos(a) * 60, 22 + Math.min(fin.t, 30) * 0.7, -30 + Math.sin(a) * 60); camera.lookAt(178, 14, -30); camera.updateProjectionMatrix();
  world.setShadowCenter(176, -30);
  fin.fw -= dt; if (fin.fw <= 0 && fin.t < 40) {
    fin.fw = 0.35 + Math.random() * 0.5; const c = [[3, 0.4, 1.6], [0.4, 2.4, 3], [3, 2.2, 0.4], [0.6, 3, 1], [3, 0.6, 0.4]][Math.floor(Math.random() * 5)];
    spray.burst(150 + Math.random() * 60, 34 + Math.random() * 22, -60 + Math.random() * 60, 60, 13, 1.7, c[0], c[1], c[2]); if (Math.random() < 0.6) audio.play('boom');
  }
  for (const c of S.cars) if (c.ai && c.ai.type === 'traffic') driveTraffic(c, dt, 1e5, 1e5);
  dyn.begin(); carGlows(); updateCollectibles(false); dyn.end();
  if (fin.i < FINALE.length && fin.t > 1.6 + fin.i * 0.95) { const m = FINALE[fin.i++], fc = $('fchat'); fc.appendChild(msgEl(m[0], m[1])); while (fc.children.length > 3) fc.firstChild.remove(); audio.play('msg'); }
  if (fin.i >= FINALE.length && fin.t > 2.6 + FINALE.length * 0.95 && $('fcard').classList.contains('hidden')) { $('fcard').classList.remove('hidden'); audio.play('win'); }
}

// ---------- main loop ----------
let bad = 0, last = performance.now(), fAcc = 0, fN = 0, grace = 4, qlDropped = false, started = false;
function tick(dt) { if (S.state === 'play') updatePlay(dt); else if (S.state === 'menu') updateMenu(dt); else if (S.state === 'final') updateFinal(dt); }
function frame(now) {
  requestAnimationFrame(frame);
  const raw = (now - last) / 1000; last = now; const dt = Math.min(0.05, Math.max(0.001, raw)); S.time += dt;
  try {
    tick(dt); draw(dt);
  } catch (err) { $('err').textContent = String(err && err.stack || err).slice(0, 400); }
  // adaptive quality
  if (raw < 0.5) { grace -= raw; if (grace <= 0) { fAcc += raw; fN++; if (fAcc > 1.6) { const fps = fN / fAcc; fAcc = 0; fN = 0; if (QS.has('fps')) $('err').textContent = fps.toFixed(0) + ' fps · q' + ql; if (fps < (isTouch ? 27 : 43) && !document.hidden) bad++; else bad = 0; good = fps > 56 ? good + 1 : 0;
      if (bad >= 2 && ql < QT.length - 1 && !QS.has('q')) { bad = 0; ql++; if (ql > ql0) qlDropped = true; upTried = true; grace = 2.5; applyQuality(); }
      else if (isTouch && good >= 3 && ql > 0 && !upTried && !QS.has('q') && S.state === 'play') { upTried = true; good = 0; ql--; grace = 3; applyQuality(); } } } }
  if (!started) { started = true; $('loading').style.opacity = 0; setTimeout(() => $('loading').classList.add('hidden'), 650); }
}
function draw(dt) {
  {
    const u = post.mFinal.uniforms; if (S.state !== 'final') u.uFlash.value = Math.max(0, u.uFlash.value - dt * 2);
    glowScale.value = rh / (2 * Math.tan(camera.fov * Math.PI / 360));
    world.update(dt, S.time, camera); snow.u.uTime.value = S.time; snow.u.uCam.value.copy(camera.position); spray.update(S.time); markers.forEach(m => m.update(S.time));
    audio.tick(S.state === 'play' && S.mode === 'car' ? clamp(S.car.speed / 32, 0, 1) : 0, S.state === 'play' && S.mode === 'car' ? S.car.slip : 0, S.state === 'play' && S.mode === 'car', S.wanted > 0);
    post.render(scene, camera, S.time);
  }
}
applyQuality(); buildMenu(); S.state = 'menu'; $('menu').classList.remove('hidden');
window.__gtr = { S, P, cam, world, post, QL: QT, setQ: (n) => { ql = n; applyQuality(); }, finale, startMission, COL, action, startWanted, audio, step: (n, dt = 1 / 30) => { for (let i = 0; i < n; i++) { S.time += dt; tick(dt); } draw(dt); } };
requestAnimationFrame(frame);
