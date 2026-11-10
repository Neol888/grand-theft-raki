// Весь звук процедурный: WebAudio, без файлов. Мелодии свои, жанры — стилизация под характер рака.
const N = (m) => 440 * Math.pow(2, (m - 69) / 12);
const SC = { maj: [0, 2, 4, 5, 7, 9, 11], min: [0, 2, 3, 5, 7, 8, 10], dor: [0, 2, 3, 5, 7, 9, 10], hmin: [0, 2, 3, 5, 7, 8, 11], phr: [0, 1, 3, 5, 7, 8, 10] };
const dg = (root, sc, d) => { const s = SC[sc], o = Math.floor(d / 7); return root + s[((d % 7) + 7) % 7] + 12 * o; };
const DCH = '0123456789abcde';
const dv = (c) => (c === 'z' ? -1 : c === 'y' ? -2 : c === 'x' ? -3 : DCH.indexOf(c));

// Тема: bpm (ударов в минуту), sb (шагов на удар), steps (шагов в такте), root (MIDI), sc (лад),
// prog (аккорды по тактам: ступень или [ступень, лад]), d (ударные), b (бас), c (аккорды), a (арпеджио), l (мелодия).
// В строках-паттернах: «.» пауза, «-» держать ноту, цифра/буква — ступень.
export const THEMES = {
  arkasha: { name: 'Свинг в бабочке', bpm: 132, sb: 4, steps: 16, sw8: 0.6, root: 50, sc: 'dor', seven: 1, g: 0.92, rv: 0.2,
    prog: [0, 3, 0, [4, 'hmin']],
    d: { h: 'x...x.x.x...x.x.', k: 'x.......x.......', b: '....x.......x...' },
    b: { i: 'walk', p: '0...2...4...6...', o: 2 },
    c: { i: 'organ', p: '......x.......x.', len: 2, o: 1 },
    l: { i: 'vibe', o: 1, bars: ['4...7...6.4.....', '3...6...4.3.....', '4...7...9.7.6...', '4.......2.0.....'] } },
  max: { name: 'Фонк на ринге', bpm: 138, sb: 4, steps: 16, root: 52, sc: 'phr', g: 1.0, rv: 0.12,
    prog: [0, 0, 5, 6],
    d: { k: 'x.....x...x.....', c: '....x.......x...', h: 'x.x.x.x.x.x.xxxx' },
    b: { i: '808', p: '0-----0---0--7--', o: 1 },
    c: { i: 'pad', p: 'x...............', len: 16, o: 1, v: 0.5 },
    l: { i: 'cowbell', o: 1, bars: ['7.7.5.7.....4.5.', '7.7.5.7...8.7.5.', '5.5.4.5.....2.4.', '6.6.5.6...7...4.'] } },
  dima: { name: 'Синтвейв 11.1.4', bpm: 104, sb: 4, steps: 16, root: 50, sc: 'min', g: 0.64, rv: 0.3,
    prog: [0, 5, 2, 6],
    d: { k: 'x...x...x...x...', s: '....x.......x...', h: '..x...x...x...x.' },
    b: { i: 'pluck', p: '0.0.0.0.0.0.0.7.', o: 2 },
    c: { i: 'pad', p: 'x...............', len: 16, o: 1 },
    a: { i: 'pluck', p: '0123012301230123', o: 1, v: 0.5 },
    l: { i: 'saw', o: 1, bars: ['7---....6.4-....', '5---....4.2-....', '4---..5.7---....', '6---..4.2---....'] } },
  igor: { name: 'Вестерн, четвёртое прохождение', bpm: 96, sb: 4, steps: 16, root: 57, sc: 'dor', g: 1.12, rv: 0.34,
    prog: [0, 0, 6, 3, 0, 0, 6, 0],
    d: { r: 'x..x..x.x..x..x.', sh: 'x.x.x.x.x.x.x.x.', k: 'x.......x.......' },
    b: { i: 'walk', p: '0.......4.......', o: 2 },
    c: { i: 'strum', p: '....x.......x...', len: 4, o: 1 },
    l: { i: 'twang', o: 0, i2: 'whistle', o2: 1, bars: ['0.....2.4...7...', '6...4.......2.4.', '6.....4.2...4...', '0-----......z.0.', '7---....9.7.6...', '4---........6.7.', '6.....7.6.4.2...', '0-------........'] } },
  geisler: { name: 'Клавесин через Мегафон', bpm: 112, sb: 4, steps: 16, root: 55, sc: 'min', g: 1.5, rv: 0.3, fx: 'modem',
    prog: [0, 3, 6, 2, 5, 3, [4, 'hmin'], 0],
    d: { k: 'x.......x.......', h: '....x.......x...' },
    b: { i: 'harpsi', p: '0.......0...4...', o: 2 },
    a: { i: 'harpsi', p: '0212021202120212', o: 0, v: 0.8 },
    l: { i: 'harpsi', o: 1, rel: 1, bars: ['7.....6.4...2...', '4.....2.0...z...'] } },
  pasha: { name: 'Золотой вальс', bpm: 168, sb: 4, steps: 12, root: 62, sc: 'maj', g: 1.7, rv: 0.36,
    prog: [0, 0, 1, 4, 0, 5, 1, 4],
    d: { tr: 'x...........' },
    b: { i: 'walk', p: '0-..........', o: 2, v: 1.6 },
    c: { i: 'pizz', p: '....x...x...', len: 2, o: 0, v: 1.8 },
    l: { i: 'glock', o: 1, v: 0.75, bars: ['4---....7...', '9---....7...', '8---....6...', '4-------....', '4---....7...', 'b---....9...', '8...6...4...', '7-------....'] } },
  nikita: { name: 'Чиптюн из третьей игры', bpm: 150, sb: 4, steps: 16, root: 60, sc: 'maj', g: 0.72, rv: 0.06,
    prog: [0, 4, 5, 3],
    d: { k: 'x...x...x...x...', s: '....x.......x...', h: 'x.x.x.x.x.x.x.x.' },
    b: { i: 'chip', p: '0.0.7.0.0.0.7.0.', o: 1 },
    a: { i: 'chip', p: '0123012301230123', o: 1, v: 0.45 },
    l: { i: 'square', o: 1, bars: ['4.4.7...9.7.4...', '4.4.6...8.6.4...', '2.2.5...7.5.2...', '3.5.7.9.7...5...'] } },
  kos: { name: 'Зона. Треск — это нормально', bpm: 64, sb: 4, steps: 16, root: 48, sc: 'phr', g: 0.68, rv: 0.6, fx: 'geiger',
    prog: [0, 0, 5, 4],
    d: { k: 'x..x............' },
    b: { i: 'sub', p: '0---------------', o: 1, v: 0.45 },
    c: { i: 'drone', p: 'x...............', len: 16, o: 1 },
    l: { i: 'bell', o: 1, v: 1.7, bars: ['....7.......4...', '........2.......', '....5.......7...', '........4.....3.'] } },
  artem: { name: 'Пиратская джига', bpm: 104, sb: 6, steps: 12, root: 62, sc: 'min', g: 0.8, rv: 0.22,
    prog: [0, 6, 0, [4, 'hmin']],
    d: { k: 'x.....x.....', c: '...x.....x..', sh: 'x.x.x.x.x.x.' },
    b: { i: 'walk', p: '0-....4-....', o: 2 },
    c: { i: 'reed', p: 'x...........', len: 12, o: 0 },
    l: { i: 'fiddle', o: 1, bars: ['0.2.4.7.4.2.', '6.4.2.4.2.z.', '0.2.4.7.9.7.', '6.4.z.0-....'] } },
  sanya: { name: 'Лоу-фай, начало тягомотное', bpm: 72, sb: 4, steps: 16, sw16: 0.28, root: 53, sc: 'maj', seven: 1, g: 0.72, rv: 0.3, lp: 5200, fx: 'vinyl',
    prog: [0, 2, 1, 4],
    d: { k: 'x.....x...x.....', s: '....x.......x...', h: 'x.x.x.x.x.x.x.x.' },
    b: { i: 'sub', p: '0-----0---4-----', o: 1, v: 0.6 },
    c: { i: 'rhodes', p: 'x.......x.......', len: 7, o: 1 },
    l: { i: 'vibe', o: 1, bars: ['....4...7.....6.', '....4.......2...', '....3...5.....4.', '....2...........'] } },
  misha: { name: 'Укулеле у костра', bpm: 116, sb: 4, steps: 16, root: 60, sc: 'maj', g: 1.0, rv: 0.2,
    prog: [0, 3, 0, 4],
    d: { k: 'x.......x.......', sh: 'x.x.x.x.x.x.x.x.', c: '....x.......x...' },
    b: { i: 'walk', p: '0.......4.......', o: 2 },
    c: { i: 'strum', p: 'x..x.xx.x..x.xx.', len: 2, o: 1, v: 0.7 },
    l: { i: 'whistle', o: 1, bars: ['4...4.6.7...4...', '5...5.7.8...5...', '4...4.6.7.9.7...', '6...4...2.......'] } },
};

