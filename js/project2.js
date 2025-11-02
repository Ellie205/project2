const navbarToggler = document.querySelector(".navbar-toggler");
const navbarIcon = navbarToggler.querySelector(".navbar-icon");
let menuOpen = false;

navbarToggler.addEventListener("click", () => {
  navbarIcon.classList.toggle("bi-list");
  navbarIcon.classList.toggle("bi-x");
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 3,
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});