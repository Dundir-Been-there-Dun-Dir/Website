/* The procurement scan, one question per screen. Scored and reported in the
   browser; nothing is sent unless the visitor asks for a copy by email.

   Scoring: every answer weighs 0 (no exposure) to 3 (fully exposed). Questions
   marked "scores" are summed and expressed as a share of the maximum. */
(function () {
  var stage = document.getElementById('scan');
  var raw = document.getElementById('scan-data');
  if (!stage || !raw) return;

  var D;
  try { D = JSON.parse(raw.textContent); } catch (e) { return; }

  document.body.classList.add('js');

  var screens = [].slice.call(stage.querySelectorAll('.tf-screen'));
  var form = stage.querySelector('.tf-form');
  var report = stage.querySelector('.scan__report');
  var count = document.querySelector('.tf-count');
  var line = document.querySelector('.tf-line span');
  var prev = stage.querySelector('.tf-prev');
  var next = stage.querySelector('.tf-next');
  var total = D.questions.length;
  var last = total + 1;
  var answers = {};
  var cur = 0;
  var arrowed = false;
  var timer = null;

  function question(i) { return i >= 1 && i <= total ? D.questions[i - 1] : null; }
  function answered(i) { var q = question(i); return q && answers[q.id] !== undefined; }
  function done() { var n = 0; for (var k in answers) n++; return n; }

  function show(i) {
    clearTimeout(timer);
    var dir = i < cur ? 'back' : 'fwd';
    cur = i;
    screens.forEach(function (s) {
      var on = +s.getAttribute('data-screen') === i;
      s.classList.toggle('is-on', on);
      s.setAttribute('data-dir', dir);
      if (on) s.removeAttribute('inert'); else s.setAttribute('inert', '');
    });
    var q = question(i);
    count.textContent = q ? stage.getAttribute('data-step').replace('{n}', i).replace('{total}', total) : '';
    line.style.width = Math.round(done() / total * 100) + '%';
    prev.disabled = i === 0;
    next.disabled = i === last || (q && !answered(i)) || (i === total && answered(i));
    var target = screens[i].querySelector('legend, h1, h2');
    if (target) { target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true }); }
    window.scrollTo(0, 0);
  }

  function forward() {
    if (cur === 0) return show(1);
    if (!answered(cur)) return;
    if (cur < total) return show(cur + 1);
    if (cur === total) finish();
  }

  form.addEventListener('change', function (e) {
    var el = e.target;
    if (el.type !== 'radio') return;
    answers[el.name] = { value: +el.value, label: el.getAttribute('data-label') || '' };
    var ok = screens[cur].querySelector('.tf-ok');
    if (ok) ok.disabled = false;
    line.style.width = Math.round(done() / total * 100) + '%';
    next.disabled = cur === total;
    if (arrowed) { arrowed = false; return; }
    var opt = el.closest('.tf-opt');
    opt.classList.remove('is-picked');
    void opt.offsetWidth;
    opt.classList.add('is-picked');
    if (cur < total) timer = setTimeout(function () { show(cur + 1); }, 520);
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (done() === total) finish();
  });

  stage.addEventListener('click', function (e) {
    var go = e.target.closest('[data-go]');
    if (!go) return;
    if (go.hasAttribute('data-reset')) { form.reset(); answers = {}; screens.forEach(function (s) { var b = s.querySelector('.tf-ok'); if (b) b.disabled = true; }); }
    if (go.type === 'submit') return;
    show(+go.getAttribute('data-go'));
  });

  prev.addEventListener('click', function () { if (cur > 0) show(cur - 1); });
  next.addEventListener('click', forward);

  document.addEventListener('keydown', function (e) {
    var t = e.target;
    if (t.matches('input[type=text], input[type=email], textarea') || e.metaKey || e.ctrlKey || e.altKey) return;
    if (/^Arrow/.test(e.key) && t.type === 'radio') { arrowed = true; return; }
    if (e.key === 'Enter' && cur < last) {
      if (t.matches('button, a') && !t.matches('.tf-ok, .tf-go')) return;
      e.preventDefault();
      forward();
      return;
    }
    var q = question(cur);
    if (q && e.key.length === 1) {
      var input = screens[cur].querySelector('input[data-key="' + e.key.toUpperCase() + '"]');
      if (input) { e.preventDefault(); input.click(); }
    }
  });

  function euros() {
    var buyers = answers.buyers ? D.buyerCount[answers.buyers.value] : 1;
    var hours = answers.hours ? D.hourCount[answers.hours.value] : 0;
    return Math.round(buyers * hours * 46 * D.rate);
  }

  function finish() {
    var max = 0, got = 0;
    D.questions.forEach(function (q) {
      if (!q.scores) return;
      max += 3;
      got += answers[q.id] ? answers[q.id].value : 0;
    });
    var pct = max ? Math.round(got / max * 100) : 0;

    var band = D.bands[D.bands.length - 1];
    for (var b = 0; b < D.bands.length; b++) {
      if (pct <= D.bands[b].upTo) { band = D.bands[b]; break; }
    }

    var findings = [];
    D.questions.forEach(function (q) {
      var a = answers[q.id];
      if (q.findings && a && a.value >= 2) findings.push({ v: a.value, head: q.findings.head, text: q.findings.text });
    });
    findings.sort(function (x, y) { return y.v - x.v; });
    findings = findings.slice(0, 4);
    if (!findings.length) findings.push({ head: D.clean.head, text: D.clean.text });

    var cost = euros();
    var html = '<div class="scan__score"><b>' + pct + '</b><span>' + D.scoreLabel + '<br>' + band.name + '</span></div>';
    html += '<p class="lede mt-1">' + band.text + '</p>';
    if (cost > 0) {
      html += '<div class="proof"><p class="proof__fig">' + D.currency + ' ' + cost.toLocaleString(D.locale) + '</p>' +
              '<p class="proof__label">' + D.costLabel + '</p><p class="src">' + D.costSource + '</p></div>';
    }
    html += '<div class="scan__lines">';
    findings.forEach(function (f) { html += '<div class="scan__line"><b>' + f.head + '</b><p>' + f.text + '</p></div>'; });
    html += '</div>';
    report.innerHTML = html;

    var lines = [D.scoreLabel + ': ' + pct + '/100 (' + band.name + ')'];
    if (cost > 0) lines.push(D.costLabel + ': ' + D.currency + ' ' + cost.toLocaleString(D.locale));
    D.questions.forEach(function (q) { if (answers[q.id]) lines.push(q.ask + ' ' + answers[q.id].label); });
    document.getElementById('scan-summary').value = lines.join('\n');

    show(last);
  }

  show(0);
})();
