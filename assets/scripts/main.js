// Membuat sticky Header
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Membuat class active pada nav-lists
const articleSections = document.querySelectorAll(".article[id]");
const navLinks = document.querySelectorAll("header .nav-lists li a");
window.addEventListener("scroll", () => {
  // Mengatur posisi halaman
  articleSections.forEach((current) => {
    if (window.scrollY >= current.offsetTop - 80) {
      currentArticle = current.id;
    }
  });
  // Mencocok posisi halaman dengan nav-lists
  navLinks.forEach((current) => {
    if (current.href.includes(currentArticle)) {
      document.querySelector(".active").classList.remove("active");
      current.classList.add("active");
    }
  });
});

// Membuat Toggle Class menu-btn dan nav-lists ketika responsive
const menuBtn = document.querySelector(".nav-extras .menu-btn");
const navbar = document.querySelector("header .nav-lists");
// Ketika menu-btn diklik ...
menuBtn.onclick = () => {
  // Merubah icon menu-btn
  menuBtn.classList.toggle("active");
  // Membuka/menutup dropdown navbar
  navbar.classList.toggle("open");
};
// Ketika yang diklik bukan area menu-btn dan navbar
// maka akan menutup dropdown navbar
document.addEventListener("click", function (e) {
  if (!menuBtn.contains(e.target) && !navbar.contains(e.target)) {
    menuBtn.classList.remove("active");
    navbar.classList.remove("open");
  }
});

// Konfigurasi Swiper JS
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
