/* The procurement scan.

   Ten questions, scored in the browser, report rendered on the page. Nothing is
   sent anywhere unless the visitor asks for the report by email afterwards, which
   is what the copy promises and what a municipality's privacy officer will check.

   The question set, the copy and the report lines all arrive from the page as JSON
   in #scan-data, so one script serves Dutch, English and Serbian.

   Scoring: every answer carries a weight from 0 (no exposure) to 3 (fully exposed).
   The weights are summed over the seven scored questions and expressed as a
   percentage of the maximum. Questions 1, 2 and 10 describe the situation and the
   decision path; they shape the report text but do not move the score, because
   company size is not a risk and neither is owning an ERP module. */
(function () {
  var host = document.getElementById('scan');
  var raw = document.getElementById('scan-data');
  if (!host || !raw) return;

  var D;
  try { D = JSON.parse(raw.textContent); } catch (e) { return; }

  var answers = {};
  var form = host.querySelector('.scan__form');
  var fill = host.querySelector('.scan__fill');
  var count = host.querySelector('.scan__count');
  var submit = host.querySelector('.scan__submit');
  var report = host.querySelector('.scan__report');

  function scored() {
    var n = 0;
    for (var i = 0; i < D.questions.length; i++) {
      if (answers[D.questions[i].id] !== undefined) n++;
    }
    return n;
  }

  function progress() {
    var n = scored(), total = D.questions.length;
    if (fill) fill.style.width = Math.round(n / total * 100) + '%';
    if (count) count.textContent = D.progress.replace('{n}', n).replace('{total}', total);
    if (submit) submit.disabled = n < total;
  }

  form.addEventListener('change', function (e) {
    var el = e.target;
    if (el.name && el.type === 'radio') {
      answers[el.name] = { value: +el.value, label: el.getAttribute('data-label') || '' };
      progress();
    }
  });

  function euros() {
    /* buyers x hours x 46 working weeks x hourly rate, all from the answers */
    var buyers = answers.buyers ? D.buyerCount[answers.buyers.value] : 1;
    var hours = answers.hours ? D.hourCount[answers.hours.value] : 0;
    return Math.round(buyers * hours * 46 * D.rate);
  }

  function render() {
    var max = 0, got = 0;
    for (var i = 0; i < D.questions.length; i++) {
      var q = D.questions[i];
      if (!q.scores) continue;
      max += 3;
      got += answers[q.id] ? answers[q.id].value : 0;
    }
    var pct = max ? Math.round(got / max * 100) : 0;

    var band = D.bands[D.bands.length - 1];
    for (var b = 0; b < D.bands.length; b++) {
      if (pct <= D.bands[b].upTo) { band = D.bands[b]; break; }
    }

    /* the report lines: every question that scored 2 or 3 contributes its own
       finding, worst first, capped at four so the page stays readable */
    var findings = [];
    for (var j = 0; j < D.questions.length; j++) {
      var qq = D.questions[j];
      var a = answers[qq.id];
      if (!qq.findings || !a || a.value < 2) continue;
      findings.push({ v: a.value, head: qq.findings.head, text: qq.findings.text });
    }
    findings.sort(function (x, y) { return y.v - x.v; });
    findings = findings.slice(0, 4);
    if (!findings.length) findings.push({ head: D.clean.head, text: D.clean.text });

    var cost = euros();
    var html = '';
    html += '<div class="scan__score"><b>' + pct + '</b><span>' + D.scoreLabel + '<br>' + band.name + '</span></div>';
    html += '<p class="lede mt-1">' + band.text + '</p>';

    if (cost > 0) {
      html += '<div class="proof"><p class="proof__fig">' + D.currency + ' ' + cost.toLocaleString(D.locale) + '</p>' +
              '<p class="proof__label">' + D.costLabel + '</p>' +
              '<p class="src">' + D.costSource + '</p></div>';
    }

    html += '<div class="scan__lines">';
    for (var f = 0; f < findings.length; f++) {
      html += '<div class="scan__line"><b>' + findings[f].head + '</b><p>' + findings[f].text + '</p></div>';
    }
    html += '</div>';

    report.innerHTML = html;
    report.hidden = false;

    /* hand the summary to the optional email form, so the visitor can send
       themselves the result without us having collected anything first */
    var summary = document.getElementById('scan-summary');
    if (summary) {
      var lines = [D.scoreLabel + ': ' + pct + '/100 (' + band.name + ')'];
      if (cost > 0) lines.push(D.costLabel + ': ' + D.currency + ' ' + cost.toLocaleString(D.locale));
      for (var s = 0; s < D.questions.length; s++) {
        var qs = D.questions[s], as = answers[qs.id];
        if (as) lines.push(qs.ask + ' ' + as.label);
      }
      summary.value = lines.join('\n');
    }

    var after = document.getElementById('scan-after');
    if (after) after.hidden = false;

    report.setAttribute('tabindex', '-1');
    report.focus({ preventScroll: false });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (scored() < D.questions.length) return;
    render();
  });

  progress();
})();
