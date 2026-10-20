/* Home hero ground: a population of (1+1) evolution strategies searching for the
   best bid inside four limits, in the visitor's browser. The limits drift, so
   the feasible region and its best corner keep moving and the swarm keeps
   chasing it. The exact corner is computed every frame and ringed. A mouse
   sets the weighting (the corner facing the cursor wins); idle, it drifts.
   Colours and type come from the role layer, labels from data attributes. */
(function () {
  var canvas = document.querySelector('[data-field]');
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  var host = canvas.parentNode;
  var readout = document.querySelector('[data-field-readout]');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var css = getComputedStyle(canvas);
  function role(name) { return css.getPropertyValue(name).trim(); }
  var C = {
    fg2: role('--fg-2'), fg3: role('--fg-3'),
    accent: role('--accent-fill'), font: role('--data')
  };
  var labels = (canvas.dataset.limits || '').split('|');

  var TAU = Math.PI * 2;
  var small = window.innerWidth < 820;
  var N = small ? 50 : 90;
  var BASE = [Math.PI, Math.PI / 2, 0, -Math.PI / 2];

  /* ---- the instance: four drifting limits, a drifting weighting ---- */
  var lims = [], drift = [];
  for (var k = 0; k < 4; k++) {
    lims.push({ a: 0, b: 0, c: 0, label: labels[k] || '' });
    drift.push({ w1: 0.05 + Math.random() * 0.07, w2: 0.04 + Math.random() * 0.06, p1: Math.random() * TAU, p2: Math.random() * TAU });
  }
  var phi = Math.PI * 0.7, aim = null, dx = 0, dy = 0;
  var region = [], ox = 0.5, oy = 0.5;

  function shape(t) {
    for (var k = 0; k < 4; k++) {
      var d = drift[k], th = BASE[k] + 0.42 * Math.sin(t * d.w1 + d.p1);
      var a = Math.cos(th), b = Math.sin(th);
      lims[k].a = a; lims[k].b = b;
      lims[k].c = a * 0.5 + b * 0.5 + 0.34 + 0.08 * Math.sin(t * d.w2 + d.p2);
    }
    var target = aim === null ? Math.PI * 0.72 + 0.5 * Math.sin(t * 0.07) : aim;
    var diff = Math.atan2(Math.sin(target - phi), Math.cos(target - phi));
    phi += diff * (aim === null ? 0.02 : 0.08);
    dx = Math.cos(phi); dy = Math.sin(phi);

    region = [[-2, -2], [3, -2], [3, 3], [-2, 3]];
    for (k = 0; k < 4; k++) region = clip(region, lims[k]);
    var best = -Infinity;
    for (var r = 0; r < region.length; r++) {
      var s = dx * region[r][0] + dy * region[r][1];
      if (s > best) { best = s; ox = region[r][0]; oy = region[r][1]; }
    }
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

  function fitness(u, v) {
    var pen = 0;
    for (var k = 0; k < 4; k++) {
      var d = lims[k].a * u + lims[k].b * v - lims[k].c;
      if (d > 0) pen += d;
    }
    return -(dx * u + dy * v) + 6 * pen;
  }
  function inside(u, v) {
    for (var k = 0; k < 4; k++) if (lims[k].a * u + lims[k].b * v > lims[k].c) return false;
    return true;
  }

  /* ---- geometry: an isotropic unit square placed in the hero ---- */
  var W = 0, H = 0, S = 1, CX = 0, CY = 0, dpr = 1;
  var U0 = 0, U1 = 1, V0 = 0, V1 = 1;

  function resize() {
    var b = canvas.getBoundingClientRect();
    if (!b.width || !b.height) return false;
    dpr = Math.min(window.devicePixelRatio || 1, small ? 1.5 : 2);
    W = b.width; H = b.height;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    small = W < 820;
    if (small) {
      /* under 820px the field lives in the gap between the copy and the readout */
      var copy = host.querySelector('.hero__in'), top = copy ? copy.getBoundingClientRect().bottom - b.top : H * 0.5;
      var end = readout ? readout.getBoundingClientRect().top - b.top : H * 0.9;
      if (end - top < 120) { top = H * 0.5; end = H * 0.9; }
      CX = W * 0.5; CY = (top + end) / 2; S = Math.min(W * 0.62, (end - top) * 0.62);
    }
    else { CX = W * 0.7; CY = H * 0.44; S = Math.min(H * 0.54, W * 0.36); }
    U0 = 0.5 - CX / S; U1 = 0.5 + (W - CX) / S;
    V0 = 0.5 - (H - CY) / S; V1 = 0.5 + CY / S;
    return true;
  }
  function X(u) { return CX + (u - 0.5) * S; }
  function Y(v) { return CY - (v - 0.5) * S; }

  /* ---- the swarm ---- */
  var pu = new Float32Array(N), pv = new Float32Array(N), sg = new Float32Array(N);
  var qu = new Float32Array(N), qv = new Float32Array(N), age = new Float32Array(N);
  function spawn(i) {
    pu[i] = qu[i] = U0 + Math.random() * (U1 - U0);
    pv[i] = qv[i] = V0 + Math.random() * (V1 - V0);
    age[i] = 0;
    sg[i] = 0.03 + Math.random() * 0.04;
  }

  function gauss() {
    var u = 0, v = 0;
    while (!u) u = Math.random();
    while (!v) v = Math.random();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(TAU * v);
  }

  var gen = 0, feasible = 0;
  function step() {
    gen++;
    feasible = 0;
    for (var i = 0; i < N; i++) {
      var f = fitness(pu[i], pv[i]);
      var cu = pu[i] + sg[i] * gauss(), cv = pv[i] + sg[i] * gauss();
      if (fitness(cu, cv) < f) { pu[i] = cu; pv[i] = cv; sg[i] = Math.min(0.07, sg[i] * 1.25); }
      else sg[i] = Math.max(0.0015, sg[i] * 0.94);
      if (sg[i] < 0.005 && Math.random() < 0.01) spawn(i);
      if (inside(pu[i], pv[i])) feasible++;
    }
  }

  /* the part of the line a*u + b*v = c inside the visible area */
  function segment(a, b, c) {
    var pts = [];
    if (Math.abs(b) > 1e-6) [U0, U1].forEach(function (u) { var v = (c - a * u) / b; if (v >= V0 && v <= V1) pts.push([u, v]); });
    if (Math.abs(a) > 1e-6) [V0, V1].forEach(function (v) { var u = (c - b * v) / a; if (u >= U0 && u <= U1) pts.push([u, v]); });
    return pts.length >= 2 ? [pts[0], pts[pts.length - 1]] : null;
  }
  function line(s, dash) {
    ctx.setLineDash(dash || []);
    ctx.beginPath(); ctx.moveTo(X(s[0][0]), Y(s[0][1])); ctx.lineTo(X(s[1][0]), Y(s[1][1])); ctx.stroke();
    ctx.setLineDash([]);
  }

  /* ---- drawing ---- */
  /* what is drawn glides after the search, so accepted steps read as motion */
  function colour(i) {
    if (Math.hypot(pu[i] - ox, pv[i] - oy) < 0.035) return 2;
    return inside(pu[i], pv[i]) ? 1 : 0;
  }
  function heads(glide) {
    for (var i = 0; i < N; i++) {
      if (glide) { qu[i] += (pu[i] - qu[i]) * 0.08; qv[i] += (pv[i] - qv[i]) * 0.08; age[i] = Math.min(1, age[i] + 0.02); }
      var c = colour(i);
      ctx.fillStyle = c === 2 ? C.accent : (c ? C.fg2 : C.fg3);
      ctx.globalAlpha = age[i] * (c ? 0.85 : 0.5);
      ctx.beginPath(); ctx.arc(X(qu[i]), Y(qv[i]), c === 2 ? 3 : 2.4, 0, TAU);
      if (c) ctx.fill(); else { ctx.strokeStyle = C.fg3; ctx.lineWidth = 1; ctx.stroke(); }
    }
    ctx.globalAlpha = 1;
  }

  function scene(t, glide) {
    ctx.clearRect(0, 0, W, H);
    ctx.font = (small ? '10px ' : '11px ') + C.font;

    /* iso-cost lines, flowing toward the best corner */
    var best = dx * ox + dy * oy, gap = 0.085, ph = (t * 0.04) % gap;
    ctx.strokeStyle = C.accent;
    ctx.lineWidth = 1;
    for (var j = 0; j < 12; j++) {
      var s = segment(dx, dy, best - gap * (j + 1) + ph);
      if (!s) continue;
      ctx.globalAlpha = Math.max(0, 0.42 - j * 0.035);
      line(s, [3, 6]);
    }
    ctx.globalAlpha = 1;

    if (region.length > 2) {
      ctx.beginPath();
      ctx.moveTo(X(region[0][0]), Y(region[0][1]));
      for (var r = 1; r < region.length; r++) ctx.lineTo(X(region[r][0]), Y(region[r][1]));
      ctx.closePath();
      ctx.fillStyle = C.fg2;
      ctx.globalAlpha = 0.06;
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    ctx.strokeStyle = C.fg2;
    ctx.fillStyle = C.fg2;
    ctx.lineWidth = 1.25;
    for (var k = 0; k < 4; k++) {
      var g = segment(lims[k].a, lims[k].b, lims[k].c);
      if (!g) continue;
      line(g);
      var near = function (u) { return Math.hypot(g[0][0] + u * (g[1][0] - g[0][0]) - ox, g[0][1] + u * (g[1][1] - g[0][1]) - oy); };
      var tt = near(0.3) > near(0.7) ? 0.3 : 0.7;
      var lx = X(g[0][0] + tt * (g[1][0] - g[0][0])), ly = Y(g[0][1] + tt * (g[1][1] - g[0][1]));
      var ang = Math.atan2(Y(g[1][1]) - Y(g[0][1]), X(g[1][0]) - X(g[0][0]));
      if (ang > Math.PI / 2) ang -= Math.PI; else if (ang < -Math.PI / 2) ang += Math.PI;
      ctx.save();
      ctx.translate(lx, ly); ctx.rotate(ang);
      ctx.fillText(lims[k].label, 6, -6);
      ctx.restore();
    }

    heads(glide);

    var cx = 0, cy = 0;
    for (var m = 0; m < region.length; m++) { cx += region[m][0]; cy += region[m][1]; }
    var ex = X(ox), ey = Y(oy), vx = ex - X(cx / region.length), vy = ey - Y(cy / region.length), vl = Math.hypot(vx, vy) || 1;
    var pulse = (t % 1.8) / 1.8;
    ctx.strokeStyle = C.accent;
    ctx.globalAlpha = 1 - pulse;
    ctx.beginPath(); ctx.arc(ex, ey, 6 + pulse * 34, 0, TAU); ctx.stroke();
    ctx.globalAlpha = 1;
    ctx.beginPath(); ctx.arc(ex, ey, 11, 0, TAU); ctx.stroke();
    ctx.fillStyle = C.accent;
    ctx.beginPath(); ctx.arc(ex, ey, 4.5, 0, TAU); ctx.fill();
    ctx.textAlign = vx < 0 ? 'right' : 'left';
    ctx.fillText(canvas.dataset.optimum || '', ex + vx / vl * 24, ey + vy / vl * 24 + 4);
    ctx.textAlign = 'left';
  }

  function pad(n, w) { n = String(n); while (n.length < w) n = '0' + n; return n; }
  function out() {
    if (!readout) return;
    var set = function (k, v) { var el = readout.querySelector('[data-out="' + k + '"]'); if (el) el.textContent = v; };
    set('pop', String(N)); set('gen', pad(gen, 5)); set('in', feasible + '/' + N);
  }

  /* ---- pointer: the weighting follows the cursor ---- */
  host.addEventListener('pointermove', function (e) {
    if (e.pointerType !== 'mouse') return;
    var b = canvas.getBoundingClientRect();
    var u = 0.5 + (e.clientX - b.left - CX) / S, v = 0.5 - (e.clientY - b.top - CY) / S;
    aim = Math.atan2(v - 0.5, u - 0.5);
  });
  host.addEventListener('pointerleave', function () { aim = null; });

  /* ---- loop ---- */
  var running = false, raf = 0, t0 = 0, lastOut = 0, tick = 0;
  function frame(ts) {
    if (!running) return;
    if (!t0) t0 = ts;
    var t = (ts - t0) / 1000;
    shape(t);
    if (++tick % 3 === 0) step();
    scene(t, true);
    if (ts - lastOut > 100) { out(); lastOut = ts; }
    raf = requestAnimationFrame(frame);
  }
  function start() {
    if (running || reduce) return;
    running = true;
    raf = requestAnimationFrame(frame);
  }
  function stop() {
    running = false;
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
  }
  function still() {
    shape(0);
    for (var i = 0; i < 400; i++) step();
    for (i = 0; i < N; i++) { qu[i] = pu[i]; qv[i] = pv[i]; }
    for (i = 0; i < N; i++) age[i] = 1;
    scene(0.9);
    out();
  }

  if (!resize()) return;
  for (var i = 0; i < N; i++) spawn(i);
  if (readout) readout.hidden = false;
  if (reduce) {
    still();
  } else {
    shape(0);
    scene(0);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (e) { if (e[0].isIntersecting) start(); else stop(); }, { threshold: 0.05 }).observe(canvas);
    } else {
      start();
    }
    document.addEventListener('visibilitychange', function () { if (document.hidden) stop(); else start(); });
  }

  var rt = 0;
  window.addEventListener('resize', function () {
    clearTimeout(rt);
    rt = setTimeout(function () {
      if (!resize()) return;
      for (var i = 0; i < N; i++) spawn(i);
      if (reduce) still();
    }, 150);
  });
})();
