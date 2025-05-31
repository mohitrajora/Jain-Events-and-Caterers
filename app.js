document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar-default");
  const navLogo = document.getElementById("nav-logo");
  const navButtons = document.querySelectorAll(".nav_btn");

  // Toggle mobile menu & center logo
  toggleBtn.addEventListener("click", () => {
    navbar.classList.toggle("hidden");
    navLogo.classList.toggle("mx-auto");
    navLogo.classList.toggle("md:mx-0");
  });

  // Highlight clicked nav button
  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      navButtons.forEach(b => {
        b.classList.remove("text-[#F2B1B8]");
        b.classList.add("text-white");
      });
      btn.classList.remove("text-white");
      btn.classList.add("text-[#F2B1B8]");
    });
  });

  // Swiper initialization
  const swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });
});
