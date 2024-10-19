import Swiper from "swiper";
import "swiper/swiper-bundle.css"
import { Navigation, Pagination, Manipulation } from 'swiper/modules';



export function initSwiper(){


}

export const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination, Manipulation],
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    slidesPerView: 1,
    controller: {
      inverse: true,
    },
}); 