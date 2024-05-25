const header = document.querySelector("header");
const navbar = document.querySelector("header .nav-lists");
const navLinks = document.querySelectorAll("header .nav-lists li a");
const menuBtn = document.querySelector(".nav-extras .menu-btn");
const articleSections = document.querySelectorAll(".article[id]");

window.addEventListener("scroll", () => {
  // Sticky Header
  header.classList.toggle("sticky", window.scrollY > 0);

  // Nav Links Active
  articleSections.forEach((current) => {
    if (window.scrollY >= current.offsetTop - 80) {
      currentArticle = current.id;
    }
  });
  // console.log(currentArticle);

  navLinks.forEach((current) => {
    if (current.href.includes(currentArticle)) {
      document.querySelector(".active").classList.remove("active");
      current.classList.add("active");
    }
  });
});
menuBtn.onclick = () => {
  menuBtn.classList.toggle("active");
  navbar.classList.toggle("open");
};
// Config Swiper JS
var swiper = new Swiper(".menu-slider", {
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
    nextEl: ".menu-slider .swiper-button-next",
    prevEl: ".menu-slider .swiper-button-prev",
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
