document.addEventListener("DOMContentLoaded", function () {
    const navbarContainer = document.getElementById("navbar-container");

    if (navbarContainer) {
        navbarContainer.innerHTML = `
<nav class="bg-[#F8153E] fixed top-0 w-full z-50 shadow-md transition-all duration-500 ease-in-out">
  <div class="max-w-screen-xl mx-auto p-4 flex flex-wrap items-center justify-between relative">
    <a href="index.html" id="nav-logo" class="flex items-center gap-2 min-w-0 max-w-[75%]">
      <img src="./img/logo.jpg" alt="Logo" class="h-8 w-8 sm:h-10 sm:w-10 object-cover rounded-full shrink-0" />
      <span class="text-base sm:text-xl font-semibold text-white whitespace-nowrap overflow-hidden text-ellipsis">
        Jain Events and Caterers
      </span>
    </a>
    <button id="menu-toggle" type="button"
      class="inline-flex items-center p-2 w-10 h-10 text-white rounded-lg md:hidden hover:bg-[#ff4d6b] focus:outline-none transition duration-300">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <div class="hidden w-full md:block md:w-auto mt-4 md:mt-0" id="navbar-default">
      <ul class="font-medium flex flex-col md:flex-row p-4 md:p-0 rounded-lg bg-[#F8153E] md:bg-transparent space-y-2 md:space-y-0 md:space-x-8 text-center transition-all">
        <li><a href="./index.html" class="text-white block py-2 px-3 md:p-0 transition hover:text-[#F2B1B8]">Home</a></li>
        <li><a href="./menu.html" class="nav_btn text-white block py-2 px-3 md:p-0 hover:text-[#F2B1B8]">Menu</a></li>
        <li class="relative group text-center md:text-left">
          <button id="services-toggle"
            class="flex items-center justify-center md:justify-start gap-1 text-white text-base font-medium hover:text-[#ffcdd3] transition duration-200 w-full md:w-auto">
            Services
            <svg class="w-4 h-4 mt-[1px]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <ul id="mobileServicesDropdown"
            class="hidden md:absolute bg-white rounded-lg text-[#F8153E] text-sm border border-[#F8153E] mt-2 md:w-52 w-[85%] mx-auto md:mx-0 shadow-md z-50">
            <li><a href="./anniversary.html" class="block px-5 py-2 hover:bg-[#ffcdd3] rounded-md">Anniversary Celebrations</a></li>
            <li><a href="./birthday.html" class="block px-5 py-2 hover:bg-[#ffcdd3] rounded-md">Birthday & Kitty Party</a></li>
            <li><a href="./corporate.html" class="block px-5 py-2 hover:bg-[#ffcdd3] rounded-md">Corporate Catering</a></li>
            <li><a href="./wedding.html" class="block px-5 py-2 hover:bg-[#ffcdd3] rounded-md">Wedding Services</a></li>
          </ul>
        </li>
        <li><a href="./about.html" class="text-white block py-2 px-3 md:p-0 transition hover:text-[#F2B1B8]">About</a></li>
        <li><a href="./contact.html" class="text-white block py-2 px-3 md:p-0 transition hover:text-[#F2B1B8]">Contact Us</a></li>
        <li><a href="./blog.html" class="text-white block py-2 px-3 md:p-0 transition hover:text-[#F2B1B8]">Blogs</a></li>
      </ul>
    </div>
  </div>
</nav>
`;

        // Add JS after navbar is injected
        const menuToggle = document.getElementById("menu-toggle");
        const navbarMenu = document.getElementById("navbar-default");
        const servicesToggle = document.getElementById("services-toggle");
        const servicesDropdown = document.getElementById("mobileServicesDropdown");

        if (menuToggle && navbarMenu) {
            menuToggle.addEventListener("click", () => {
                navbarMenu.classList.toggle("hidden");
            });
        }

        if (servicesToggle && servicesDropdown) {
            servicesToggle.addEventListener("click", () => {
                servicesDropdown.classList.toggle("hidden");
            });
        }
    }
});