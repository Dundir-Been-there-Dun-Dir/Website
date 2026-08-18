/* Dundir hero figure. One engine, four figures.

   Each figure is a picture of the same product claim: many candidate supplier
   combinations go in, the constraints of the dossier cut them down, and one
   combination comes out that you can defend line by line.

   Which figure runs is set by data-viz on the element, or by ?viz= on the URL
   so the four can be compared on the live preview. Everything is drawn as a
   pure function of the cycle clock, so there is no state to drift, motion is
   continuous rather than stepped, and the reduced motion still frame is just
   the clock parked on the moment the answer lands.

   No allocation inside the frame loop. */
(function () {
  var figs = document.querySelectorAll('[data-optimizer]');
  if (!figs.length) return;

  /* ---- tokens ---- */
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
  var MONO = '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace';

  /* ---- small maths ---- */
  function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
  function seg(t, a, b) { return clamp01((t - a) / (b - a)); }
  function es(v) { return v * v * (3 - 2 * v); }           /* smoothstep */
  function eo(v) { return 1 - (1 - v) * (1 - v) * (1 - v); } /* ease out */
  function ease(t, a, b) { return es(seg(t, a, b)); }
  function easeOut(t, a, b) { return eo(seg(t, a, b)); }
  function lerp(a, b, v) { return a + (b - a) * v; }

  /* Clip the line a*x + b*y = c to the unit box. Writes into out, returns
     true when a segment survives. */
  function lineBox(a, b, c, out) {
    var n = 0, x, y;
    if (Math.abs(b) > 1e-9) {
      y = (c - a * 0) / b; if (y >= -1e-6 && y <= 1 + 1e-6) { out[n++] = 0; out[n++] = y; }
      y = (c - a * 1) / b; if (y >= -1e-6 && y <= 1 + 1e-6) { out[n++] = 1; out[n++] = y; }
    }
    if (Math.abs(a) > 1e-9) {
      x = (c - b * 0) / a; if (x >= -1e-6 && x <= 1 + 1e-6) { out[n++] = x; out[n++] = 0; }
      x = (c - b * 1) / a; if (x >= -1e-6 && x <= 1 + 1e-6) { out[n++] = x; out[n++] = 1; }
    }
    return n >= 4;
  }

  /* ---- plot frame shared by the figures that use axes ---- */
  function makePlot(env) {
    var ctx = env.ctx;
    var p = { l: 48, r: 22, t: 22, b: 58 };
    var o = {
      pad: p,
      fit: function () {
        p.l = env.small ? 34 : 48;
        p.r = env.small ? 14 : 22;
        p.t = env.small ? 14 : 22;
        p.b = env.small ? 42 : 58;
      },
      X: function (u) { return p.l + u * (env.W - p.l - p.r); },
      Y: function (v) { return env.H - p.b - v * (env.H - p.t - p.b); },
      ground: function (a) {
        env.plate();
        if (a <= 0) return;
        ctx.save();
        ctx.globalAlpha = a;
        ctx.strokeStyle = COL.grid;
        ctx.lineWidth = 1;
        ctx.beginPath();
        var steps = env.small ? 6 : 10, g, gx, gy;
        for (g = 0; g <= steps; g++) {
          gx = Math.round(o.X(g / steps)) + 0.5;
          gy = Math.round(o.Y(g / steps)) + 0.5;
          ctx.moveTo(gx, o.Y(0)); ctx.lineTo(gx, o.Y(1));
          ctx.moveTo(o.X(0), gy); ctx.lineTo(o.X(1), gy);
        }
        ctx.stroke();
        ctx.strokeStyle = COL.axis;
        ctx.beginPath();
        ctx.moveTo(Math.round(o.X(0)) + 0.5, o.Y(0) + 0.5);
        ctx.lineTo(Math.round(o.X(1)) + 0.5, o.Y(0) + 0.5);
        ctx.moveTo(Math.round(o.X(0)) + 0.5, o.Y(0) + 0.5);
        ctx.lineTo(Math.round(o.X(0)) + 0.5, o.Y(1) + 0.5);
        ctx.stroke();
        ctx.restore();
      },
      labels: function (xl, yl, a) {
        if (a <= 0) return;
        ctx.save();
        ctx.globalAlpha = a;
        ctx.fillStyle = COL.ink;
        ctx.font = (env.small ? '9px ' : '10px ') + MONO;
        ctx.textAlign = 'left';
        ctx.fillText(xl.toUpperCase(), o.X(0), env.H - p.b + 18);
        ctx.translate(o.X(0) - 14, o.Y(0));
        ctx.rotate(-Math.PI / 2);
        ctx.fillText(yl.toUpperCase(), 0, 0);
        ctx.restore();
      },
      /* An arrow head is more legible than a longer axis at these sizes. */
      dot: function (x, y, r, colour, a) {
        ctx.globalAlpha = a;
        ctx.fillStyle = colour;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 6.283185);
        ctx.fill();
        ctx.globalAlpha = 1;
      },
      /* Amber vertex with its halo, crosshair back to the axes, and label. */
      vertex: function (x, y, amt, breathe, label, noCross) {
        if (amt <= 0) return;
        ctx.save();
        ctx.strokeStyle = COL.opt;
        ctx.lineWidth = 1;
        if (!noCross) {
          ctx.globalAlpha = amt * 0.35;
          ctx.setLineDash([3, 4]);
          ctx.beginPath();
          ctx.moveTo(o.X(0), y); ctx.lineTo(x, y);
          ctx.moveTo(x, o.Y(0)); ctx.lineTo(x, y);
          ctx.stroke();
          ctx.setLineDash([]);
        }
        var ring = 5 + (1 - eo(amt)) * 30;
        ctx.globalAlpha = amt * 0.5;
        ctx.beginPath(); ctx.arc(x, y, ring, 0, 6.283185); ctx.stroke();
        ctx.globalAlpha = amt * 0.16 * breathe;
        ctx.beginPath(); ctx.arc(x, y, ring + 7 + breathe * 5, 0, 6.283185); ctx.stroke();
        ctx.globalAlpha = amt;
        ctx.fillStyle = COL.opt;
        ctx.beginPath(); ctx.arc(x, y, 4.5, 0, 6.283185); ctx.fill();
        if (label) {
          ctx.font = '700 ' + (env.small ? '10px ' : '11px ') + MONO;
          ctx.textAlign = x > env.W * 0.72 ? 'right' : 'left';
          inkText(ctx, label.toUpperCase(), x + (x > env.W * 0.72 ? -10 : 10), y - 10,
                  COL.opt, amt);
        }
        ctx.restore();
      }
    };
    o.fit();
    return o;
  }

  /* Text with the ground carried around it, so a rule crossing behind a word
     never eats the word. */
  function inkText(ctx, text, x, y, colour, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha * 0.85;
    ctx.strokeStyle = COL.bg;
    ctx.lineWidth = 3.5;
    ctx.lineJoin = 'round';
    ctx.strokeText(text, x, y);
    ctx.globalAlpha = alpha;
    ctx.fillStyle = colour;
    ctx.fillText(text, x, y);
    ctx.restore();
  }

  var VARIANTS = {};

  /* ============================================================
     1. SIMPLEX. The feasible region draws itself, then the cost line
     sweeps down across it until it can go no further. Where it stops
     is the answer, and it stops in the same place every run.
     ============================================================ */
  VARIANTS.simplex = function (env) {
    var ctx = env.ctx, d = env.fig.dataset;
    var P = makePlot(env);

    var CONS = [
      { a: -1.00, b:  0.00, c: -0.20, label: d.c1 || 'certificering' },
      { a:  0.00, b:  1.00, c:  0.74, label: d.c2 || 'max levertijd' },
      { a: -0.80, b: -0.90, c: -0.62, label: d.c3 || 'kwaliteit' },
      { a:  0.75, b:  0.35, c:  0.78, label: d.c4 || 'budget' }
    ];
    var OBJ = { x: 0.55, y: 0.45 };

    function clip(poly, h) {
      var out = [], n = poly.length, i, cx, cy, nx, ny, dc, dn, t;
      for (i = 0; i < n; i += 2) {
        cx = poly[i]; cy = poly[i + 1];
        nx = poly[(i + 2) % n]; ny = poly[(i + 3) % n];
        dc = h.a * cx + h.b * cy - h.c;
        dn = h.a * nx + h.b * ny - h.c;
        if (dc <= 0) out.push(cx, cy);
        if ((dc < 0 && dn > 0) || (dc > 0 && dn < 0)) {
          t = dc / (dc - dn);
          out.push(cx + t * (nx - cx), cy + t * (ny - cy));
        }
      }
      return out;
    }

    var REGION = [0.05, 0.05, 0.95, 0.05, 0.95, 0.95, 0.05, 0.95], k;
    for (k = 0; k < CONS.length; k++) REGION = clip(REGION, CONS[k]);

    var OPT = { x: 0, y: 0 }, LO = Infinity, HI = -Infinity, f;
    for (k = 0; k < REGION.length; k += 2) {
      f = OBJ.x * REGION[k] + OBJ.y * REGION[k + 1];
      if (f < LO) { LO = f; OPT.x = REGION[k]; OPT.y = REGION[k + 1]; }
      if (f > HI) HI = f;
    }
    var SWEEP_TOP = OBJ.x * 1 + OBJ.y * 1;

    var N = 170;
    var cx = new Float32Array(N), cy = new Float32Array(N);
    var cost = new Float32Array(N), killer = new Int8Array(N);
    var seg2 = new Float32Array(4);

    function reset() {
      var i, j;
      for (i = 0; i < N; i++) {
        cx[i] = 0.05 + Math.random() * 0.90;
        cy[i] = 0.05 + Math.random() * 0.90;
        cost[i] = OBJ.x * cx[i] + OBJ.y * cy[i];
        killer[i] = -1;
        for (j = 0; j < CONS.length; j++) {
          if (CONS[j].a * cx[i] + CONS[j].b * cy[i] - CONS[j].c > 0) { killer[i] = j; break; }
        }
      }
    }
    reset();
    env.setN(N);

    /* cycle marks, in ms */
    var CUT0 = 1150, CUTD = 540, CUTN = CUT0 + CUTD * CONS.length;
    var FILL = CUTN + 640, SWEEP = FILL + 2300, LAND = SWEEP + 620;
    var HOLD = LAND + 2500, END = HOLD + 900;

    function cutLabel(i, amt, ctxAlpha) {
      if (env.small || amt <= 0.35) return;
      var h = CONS[i];
      if (!lineBox(h.a, h.b, h.c, seg2)) return;
      var lt = 0.22 + i * 0.16;
      var lx = lerp(seg2[0], seg2[2], lt), ly = lerp(seg2[1], seg2[3], lt);
      ly = Math.max(0.06, Math.min(0.94, ly));
      var text = h.label.toUpperCase();
      ctx.font = '10px ' + MONO;
      var tw = ctx.measureText(text).width;
      var sx = P.X(Math.max(0.02, Math.min(0.98, lx)));
      var right = sx + tw + 10 > env.W - P.pad.r;
      ctx.textAlign = right ? 'right' : 'left';
      inkText(ctx, text,
              right ? Math.min(sx, env.W - P.pad.r - 4) : Math.max(sx + 9, P.pad.l + 4),
              P.Y(ly) - 8, COL.ink, ctxAlpha * seg(amt, 0.35, 0.8) * 0.85);
    }

    function cutLine(i, amt, ctxAlpha, wash) {
      var h = CONS[i];
      if (!lineBox(h.a, h.b, h.c, seg2)) return;
      var x1 = seg2[0], y1 = seg2[1], x2 = seg2[2], y2 = seg2[3];
      var g = eo(amt);
      ctx.save();
      ctx.globalAlpha = ctxAlpha * 0.9;
      ctx.strokeStyle = COL.cut;
      ctx.lineWidth = 1.25;
      ctx.beginPath();
      ctx.moveTo(P.X(x1), P.Y(y1));
      ctx.lineTo(P.X(lerp(x1, x2, g)), P.Y(lerp(y1, y2, g)));
      ctx.stroke();
      /* The cut side gets the faintest wash, so the line reads as a boundary
         rather than as another data series. */
      ctx.globalAlpha = ctxAlpha * 0.06 * g * wash;
      ctx.fillStyle = COL.cut;
      ctx.beginPath();
      ctx.moveTo(P.X(x1), P.Y(y1));
      ctx.lineTo(P.X(x2), P.Y(y2));
      if (Math.abs(h.b) > Math.abs(h.a)) {
        var far = h.b > 0 ? 1.02 : -0.02;
        ctx.lineTo(P.X(x2), P.Y(far));
        ctx.lineTo(P.X(x1), P.Y(far));
      } else {
        var farx = h.a > 0 ? 1.02 : -0.02;
        ctx.lineTo(P.X(farx), P.Y(y2));
        ctx.lineTo(P.X(farx), P.Y(y1));
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    function region(amt) {
      if (REGION.length < 6 || amt <= 0) return;
      var i;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(P.X(REGION[0]), P.Y(REGION[1]));
      for (i = 2; i < REGION.length; i += 2) ctx.lineTo(P.X(REGION[i]), P.Y(REGION[i + 1]));
      ctx.closePath();
      ctx.globalAlpha = amt * 0.12;
      ctx.fillStyle = COL.live;
      ctx.fill();
      ctx.globalAlpha = amt * 0.85;
      ctx.strokeStyle = COL.live;
      ctx.lineWidth = 1.25;
      ctx.stroke();
      ctx.restore();
    }

    function draw(t) {
      var fade = 1 - ease(t, HOLD, END);
      var appear = ease(t, 0, 700);
      P.ground(appear * fade);
      P.labels(d.xlabel || 'prijs', d.ylabel || 'levertijd', appear * fade);

      var i, a;
      /* constraints */
      for (i = 0; i < CONS.length; i++) {
        var c0 = CUT0 + i * CUTD, c1 = CUT0 + (i + 1) * CUTD;
        a = seg(t, c0, c1);
        if (a > 0) {
          cutLine(i, a, fade * (1 - ease(t, SWEEP - 300, SWEEP + 600) * 0.55),
                  1 - ease(t, c1 + 200, c1 + 1400) * 0.8);
        }
      }

      region(ease(t, CUTN, FILL) * fade);

      for (i = 0; i < CONS.length; i++) {
        var l0 = CUT0 + i * CUTD, l1 = CUT0 + (i + 1) * CUTD;
        cutLabel(i, seg(t, l0, l1), fade * (1 - ease(t, SWEEP - 300, SWEEP + 600) * 0.45));
      }

      /* the cost line, sweeping down until it can go no lower */
      var sweeping = seg(t, FILL, SWEEP);
      var level = lerp(SWEEP_TOP, LO, es(sweeping));
      if (sweeping > 0 && lineBox(OBJ.x, OBJ.y, level, seg2)) {
        /* After it lands the line pulls back to a tangent at the vertex. */
        var pull = ease(t, SWEEP, LAND + 500) * 0.66;
        var mx = (seg2[0] + seg2[2]) / 2, my = (seg2[1] + seg2[3]) / 2;
        if (pull > 0) { mx = OPT.x; my = OPT.y; }
        var ax = lerp(seg2[0], mx, pull), ay = lerp(seg2[1], my, pull);
        var bx = lerp(seg2[2], mx, pull), by = lerp(seg2[3], my, pull);
        ctx.save();
        ctx.globalAlpha = fade * (0.8 - 0.3 * ease(t, SWEEP, LAND));
        ctx.strokeStyle = COL.opt;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(P.X(ax), P.Y(ay));
        ctx.lineTo(P.X(bx), P.Y(by));
        ctx.stroke();
        ctx.restore();
      }

      /* candidates. Each one dims when its own constraint cuts it, and dims
         again once the sweep has passed it, so nothing ever pops. */
      var born = ease(t, 300, 1100);
      for (i = 0; i < N; i++) {
        var alive = 1;
        if (killer[i] >= 0) {
          alive = 1 - seg(t, CUT0 + killer[i] * CUTD + CUTD * 0.15, CUT0 + (killer[i] + 1) * CUTD);
        } else if (sweeping > 0) {
          alive = cost[i] > level ? 1 - seg(cost[i] - level, 0, 0.05) * 0.82 : 1;
        }
        var x = P.X(cx[i]), y = P.Y(cy[i]);
        if (alive > 0.05) {
          P.dot(x, y, lerp(1.7, 2.6, alive), alive > 0.5 ? COL.live : COL.dead,
                born * fade * (0.35 + 0.5 * alive));
        } else {
          P.dot(x, y, 1.7, COL.dead, born * fade * 0.34);
        }
      }

      var land = ease(t, SWEEP, LAND);
      P.vertex(P.X(OPT.x), P.Y(OPT.y), land * fade,
               0.5 + 0.5 * Math.sin(t / 620), d.optimum || 'optimum');
    }

    return { duration: END, still: HOLD - 400, reset: reset, layout: function () { P.fit(); }, draw: draw };
  };

  /* ============================================================
     2. DOSSIER. The bid matrix as an inkoper actually sees it: packages
     down the side, suppliers across the top, a price in every cell. The
     constraints strike out what does not qualify, one line per package
     lights up, and the total settles at the bottom.
     ============================================================ */
  VARIANTS.matrix = function (env) {
    var ctx = env.ctx, d = env.fig.dataset;

    var ROWS = (d.rows || 'kozijnen,beton,staal,isolatie,dakbedekking').split(',');
    var BASE = [48200, 31500, 76400, 18900, 24700];
    var COLS = (d.cols || 'A,B,C,D,E,F').split(',');
    var R = ROWS.length, C = COLS.length;

    var val = new Float32Array(R * C);
    var ok = new Uint8Array(R * C);
    var pick = new Int8Array(R);
    var total = 0;

    function reset() {
      var r, c, i, best, bestc, any;
      total = 0;
      for (r = 0; r < R; r++) {
        any = 0; best = Infinity; bestc = 0;
        for (c = 0; c < C; c++) {
          i = r * C + c;
          val[i] = (BASE[r % BASE.length] || 30000) * (0.82 + Math.random() * 0.42);
          ok[i] = Math.random() > 0.34 ? 1 : 0;
          if (ok[i]) any++;
        }
        if (!any) ok[r * C + ((Math.random() * C) | 0)] = 1;
        for (c = 0; c < C; c++) {
          i = r * C + c;
          if (ok[i] && val[i] < best) { best = val[i]; bestc = c; }
        }
        pick[r] = bestc;
        total += best;
      }
    }
    reset();
    env.setN(R * C);

    /* geometry, recomputed on resize */
    var g = { x0: 0, y0: 0, cw: 0, ch: 0, lw: 0, th: 0, bh: 0 };
    function layout() {
      g.lw = env.small ? 62 : 104;
      g.th = env.small ? 16 : 20;
      g.bh = env.small ? 34 : 44;
      g.x0 = g.lw;
      g.y0 = g.th + (env.small ? 10 : 16);
      g.cw = (env.W - g.x0 - (env.small ? 10 : 18)) / C;
      g.ch = (env.H - g.y0 - g.bh - (env.small ? 8 : 14)) / R;
    }
    layout();

    function euro(v) {
      var s = String(Math.round(v / 100) * 100), out = '', n = 0, i;
      for (i = s.length - 1; i >= 0; i--) {
        out = s.charAt(i) + out;
        if (++n % 3 === 0 && i > 0) out = '.' + out;
      }
      return '€ ' + out;
    }
    function short(v) {
      var k = v / 1000;
      return (k < 100 ? k.toFixed(1) : String(Math.round(k))).replace('.', ',');
    }

    var IN = 1300, SCAN0 = 1450, SCAN1 = 3250, PICK0 = 3400, PICKD = 300;
    var PICKN = PICK0 + PICKD * R + 400, SUM = PICKN + 700;
    var HOLD = SUM + 2600, END = HOLD + 900;

    function draw(t) {
      var fade = 1 - ease(t, HOLD, END);
      env.plate();

      var r, c, i, x, y, a, head = ease(t, 100, 700) * fade;
      var fs = env.small ? 9 : 10;

      /* column heads and row labels */
      ctx.save();
      ctx.font = fs + 'px ' + MONO;
      ctx.globalAlpha = head * 0.8;
      ctx.fillStyle = COL.ink;
      ctx.textAlign = 'center';
      for (c = 0; c < C; c++) {
        ctx.fillText(COLS[c].trim().toUpperCase(), g.x0 + g.cw * (c + 0.5), g.th);
      }
      ctx.textAlign = 'left';
      for (r = 0; r < R; r++) {
        var name = ROWS[r].trim().toUpperCase();
        if (env.small && name.length > 6) name = name.slice(0, 6);
        ctx.globalAlpha = head * 0.75;
        ctx.fillText(name, 2, g.y0 + g.ch * (r + 0.5) + fs * 0.36);
      }
      ctx.restore();

      /* cells */
      var scan = seg(t, SCAN0, SCAN1);
      var scanY = g.y0 + scan * (g.ch * R);
      for (r = 0; r < R; r++) {
        for (c = 0; c < C; c++) {
          i = r * C + c;
          a = ease(t, 120 + (r + c) * 70, 120 + (r + c) * 70 + 480) * fade;
          if (a <= 0.01) continue;
          x = g.x0 + g.cw * c;
          y = g.y0 + g.ch * r;

          /* struck out once the scan line has passed this row */
          var passed = clamp01((scanY - (y + g.ch * 0.5)) / (g.ch * 0.6));
          var dead = ok[i] ? 0 : passed;
          var chosen = (pick[r] === c && ok[i])
            ? ease(t, PICK0 + r * PICKD, PICK0 + r * PICKD + 520) : 0;

          ctx.save();
          ctx.globalAlpha = a * (0.85 - 0.5 * dead);
          ctx.strokeStyle = COL.grid;
          ctx.lineWidth = 1;
          ctx.strokeRect(Math.round(x) + 0.5, Math.round(y) + 0.5,
                         Math.round(g.cw) - 1, Math.round(g.ch) - 1);
          if (chosen > 0) {
            ctx.globalAlpha = a * chosen * 0.14;
            ctx.fillStyle = COL.opt;
            ctx.fillRect(x + 1, y + 1, g.cw - 2, g.ch - 2);
            ctx.globalAlpha = a * chosen;
            ctx.strokeStyle = COL.opt;
            ctx.lineWidth = 1.4;
            ctx.strokeRect(Math.round(x) + 0.5, Math.round(y) + 0.5,
                           Math.round(g.cw) - 1, Math.round(g.ch) - 1);
          }
          ctx.globalAlpha = a * (1 - 0.55 * dead);
          ctx.fillStyle = chosen > 0.4 ? COL.opt : (dead > 0.5 ? COL.dead : COL.live);
          ctx.font = (chosen > 0.4 ? '600 ' : '') + fs + 'px ' + MONO;
          ctx.textAlign = 'center';
          ctx.fillText(short(val[i]), x + g.cw * 0.5, y + g.ch * 0.5 + fs * 0.36);
          if (dead > 0.02) {
            ctx.globalAlpha = a * dead * 0.7;
            ctx.strokeStyle = COL.dead;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(x + g.cw * 0.22, y + g.ch * 0.5 + 0.5);
            ctx.lineTo(x + g.cw * (0.22 + 0.56 * dead), y + g.ch * 0.5 + 0.5);
            ctx.stroke();
          }
          ctx.restore();
        }
      }

      /* the scan line itself */
      if (scan > 0 && scan < 1) {
        ctx.save();
        ctx.globalAlpha = fade * 0.55 * Math.min(1, scan * 8) * Math.min(1, (1 - scan) * 8);
        ctx.strokeStyle = COL.opt;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(g.x0 - 6, Math.round(scanY) + 0.5);
        ctx.lineTo(env.W - 6, Math.round(scanY) + 0.5);
        ctx.stroke();
        ctx.restore();
      }

      /* the chosen line down the matrix, then the total */
      var link = ease(t, PICKN - 200, SUM);
      if (link > 0) {
        ctx.save();
        ctx.globalAlpha = fade * link * 0.5;
        ctx.strokeStyle = COL.opt;
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 4]);
        ctx.beginPath();
        for (r = 0; r < R; r++) {
          x = g.x0 + g.cw * (pick[r] + 0.5);
          y = g.y0 + g.ch * (r + 0.5);
          if (r === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.restore();
      }

      var sum = ease(t, PICKN, SUM);
      if (sum > 0) {
        var by = env.H - g.bh * 0.5;
        ctx.save();
        ctx.globalAlpha = fade * sum * 0.5;
        ctx.strokeStyle = COL.axis;
        ctx.beginPath();
        ctx.moveTo(2, Math.round(env.H - g.bh) + 0.5);
        ctx.lineTo(env.W - 6, Math.round(env.H - g.bh) + 0.5);
        ctx.stroke();
        ctx.globalAlpha = fade * sum * 0.8;
        ctx.fillStyle = COL.ink;
        ctx.font = fs + 'px ' + MONO;
        ctx.textAlign = 'left';
        ctx.fillText((d.totalLabel || 'gekozen combinatie').toUpperCase(), 2, by + fs * 0.36);
        ctx.globalAlpha = fade * sum;
        ctx.fillStyle = COL.opt;
        ctx.font = '600 ' + (env.small ? 12 : 14) + 'px ' + MONO;
        ctx.textAlign = 'right';
        ctx.fillText(euro(total * es(sum)), env.W - 6, by + fs * 0.4);
        ctx.restore();
      }
    }

    return { duration: END, still: HOLD - 400, reset: reset, layout: layout, draw: draw };
  };

  /* ============================================================
     3. DESCENT. Every candidate combination as a cost path. The spread
     between the best and the worst choice is the money on the table; the
     band closes, and the solver lands on the floor of it.
     ============================================================ */
  VARIANTS.descent = function (env) {
    var ctx = env.ctx, d = env.fig.dataset;
    var P = makePlot(env);

    var K = 22, S = 110;
    var traj = new Float32Array(K * S);
    var lo = new Float32Array(S), hi = new Float32Array(S);
    var bestK = 0, startAvg = 1, floorV = 0.6;

    function reset() {
      var k, s, start, fl, tau, jit, v, i;
      bestK = (Math.random() * K) | 0;
      floorV = 0.56 + Math.random() * 0.10;
      startAvg = 0;
      for (s = 0; s < S; s++) { lo[s] = 2; hi[s] = -1; }
      for (k = 0; k < K; k++) {
        start = 0.90 + Math.random() * 0.10;
        fl = k === bestK ? floorV : floorV + 0.03 + Math.random() * 0.26;
        tau = 14 + Math.random() * 26;
        jit = 0.035 + Math.random() * 0.05;
        startAvg += start;
        for (s = 0; s < S; s++) {
          v = fl + (start - fl) * Math.exp(-s / tau);
          v += (Math.random() - 0.5) * jit * Math.exp(-s / (tau * 1.7));
          i = k * S + s;
          traj[i] = v;
          if (v < lo[s]) lo[s] = v;
          if (v > hi[s]) hi[s] = v;
        }
      }
      startAvg /= K;
    }
    reset();
    env.setN(K);

    var REVEAL = 3600, DIM = REVEAL + 700, MARK = DIM + 600;
    var HOLD = MARK + 2600, END = HOLD + 900;

    function ux(s) { return s / (S - 1); }
    function uy(v) { return (v - 0.45) / 0.60; }   /* plot window on the cost axis */

    function draw(t) {
      var fade = 1 - ease(t, HOLD, END);
      var appear = ease(t, 0, 600);
      P.ground(appear * fade);
      P.labels(d.xlabel2 || 'iteraties', d.ylabel2 || 'kosten', appear * fade);

      var p = es(seg(t, 250, REVEAL));
      var sn = Math.max(1, Math.round(p * (S - 1)));
      var k, s, dim = ease(t, REVEAL, DIM);

      /* the spread between best and worst, closing */
      if (sn > 1) {
        ctx.save();
        ctx.globalAlpha = fade * 0.13 * (1 - dim * 0.45);
        ctx.fillStyle = COL.live;
        ctx.beginPath();
        ctx.moveTo(P.X(ux(0)), P.Y(uy(hi[0])));
        for (s = 1; s <= sn; s++) ctx.lineTo(P.X(ux(s)), P.Y(uy(hi[s])));
        for (s = sn; s >= 0; s--) ctx.lineTo(P.X(ux(s)), P.Y(uy(lo[s])));
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }

      /* the paths */
      ctx.save();
      ctx.lineWidth = 1;
      ctx.strokeStyle = COL.live;
      for (k = 0; k < K; k++) {
        if (k === bestK) continue;
        ctx.globalAlpha = fade * (0.28 - 0.13 * dim);
        ctx.beginPath();
        for (s = 0; s <= sn; s++) {
          var x = P.X(ux(s)), y = P.Y(uy(traj[k * S + s]));
          if (s === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      /* the survivor */
      ctx.globalAlpha = fade * (0.75 + 0.25 * dim);
      ctx.strokeStyle = dim > 0.15 ? COL.opt : COL.live;
      ctx.lineWidth = 1.1 + dim * 0.9;
      ctx.beginPath();
      for (s = 0; s <= sn; s++) {
        var bx = P.X(ux(s)), by = P.Y(uy(traj[bestK * S + s]));
        if (s === 0) ctx.moveTo(bx, by); else ctx.lineTo(bx, by);
      }
      ctx.stroke();
      ctx.restore();

      /* head of the run while it is still moving */
      if (p < 1) {
        P.dot(P.X(ux(sn)), P.Y(uy(traj[bestK * S + sn])), 3, COL.live, fade * 0.9);
      }

      /* the floor, and what the spread was worth */
      var mark = ease(t, DIM, MARK);
      if (mark > 0) {
        var fy = P.Y(uy(floorV));
        ctx.save();
        ctx.globalAlpha = fade * mark * 0.4;
        ctx.strokeStyle = COL.opt;
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 4]);
        ctx.beginPath();
        ctx.moveTo(P.X(0), fy); ctx.lineTo(P.X(1), fy);
        ctx.stroke();
        ctx.restore();

        var delta = Math.round((startAvg - floorV) / startAvg * 1000) / 10;
        ctx.save();
        ctx.globalAlpha = fade * mark;
        ctx.fillStyle = COL.opt;
        ctx.font = '700 ' + (env.small ? 11 : 13) + 'px ' + MONO;
        ctx.textAlign = 'right';
        ctx.fillText('-' + String(delta).replace('.', ',') + '%', P.X(1), fy - 12);
        if (!env.small) {
          ctx.globalAlpha = fade * mark * 0.75;
          ctx.fillStyle = COL.ink;
          ctx.font = '10px ' + MONO;
          ctx.fillText((d.optimum || 'optimum').toUpperCase(), P.X(1), fy + 16);
        }
        ctx.restore();
      }

      P.vertex(P.X(ux(S - 1)), P.Y(uy(traj[bestK * S + S - 1])), ease(t, DIM, MARK) * fade,
               0.5 + 0.5 * Math.sin(t / 620), '', true);
    }

    return { duration: END, still: HOLD - 400, reset: reset, layout: function () { P.fit(); }, draw: draw };
  };

  /* ============================================================
     4. FRONT. Price against lead time. Most combinations are beaten by
     another one on both counts and drop back; the ones that are not form
     the frontier, and the dossier constraints pick the point on it.
     ============================================================ */
  VARIANTS.front = function (env) {
    var ctx = env.ctx, d = env.fig.dataset;
    var P = makePlot(env);

    var N = 150;
    var px = new Float32Array(N), py = new Float32Array(N);
    var dom = new Uint8Array(N);
    var fx = new Float32Array(N), fy = new Float32Array(N);
    var fn = 0;
    var order = new Int32Array(N);
    var CAPX = 0.80, CAPY = 0.74;
    var OPT = { x: 0, y: 0 };

    function reset() {
      var i, j, best;
      for (i = 0; i < N; i++) {
        /* a cloud with a slight trade-off tilt: cheap tends to be slow */
        var u = Math.random(), v = Math.random();
        px[i] = 0.07 + u * 0.88;
        py[i] = 0.10 + 0.80 * Math.pow(1 - u, 2.1) + v * v * 0.52;
        if (py[i] > 0.94) py[i] = 0.94;
        if (py[i] < 0.06) py[i] = 0.06;
        order[i] = i;
        dom[i] = 0;
      }
      /* sort by price, then sweep for the non dominated set */
      for (i = 1; i < N; i++) {
        var key = order[i], kx = px[key];
        for (j = i - 1; j >= 0 && px[order[j]] > kx; j--) order[j + 1] = order[j];
        order[j + 1] = key;
      }
      fn = 0; best = Infinity;
      for (i = 0; i < N; i++) {
        var id = order[i];
        if (py[id] < best - 1e-6) {
          best = py[id];
          fx[fn] = px[id]; fy[fn] = py[id]; fn++;
        } else {
          dom[id] = 1;
        }
      }
      /* the point on the frontier that the dossier can actually buy */
      var bf = Infinity;
      OPT.x = fx[0]; OPT.y = fy[0];
      for (i = 0; i < fn; i++) {
        if (fx[i] > CAPX || fy[i] > CAPY) continue;
        var f = 0.55 * fx[i] + 0.45 * fy[i];
        if (f < bf) { bf = f; OPT.x = fx[i]; OPT.y = fy[i]; }
      }
    }
    reset();
    env.setN(N);

    var CAPS = 1200, FRONT0 = 2000, FRONT1 = 3900, LAND = FRONT1 + 620;
    var HOLD = LAND + 2500, END = HOLD + 900;

    function draw(t) {
      var fade = 1 - ease(t, HOLD, END);
      var appear = ease(t, 0, 600);
      P.ground(appear * fade);
      P.labels(d.xlabel || 'prijs', d.ylabel || 'levertijd', appear * fade);

      /* what the dossier rules out */
      var caps = ease(t, CAPS, CAPS + 900);
      if (caps > 0) {
        ctx.save();
        ctx.globalAlpha = fade * caps * 0.06;
        ctx.fillStyle = COL.cut;
        ctx.fillRect(P.X(CAPX), P.Y(1), P.X(1) - P.X(CAPX), P.Y(0) - P.Y(1));
        ctx.fillRect(P.X(0), P.Y(1), P.X(1) - P.X(0), P.Y(CAPY) - P.Y(1));
        ctx.globalAlpha = fade * caps * 0.7;
        ctx.strokeStyle = COL.cut;
        ctx.lineWidth = 1.1;
        ctx.setLineDash([5, 4]);
        ctx.beginPath();
        ctx.moveTo(P.X(CAPX), P.Y(0)); ctx.lineTo(P.X(CAPX), P.Y(1));
        ctx.moveTo(P.X(0), P.Y(CAPY)); ctx.lineTo(P.X(1), P.Y(CAPY));
        ctx.stroke();
        ctx.setLineDash([]);
        if (!env.small) {
          ctx.font = '10px ' + MONO;
          ctx.textAlign = 'right';
          inkText(ctx, (d.c4 || 'budget').toUpperCase(), P.X(CAPX) - 6, P.Y(0) + 16,
                  COL.cut, fade * caps * 0.9);
          inkText(ctx, (d.c2 || 'max levertijd').toUpperCase(), P.X(1), P.Y(CAPY) - 7,
                  COL.cut, fade * caps * 0.9);
        }
        ctx.restore();
      }

      /* the cloud, thinning as the dominated ones drop back */
      var born = ease(t, 200, 1100);
      var thin = ease(t, FRONT0 - 300, FRONT1);
      var i;
      for (i = 0; i < N; i++) {
        var live = dom[i] ? 1 - thin * 0.86 : 1;
        P.dot(P.X(px[i]), P.Y(py[i]), lerp(1.7, 2.6, live),
              live > 0.5 ? COL.live : COL.dead, born * fade * (0.3 + 0.55 * live));
      }

      /* the frontier itself, drawn as the staircase it is */
      var fp = es(seg(t, FRONT0, FRONT1));
      if (fp > 0 && fn > 1) {
        var span = fp * (fn - 1);
        ctx.save();
        ctx.globalAlpha = fade * 0.9;
        ctx.strokeStyle = COL.live;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(P.X(fx[0]), P.Y(fy[0]));
        for (i = 1; i < fn; i++) {
          var g2 = clamp01(span - (i - 1));
          if (g2 <= 0) break;
          var x0 = fx[i - 1], y0 = fy[i - 1], x1 = fx[i], y1 = fy[i];
          /* horizontal first, then down: a step is a real change of supplier */
          var hx = lerp(x0, x1, Math.min(1, g2 * 2));
          ctx.lineTo(P.X(hx), P.Y(y0));
          if (g2 > 0.5) ctx.lineTo(P.X(x1), P.Y(lerp(y0, y1, (g2 - 0.5) * 2)));
        }
        ctx.stroke();
        ctx.restore();
      }

      P.vertex(P.X(OPT.x), P.Y(OPT.y), ease(t, FRONT1, LAND) * fade,
               0.5 + 0.5 * Math.sin(t / 620), d.optimum || 'optimum');
    }

    return { duration: END, still: HOLD - 400, reset: reset, layout: function () { P.fit(); }, draw: draw };
  };

  /* ============================================================
     Engine. Sizing, the clock, and the rules about when not to run.
     ============================================================ */
  var DEFAULT = 'simplex';
  var chosen = null, freeze = NaN;
  try {
    var params = new URLSearchParams(location.search);
    var q = params.get('viz');
    if (q) localStorage.setItem('dundir-viz', q);
    chosen = q || localStorage.getItem('dundir-viz');
    /* ?vizt=5200 parks the clock on one moment of the cycle. Review aid: it
       makes a screenshot of a given beat reproducible. */
    if (params.get('vizt') !== null) freeze = parseFloat(params.get('vizt'));
  } catch (e) { chosen = null; }

  function boot(fig, name) {
    var canvas = fig.querySelector('canvas');
    if (!canvas || !canvas.getContext) return;
    var ctx = canvas.getContext('2d', { alpha: false });
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var runEl = fig.querySelector('[data-readout-run]');
    var nEl = fig.querySelector('[data-readout-n]');
    var veil = null;
    var env = {
      fig: fig, ctx: ctx, W: 0, H: 0, small: false,
      /* bare plate: the ground colour plus one soft light from above */
      plate: function () {
        ctx.fillStyle = COL.bg;
        ctx.fillRect(0, 0, env.W, env.H);
        if (veil) { ctx.fillStyle = veil; ctx.fillRect(0, 0, env.W, env.H); }
      },
      setRun: function (n) { if (runEl) runEl.textContent = (n < 10 ? '0' : '') + n; },
      setN: function (n) { if (nEl) nEl.textContent = String(n); }
    };

    var viz = (VARIANTS[name] || VARIANTS[DEFAULT])(env);
    var dpr = 1, cycle = 1;
    env.setRun(cycle);

    function resize() {
      var r = fig.getBoundingClientRect();
      if (!r.width) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      var W = Math.round(r.width);
      /* Capped by --figure-max-h and by the viewport, so the figure never
         pushes the band under the hero off the screen. */
      var capRem = parseFloat(getComputedStyle(fig).getPropertyValue('--figure-max-h')) || 30;
      var cap = Math.min(capRem * 16, window.innerHeight * (W < 900 ? 0.32 : 0.56));
      var H = Math.round(Math.min(W * (W < 640 ? 0.80 : 0.72), cap));
      if (H < 200) H = 200;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      canvas.style.width = W + 'px';
      canvas.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      env.W = W; env.H = H; env.small = W < 420;
      veil = ctx.createLinearGradient(0, 0, 0, H);
      veil.addColorStop(0, 'rgba(255,255,255,0.045)');
      veil.addColorStop(0.55, 'rgba(255,255,255,0.012)');
      veil.addColorStop(1, 'rgba(0,0,0,0.10)');
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      if (viz.layout) viz.layout();
    }

    var t = 0, last = 0, running = false, raf = 0;

    function frame(ts) {
      if (!running) return;
      if (!last) last = ts;
      var dt = ts - last;
      last = ts;
      if (dt > 120) dt = 120;
      t += dt;
      if (t >= viz.duration) {
        t -= viz.duration;
        cycle++;
        viz.reset();
        env.setRun(cycle);
      }
      viz.draw(t);
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

    resize();
    if (freeze === freeze) {
      viz.draw(Math.max(0, Math.min(freeze, viz.duration - 1)));
      return;
    }
    if (reduce) {
      viz.draw(viz.still);
    } else {
      viz.draw(0);
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
        if (reduce) viz.draw(viz.still); else viz.draw(t);
      }, 150);
    });
  }

  for (var fi = 0; fi < figs.length; fi++) {
    boot(figs[fi], figs[fi].dataset.viz || chosen || DEFAULT);
  }
})();
