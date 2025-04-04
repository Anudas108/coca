import Swiper from 'swiper';
import 'swiper/css';

export const usePostsSlider = () => {
  new Swiper('.post__swiper', {
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
        slidesPerView: 2.5,
        spaceBetween: 32,
      },
    },
  });
};