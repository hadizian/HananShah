const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
});


let hasAnimated = false;

swiper.on('slideChange', function () {
  if (swiper.realIndex === 0 && !hasAnimated) {
    document.getElementById('hanan-fade-text')?.classList.add('opacity-100');
    hasAnimated = true;
  }
});


  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.remove("hidden");
    } else {
      scrollToTopBtn.classList.add("hidden");
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // adjust paths based on your project
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
document.querySelectorAll('.menu-link').forEach(link => {
  link.addEventListener('click', (e) => {
    // Delay hiding the menu
    setTimeout(() => {
      document.getElementById('mobile-fullscreen-menu').classList.add('hidden');
    }, 300); // enough time for scroll to begin
  });
});

