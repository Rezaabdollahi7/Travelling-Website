import header from './header.js'
import popTours from './pop-tours.js'
import TourismMagazineContext from './Tourism_Magazine.js';
import faqContext from './faq.js';
import footerContext from './footer.js';
import newsletter from './newsletter.js';
import tour_classification from './tour_classification.js';
import featursContext from './featurs.js';
import suggested_destinations from './suggested_destinations.js';
// const scrollContainer = document.querySelector(".slideshow-container");


const mainBox = document.querySelector('main');
mainBox.innerHTML += header;
mainBox.innerHTML += popTours;
mainBox.innerHTML+=featursContext;
mainBox.innerHTML+=tour_classification;
mainBox.innerHTML+=suggested_destinations;
mainBox.innerHTML+=newsletter;
mainBox.innerHTML += TourismMagazineContext;
mainBox.innerHTML += faqContext;
mainBox.innerHTML += footerContext;

// scrollContainer.addEventListener("wheel", (evt) => {
//     evt.preventDefault();
//     scrollContainer.scrollLeft += evt.deltaY;
// });

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

const menuOpen = document.querySelector('.openMenu');
menuOpen.addEventListener('click', ()=>{
    const menu = document.querySelector('.openedMenu');
    menu.classList.toggle('menuISopen');
    menuOpen.style.transform = menu.classList.contains('menuISopen') ? 'rotateZ(180deg)' : 'rotateZ(0deg)';
})


// add active class to accordion-header when click on accordionButtons (for change border-radius)
const accordionButtons = document.querySelectorAll('.accordion-button');
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
        accordionHeaders[index].classList.toggle('active');
    });
});