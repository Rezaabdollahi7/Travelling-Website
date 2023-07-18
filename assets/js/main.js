import header from "../../pages/header.js";
import popTours from "../../pages/pop-tours.js";
const body = document.querySelector('body');
body.innerHTML += header;
body.innerHTML += popTours;

const swiper = new Swiper('.swiperTours', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    navigation: {
        nextEl: '.nextTour',
        prevEl: '.prevTour',
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
            spaceBetween: 0
        },
        920: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        430: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        50:{
            slidesPerView: 1,
            spaceBetween: 0
        },
    }
});
