const navbarToggler = document.querySelector(".navbar-toggler");
const navbarIcon = navbarToggler.querySelector(".navbar-icon");
let menuOpen = false;

navbarToggler.addEventListener("click", () => {
  navbarIcon.classList.toggle("bi-list");
  navbarIcon.classList.toggle("bi-x");
});