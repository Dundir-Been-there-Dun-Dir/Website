/* Dundir site behaviour: nav, reveal on first view, current section marking.
   No framework. Everything degrades to a fully readable page without it. */
(function () {
  /* --- mobile nav --- */
  var toggle = document.querySelector('.nav-toggle');
  var header = document.querySelector('.site-nav');
  if (toggle && header) {
    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && header.classList.contains('nav-open')) {
        header.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  /* --- mark the current nav item --- */
  var here = location.pathname.replace(/\/+$/, '/');
  var links = document.querySelectorAll('.site-nav__links a');
  for (var i = 0; i < links.length; i++) {
    var href = links[i].getAttribute('href') || '';
    if (href && here.indexOf(href.replace(/^\.\//, '/')) === 0 && href !== '/') {
      links[i].setAttribute('aria-current', 'page');
    }
  }

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;

  /* --- reveal bands on first view --- */
  var targets = document.querySelectorAll('.section > .container > *, .page-hero .container > *');
  for (var t = 0; t < targets.length; t++) targets[t].classList.add('reveal');

  var io = new IntersectionObserver(function (entries) {
    for (var e = 0; e < entries.length; e++) {
      if (!entries[e].isIntersecting) continue;
      var el = entries[e].target;
      var delay = Math.min(3, Array.prototype.indexOf.call(el.parentNode.children, el)) * 60;
      setTimeout(function (node) {
        return function () { node.classList.add('is-in'); };
      }(el), delay);
      io.unobserve(el);
    }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

  for (var k = 0; k < targets.length; k++) io.observe(targets[k]);
})();
