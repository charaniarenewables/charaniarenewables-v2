if (document.body.classList.contains("is-inner")) {
  // Ensure header is always visible on inner pages
  const header = document.getElementById("siteHeader");
  if (header) header.classList.remove("is-hidden");
  return;
}

// Mobile menu toggle
const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile");

if (burger) {
  burger.addEventListener("click", () => {
    const isOpen = mobileMenu.getAttribute("data-open") === "true";
    mobileMenu.setAttribute("data-open", !isOpen);
  });
}

// Mega menu hover behavior (desktop)
document.querySelectorAll(".has-mega").forEach(item => {
  item.addEventListener("mouseenter", () => {
    item.setAttribute("data-open", "true");
  });
  item.addEventListener("mouseleave", () => {
    item.setAttribute("data-open", "false");
  });
});

// Active nav highlight
const currentPath = window.location.pathname.split("/").pop();
document.querySelectorAll(".nav a").forEach(link => {
  const linkPath = link.getAttribute("href");
  if (linkPath && linkPath.includes(currentPath)) {
    link.classList.add("active");
  }
});
(function () {
  const header = document.getElementById("siteHeader");
  const menuBtn = document.getElementById("menuBtn");
  const mobilePanel = document.getElementById("mobilePanel");

  // sticky shadow on scroll
const updateHeader = () => {
  if (!header) return;
  const scrolled = window.scrollY > 8;
  const menuOpen = mobilePanel && mobilePanel.classList.contains("is-open");
  header.classList.toggle("is-scrolled", scrolled || menuOpen);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

  // mobile menu
if (menuBtn && mobilePanel) {
  menuBtn.addEventListener("click", () => {
    const open = mobilePanel.classList.toggle("is-open");

    // sync X state
    menuBtn.classList.toggle("is-open", open);

    // accessibility
    mobilePanel.setAttribute("aria-hidden", open ? "false" : "true");

    updateHeader();
  });
}
// Close mobile menu when any link is clicked
if (mobilePanel && menuBtn) {
  mobilePanel.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobilePanel.classList.remove("is-open");
      menuBtn.classList.remove("is-open");
      mobilePanel.setAttribute("aria-hidden", "true");
      document.body.classList.remove("menu-open");
    });
  });
}

  // hover makes header go solid (desktop feel like Pylontech)
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
  // Mobile accordion: only one <details> open at a time
  
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
})();