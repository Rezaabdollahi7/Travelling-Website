import TourismMagazineContext from './Tourism_Magazine.js';
import faqContext from './faq.js';
import footerContext from './footer.js';

const mainBox = document.querySelector('main');
mainBox.innerHTML += TourismMagazineContext;
mainBox.innerHTML += faqContext;
mainBox.innerHTML += footerContext;
