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
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // mobile menu
  if (menuBtn && mobilePanel) {
    menuBtn.addEventListener("click", () => {
      mobilePanel.classList.toggle("is-open");
      mobilePanel.setAttribute("aria-hidden", mobilePanel.classList.contains("is-open") ? "false" : "true");
    });
  }
})();