const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");
const shortNav = document.querySelector(".shortNav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
  shortNav.classList.toggle("showNav");
});
shortNav.addEventListener("click", () => {
  shortNav.classList.toggle("showNav");
});

function closeMobileMenu() {
  nav.classList.remove("show");
}
