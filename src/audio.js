// Весь звук процедурный: WebAudio, без файлов.
const NOTE = (n) => 440 * Math.pow(2, (n - 69) / 12);
// Dm - Bb - F - C, по такту на аккорд
const CH = [[50, 53, 57, 62], [46, 50, 53, 58], [41, 45, 48, 53], [48, 52, 55, 60]];

export class Audio {
  constructor() { this.ctx = null; this.muted = false; this.intensity = 0; this.step = 0; this.next = 0; this.eng = null; }
  init() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
    const c = this.ctx = new AC();
    this.master = c.createGain(); this.master.gain.value = 0.85;
    const comp = c.createDynamicsCompressor(); comp.threshold.value = -14; comp.ratio.value = 5;
    this.master.connect(comp); comp.connect(c.destination);
    this.music = c.createGain(); this.music.gain.value = 0.66; this.music.connect(this.master);
    this.sfx = c.createGain(); this.sfx.gain.value = 0.95; this.sfx.connect(this.master);
    // delay for arps
    const d = c.createDelay(1); d.delayTime.value = 0.47; const fb = c.createGain(); fb.gain.value = 0.36; const dl = c.createBiquadFilter(); dl.type = 'lowpass'; dl.frequency.value = 2200;
    d.connect(dl); dl.connect(fb); fb.connect(d); dl.connect(this.music); this.delay = d;
    // noise buffer
    const nb = c.createBuffer(1, c.sampleRate * 1.5, c.sampleRate), ch = nb.getChannelData(0); for (let i = 0; i < ch.length; i++) ch[i] = Math.random() * 2 - 1; this.noise = nb;
    // engine
    const o1 = c.createOscillator(), o2 = c.createOscillator(), f = c.createBiquadFilter(), g = c.createGain();
    o1.type = 'sawtooth'; o2.type = 'square'; f.type = 'lowpass'; f.frequency.value = 500; f.Q.value = 2; g.gain.value = 0;
    o1.connect(f); o2.connect(f); f.connect(g); g.connect(this.sfx); o1.start(); o2.start();
    const sn = c.createBufferSource(); sn.buffer = nb; sn.loop = true; const sf = c.createBiquadFilter(); sf.type = 'bandpass'; sf.frequency.value = 1500; sf.Q.value = 0.8; const sg = c.createGain(); sg.gain.value = 0;
    sn.connect(sf); sf.connect(sg); sg.connect(this.sfx); sn.start();
    const wn = c.createBufferSource(); wn.buffer = nb; wn.loop = true; const wf = c.createBiquadFilter(); wf.type = 'lowpass'; wf.frequency.value = 420; const wg = c.createGain(); wg.gain.value = 0.05;
    wn.connect(wf); wf.connect(wg); wg.connect(this.sfx); wn.start();
    const s1 = c.createOscillator(), s2 = c.createGain(); s1.type = 'square'; s2.gain.value = 0; const sff = c.createBiquadFilter(); sff.type = 'lowpass'; sff.frequency.value = 1800; s1.connect(sff); sff.connect(s2); s2.connect(this.sfx); s1.start();
    this.eng = { o1, o2, f, g, sg, sf, siren: s1, sirenG: s2 };
    this.next = c.currentTime + 0.1;
  }
  setMuted(m) { this.muted = m; if (this.ctx) this.master.gain.setTargetAtTime(m ? 0 : 0.85, this.ctx.currentTime, 0.05); }
  tone(type, freq, t, dur, vol, dest, slide) {
    const c = this.ctx, o = c.createOscillator(), g = c.createGain(); o.type = type; o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(slide, t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(dest || this.sfx); o.start(t); o.stop(t + dur + 0.05); return g;
  }
  hit(t, dur, vol, freq, type = 'highpass', dest) {
    const c = this.ctx, s = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain(); s.buffer = this.noise; f.type = type; f.frequency.value = freq;
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur); s.connect(f); f.connect(g); g.connect(dest || this.sfx); s.start(t, Math.random()); s.stop(t + dur + 0.05);
  }
  // called every frame: schedules music a bit ahead
  tick(speed01, slip, inCar, wanted) {
    const c = this.ctx; if (!c || c.state !== 'running') return;
    const now = c.currentTime, I = this.intensity, spb = 60 / (96 + I * 22) / 4;
    if (this.next < now - 0.5) this.next = now + 0.05;
    while (this.next < now + 0.18) {
      const s = this.step++, t = this.next, bar = Math.floor(s / 16) % 4, k = s % 16, ch = CH[bar];
      if (k === 0) { // pad
        for (const n of ch) for (const det of [-6, 6]) { const o = c.createOscillator(), g = c.createGain(), f = c.createBiquadFilter(); o.type = 'sawtooth'; o.frequency.value = NOTE(n + 12); o.detune.value = det; f.type = 'lowpass'; f.frequency.value = 500 + I * 900;
          g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.028, t + spb * 5); g.gain.linearRampToValueAtTime(0.0001, t + spb * 16.5); o.connect(f); f.connect(g); g.connect(this.music); o.start(t); o.stop(t + spb * 17); }
      }
      if (k % 2 === 0) { // bass
        const o = c.createOscillator(), g = c.createGain(), f = c.createBiquadFilter(); o.type = 'sawtooth'; o.frequency.value = NOTE(ch[0] - 12 + (k % 8 === 6 ? 12 : 0)); f.type = 'lowpass'; f.Q.value = 6;
        f.frequency.setValueAtTime(240 + I * 700, t); f.frequency.exponentialRampToValueAtTime(110, t + spb * 1.8);
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.2, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + spb * 1.9); o.connect(f); f.connect(g); g.connect(this.music); o.start(t); o.stop(t + spb * 2);
      }
      if (I > 0.05 || k % 4 === 0) { // arp
        const n = ch[[0, 2, 1, 3, 2, 1, 3, 2][k % 8]] + 12 + (k % 16 > 11 ? 12 : 0);
        this.tone('triangle', NOTE(n), t, spb * 1.6, 0.045 + I * 0.03, this.delay).connect(this.music);
      }
      if (I > 0.12) {
        if (k % 4 === 0) this.tone('sine', 130, t, 0.22, 0.6, this.music, 42);
        if (k % 8 === 4) this.hit(t, 0.14, 0.2, 1700, 'bandpass', this.music);
        if (I > 0.4 && k % 2 === 1) this.hit(t, 0.035, 0.07, 7000, 'highpass', this.music);
        if (I > 0.75 && k % 4 === 2) this.hit(t, 0.05, 0.09, 9000, 'highpass', this.music);
      }
      this.next += spb;
    }
    const e = this.eng, g = inCar ? 0.05 + speed01 * 0.06 : 0;
    e.g.gain.setTargetAtTime(g, now, 0.1);
    const gear = (speed01 * 4) % 1, f0 = 46 + speed01 * 60 + gear * 34;
    e.o1.frequency.setTargetAtTime(f0, now, 0.06); e.o2.frequency.setTargetAtTime(f0 * 0.5, now, 0.06); e.f.frequency.setTargetAtTime(300 + speed01 * 1300, now, 0.1);
    e.sg.gain.setTargetAtTime(inCar ? Math.min(0.22, Math.max(0, slip - 3) * 0.03) : 0, now, 0.05);
    e.sirenG.gain.setTargetAtTime(wanted ? 0.035 : 0, now, 0.1);
    e.siren.frequency.setTargetAtTime((now * 1.6) % 1 < 0.5 ? 660 : 880, now, 0.02);
  }
  play(name) {
    const c = this.ctx; if (!c || c.state !== 'running') return; const t = c.currentTime;
    if (name === 'msg') { this.tone('sine', 880, t, 0.09, 0.14); this.tone('sine', 1320, t + 0.07, 0.12, 0.12); }
    else if (name === 'voice') { this.tone('triangle', 520, t, 0.08, 0.1); }
    else if (name === 'pick') { this.tone('triangle', 988, t, 0.1, 0.16); this.tone('triangle', 1319, t + 0.06, 0.14, 0.16); this.tone('triangle', 1976, t + 0.12, 0.2, 0.1); }
    else if (name === 'step') { this.tone('square', 660, t, 0.1, 0.1); this.tone('square', 990, t + 0.09, 0.16, 0.1); }
    else if (name === 'win') { [0, 4, 7, 12, 16].forEach((n, i) => this.tone('sawtooth', NOTE(62 + n), t + i * 0.08, 0.35, 0.09)); this.hit(t + 0.4, 0.5, 0.08, 6000); }
    else if (name === 'bump') { this.tone('sine', 90, t, 0.18, 0.5, null, 40); this.hit(t, 0.12, 0.25, 900, 'lowpass'); }
    else if (name === 'honk') { this.tone('square', 392, t, 0.25, 0.07); this.tone('square', 494, t, 0.25, 0.07); }
    else if (name === 'door') { this.hit(t, 0.08, 0.3, 500, 'lowpass'); this.tone('sine', 140, t, 0.1, 0.3, null, 70); }
    else if (name === 'bad') { this.tone('sawtooth', 220, t, 0.3, 0.14, null, 110); this.tone('sawtooth', 233, t, 0.3, 0.12, null, 116); }
    else if (name === 'zap') { this.tone('sawtooth', 1400, t, 0.4, 0.14, null, 90); this.hit(t, 0.3, 0.2, 3000); }
    else if (name === 'tick') { this.tone('square', 1200, t, 0.05, 0.1); }
    else if (name === 'bell') { for (const [f, v] of [[196, 0.4], [392, 0.2], [587, 0.14], [784, 0.08]]) this.tone('sine', f, t, 3.2, v); this.hit(t, 0.05, 0.2, 2000); }
    else if (name === 'boom') { this.tone('sine', 120, t, 0.5, 0.5, null, 35); this.hit(t, 0.7, 0.22, 1400, 'lowpass'); this.hit(t + 0.1, 0.9, 0.06, 5000); }
  }
}
