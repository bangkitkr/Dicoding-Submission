const header = document.querySelector("header");
const navbarOpen = document.querySelector("header .nav-lists");
const menuBtn = document.querySelector(".nav-extras .menu-btn");

// Sticky Header
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});
menuBtn.onclick = () => {
  menuBtn.classList.toggle("active");
  navbarOpen.classList.toggle("open");
};
// Config Swiper JS
var swiper = new Swiper(".product-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  // loop: true,
  loopFillGroupWithBlank: true,
  centerSlide: "true",
  grabCursor: "true",
  fade: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    DynamicsBullets: true,
  },
  navigation: {
    nextEl: ".product-slider .swiper-button-next",
    prevEl: ".product-slider .swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
