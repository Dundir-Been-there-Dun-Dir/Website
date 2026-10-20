/* Home hero ground: a (1+lambda) evolution strategy searching a random
   two-criterion instance for the best bid inside four limits, in the
   visitor's browser. The limits, the bids and the cost weights change every
   instance; the exact optimum (a corner of the feasible region) is computed
   alongside, so the search visibly lands where the mathematics says it must.
   Colours and type come from the role layer, labels from data attributes. */
(function () {
  var canvas = document.querySelector('[data-field]');
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  var readout = document.querySelector('[data-field-readout]');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var css = getComputedStyle(canvas);
  function role(name) { return css.getPropertyValue(name).trim(); }
  var C = {
    rule: role('--rule'), fg2: role('--fg-2'), fg3: role('--fg-3'),
    accent: role('--accent-fill'), surface: role('--surface'), font: role('--data')
  };
  var labels = (canvas.dataset.limits || '').split('|');

  var TAU = Math.PI * 2;
  var BIDS = 16, LAMBDA = 10, GEN_MS = 150, HOLD_MS = 2600, FADE_MS = 700, MAX_GEN = 110;
  var BASE = [Math.PI, Math.PI / 2, 0, -Math.PI / 2];   /* outward normals: left, top, right, bottom */

  var lims = [], bx = new Float32Array(BIDS), by = new Float32Array(BIDS), bin = new Uint8Array(BIDS);
  var wx = 0, wy = 0, region = [], ox = 0, oy = 0;
  var p = [0, 0], fp = 0, sigma = 0, gen = 0, run = 0, inside = 0;
  var kids = new Float32Array(LAMBDA * 2), trail = [];
  var state = 'search', clock = 0;

  function rand(a, b) { return a + Math.random() * (b - a); }
  function gauss() {
    var u = 0, v = 0;
    while (!u) u = Math.random();
    while (!v) v = Math.random();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(TAU * v);
  }

  function cost(x, y) { return wx * x - wy * y; }
  function fitness(x, y) {
    var pen = 0;
    for (var k = 0; k < 4; k++) {
      var d = lims[k].a * x + lims[k].b * y - lims[k].c;
      if (d > 0) pen += d;
    }
    if (x < 0) pen -= x; if (x > 1) pen += x - 1;
    if (y < 0) pen -= y; if (y > 1) pen += y - 1;
    return cost(x, y) + 12 * pen;
  }

  function clip(poly, h) {
    var out = [], n = poly.length;
    for (var i = 0; i < n; i++) {
      var a = poly[i], b = poly[(i + 1) % n];
      var da = h.a * a[0] + h.b * a[1] - h.c, db = h.a * b[0] + h.b * b[1] - h.c;
      if (da <= 0) out.push(a);
      if ((da < 0 && db > 0) || (da > 0 && db < 0)) {
        var t = da / (da - db);
        out.push([a[0] + t * (b[0] - a[0]), a[1] + t * (b[1] - a[1])]);
      }
    }
    return out;
  }

  function instance() {
    run++;
    lims = [];
    for (var k = 0; k < 4; k++) {
      var th = BASE[k] + rand(-0.35, 0.35), a = Math.cos(th), b = Math.sin(th);
      lims.push({ a: a, b: b, c: a * 0.5 + b * 0.5 + rand(0.2, 0.33), label: labels[k] || '' });
    }
    var th2 = rand(0.25, 1.2);
    wx = Math.cos(th2); wy = Math.sin(th2);

    region = [[0, 0], [1, 0], [1, 1], [0, 1]];
    for (k = 0; k < 4; k++) region = clip(region, lims[k]);
    var best = Infinity;
    for (var r = 0; r < region.length; r++) {
      var f = cost(region[r][0], region[r][1]);
      if (f < best) { best = f; ox = region[r][0]; oy = region[r][1]; }
    }

    inside = 0;
    for (var i = 0; i < BIDS; i++) {
      bx[i] = rand(0.04, 0.96); by[i] = rand(0.04, 0.96);
      bin[i] = 1;
      for (k = 0; k < 4; k++) if (lims[k].a * bx[i] + lims[k].b * by[i] > lims[k].c) bin[i] = 0;
      inside += bin[i];
    }

    var s = Math.floor(Math.random() * BIDS);
    p = [bx[s], by[s]]; fp = fitness(p[0], p[1]);
    sigma = 0.14; gen = 0; trail = [p.slice()];
    for (i = 0; i < kids.length; i++) kids[i] = -1;
    state = 'search'; clock = 0;
    out();
  }

  function generation() {
    gen++;
    var bi = -1, bf = fp;
    for (var j = 0; j < LAMBDA; j++) {
      var x = p[0] + sigma * gauss(), y = p[1] + sigma * gauss();
      kids[j * 2] = x; kids[j * 2 + 1] = y;
      var f = fitness(x, y);
      if (f < bf) { bf = f; bi = j; }
    }
    if (bi >= 0) {
      p = [kids[bi * 2], kids[bi * 2 + 1]]; fp = bf; sigma *= 1.12;
      trail.push(p.slice());
    } else {
      sigma *= 0.84;
    }
    if (sigma < 0.0015 || gen >= MAX_GEN) { state = 'hold'; clock = 0; }
    out();
  }

  function pad(n, w) { n = String(n); while (n.length < w) n = '0' + n; return n; }
  function out() {
    if (!readout) return;
    var set = function (k, v) { var el = readout.querySelector('[data-out="' + k + '"]'); if (el) el.textContent = v; };
    set('run', pad(run, 2)); set('gen', pad(gen, 3)); set('bids', inside + '/' + BIDS);
  }

  /* ---- geometry ---- */
  var W = 0, H = 0, R = { x: 0, y: 0, w: 0, h: 0 }, dpr = 1;
  function resize() {
    var b = canvas.getBoundingClientRect();
    if (!b.width || !b.height) return;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = b.width; H = b.height;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var wide = W > 820;
    R.x = wide ? W * 0.52 : 16;
    R.w = (wide ? W - 40 : W - 32) - R.x;
    R.y = wide ? 36 : 16;
    R.h = H - R.y - (wide ? 72 : 28);
  }
  function X(u) { return R.x + u * R.w; }
  function Y(v) { return R.y + (1 - v) * R.h; }

  /* the part of the line a*x + b*y = c that lies inside the unit square */
  function segment(a, b, c) {
    var pts = [];
    if (Math.abs(b) > 1e-6) { [0, 1].forEach(function (x) { var y = (c - a * x) / b; if (y >= 0 && y <= 1) pts.push([x, y]); }); }
    if (Math.abs(a) > 1e-6) { [0, 1].forEach(function (y) { var x = (c - b * y) / a; if (x >= 0 && x <= 1) pts.push([x, y]); }); }
    return pts.length >= 2 ? [pts[0], pts[pts.length - 1]] : null;
  }

  function line(s, dash) {
    ctx.setLineDash(dash || []);
    ctx.beginPath(); ctx.moveTo(X(s[0][0]), Y(s[0][1])); ctx.lineTo(X(s[1][0]), Y(s[1][1])); ctx.stroke();
    ctx.setLineDash([]);
  }

  function draw(alpha) {
    ctx.clearRect(0, 0, W, H);
    if (!R.w) return;
    ctx.globalAlpha = alpha;
    ctx.lineWidth = 1;

    /* graph paper over the whole ground, ruled on the plot's own grid */
    var step = R.w / 10, x0 = X(0) % step, y0 = Y(1) % step;
    ctx.strokeStyle = C.rule;
    ctx.beginPath();
    for (var gx = x0; gx <= W; gx += step) { ctx.moveTo(Math.round(gx) + 0.5, 0); ctx.lineTo(Math.round(gx) + 0.5, H); }
    for (var gy = y0; gy <= H; gy += step) { ctx.moveTo(0, Math.round(gy) + 0.5); ctx.lineTo(W, Math.round(gy) + 0.5); }
    ctx.stroke();

    ctx.font = '11px ' + C.font;
    ctx.fillStyle = C.fg3;
    ctx.textAlign = 'right';
    ctx.fillText((canvas.dataset.x || '') + ' →', X(1) - 4, Y(0) - 8);
    ctx.textAlign = 'left';
    ctx.fillText('↑ ' + (canvas.dataset.y || ''), X(0) + 6, Y(1) + 14);

    if (region.length > 2) {
      ctx.beginPath();
      ctx.moveTo(X(region[0][0]), Y(region[0][1]));
      for (var r = 1; r < region.length; r++) ctx.lineTo(X(region[r][0]), Y(region[r][1]));
      ctx.closePath();
      ctx.fillStyle = C.fg2;
      ctx.globalAlpha = alpha * 0.07;
      ctx.fill();
      ctx.globalAlpha = alpha;
    }

    ctx.strokeStyle = C.fg2;
    ctx.lineWidth = 1.25;
    for (var k = 0; k < 4; k++) {
      var s = segment(lims[k].a, lims[k].b, lims[k].c);
      if (!s) continue;
      line(s);
      var near = function (u) { return Math.hypot(s[0][0] + u * (s[1][0] - s[0][0]) - ox, s[0][1] + u * (s[1][1] - s[0][1]) - oy); };
      var t = near(0.2) > near(0.8) ? 0.2 : 0.8, lx = X(s[0][0] + t * (s[1][0] - s[0][0])), ly = Y(s[0][1] + t * (s[1][1] - s[0][1]));
      var ang = Math.atan2(Y(s[1][1]) - Y(s[0][1]), X(s[1][0]) - X(s[0][0]));
      if (ang > Math.PI / 2) ang -= Math.PI; else if (ang < -Math.PI / 2) ang += Math.PI;
      ctx.save();
      ctx.translate(lx, ly); ctx.rotate(ang);
      ctx.fillStyle = C.fg2;
      var tw = ctx.measureText(lims[k].label).width + 6, ex = lx + Math.cos(ang) * tw, ey = ly + Math.sin(ang) * tw;
      var flip = ex > W - 4 || ex < 4 || ey > H - 4 || ey < 4;
      ctx.textAlign = flip ? 'right' : 'left';
      ctx.fillText(lims[k].label, flip ? -6 : 6, -6);
      ctx.textAlign = 'left';
      ctx.restore();
    }

    for (var i = 0; i < BIDS; i++) {
      ctx.beginPath(); ctx.arc(X(bx[i]), Y(by[i]), 3.5, 0, TAU);
      if (bin[i]) { ctx.fillStyle = C.fg2; ctx.fill(); }
      else { ctx.fillStyle = C.surface; ctx.fill(); ctx.strokeStyle = C.fg3; ctx.lineWidth = 1; ctx.stroke(); }
    }

    ctx.fillStyle = C.fg3;
    ctx.globalAlpha = alpha * 0.55;
    for (var j = 0; j < LAMBDA; j++) {
      if (kids[j * 2] < 0) continue;
      ctx.beginPath(); ctx.arc(X(kids[j * 2]), Y(kids[j * 2 + 1]), 1.6, 0, TAU); ctx.fill();
    }
    ctx.globalAlpha = alpha;

    var iso = segment(wx, -wy, cost(p[0], p[1]));
    if (iso) { ctx.strokeStyle = C.accent; ctx.lineWidth = 1; line(iso, [4, 4]); }

    ctx.strokeStyle = C.accent;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    for (var q = 0; q < trail.length; q++) {
      if (q) ctx.lineTo(X(trail[q][0]), Y(trail[q][1])); else ctx.moveTo(X(trail[q][0]), Y(trail[q][1]));
    }
    ctx.stroke();

    ctx.fillStyle = C.accent;
    ctx.beginPath(); ctx.arc(X(p[0]), Y(p[1]), state === 'search' ? 4 : 6, 0, TAU); ctx.fill();
    if (state !== 'search') {
      ctx.strokeStyle = C.accent;
      ctx.beginPath(); ctx.arc(X(ox), Y(oy), 11, 0, TAU); ctx.stroke();
      /* label on the far side of the corner from the region, clear of the limit labels */
      var cx = 0, cy = 0;
      for (var m = 0; m < region.length; m++) { cx += region[m][0]; cy += region[m][1]; }
      var dx = X(ox) - X(cx / region.length), dy = Y(oy) - Y(cy / region.length), dl = Math.hypot(dx, dy) || 1;
      var tx = X(ox) + dx / dl * 22, ty = Y(oy) + dy / dl * 22 + 4;
      ctx.textAlign = dx < 0 ? 'right' : 'left';
      ctx.fillText(canvas.dataset.optimum || '', tx, ty);
      ctx.textAlign = 'left';
    }
    ctx.globalAlpha = 1;
  }

  /* ---- loop ---- */
  var running = false, raf = 0, last = 0, acc = 0;
  function frame(ts) {
    if (!running) return;
    var dt = last ? Math.min(ts - last, 100) : 0;
    last = ts;
    if (state === 'search') {
      acc += dt;
      while (acc >= GEN_MS && state === 'search') { acc -= GEN_MS; generation(); }
      draw(1);
    } else {
      clock += dt;
      if (state === 'hold' && clock > HOLD_MS) { state = 'fade'; clock = 0; }
      if (state === 'fade' && clock > FADE_MS) { instance(); acc = 0; }
      draw(state === 'fade' ? 1 - clock / FADE_MS : 1);
    }
    raf = requestAnimationFrame(frame);
  }
  function start() {
    if (running || reduce) return;
    running = true; last = 0;
    raf = requestAnimationFrame(frame);
  }
  function stop() {
    running = false;
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
  }
  function settle() {
    while (state === 'search') generation();
    draw(1);
  }

  if (readout) readout.hidden = false;
  resize();
  instance();
  if (reduce) {
    settle();
  } else {
    draw(1);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (e) { if (e[0].isIntersecting) start(); else stop(); }, { threshold: 0.1 }).observe(canvas);
    } else {
      start();
    }
    document.addEventListener('visibilitychange', function () { if (document.hidden) stop(); else start(); });
  }

  var rt = 0;
  window.addEventListener('resize', function () {
    clearTimeout(rt);
    rt = setTimeout(function () { resize(); draw(1); }, 150);
  });
})();
