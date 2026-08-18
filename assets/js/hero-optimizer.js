/* Dundir hero: the optimizer converging.
   Canvas 2D, no library. Population scatters, constraints cut, the feasible
   region draws itself, survivors converge on the one optimal vertex. Every run
   starts from a different random population and lands on the same vertex,
   which is the product claim in one picture.
   Nothing is allocated inside the frame loop. */
(function () {
  var fig = document.querySelector('[data-optimizer]');
  if (!fig) return;
  var canvas = fig.querySelector('canvas');
  if (!canvas || !canvas.getContext) return;

  var ctx = canvas.getContext('2d', { alpha: false });
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Colours come from the stylesheet, so a palette switch moves the figure too. */
  var CS = getComputedStyle(document.documentElement);
  function tok(name, fallback) {
    var v = CS.getPropertyValue(name).trim();
    return v || fallback;
  }
  var COL = {
    bg:   tok('--figure-bg', '#221F1D'),
    grid: tok('--figure-grid', '#2E2A26'),
    axis: tok('--figure-axis', '#4A453E'),
    live: tok('--figure-live', '#6FA8C8'),
    dead: tok('--figure-dead', '#4A453E'),
    cut:  tok('--figure-cut', '#B4442F'),
    opt:  tok('--figure-opt', '#FFC400'),
    ink:  tok('--figure-ink', '#A9A49B')
  };

  /* Half planes: a*x + b*y <= c, in unit plot space. */
  var CONS = [
    { a: -1.00, b:  0.00, c: -0.20, label: fig.dataset.c1 || 'certificering' },
    { a:  0.00, b:  1.00, c:  0.74, label: fig.dataset.c2 || 'levertijd' },
    { a: -0.80, b: -0.90, c: -0.62, label: fig.dataset.c3 || 'kwaliteit' },
    { a:  0.75, b:  0.35, c:  0.78, label: fig.dataset.c4 || 'budget' }
  ];
  var OBJ = { x: 0.55, y: 0.45 };

  /* ---- feasible region, computed once ---- */
  function clip(poly, h) {
    var out = [], n = poly.length, i, cur, nxt, dc, dn, t;
    for (i = 0; i < n; i += 2) {
      cur = [poly[i], poly[i + 1]];
      nxt = [poly[(i + 2) % n], poly[(i + 3) % n]];
      dc = h.a * cur[0] + h.b * cur[1] - h.c;
      dn = h.a * nxt[0] + h.b * nxt[1] - h.c;
      if (dc <= 0) { out.push(cur[0], cur[1]); }
      if ((dc < 0 && dn > 0) || (dc > 0 && dn < 0)) {
        t = dc / (dc - dn);
        out.push(cur[0] + t * (nxt[0] - cur[0]), cur[1] + t * (nxt[1] - cur[1]));
      }
    }
    return out;
  }

  var REGION = [0.06, 0.06, 0.94, 0.06, 0.94, 0.94, 0.06, 0.94];
  for (var ci = 0; ci < CONS.length; ci++) REGION = clip(REGION, CONS[ci]);

  var OPT = { x: 0, y: 0 }, best = Infinity;
  for (var vi = 0; vi < REGION.length; vi += 2) {
    var f = OBJ.x * REGION[vi] + OBJ.y * REGION[vi + 1];
    if (f < best) { best = f; OPT.x = REGION[vi]; OPT.y = REGION[vi + 1]; }
  }

  /* ---- population, preallocated ---- */
  var N = window.innerWidth < 760 ? 90 : 170;
  var px = new Float32Array(N), py = new Float32Array(N);
  var sx = new Float32Array(N), sy = new Float32Array(N);
  var alive = new Uint8Array(N), killedBy = new Uint8Array(N), fade = new Float32Array(N);

  function seed() {
    for (var i = 0; i < N; i++) {
      px[i] = sx[i] = 0.05 + Math.random() * 0.90;
      py[i] = sy[i] = 0.05 + Math.random() * 0.90;
      alive[i] = 1; killedBy[i] = 255; fade[i] = 0;
    }
  }
  seed();

  /* ---- geometry ---- */
  var W = 0, H = 0, pad = { l: 46, r: 20, t: 20, b: 66 }, dpr = 1;

  function resize() {
    var r = fig.getBoundingClientRect();
    if (!r.width) return;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = Math.round(r.width);
    /* Height is capped by --figure-max-h and by the viewport, so the hero cannot
       eat the whole screen and hide the band underneath it. */
    var capRem = parseFloat(getComputedStyle(fig).getPropertyValue('--figure-max-h')) || 30;
    var cap = Math.min(capRem * 16, window.innerHeight * (W < 900 ? 0.32 : 0.56));
    H = Math.round(Math.min(W * (W < 640 ? 0.80 : 0.72), cap));
    if (H < 200) H = 200;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    pad.l = W < 420 ? 32 : 46;
    pad.b = W < 420 ? 54 : 66;
  }

  function X(u) { return pad.l + u * (W - pad.l - pad.r); }
  function Y(v) { return H - pad.b - v * (H - pad.t - pad.b); }

  /* ---- run state ---- */
  var run = 1, t0 = 0, phase = 0, pt = 0, cutIdx = 0;
  var PH = { SCATTER: 900, CUT: 850, REGION: 700, CONVERGE: 1500, HOLD: 1900, FADE: 500 };

  function violates(i, k) {
    var h = CONS[k];
    return h.a * sx[i] + h.b * sy[i] - h.c > 0;
  }

  function applyCut(k) {
    for (var i = 0; i < N; i++) {
      if (alive[i] && violates(i, k)) { alive[i] = 0; killedBy[i] = k; fade[i] = 1; }
    }
  }

  /* ---- drawing ---- */
  function grid() {
    ctx.fillStyle = COL.bg;
    ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = COL.grid;
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (var g = 0; g <= 10; g++) {
      var gx = Math.round(X(g / 10)) + 0.5, gy = Math.round(Y(g / 10)) + 0.5;
      ctx.moveTo(gx, Y(0)); ctx.lineTo(gx, Y(1));
      ctx.moveTo(X(0), gy); ctx.lineTo(X(1), gy);
    }
    ctx.stroke();

    ctx.strokeStyle = COL.axis;
    ctx.beginPath();
    ctx.moveTo(Math.round(X(0)) + 0.5, Y(0) + 0.5);
    ctx.lineTo(Math.round(X(1)) + 0.5, Y(0) + 0.5);
    ctx.moveTo(Math.round(X(0)) + 0.5, Y(0) + 0.5);
    ctx.lineTo(Math.round(X(0)) + 0.5, Y(1) + 0.5);
    ctx.stroke();

    ctx.fillStyle = COL.ink;
    ctx.font = '10px "JetBrains Mono", monospace';
    ctx.textAlign = 'left';
    ctx.fillText((fig.dataset.xlabel || 'prijs').toUpperCase(), X(0), H - pad.b + 17);
    ctx.save();
    ctx.translate(X(0) - 14, Y(0));
    ctx.rotate(-Math.PI / 2);
    ctx.fillText((fig.dataset.ylabel || 'levertijd').toUpperCase(), 0, 0);
    ctx.restore();
  }

  function drawCutLine(k, amt) {
    var h = CONS[k], x1, y1, x2, y2;
    if (Math.abs(h.b) < 1e-6) {
      x1 = x2 = h.c / h.a; y1 = 0; y2 = 1;
    } else {
      x1 = 0; y1 = (h.c - h.a * 0) / h.b;
      x2 = 1; y2 = (h.c - h.a * 1) / h.b;
    }
    ctx.save();
    ctx.globalAlpha = Math.min(1, amt) * 0.85;
    ctx.strokeStyle = COL.cut;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([5, 4]);
    ctx.beginPath();
    ctx.moveTo(X(x1), Y(y1));
    ctx.lineTo(X(x1 + (x2 - x1) * Math.min(1, amt)), Y(y1 + (y2 - y1) * Math.min(1, amt)));
    ctx.stroke();
    ctx.setLineDash([]);

    /* Label rides the line itself, clamped inside the plot so nothing clips. */
    var lt = 0.30 + k * 0.12;
    var lx = x1 + (x2 - x1) * lt, ly = y1 + (y2 - y1) * lt;
    ly = Math.max(0.04, Math.min(0.96, ly));
    var text = h.label.toUpperCase();
    ctx.font = '10px "JetBrains Mono", monospace';
    var tw = ctx.measureText(text).width;
    var pxs = X(Math.max(0.02, Math.min(0.98, lx)));
    var right = pxs + tw + 8 > W - pad.r;
    ctx.textAlign = right ? 'right' : 'left';
    ctx.fillStyle = COL.cut;
    ctx.fillText(text, right ? Math.min(pxs, W - pad.r - 4) : Math.max(pxs + 8, pad.l + 4), Y(ly) - 7);
    ctx.restore();
  }

  function drawRegion(amt) {
    if (REGION.length < 6) return;
    ctx.save();
    ctx.globalAlpha = amt;
    ctx.beginPath();
    ctx.moveTo(X(REGION[0]), Y(REGION[1]));
    for (var i = 2; i < REGION.length; i += 2) ctx.lineTo(X(REGION[i]), Y(REGION[i + 1]));
    ctx.closePath();
    ctx.fillStyle = COL.live;
    ctx.globalAlpha = amt * 0.10;
    ctx.fill();
    ctx.globalAlpha = amt;
    ctx.strokeStyle = COL.live;
    ctx.lineWidth = 1.25;
    ctx.stroke();
    ctx.restore();
  }

  function drawPoints() {
    var i, r;
    for (i = 0; i < N; i++) {
      r = alive[i] ? 2.6 : 1.8;
      ctx.beginPath();
      ctx.arc(X(px[i]), Y(py[i]), r, 0, 6.283185);
      ctx.fillStyle = alive[i] ? COL.live : COL.dead;
      ctx.globalAlpha = alive[i] ? 0.85 : 0.5;
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  function drawOptimum(amt) {
    var x = X(OPT.x), y = Y(OPT.y), r = 5 + (1 - amt) * 26;
    ctx.save();
    ctx.strokeStyle = COL.opt;
    ctx.globalAlpha = amt;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(X(0), y); ctx.lineTo(x, y);
    ctx.moveTo(x, Y(0)); ctx.lineTo(x, y);
    ctx.stroke();
    ctx.globalAlpha = amt * 0.6;
    ctx.beginPath(); ctx.arc(x, y, r, 0, 6.283185); ctx.stroke();
    ctx.globalAlpha = amt;
    ctx.beginPath(); ctx.arc(x, y, 4.5, 0, 6.283185);
    ctx.fillStyle = COL.opt; ctx.fill();
    ctx.font = '700 11px "JetBrains Mono", monospace';
    ctx.fillStyle = COL.opt;
    ctx.textAlign = 'left';
    ctx.fillText((fig.dataset.optimum || 'optimum').toUpperCase(), x + 10, y - 9);
    ctx.restore();
  }

  /* ---- readout ---- */
  var out = fig.querySelector('[data-readout-run]');
  var outN = fig.querySelector('[data-readout-n]');
  function readout() {
    if (out) out.textContent = (run < 10 ? '0' : '') + run;
    if (outN) outN.textContent = String(N);
  }
  readout();

  /* ---- final frame, used for reduced motion and as the paused state ---- */
  function finalFrame() {
    for (var k = 0; k < CONS.length; k++) applyCut(k);
    for (var i = 0; i < N; i++) {
      if (alive[i]) { px[i] = OPT.x + (px[i] - OPT.x) * 0.10; py[i] = OPT.y + (py[i] - OPT.y) * 0.10; }
    }
    grid();
    for (var c = 0; c < CONS.length; c++) drawCutLine(c, 1);
    drawRegion(1);
    drawPoints();
    drawOptimum(1);
  }

  /* ---- loop ---- */
  var last = 0, acc = 0, STEP = 1000 / 30, running = false, rafId = 0;

  function step(dt) {
    pt += dt;
    var i, k;
    if (phase === 0) {
      if (pt > PH.SCATTER) { phase = 1; pt = 0; cutIdx = 0; }
    } else if (phase === 1) {
      if (pt > PH.CUT) {
        applyCut(cutIdx);
        cutIdx++;
        pt = 0;
        if (cutIdx >= CONS.length) { phase = 2; }
      }
    } else if (phase === 2) {
      if (pt > PH.REGION) { phase = 3; pt = 0; }
    } else if (phase === 3) {
      var e = Math.min(1, pt / PH.CONVERGE), ease = e * e * (3 - 2 * e);
      for (i = 0; i < N; i++) {
        if (alive[i]) {
          px[i] = sx[i] + (OPT.x - sx[i]) * ease * 0.92;
          py[i] = sy[i] + (OPT.y - sy[i]) * ease * 0.92;
        }
      }
      if (pt > PH.CONVERGE) { phase = 4; pt = 0; }
    } else if (phase === 4) {
      if (pt > PH.HOLD) { phase = 5; pt = 0; }
    } else if (phase === 5) {
      if (pt > PH.FADE) { run++; seed(); readout(); phase = 0; pt = 0; }
    }

    var dead = 0;
    for (k = 0; k < N; k++) if (!alive[k]) dead++;

    grid();
    var shown = phase === 1 ? cutIdx + 1 : (phase >= 2 ? CONS.length : 0);
    for (k = 0; k < Math.min(shown, CONS.length); k++) {
      drawCutLine(k, phase === 1 && k === cutIdx ? pt / PH.CUT : 1);
    }
    if (phase >= 2) drawRegion(phase === 2 ? Math.min(1, pt / PH.REGION) : 1);
    drawPoints();
    if (phase >= 3) drawOptimum(phase === 3 ? Math.min(1, pt / 600) : 1);
    if (phase === 5) {
      ctx.globalAlpha = Math.min(0.9, pt / PH.FADE);
      ctx.fillStyle = COL.bg;
      ctx.fillRect(0, 0, W, H);
      ctx.globalAlpha = 1;
    }
  }

  function frame(ts) {
    if (!running) return;
    if (!last) last = ts;
    var dt = ts - last;
    last = ts;
    acc += dt;
    if (acc >= STEP) {
      step(Math.min(acc, 120));
      acc = 0;
    }
    rafId = requestAnimationFrame(frame);
  }

  function start() {
    if (running || reduce) return;
    running = true; last = 0; acc = 0;
    rafId = requestAnimationFrame(frame);
  }

  function stop() {
    running = false;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = 0;
  }

  resize();
  if (reduce) {
    finalFrame();
  } else {
    grid();
    drawPoints();
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) start(); else stop();
      }, { threshold: 0.15 }).observe(fig);
    } else {
      start();
    }
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stop(); else start();
    });
  }

  var rt = 0;
  window.addEventListener('resize', function () {
    clearTimeout(rt);
    rt = setTimeout(function () {
      resize();
      if (reduce) finalFrame();
    }, 150);
  });
})();
