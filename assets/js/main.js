// main.js — Charania Renewables
// All site init is wrapped in initSite() so includes.js can call it
// after nav and footer partials are injected into the DOM.

function initSite() {

  // ─── Mobile menu + header behaviour ────────────────────────────────────────
  (function () {
    var header      = document.getElementById('siteHeader');
    var menuBtn     = document.getElementById('menuBtn');
    var mobilePanel = document.getElementById('mobilePanel');

    var isInnerPage =
      document.body.classList.contains('is-inner') ||
      window.location.pathname.startsWith('/pages/');

    // Mobile menu toggle
    if (menuBtn && mobilePanel) {
      menuBtn.addEventListener('click', function () {
        var open = mobilePanel.classList.toggle('is-open');
        document.body.classList.toggle('menu-open', open);
        menuBtn.classList.toggle('is-open', open);
        mobilePanel.setAttribute('aria-hidden', open ? 'false' : 'true');
        updateHeader();
      });
    }

    // Close panel on link click
    if (mobilePanel && menuBtn) {
      mobilePanel.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          mobilePanel.classList.remove('is-open');
          menuBtn.classList.remove('is-open');
          mobilePanel.setAttribute('aria-hidden', 'true');
          document.body.classList.remove('menu-open');
          updateHeader();
        });
      });
    }

    // Accordion — only one details open at a time
    if (mobilePanel) {
      var groups = mobilePanel.querySelectorAll('details');
      groups.forEach(function (d) {
        d.addEventListener('toggle', function () {
          if (d.open) {
            groups.forEach(function (o) { if (o !== d) o.removeAttribute('open'); });
          }
        });
      });
    }

    // Header scroll state
    function updateHeader() {
      if (!header) return;
      var menuOpen = mobilePanel && mobilePanel.classList.contains('is-open');
      if (isInnerPage) {
        header.classList.add('is-scrolled');
        return;
      }
      var scrolled = window.scrollY > 8;
      header.classList.toggle('is-scrolled', scrolled || menuOpen);
    }

    if (!isInnerPage) {
      window.addEventListener('scroll', updateHeader, { passive: true });
      if (header) {
        header.addEventListener('mouseenter', function () {
          header.classList.add('is-scrolled');
        });
        header.addEventListener('mouseleave', function () {
          if (window.scrollY <= 8 && !(mobilePanel && mobilePanel.classList.contains('is-open'))) {
            header.classList.remove('is-scrolled');
          }
        });
      }
    }

    updateHeader();
  })();


  // ─── Scroll progress bar ──────────────────────────────────────────────────
  (function () {
    var fill = document.getElementById('scrollFill');
    var bar  = document.getElementById('scrollProgress');
    if (!fill || !bar) return;

    function update() {
      var d = document.documentElement.scrollHeight - window.innerHeight;
      fill.style.height = (d > 0 ? Math.min(window.scrollY / d * 100, 100) : 0) + '%';
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


  // ─── Scroll reveal (IntersectionObserver) ────────────────────────────────
  (function () {
    document.body.classList.add('js-anim');

    // Hero elements fire immediately
    document.querySelectorAll('.snap-hero [class*="reveal-"]').forEach(function (el) {
      el.classList.add('is-revealed');
    });

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('[class*="reveal-"]').forEach(function (el) {
        el.classList.add('is-revealed');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('[class*="reveal-"]').forEach(function (el) {
      if (!el.closest('.snap-hero')) observer.observe(el);
    });
  })();


  // ─── Hero text reveal ─────────────────────────────────────────────────────
  (function () {
    document.querySelectorAll('.snap-hero').forEach(function (hero) {
      var inner = hero.querySelector('.snap-hero__inner, .hero-cine__inner');
      if (!inner) return;

      inner.style.opacity   = '0';
      inner.style.transform = 'translateX(-40px)';
      inner.style.transition = 'opacity .8s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1)';

      hero.querySelectorAll('[class*="reveal-"]').forEach(function (el) {
        el.classList.remove(
          'reveal-left', 'reveal-right', 'reveal-up',
          'reveal-fade', 'reveal-punch',
          'reveal-delay-0', 'reveal-delay-1', 'reveal-delay-2',
          'reveal-delay-3', 'reveal-delay-4'
        );
        el.classList.add('is-revealed');
      });

      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          setTimeout(function () {
            inner.style.opacity   = '1';
            inner.style.transform = 'translateY(0)';
          }, 120);
        });
      });
    });
  })();


  // ─── Number counter animation ─────────────────────────────────────────────
  (function () {
    var done = new Set();

    function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

    function animateCounter(el) {
      if (done.has(el)) return;
      done.add(el);
      var raw      = el.getAttribute('data-count');
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

      el.textContent = prefix + (decimals > 0 ? (0).toFixed(decimals) : '0') + suffix;
      requestAnimationFrame(tick);
    }

    var nums = document.querySelectorAll('[data-count]');
    nums.forEach(function (el) {
      var prefix   = el.getAttribute('data-prefix') || '';
      var suffix   = el.getAttribute('data-suffix') || '';
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


  // ─── Email obfuscation ────────────────────────────────────────────────────
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


  // ─── Footer year ─────────────────────────────────────────────────────────
  (function () {
    var el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
  })();

} // end initSite()
