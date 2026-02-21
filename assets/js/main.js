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