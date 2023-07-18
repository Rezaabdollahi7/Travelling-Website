import TourismMagazineContext from './Tourism_Magazine.js';
import faqContext from './faq.js';
import footerContext from './footer.js';
import newsletter from './newsletter.js';
import tour_classification from './tour_classification.js';
import featursContext from './featurs.js';
import suggested_destinations from './suggested_destinations.js';
const scrollContainer = document.querySelector(".slideshow-container");


const mainBox = document.querySelector('main');
mainBox.innerHTML+=featursContext;
mainBox.innerHTML+=tour_classification;
mainBox.innerHTML+=suggested_destinations;

mainBox.innerHTML+=newsletter;
mainBox.innerHTML += TourismMagazineContext;
mainBox.innerHTML += faqContext;
mainBox.innerHTML += footerContext;

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});


