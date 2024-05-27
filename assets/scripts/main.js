// Kelas yang menangani navigasi
class NavigationHandler {
  constructor() {
    // Mendapatkan elemen-elemen yang diperlukan
    this.header = document.querySelector("header");
    this.articleSections = document.querySelectorAll(".article[id]");
    this.navLinks = document.querySelectorAll("header .nav-lists li a");
    this.menuBtn = document.querySelector(".nav-extras .menu-btn");
    this.navbar = document.querySelector("header .nav-lists");
    this.currentArticle = "";

    // Inisialisasi event listeners
    this.init();
  }

  // Metode untuk menginisialisasi event listeners
  init() {
    window.addEventListener("scroll", () => this.onScroll());
    this.menuBtn.onclick = () => this.toggleMenu();
    document.addEventListener("click", (e) => this.onClickOutside(e));
  }

  // Metode yang dipanggil saat halaman di-scroll
  onScroll() {
    this.toggleStickyHeader(); // Menambahkan atau menghapus class sticky pada header
    this.updateActiveNavLink(); // Mengupdate nav-link yang aktif berdasarkan posisi artikel
  }

  // Menambahkan atau menghapus class sticky pada header
  toggleStickyHeader() {
    this.header.classList.toggle("sticky", window.scrollY > 0);
  }

  // Mengupdate nav-link yang aktif berdasarkan posisi artikel
  updateActiveNavLink() {
    // Memeriksa posisi setiap artikel dan menetapkan artikel saat ini
    this.articleSections.forEach((current) => {
      if (window.scrollY >= current.offsetTop - 80) {
        this.currentArticle = current.id;
      }
    });

    // Mengupdate class active pada nav-link yang sesuai dengan artikel saat ini
    this.navLinks.forEach((current) => {
      if (current.href.includes(this.currentArticle)) {
        document.querySelector(".active").classList.remove("active");
        current.classList.add("active");
      }
    });
  }

  // Menangani klik pada tombol menu untuk membuka/menutup navbar
  toggleMenu() {
    this.menuBtn.classList.toggle("active");
    this.navbar.classList.toggle("open");
  }

  // Menangani klik di luar navbar untuk menutup navbar dan menghapus class active pada tombol menu
  onClickOutside(event) {
    if (
      !this.menuBtn.contains(event.target) &&
      !this.navbar.contains(event.target)
    ) {
      this.navbar.classList.remove("open");
      this.menuBtn.classList.remove("active");
    }
  }
}

// Membuat instance dari NavigationHandler saat dokumen siap
document.addEventListener("DOMContentLoaded", () => {
  new NavigationHandler();
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
