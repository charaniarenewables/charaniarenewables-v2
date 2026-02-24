// NOTE: We only want "cinematic" header scroll/hover behavior on HOME.
// Inner pages must have a solid, static header.
// Mobile menu must work everywhere.

(function () {
  const header = document.getElementById("siteHeader");
  const menuBtn = document.getElementById("menuBtn");
  const mobilePanel = document.getElementById("mobilePanel");

  // Detect inner pages reliably (body class OR URL path)
  const isInnerPage =
    document.body.classList.contains("is-inner") ||
    window.location.pathname.startsWith("/pages/");

  // --- Mobile menu (ALL pages) ---
  if (menuBtn && mobilePanel) {
    menuBtn.addEventListener("click", () => {
      const open = mobilePanel.classList.toggle("is-open");

      // sync X state
      menuBtn.classList.toggle("is-open", open);

      // accessibility
      mobilePanel.setAttribute("aria-hidden", open ? "false" : "true");

      // update header style after menu toggle
      updateHeader();
    });
  }

  // Close mobile menu when any link is clicked (ALL pages)
  if (mobilePanel && menuBtn) {
    mobilePanel.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobilePanel.classList.remove("is-open");
        menuBtn.classList.remove("is-open");
        mobilePanel.setAttribute("aria-hidden", "true");
        document.body.classList.remove("menu-open");
        updateHeader();
      });
    });
  }

  // Mobile accordion: only one <details> open at a time (ALL pages)
  if (mobilePanel) {
    const groups = mobilePanel.querySelectorAll("details");
    groups.forEach((d) => {
      d.addEventListener("toggle", () => {
        if (d.open) {
          groups.forEach((other) => {
            if (other !== d) other.removeAttribute("open");
          });
        }
      });
    });
  }

  // --- Header behavior (HOME vs INNER) ---
  function updateHeader() {
    if (!header) return;

    const menuOpen = mobilePanel && mobilePanel.classList.contains("is-open");

    // INNER: always solid, never hover/scroll animated
    if (isInnerPage) {
      header.classList.add("is-scrolled");
      // prevent any "hide" class from affecting it (safe no-ops if classes don't exist)
      header.classList.remove("is-hidden", "hidden", "hide");
      return;
    }

    // HOME: your original behavior
    const scrolled = window.scrollY > 8;
    header.classList.toggle("is-scrolled", scrolled || menuOpen);
  }

  // HOME scroll listener only
  if (!isInnerPage) {
    window.addEventListener("scroll", updateHeader, { passive: true });

    // HOME hover behavior only
    if (header) {
      header.addEventListener("mouseenter", () => {
        header.classList.add("is-scrolled");
      });

      header.addEventListener("mouseleave", () => {
        const scrolled = window.scrollY > 8;
        const menuOpen = mobilePanel && mobilePanel.classList.contains("is-open");
        if (!scrolled && !menuOpen) header.classList.remove("is-scrolled");
      });
    }
  }

  // Run once on load (ALL pages)
  updateHeader();
})();