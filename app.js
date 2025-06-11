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

  // Close menu on mobile after clicking a link
  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        navbar.classList.add("hidden");
        navLogo.classList.add("mx-auto");
        navLogo.classList.remove("md:mx-0");
      }

      // Highlight active nav item
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
  }, { threshold: 0.1 }); // Lower threshold for earlier trigger

  const statsSection = document.getElementById('stats-section');
  if (statsSection) observer.observe(statsSection);
});

// Service expand toggle
function toggleService(card) {
  card.classList.toggle('expanded');
  const extra = card.querySelector('.group > div > div');
  if (card.classList.contains('expanded')) {
    extra.classList.remove('hidden');
  } else {
    extra.classList.add('hidden');
  }
}
