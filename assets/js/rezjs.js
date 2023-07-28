// add active class to accordion-header when click on accordionButtons (for change border-radius)
const accordionButtons = document.querySelectorAll('.accordion-button');
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
        accordionHeaders[index].classList.toggle('active');
    });
});