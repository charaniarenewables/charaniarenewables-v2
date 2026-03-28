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


// ─── Hero text reveal ───────────────────────────────────────────────────────
// Blank hero on load, then slide entire inner content up from below
(function () {
  document.querySelectorAll('.snap-hero').forEach(function (hero) {
    // Find the inner content wrapper — works for both home and inner pages
    var inner = hero.querySelector('.snap-hero__inner, .hero-cine__inner');
    if (!inner) return;

    // Hide immediately before paint
    inner.style.opacity = '0';
    inner.style.transform = 'translateX(-40px)';
    inner.style.transition = 'opacity .8s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1)';

    // Also strip any reveal-* classes from direct hero children
    // so IntersectionObserver doesn't fire them separately
    hero.querySelectorAll('[class*="reveal-"]').forEach(function (el) {
      el.classList.remove('reveal-left','reveal-right','reveal-up',
        'reveal-fade','reveal-punch',
        'reveal-delay-0','reveal-delay-1','reveal-delay-2',
        'reveal-delay-3','reveal-delay-4');
      el.classList.add('is-revealed'); // mark as done so observer skips
    });

    // Reveal after a short breath — feels intentional, not instant
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        setTimeout(function () {
          inner.style.opacity = '1';
          inner.style.transform = 'translateY(0)';
        }, 120);
      });
    });
  });
})();

// ─── Number counter animation ────────────────────────────────────────────────
(function () {
  var done = new Set();

  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  function animateCounter(el) {
    if (done.has(el)) return;
    done.add(el);
    var raw = el.getAttribute('data-count');
    if (!raw) return;
    var target   = parseFloat(raw);
    var decimals = parseInt(el.getAttribute('data-decimals') || '0');
    var prefix   = el.getAttribute('data-prefix') || '';
    var suffix   = el.getAttribute('data-suffix') || '';
    var duration = 1400;
    var start    = null;

    function tick(now) {
      if (!start) start = now;
      var p   = Math.min((now - start) / duration, 1);
      var val = target * easeOut(p);
      var str = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString();
      el.textContent = prefix + str + suffix;
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = prefix + (decimals > 0 ? target.toFixed(decimals) : target.toLocaleString()) + suffix;
    }
    // Start from zero visually
    el.textContent = prefix + (decimals > 0 ? (0).toFixed(decimals) : '0') + suffix;
    requestAnimationFrame(tick);
  }

  var nums = document.querySelectorAll('[data-count]');

  // Blank all counter elements immediately so static text never shows
  nums.forEach(function (el) {
    var prefix  = el.getAttribute('data-prefix') || '';
    var suffix  = el.getAttribute('data-suffix') || '';
    var decimals = parseInt(el.getAttribute('data-decimals') || '0');
    el.textContent = prefix + (decimals > 0 ? (0).toFixed(decimals) : '0') + suffix;
  });

  if (!('IntersectionObserver' in window)) {
    nums.forEach(function (el) { animateCounter(el); });
    return;
  }

  var counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  nums.forEach(function (el) { counterObserver.observe(el); });
})();

// ─── Email// ─── Email obfuscation ───────────────────────────────────────────────────────
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