function impulse(c, sec) {
  const n = Math.floor(c.sampleRate * sec), b = c.createBuffer(2, n, c.sampleRate);
  for (let ch = 0; ch < 2; ch++) { const d = b.getChannelData(ch); for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 2.8); }
  return b;
}

// Синтезатор и секвенсор. Не знает про игру: ему дают контекст и выход, поэтому его можно отрендерить офлайн.
export class Music {
  constructor(c, out) {
    this.c = c; this.th = null; this.id = null; this.step = 0; this.next = 0; this.sd = 0.1; this.drive = 0; this.rush = 0;
    this.sum = c.createGain(); this.trim = c.createGain(); this.tone = c.createBiquadFilter(); this.tone.type = 'lowpass'; this.tone.frequency.value = 16000;
    this.air = c.createBiquadFilter(); this.air.type = 'highshelf'; this.air.frequency.value = 2800; this.air.gain.value = 5;
    this.sum.connect(this.air); this.air.connect(this.tone); this.tone.connect(this.trim); this.trim.connect(out);
    this.rev = c.createConvolver(); this.rev.buffer = impulse(c, 2.0); this.revIn = c.createGain(); this.revIn.connect(this.rev); this.revOut = c.createGain(); this.rev.connect(this.revOut); this.revOut.connect(this.sum);
    this.dry = c.createGain(); this.dry.connect(this.sum);
    this.w1 = c.createGain(); this.w1.connect(this.sum); this.s1 = c.createGain(); this.s1.gain.value = 0.28; this.w1.connect(this.s1); this.s1.connect(this.revIn);
    this.w2 = c.createGain(); this.w2.connect(this.sum); this.s2 = c.createGain(); this.s2.gain.value = 0.7; this.w2.connect(this.s2); this.s2.connect(this.revIn);
    const nb = c.createBuffer(1, c.sampleRate * 2, c.sampleRate), d = nb.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; this.noise = nb;
  }
  _dest(w, pan) { const b = w === 2 ? this.w2 : w === 1 ? this.w1 : this.dry; if (!pan || !this.c.createStereoPanner) return b; const p = this.c.createStereoPanner(); p.pan.value = pan; p.connect(b); return p; }
  // нота осциллятора с огибающей
  _o(type, f, t, d, v, o = {}) {
    const c = this.c, os = c.createOscillator(), g = c.createGain(), a = o.a || 0.004;
    os.type = type;
    if (o.from) { os.frequency.setValueAtTime(f * o.from, t); os.frequency.exponentialRampToValueAtTime(f, t + (o.st || 0.05)); }
    else { os.frequency.setValueAtTime(f, t); if (o.to) os.frequency.exponentialRampToValueAtTime(o.to, t + (o.st || d)); }
    if (o.det) os.detune.value = o.det;
    if (o.vib) { const l = c.createOscillator(), lg = c.createGain(); l.frequency.value = o.vib; lg.gain.setValueAtTime(0, t); lg.gain.linearRampToValueAtTime(f * 0.011, t + Math.min(0.3, d * 0.6)); l.connect(lg); lg.connect(os.frequency); l.start(t); l.stop(t + d + 0.2); }
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(v, t + a);
    if (o.sus) { const r = Math.min(o.rel || 0.08, d * 0.5); g.gain.setValueAtTime(v, t + Math.max(a, d - r)); g.gain.linearRampToValueAtTime(0.0001, t + d + 0.01); }
    else g.gain.exponentialRampToValueAtTime(0.0001, t + a + d);
    let n = os;
    if (o.lp) { const fl = c.createBiquadFilter(); fl.type = o.ft || 'lowpass'; fl.frequency.setValueAtTime(o.lp, t); if (o.lpTo) fl.frequency.exponentialRampToValueAtTime(o.lpTo, t + (o.lt || d)); fl.Q.value = o.q || 0.7; os.connect(fl); n = fl; }
    n.connect(g); g.connect(this._dest(o.w, o.pan)); os.start(t); os.stop(t + d + a + 0.06);
  }
  // шумовой удар через фильтр
  _n(t, d, v, type, f, o = {}) {
    const c = this.c, s = c.createBufferSource(), fl = c.createBiquadFilter(), g = c.createGain(), a = o.a || 0.001;
    s.buffer = this.noise; fl.type = type; fl.frequency.value = f; fl.Q.value = o.q || 0.7;
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(v, t + a); g.gain.exponentialRampToValueAtTime(0.0001, t + a + d);
    s.connect(fl); fl.connect(g); g.connect(this._dest(o.w, o.pan)); s.start(t, Math.random() * 1.5); s.stop(t + d + a + 0.05);
  }
  drum(k, t, v) {
    if (k === 'k') { this._o('sine', 165, t, 0.26, v * 0.9, { to: 46, st: 0.11 }); this._o('triangle', 330, t, 0.06, v * 0.3, { to: 95, st: 0.05 }); this._n(t, 0.012, v * 0.25, 'highpass', 2600); }
    else if (k === 's') { this._n(t, 0.16, v * 0.7, 'bandpass', 2200, { q: 0.5, w: 1 }); this._o('triangle', 215, t, 0.085, v * 0.4, { to: 150 }); }
    else if (k === 'h') this._n(t, 0.035, v * 0.42, 'highpass', 7600, { pan: 0.25 });
    else if (k === 'o') this._n(t, 0.2, v * 0.32, 'highpass', 7000, { pan: 0.25 });
    else if (k === 'c') { for (let i = 0; i < 3; i++) this._n(t + i * 0.011, 0.02, v * 0.35, 'bandpass', 1350, { q: 0.9 }); this._n(t + 0.033, 0.12, v * 0.5, 'bandpass', 1350, { q: 0.9, w: 1 }); }
    else if (k === 'r') { this._o('triangle', 1180, t, 0.03, v * 0.45, { to: 820, w: 1, pan: -0.3 }); this._n(t, 0.018, v * 0.2, 'bandpass', 2400, { q: 2 }); }
    else if (k === 'sh') this._n(t, 0.05, v * 0.3, 'bandpass', 6200, { q: 0.8, a: 0.012, pan: -0.25 });
    else if (k === 'b') this._n(t, 0.12, v * 0.45, 'bandpass', 3600, { q: 0.4, a: 0.02, w: 1 });
    else if (k === 'tr') { this._o('sine', 2637, t, 0.9, v * 0.12, { w: 2, pan: 0.4 }); this._o('sine', 5290, t, 0.5, v * 0.05, { w: 2, pan: 0.4 }); }
  }
  bass(i, t, f, d, v) {
    if (i === '808') { this._o('sine', f, t, d * 1.1, v * 0.8, { from: 1.8, st: 0.045 }); this._o('square', f * 2, t, d * 0.8, v * 0.3, { lp: 1400, lpTo: 400 }); this._o('sawtooth', f * 3, t, d * 0.4, v * 0.1, { lp: 2000 }); }
    else if (i === 'sub') { this._o('sine', f, t, d, v * 0.5, { sus: 1, rel: 0.1, a: 0.02 }); this._o('triangle', f * 2, t, d, v * 0.4, { sus: 1, rel: 0.1, a: 0.02 }); this._o('sawtooth', f * 2, t, d, v * 0.16, { lp: 900, sus: 1, rel: 0.1, a: 0.02 }); }
    else if (i === 'pluck') { this._o('sawtooth', f, t, Math.min(d, 0.32), v * 0.8, { lp: 1500, lpTo: 230, q: 2 }); this._o('square', f * 2, t, 0.12, v * 0.16, { lp: 1200 }); }
    else if (i === 'walk') { this._o('triangle', f, t, Math.min(d, 0.42), v * 0.8, {}); this._o('sine', f * 2, t, 0.24, v * 0.4, {}); this._o('sawtooth', f * 2, t, 0.14, v * 0.16, { lp: 1400 }); }
    else if (i === 'chip') { this._o('square', f, t, Math.min(d, 0.14), v * 0.5, { sus: 1, rel: 0.02 }); this._o('square', f * 2, t, 0.06, v * 0.14, { sus: 1, rel: 0.02 }); }
    else if (i === 'harpsi') { this._o('sawtooth', f, t, 0.5, v * 0.6, { lp: 2600, lpTo: 500 }); this._o('square', f * 2, t, 0.2, v * 0.25, { lp: 3000 }); }
  }
  chord(i, t, ms, d, v) {
    const n = ms.length;
    ms.forEach((m, k) => {
      const f = N(m), pan = n > 1 ? (k / (n - 1) - 0.5) * 0.7 : 0;
      if (i === 'pad') { this._o('sawtooth', f, t, d, v * 0.16, { det: -9, lp: 1900, sus: 1, a: Math.min(0.5, d * 0.3), rel: 0.4, w: 2, pan }); this._o('sawtooth', f, t, d, v * 0.16, { det: 9, lp: 1900, sus: 1, a: Math.min(0.5, d * 0.3), rel: 0.4, w: 2, pan: -pan }); }
      else if (i === 'drone') { this._o('sawtooth', f, t, d, v * 0.2, { det: -6, lp: 700, sus: 1, a: d * 0.4, rel: d * 0.4, w: 2, pan }); this._o('sine', f * 2, t, d, v * 0.12, { sus: 1, a: d * 0.45, rel: d * 0.4, w: 2, pan: -pan, vib: 0.3 }); }
      else if (i === 'organ') { this._o('sine', f, t, d, v * 0.24, { sus: 1, rel: 0.03, w: 1, pan }); this._o('sine', f * 2, t, d, v * 0.14, { sus: 1, rel: 0.03, w: 1, pan }); this._o('sine', f * 3, t, d, v * 0.08, { sus: 1, rel: 0.03, w: 1, pan }); }
      else if (i === 'rhodes') { this._o('sine', f, t, d * 1.2, v * 0.34, { w: 1, pan, a: 0.008 }); this._o('sine', f * 4, t, d * 0.3, v * 0.08, { w: 1, pan }); this._o('triangle', f * 2, t, d * 0.6, v * 0.12, { w: 1, pan }); }
      else if (i === 'pizz') { this._o('triangle', f, t, 0.2, v * 0.3, { w: 2, pan }); this._o('sine', f * 2, t, 0.1, v * 0.1, { w: 2, pan }); }
      else if (i === 'reed') { this._o('square', f, t, d, v * 0.07, { det: -7, lp: 2300, sus: 1, a: 0.04, rel: 0.08, w: 1, pan, vib: 5.5 }); this._o('sawtooth', f, t, d, v * 0.08, { det: 7, lp: 2300, sus: 1, a: 0.04, rel: 0.08, w: 1, pan: -pan }); }
      else if (i === 'strum') this.lead('uke', t + k * 0.014, f, 0.45, v * 0.5, pan);
    });
  }
  lead(i, t, f, d, v, pan = 0.12) {
    if (i === 'saw') { this._o('sawtooth', f, t, d, v * 0.25, { det: -8, lp: 3800, q: 1, sus: 1, rel: 0.1, a: 0.02, vib: 5.5, w: 2, pan }); this._o('sawtooth', f, t, d, v * 0.25, { det: 8, lp: 3800, q: 1, sus: 1, rel: 0.1, a: 0.02, w: 2, pan: -pan }); }
    else if (i === 'vibe' || i === 'bell' || i === 'glock') { const k = i === 'glock' ? 2 : 1; this._o('sine', f * k, t, d * 1.6 + 0.4, v * (i === 'glock' ? 0.3 : 0.5), { w: 2, pan }); this._o('sine', f * k * 4, t, d * 0.5 + 0.1, v * 0.1, { w: 2, pan }); if (i !== 'vibe') this._o('sine', f * k * 6.8, t, 0.12, v * 0.035, { w: 2, pan }); }
    else if (i === 'twang') { this._o('sawtooth', f, t, 0.6, v * 0.55, { from: 1.025, st: 0.07, lp: 3400, lpTo: 520, q: 4, lt: 0.35, w: 2, pan }); this._o('square', f, t, 0.25, v * 0.08, { lp: 1800, w: 2, pan }); }
    else if (i === 'whistle') { this._o('sine', f, t, d, v * 0.42, { sus: 1, a: 0.05, rel: 0.1, vib: 5.3, w: 2, pan }); this._o('sine', f * 2, t, d, v * 0.06, { sus: 1, a: 0.05, rel: 0.1, w: 2, pan }); this._n(t, d, v * 0.02, 'bandpass', f * 2, { q: 3, a: 0.04, w: 2 }); }
    else if (i === 'square') { this._o('square', f, t, d, v * 0.16, { sus: 1, rel: 0.02, pan }); this._o('square', f * 2, t, d, v * 0.04, { sus: 1, rel: 0.02, pan: -pan }); }
    else if (i === 'cowbell') { this._o('square', f, t, 0.24, v * 0.34, { lp: 2600, ft: 'bandpass', q: 1.6, w: 1, pan }); this._o('square', f * 1.504, t, 0.2, v * 0.24, { lp: 2600, ft: 'bandpass', q: 1.6, w: 1, pan }); }
    else if (i === 'fiddle') this._o('sawtooth', f, t, d, v * 0.34, { lp: 3900, q: 1.2, sus: 1, a: 0.03, rel: 0.05, vib: 6, w: 1, pan });
    else if (i === 'harpsi') { this._o('sawtooth', f, t, 0.42, v * 0.38, { lp: 6000, lpTo: 1100, w: 1, pan }); this._o('square', f * 2, t, 0.16, v * 0.14, { lp: 7000, w: 1, pan }); }
    else if (i === 'uke') { this._o('triangle', f, t, d, v * 0.5, { w: 1, pan }); this._o('sawtooth', f, t, d * 0.5, v * 0.22, { lp: 3600, lpTo: 800, w: 1, pan }); }
    else if (i === 'pluck' || i === 'chip') this._o(i === 'chip' ? 'square' : 'sawtooth', f, t, 0.16, v * (i === 'chip' ? 0.1 : 0.22), i === 'chip' ? { sus: 1, rel: 0.02, pan } : { lp: 2400, lpTo: 500, q: 2, w: 1, pan });
  }
  fx(kind, t0, dur) {
    if (kind === 'geiger') { const rate = 2 + Math.random() * 9; for (let t = t0 + Math.random() * 0.2; t < t0 + dur; t += -Math.log(1 - Math.random() * 0.98) / rate) this._n(t, 0.004, 0.26 + Math.random() * 0.14, 'highpass', 2800, { pan: Math.random() - 0.5 }); if (Math.random() < 0.3) this._n(t0 + Math.random() * dur, 0.9, 0.05, 'bandpass', 420, { q: 9, w: 2 }); }
    else if (kind === 'vinyl') { for (let t = t0; t < t0 + dur; t += -Math.log(1 - Math.random() * 0.98) / 7) this._n(t, 0.003, 0.03 + Math.random() * 0.06, 'highpass', 1800, { pan: Math.random() - 0.5 }); this._n(t0, dur, 0.012, 'lowpass', 5000, { a: 0.02 }); }
    else if (kind === 'modem') { const fs = [1070, 1270, 2025, 2225, 980, 1650, 1850]; for (let i = 0; i < 16; i++) this._o('sine', fs[Math.floor(Math.random() * fs.length)], t0 + i * 0.045, 0.04, 0.035, { sus: 1, rel: 0.005, pan: 0.5 }); this._n(t0 + 0.72, 0.35, 0.03, 'bandpass', 1800, { q: 0.5, pan: 0.5 }); }
  }
  setTheme(id) {
    const T = THEMES[id]; if (!T || this.id === id) return; this.th = T; this.id = id; this.step = 0;
    const t = this.c.currentTime; this.next = Math.max(this.next, t + 0.06);
    this.tone.frequency.setTargetAtTime(T.lp || 16000, t, 0.1); this.trim.gain.setTargetAtTime(T.g || 1, t, 0.08); this.revOut.gain.setTargetAtTime(0.5 + (T.rv || 0.25), t, 0.1);
  }
  tones(T, bar) { // аккорд такта: MIDI-ноты, ступень и лад
    const p = T.prog[bar % T.prog.length], d = Array.isArray(p) ? p[0] : p, sc = Array.isArray(p) ? p[1] : T.sc;
    const ms = [dg(T.root, sc, d), dg(T.root, sc, d + 2), dg(T.root, sc, d + 4)]; if (T.seven) ms.push(dg(T.root, sc, d + 6));
    return { d, sc, ms };
  }
  hold(p, st) { let n = 1; while (st + n < p.length && p[st + n] === '-') n++; return n; }
  schedule(until) {
    const T = this.th; if (!T) return;
    while (this.next < until) {
      this.sd = 60 / (T.bpm * (1 + 0.1 * this.rush)) / T.sb;
      const st = this.step % T.steps, bar = Math.floor(this.step / T.steps); let t = this.next;
      if (T.sw8 && st % 4 === 2) t += this.sd * T.sw8; else if (T.sw16 && st % 2 === 1) t += this.sd * T.sw16;
      this.playStep(T, bar, st, t); this.step++; this.next += this.sd;
    }
  }
  playStep(T, bar, st, t) {
    const sd = this.sd, ch = this.tones(T, bar), dr = this.drive;
    for (const k in T.d) { const c = T.d[k][st]; if (c === 'x') this.drum(k, t, 1); }
    if (dr > 0.4) { if (st % 2 === 1) this.drum('h', t, 0.8 * dr); if (st % (T.sb) === (T.sb >> 1)) this.drum('r', t, 0.7 * dr); if (st % T.sb === 0 && !(T.d.k && T.d.k[st] === 'x')) this.drum('k', t, 0.7 * dr); }
    if (T.b) { const c = T.b.p[st]; if (c !== '.' && c !== '-') this.bass(T.b.i, t, N(dg(T.root, ch.sc, ch.d + dv(c)) - 12 * T.b.o), this.hold(T.b.p, st) * sd, 0.4 * (T.b.v || 1)); }
    if (T.c && T.c.p[st] === 'x') this.chord(T.c.i, t, ch.ms.map(m => m + 12 * T.c.o), T.c.len * sd, T.c.v || 1);
    if (T.a) { const c = T.a.p[st]; if (c !== '.') { const i = +c, m = ch.ms[i % ch.ms.length] + 12 * Math.floor(i / ch.ms.length) + 12 * T.a.o; this.lead(T.a.i, t, N(m), sd * 1.5, T.a.v || 0.6, st % 2 ? 0.35 : -0.35); } }
    if (T.l) {
      const lb = bar % T.l.bars.length, p = T.l.bars[lb], c = p[st];
      if (c !== '.' && c !== '-') { const second = T.l.i2 && lb >= T.l.bars.length / 2, deg = (T.l.rel ? ch.d : 0) + dv(c); this.lead(second ? T.l.i2 : T.l.i, t, N(dg(T.root, ch.sc, deg) + 12 * (second ? T.l.o2 : T.l.o)), this.hold(p, st) * sd, T.l.v || 1); }
    }
    if (T.fx && st === 0 && (T.fx !== 'modem' || bar % 4 === 3)) this.fx(T.fx, t, T.steps * sd);
  }
  // отбивки в тональности текущей темы
  sting(kind, t) {
    const T = this.th || THEMES.dima, n = (d, o = 1) => N(dg(T.root, T.sc, d) + 12 * o);
    if (kind === 'win') { [0, 2, 4, 7].forEach((d, i) => { this.lead('vibe', t + i * 0.085, n(d), 0.3, 1.1); this.lead('saw', t + i * 0.085, n(d, 0), 0.12, 0.7); }); this.chord('pad', t + 0.34, [n(0, 0), n(2, 0), n(4, 0), n(7, 0)], 0.9, 1.2); this._n(t + 0.34, 0.9, 0.1, 'highpass', 6000, { w: 2 }); }
    else if (kind === 'start') { this.lead('vibe', t, n(4), 0.2, 0.9); this.lead('vibe', t + 0.11, n(7), 0.35, 0.9); }
    else if (kind === 'fail') { [4, 3, 2, 0].forEach((d, i) => this.lead('saw', t + i * 0.13, n(d, 0), 0.16, 0.9)); this.drum('k', t + 0.52, 1); }
    else if (kind === 'trophy') { [4, 7, 9, 11].forEach((d, i) => this.lead('glock', t + i * 0.07, n(d, 0), 0.25, 0.9)); }
    else if (kind === 'final') { [0, 2, 4, 7, 9, 11, 14].forEach((d, i) => { this.lead('glock', t + i * 0.09, n(d, 0), 0.4, 1); this.lead('saw', t + i * 0.09, n(d, 0), 0.14, 0.6); }); this.chord('pad', t + 0.63, [n(0, 0), n(2, 0), n(4, 0), n(7, 0)], 2.4, 1.5); this.drum('k', t + 0.63, 1.2); this._n(t + 0.63, 1.8, 0.14, 'highpass', 5000, { w: 2 }); }
  }
}

