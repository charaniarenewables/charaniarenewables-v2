// includes.js — Charania Renewables
// Fetches /partials/nav.html and /partials/footer.html, injects them,
// then calls initSite() from main.js once both are in the DOM.

(function () {
  function loadPartial(id, url) {
    return fetch(url)
      .then(function (res) {
        if (!res.ok) throw new Error('Failed to load ' + url + ' (' + res.status + ')');
        return res.text();
      })
      .then(function (html) {
        var el = document.getElementById(id);
        if (el) el.outerHTML = html;
      });
  }

  Promise.all([
    loadPartial('site-nav',    '/partials/nav.html'),
    loadPartial('site-footer', '/partials/footer.html')
  ])
  .then(function () {
    // Both partials are now in the DOM — safe to initialise
    if (typeof initSite === 'function') initSite();
  })
  .catch(function (err) {
    console.warn('[CR includes]', err);
    // Fail gracefully — initSite still runs so page JS works even if partials fail
    if (typeof initSite === 'function') initSite();
  });
})();
