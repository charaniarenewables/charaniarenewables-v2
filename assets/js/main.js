// main.js — Charania Renewables V2
// Scroll-reveal animations removed — content always visible.
// Keeps: mobile menu, header behaviour, inner page hero slideshow.

(function () {
  const header      = document.getElementById('siteHeader');
  const menuBtn     = document.getElementById('menuBtn');
  const mobilePanel = document.getElementById('mobilePanel');

  const isInnerPage =
    document.body.classList.contains('is-inner') ||
    window.location.pathname.startsWith('/pages/');

  // Mobile menu
  if (menuBtn && mobilePanel) {
    menuBtn.addEventListener('click', () => {
      const open = mobilePanel.classList.toggle('is-open');
      document.body.classList.toggle('menu-open', open);
      menuBtn.classList.toggle('is-open', open);
      mobilePanel.setAttribute('aria-hidden', open ? 'false' : 'true');
      updateHeader();
    });
  }

  if (mobilePanel && menuBtn) {
    mobilePanel.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobilePanel.classList.remove('is-open');
        menuBtn.classList.remove('is-open');
        mobilePanel.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('menu-open');
        updateHeader();
      });
    });
  }

  if (mobilePanel) {
    const groups = mobilePanel.querySelectorAll('details');
    groups.forEach((d) => {
      d.addEventListener('toggle', () => {
        if (d.open) groups.forEach((o) => { if (o !== d) o.removeAttribute('open'); });
      });
    });
  }

  // Header behaviour
  function updateHeader() {
    if (!header) return;
    const menuOpen = mobilePanel && mobilePanel.classList.contains('is-open');
    if (isInnerPage) {
      header.classList.add('is-scrolled');
      header.classList.remove('is-hidden', 'hidden', 'hide');
      return;
    }
    const scrolled = window.scrollY > 8;
    header.classList.toggle('is-scrolled', scrolled || menuOpen);
  }

  if (!isInnerPage) {
    window.addEventListener('scroll', updateHeader, { passive: true });
    if (header) {
      header.addEventListener('mouseenter', () => header.classList.add('is-scrolled'));
      header.addEventListener('mouseleave', () => {
        if (window.scrollY <= 8 && !(mobilePanel && mobilePanel.classList.contains('is-open'))) {
          header.classList.remove('is-scrolled');
        }
      });
    }
  }

  updateHeader();
})();



// ─── Scroll progress bar ─────────────────────────────────────────────────────
(function () {
  var fill = document.getElementById('scrollFill');
  var bar  = document.getElementById('scrollProgress');
  if (!fill || !bar) return;

  function update() {
    var d = document.documentElement.scrollHeight - window.innerHeight;
    fill.style.height = (d > 0 ? Math.min(window.scrollY / d * 100, 100) : 0) + '%';
    // Light/dark colour swap
    var light = false;
    document.querySelectorAll('.snap-section[data-theme="light"]').forEach(function (s) {
      var r = s.getBoundingClientRect();
      if (r.top <= window.innerHeight / 2 && r.bottom >= window.innerHeight / 2) light = true;
    });
    bar.classList.toggle('on-light', light);
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();

// ─── Scroll reveal animations (IntersectionObserver) ────────────────────────
(function () {
  // Opt in — elements visible by default without JS
  document.body.classList.add('js-anim');

  // Hero elements fire immediately
  document.querySelectorAll('.snap-hero [class*="reveal-"]').forEach(function (el) {
    el.classList.add('is-revealed');
  });

  if (!('IntersectionObserver' in window)) {
    // Fallback — just show everything
    document.querySelectorAll('[class*="reveal-"]').forEach(function (el) {
      el.classList.add('is-revealed');
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target); // fire once only
      }
    });
  }, {
    threshold: 0.12,   // element 12% visible before firing
    rootMargin: '0px 0px -40px 0px'  // slight bottom offset — feels natural
  });

  document.querySelectorAll('[class*="reveal-"]').forEach(function (el) {
    // Skip hero elements — already revealed above
    if (!el.closest('.snap-hero')) {
      observer.observe(el);
    }
  });
})();

// ─── Email obfuscation ───────────────────────────────────────────────────────
(function () {
  var addr = ['mai', 'lto:mail@', 'charaniarenewables.com'].join('');
  var text = 'mail@charaniarenewables.com';
  ['site-email', 'site-email-footer'].forEach(function (id) {
    var e = document.getElementById(id);
    if (e) {
      var a = document.createElement('a');
      a.href = addr;
      a.textContent = text;
      a.style.color = 'inherit';
      e.appendChild(a);
    }
  });
})();
