import Swiper from 'swiper';
import 'swiper/css';

export const useOurTeamSlider = () => {
  new Swiper('.ourteam__swiper', {
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 100,
      },
      993: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
  });
};