const popularSwiper = new Swiper(".swiper-popular__slider", {
  speed: 800,
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  },
});
const presellSwiper = new Swiper(".swiper-presell__slider", {
  speed: 800,
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  },
});
