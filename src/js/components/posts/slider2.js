import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useArticlesSlider = () => {
  new Swiper('.articles__slider', {
    modules: [Navigation],
    slidesPerView: 3,
    spaceBetween: 32,
    loop: true,
    breakpoints: {
      319: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      993: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
    navigation: {
      nextEl: '.articles__hero-button--next',
      prevEl: '.articles__hero-button--prev',
    },
  });
};