/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import '../sass/style.sass';
import CustomFile from './modules/customFile';
import CustomSelect from './modules/customSelect';
import Menu from './modules/menu';
import Anchor from './modules/anchor';
import Lk from './modules/lk';
import popupCallback from './modules/popupCallback';

const customSelect = new CustomSelect();
const customfile = new CustomFile();
const menu = new Menu();
const anchor = new Anchor();
const lk = new Lk();
const popupcallback = new PopupCallback();

const instagramSlider = new Swiper('.instagram-slider', {
  slidesPerView: 4,
  spaceBetween: 32,
  navigation: {
    nextEl: '.slider-next-btn',
    prevEl: '.slider-prev-btn',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    850: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1100: {
      slidesPerView: 4,
      spaceBetween: 32
    }
  }
});

const commandSlider = new Swiper('.command-slider', {
  slidesPerView: 4,
  spaceBetween: 32,
  navigation: {
    nextEl: '.slider-next-btn',
    prevEl: '.slider-prev-btn',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    850: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1100: {
      slidesPerView: 4,
      spaceBetween: 32
    }
  }
});

const reviewsSlider = new Swiper('.reviews-slider', {
  slidesPerView: 3,
  spaceBetween: 32,
  navigation: {
    nextEl: '.slider-next-btn',
    prevEl: '.slider-prev-btn',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 32
    }
  }
});

const clientsSlider = new Swiper('.clients-slider', {
  slidesPerView: 4,
  spaceBetween: 32,
  navigation: {
    nextEl: '.slider-next-btn',
    prevEl: '.slider-prev-btn',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    850: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1100: {
      slidesPerView: 4,
      spaceBetween: 32
    }
  }
});