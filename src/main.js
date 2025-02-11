//TODO: ================== HEADER ==================
//* Find elements
const burgerBtnEL = document.querySelector('.menu-burger-btn');
const burgerIcon = document.querySelector('.burger-btn-icon');
const backdropEl = document.querySelector('.menu-backdrop');
const closeMenuBtn = document.querySelector('.mobile-menu-close-btn');

const menuBtn = document.querySelector('.menu-title');
const headerNavEl = document.querySelector('.header-nav');

//* Event listeners
burgerBtnEL.addEventListener('click', event => {
    burgerIcon.classList.add('rotated');
    backdropEl.classList.add('is-open');

    closeMenuBtn.removeEventListener('click', onCloseMenuClick)
    closeMenuBtn.addEventListener('click', onCloseMenuClick)
})

menuBtn.addEventListener('click', event => {
    headerNavEl.classList.toggle('is-shown');
})

//* Function
const onCloseMenuClick = event => {
    backdropEl.classList.remove('is-open');
    burgerIcon.classList.remove('rotated');
} 

//TODO: ================== /HEADER ==================