// Клаксоны: у каждого рака свой. [инструмент, [ступени], шаг в секундах, октава]
const HORNS = {
  arkasha: ['organ', [4, 4, 7], 0.16, 0], max: ['bell', [9, 9, 9], 0.12, 1], dima: ['saw', [0, 7, 4, 11], 0.07, 1], igor: ['whistle', [7, 9, 7, 4], 0.11, 1],
  geisler: ['harpsi', [0, 2, 4, 7, 9, 11], 0.06, 1], pasha: ['glock', [7, 11], 0.14, 0], nikita: ['square', [0, 4, 7, 11, 14], 0.05, 1], kos: ['geiger', [0], 0.3, 0],
  artem: ['reed', [0, 0], 0.32, -1], sanya: ['whistle', [7, 4, 2, 0], 0.16, 0], misha: ['square', [11, 9], 0.09, 2],
};

export class Audio {
  constructor() { this.ctx = null; this.muted = false; this.intensity = 0.5; this.music = null; this.eng = null; this.rush = 0; this.chase = 0; this.want = null; }
  init() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
    const c = this.ctx = new AC();
    this.master = c.createGain(); this.master.gain.value = 0.9; Audio.chain(c, this.master, c.destination);
    this.musicG = c.createGain(); this.musicG.gain.value = 0.7; this.musicG.connect(this.master);
    this.music = new Music(c, this.musicG); if (this.want) this.music.setTheme(this.want);
    this.sfx = c.createGain(); this.sfx.gain.value = 0.65; this.sfx.connect(this.master);
    this.fxm = new Music(c, this.sfx); this.fxm.th = THEMES.dima; // тот же синтезатор для эффектов и клаксонов
    // двигатель, занос, ветер, сирена
    const o1 = c.createOscillator(), o2 = c.createOscillator(), f = c.createBiquadFilter(), g = c.createGain();
    o1.type = 'sawtooth'; o2.type = 'square'; f.type = 'lowpass'; f.frequency.value = 500; f.Q.value = 2; g.gain.value = 0;
    o1.connect(f); o2.connect(f); f.connect(g); g.connect(this.sfx); o1.start(); o2.start();
    const nb = this.music.noise, sn = c.createBufferSource(); sn.buffer = nb; sn.loop = true; const sf = c.createBiquadFilter(); sf.type = 'bandpass'; sf.frequency.value = 1500; sf.Q.value = 0.8; const sg = c.createGain(); sg.gain.value = 0;
    sn.connect(sf); sf.connect(sg); sg.connect(this.sfx); sn.start();
    const wn = c.createBufferSource(); wn.buffer = nb; wn.loop = true; const wf = c.createBiquadFilter(); wf.type = 'lowpass'; wf.frequency.value = 420; const wg = c.createGain(); wg.gain.value = 0.04;
    wn.connect(wf); wf.connect(wg); wg.connect(this.sfx); wn.start();
    const s1 = c.createOscillator(), s2 = c.createGain(); s1.type = 'square'; s2.gain.value = 0; const sff = c.createBiquadFilter(); sff.type = 'lowpass'; sff.frequency.value = 1800; s1.connect(sff); sff.connect(s2); s2.connect(this.sfx); s1.start();
    this.eng = { o1, o2, f, g, sg, siren: s1, sirenG: s2 };
  }
  // общий компрессор и лимитер перед выходом
  static chain(c, input, out) {
    const comp = c.createDynamicsCompressor(); comp.threshold.value = -20; comp.knee.value = 12; comp.ratio.value = 3.5; comp.attack.value = 0.008; comp.release.value = 0.18;
    const lim = c.createDynamicsCompressor(); lim.threshold.value = -5; lim.knee.value = 0; lim.ratio.value = 20; lim.attack.value = 0.002; lim.release.value = 0.09;
    input.connect(comp); comp.connect(lim); lim.connect(out);
  }
  setMuted(m) { this.muted = m; if (this.ctx) this.master.gain.setTargetAtTime(m ? 0 : 0.9, this.ctx.currentTime, 0.05); }
  setTheme(id) { this.want = id; if (this.music) this.music.setTheme(id); }
  get theme() { return this.music ? this.music.id : this.want; }
  sting(kind) { const c = this.ctx; if (!c || c.state !== 'running') return; this.fxm.th = (this.music && this.music.th) || THEMES.dima; this.fxm.sting(kind, c.currentTime + 0.02); }
  horn(id) {
    const c = this.ctx; if (!c || c.state !== 'running') return; const h = HORNS[id] || HORNS.dima, T = THEMES[id] || THEMES.dima, t = c.currentTime + 0.02, m = this.fxm;
    if (h[0] === 'geiger') { m.fx('geiger', t, 0.5); m._n(t, 0.5, 0.2, 'bandpass', 300, { q: 6 }); return; }
    h[1].forEach((d, i) => { const f = N(dg(T.root, T.sc, d) + 12 * h[3]); if (h[0] === 'reed' || h[0] === 'organ') m.chord(h[0], t + i * h[2], [dg(T.root, T.sc, d) + 12 * h[3], dg(T.root, T.sc, d + 4) + 12 * h[3]], h[2] * 0.9, 2.2); else m.lead(h[0], t + i * h[2], f, h[2] * 1.2, 1.5); });
  }
  // голосовое Макса: неразборчивое бормотание на ускорении
  mumble(sec) {
    const c = this.ctx; if (!c || c.state !== 'running') return 0; const m = this.fxm, t0 = c.currentTime + 0.03, dur = Math.min(3.2, 0.8 + sec * 0.06); let t = t0, f = 150;
    while (t < t0 + dur) { const d = 0.035 + Math.random() * 0.05; f = Math.max(110, Math.min(260, f + (Math.random() - 0.5) * 70)); const fm = [500, 800, 1100, 1500, 2100][Math.floor(Math.random() * 5)]; m._o('sawtooth', f * 1.9, t, d, 0.5, { lp: fm, ft: 'bandpass', q: 5, sus: 1, rel: 0.012, a: 0.008, to: f * 1.9 * (0.9 + Math.random() * 0.25) }); t += d + (Math.random() < 0.14 ? 0.07 : 0.004); }
    return dur;
  }
  // вызывается каждый кадр: планирует музыку чуть вперёд и ведёт звук машины
  tick(speed01, slip, inCar, wanted) {
    const c = this.ctx; if (!c || c.state !== 'running') return; const now = c.currentTime, M = this.music;
    M.drive += ((wanted ? 1 : 0) - M.drive) * 0.05; M.rush += (this.rush - M.rush) * 0.02;
    this.musicG.gain.setTargetAtTime(0.5 + 0.28 * this.intensity, now, 0.3);
    if (M.next < now - 0.3) M.next = now + 0.05;
    M.schedule(now + 0.22);
    const e = this.eng, g = inCar ? 0.035 + speed01 * 0.045 : 0, gear = (speed01 * 4) % 1, f0 = 46 + speed01 * 60 + gear * 34;
    e.g.gain.setTargetAtTime(g, now, 0.1);
    e.o1.frequency.setTargetAtTime(f0, now, 0.06); e.o2.frequency.setTargetAtTime(f0 * 0.5, now, 0.06); e.f.frequency.setTargetAtTime(300 + speed01 * 1300, now, 0.1);
    e.sg.gain.setTargetAtTime(inCar ? Math.min(0.2, Math.max(0, slip - 3) * 0.028) : 0, now, 0.05);
    e.sirenG.gain.setTargetAtTime(wanted ? 0.028 : 0, now, 0.1); e.siren.frequency.setTargetAtTime((now * 1.6) % 1 < 0.5 ? 660 : 880, now, 0.02);
  }
  play(name) {
    const c = this.ctx; if (!c || c.state !== 'running') return; const t = c.currentTime + 0.005, m = this.fxm;
    if (name === 'msg') { m._o('sine', 880, t, 0.09, 0.16, {}); m._o('sine', 1320, t + 0.07, 0.13, 0.13, { w: 1 }); }
    else if (name === 'voice') m._o('triangle', 520, t, 0.08, 0.12, {});
    else if (name === 'pick') { m._o('triangle', 988, t, 0.1, 0.18, {}); m._o('triangle', 1319, t + 0.06, 0.14, 0.18, {}); m._o('triangle', 1976, t + 0.12, 0.22, 0.12, { w: 1 }); }
    else if (name === 'step') { m._o('square', 660, t, 0.09, 0.07, { lp: 3000 }); m._o('square', 990, t + 0.09, 0.15, 0.07, { lp: 3000, w: 1 }); }
    else if (name === 'win') m.sting('win', t);
    else if (name === 'bump') { m._o('sine', 90, t, 0.18, 0.55, { to: 40 }); m._n(t, 0.12, 0.28, 'lowpass', 900); }
    else if (name === 'honk') { m._o('square', 392, t, 0.25, 0.06, { sus: 1, rel: 0.03, lp: 2500 }); m._o('square', 494, t, 0.25, 0.06, { sus: 1, rel: 0.03, lp: 2500 }); }
    else if (name === 'door') { m._n(t, 0.08, 0.32, 'lowpass', 500); m._o('sine', 140, t, 0.1, 0.3, { to: 70 }); }
    else if (name === 'bad') m.sting('fail', t);
    else if (name === 'zap') { m._o('sawtooth', 1400, t, 0.4, 0.14, { to: 90, lp: 4000 }); m._n(t, 0.3, 0.2, 'highpass', 3000, { w: 1 }); }
    else if (name === 'tick') m._o('square', 1200, t, 0.05, 0.08, { lp: 4000 });
    else if (name === 'bell') { for (const [f, v] of [[196, 0.4], [392, 0.2], [587, 0.14], [784, 0.08]]) m._o('sine', f, t, 3.2, v, { w: 2 }); m._n(t, 0.05, 0.2, 'highpass', 2000); }
    else if (name === 'boom') { m._o('sine', 120, t, 0.5, 0.5, { to: 35 }); m._n(t, 0.7, 0.22, 'lowpass', 1400, { w: 1 }); m._n(t + 0.1, 0.9, 0.06, 'highpass', 5000, { w: 2 }); }
    else if (name === 'crash') { m._n(t, 0.16, 0.3, 'bandpass', 1800, { q: 0.5 }); m._o('triangle', 320, t, 0.12, 0.2, { to: 120 }); m._n(t + 0.03, 0.25, 0.12, 'highpass', 4500, { w: 1 }); }
    else if (name === 'squeak') m._o('sine', 900, t, 0.11, 0.16, { to: 1750 });
    else if (name === 'radio') { m._n(t, 0.12, 0.1, 'bandpass', 2400, { q: 1.5 }); m._o('sine', 1700, t + 0.02, 0.06, 0.05, { to: 900 }); }
  }
  // офлайн-рендер темы для проверки уровней (используется только в отладке)
  static render(id, seconds, opt = {}) {
    const sr = 44100, oc = new OfflineAudioContext(2, Math.floor(sr * seconds), sr), master = oc.createGain(); master.gain.value = 0.9; Audio.chain(oc, master, oc.destination);
    const mg = oc.createGain(); mg.gain.value = 0.5 + 0.28 * (opt.intensity === undefined ? 0.5 : opt.intensity); mg.connect(master);
    const M = new Music(oc, mg); M.drive = opt.drive || 0; M.rush = opt.rush || 0; M.next = 0.05; M.setTheme(id); M.tone.frequency.value = THEMES[id].lp || 16000; M.trim.gain.value = THEMES[id].g || 1; M.revOut.gain.value = 0.5 + (THEMES[id].rv || 0.25);
    M.schedule(seconds - 0.05); if (opt.sting) M.sting(opt.sting, seconds * 0.5);
    return oc.startRendering();
  }
}
