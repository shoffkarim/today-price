/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import '../sass/style.sass';

const instagramSlider = new Swiper('.instagram-slider', {
  slidesPerView: 4,
  spaceBetween: 32,
  navigation: {
    nextEl: '.slider-next-btn',
    prevEl: '.slider-prev-btn',
  },
});

const commandSlider = new Swiper('.command-slider', {
  slidesPerView: 4,
  spaceBetween: 32,
  navigation: {
    nextEl: '.slider-next-btn',
    prevEl: '.slider-prev-btn',
  },
});

const reviewsSlider = new Swiper('.reviews-slider', {
  slidesPerView: 3,
  spaceBetween: 32,
  navigation: {
    nextEl: '.slider-next-btn',
    prevEl: '.slider-prev-btn',
  },
});