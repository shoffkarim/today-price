/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import '../sass/style.sass';

const swiper = new Swiper('.instagram-slider', {
  slidesPerView: 4,
  spaceBetween: 32,
  navigation: {
    nextEl: '.slider-next-btn',
    prevEl: '.slider-prev-btn',
  },
});