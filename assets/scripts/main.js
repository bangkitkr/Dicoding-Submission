const header = document.querySelector("header");
const navbar = document.querySelector("header .nav-lists");
const navLinks = document.querySelectorAll("header .nav-lists li a");
const menuBtn = document.querySelector(".nav-extras .menu-btn");
const articleSections = document.querySelectorAll(".article[id]");

// Scroll Event
window.addEventListener("scroll", () => {
  // Memberi Class Sticky pada Header Ketika di scroll
  header.classList.toggle("sticky", window.scrollY > 0);

  // Menentukan dan menyocokan Class Active pada Nav-Lists berdasarkan ID Atributte Content
  articleSections.forEach((current) => {
    if (window.scrollY >= current.offsetTop - 80) {
      currentArticle = current.id;
    }
  });
  // Memberi Class Active pada Nav-lists Ketika di Scroll
  navLinks.forEach((current) => {
    if (current.href.includes(currentArticle)) {
      document.querySelector(".active").classList.remove("active");
      current.classList.add("active");
    }
  });
});
// Memberi Class Active pada menu btn dan Class Open pada nav-lists
menuBtn.onclick = () => {
  menuBtn.classList.toggle("active");
  navbar.classList.toggle("open");
};
// Menghapus Class Active pada menu btn dan Class Open pada nav-list ketika klik di luar box navbar
document.addEventListener("click", function (idx) {
  if (!menuBtn.contains(idx.target) && !navbar.contains(idx.target)) {
    navbar.classList.remove("open");
    menuBtn.classList.remove("active");
  }
});

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
