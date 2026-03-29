// home.js — Charania Renewables
// Homepage-specific scripts: scroll progress, hero slideshow, section reveal.
// Loaded only on index.html — do not include on inner pages.

// ─── Scroll progress bar ──────────────────────────────────────────────────────
(function () {
  var fill = document.getElementById('scrollFill');
  var bar  = document.getElementById('scrollProgress');
  if (!fill || !bar) return;

  function upd() {
    var d = document.documentElement.scrollHeight - window.innerHeight;
    fill.style.height = (d > 0 ? Math.min(window.scrollY / d * 100, 100) : 0) + '%';
    var light = false;
    document.querySelectorAll('.snap-section[data-theme="light"]').forEach(function (s) {
      var r = s.getBoundingClientRect();
      if (r.top <= window.innerHeight / 2 && r.bottom >= window.innerHeight / 2) light = true;
    });
    bar.classList.toggle('on-light', light);
  }

  window.addEventListener('scroll', upd, { passive: true });
  upd();
})();


// ─── Hero slideshow ───────────────────────────────────────────────────────────
(function () {
  var slides  = document.querySelectorAll('.hero-cine__slide');
  var panels  = document.querySelectorAll('.hero-panel');
  var dots    = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;

  var current = 0;
  var timer;

  function goTo(idx) {
    slides.forEach(function (s, i) {
      s.style.opacity   = i === idx ? '1' : '0';
      s.style.transform = i === idx ? 'scale(1.0)' : 'scale(1.06)';
    });
    panels.forEach(function (p, i) { p.classList.toggle('is-active', i === idx); });
    dots.forEach(function (d, i)   { d.classList.toggle('is-active', i === idx); });
    current = idx;
  }

  // Disable transitions, snap to initial state
  slides.forEach(function (s, i) {
    s.style.transition = 'none';
    s.style.opacity    = i === 0 ? '1' : '0';
    s.style.transform  = i === 0 ? 'scale(1.0)' : 'scale(1.06)';
  });

  // Enable transitions and start autoplay after paint
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      slides.forEach(function (s) {
        s.style.transition = 'opacity .9s ease, transform 7s ease';
      });
      timer = setInterval(function () { goTo((current + 1) % slides.length); }, 5500);
    });
  });

  dots.forEach(function (d) {
    d.addEventListener('click', function () {
      clearInterval(timer);
      goTo(parseInt(d.dataset.idx));
      timer = setInterval(function () { goTo((current + 1) % slides.length); }, 5500);
    });
  });
})();


// ─── Section reveal (scroll-snap, Pylontech-style) ───────────────────────────
(function () {
  var sections = document.querySelectorAll('.snap-section');
  if (!sections.length) return;

  sections.forEach(function (s) {
    if (!s.classList.contains('snap-hero')) s.classList.add('curtain');
  });

  document.body.classList.add('js-anim');

  var hero = document.querySelector('.snap-hero');
  if (hero) hero.classList.add('in-view');

  function getActiveSection() {
    var best = null, bestVisible = -1, vh = window.innerHeight;
    sections.forEach(function (s) {
      var r       = s.getBoundingClientRect();
      var visible = Math.max(0, Math.min(r.bottom, vh) - Math.max(r.top, 0));
      if (visible > bestVisible) { bestVisible = visible; best = s; }
    });
    return (bestVisible / vh >= 0.35) ? best : null;
  }

  function activateSection(s) {
    if (!s) return;
    sections.forEach(function (sec) { sec.classList.remove('in-view'); });
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { s.classList.add('in-view'); });
    });
  }

  if ('onscrollend' in window) {
    window.addEventListener('scrollend', function () {
      activateSection(getActiveSection());
    }, { passive: true });
  } else {
    var st;
    window.addEventListener('scroll', function () {
      clearTimeout(st);
      st = setTimeout(function () { activateSection(getActiveSection()); }, 120);
    }, { passive: true });
  }

  // Fallback for fast scrolls
  var rt;
  window.addEventListener('scroll', function () {
    clearTimeout(rt);
    rt = setTimeout(function () {
      var a = getActiveSection();
      if (a && !a.classList.contains('in-view')) activateSection(a);
    }, 80);
  }, { passive: true });
})();
