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

// Inner page hero slideshow
(function () {
  const hero = document.querySelector('.page-hero--slides');
  if (!hero) return;
  const slides = hero.querySelectorAll('.page-hero__slide');
  if (slides.length < 2) {
    if (slides.length === 1) slides[0].classList.add('is-active');
    return;
  }
  let current = 0;
  slides[current].classList.add('is-active');
  setInterval(() => {
    slides[current].classList.remove('is-active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('is-active');
  }, 4500);
})();
