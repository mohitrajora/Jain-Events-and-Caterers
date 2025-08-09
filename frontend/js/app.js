document.addEventListener("DOMContentLoaded", function () {
  const navLogo = document.getElementById("nav-logo");
  const navButtons = document.querySelectorAll(".nav_btn");

  // Close menu on mobile after clicking a nav link + highlight
  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      if (window.innerWidth < 768 && navbar && navLogo) {
        navbar.classList.add("hidden");
        navLogo.classList.add("mx-auto");
        navLogo.classList.remove("md:mx-0");
      }

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

  // Stat counter animation
  const counters = document.querySelectorAll('[data-target]');
  let animated = false;

  function animateCounters() {
    const duration = 2000;
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const startTime = performance.now();

      const update = (time) => {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(progress * target);
        counter.innerText = `${value}+`;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          counter.innerText = `${target}+`;
        }
      };

      requestAnimationFrame(update);
    });
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        animateCounters();
        observer.disconnect();
      }
    });
  }, { threshold: 0.1 });

  const statsSection = document.getElementById('stats-section');
  if (statsSection) observer.observe(statsSection);
});
