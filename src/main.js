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

  closeMenuBtn.removeEventListener('click', onCloseMenuClick);
  closeMenuBtn.addEventListener('click', onCloseMenuClick);
});

menuBtn.addEventListener('click', event => {
  headerNavEl.classList.toggle('is-shown');
});

//* Function
const onCloseMenuClick = event => {
  backdropEl.classList.remove('is-open');
  burgerIcon.classList.remove('rotated');
};
//TODO: ================== /HEADER ==================

//TODO: ================== ABOUT-ME ==================
//* Import library
import Accordion from 'accordion-js';
import Swiper from 'swiper/bundle';

//* Find elements
const arrowBtnEl = document.querySelectorAll('.ac-trigger');

document.addEventListener('DOMContentLoaded', function () {
  new Accordion('.about-accordion-list', {
    duration: 300,
    showMultiple: true,
    openOnInit: [0],
  });
});

document.addEventListener('DOMContentLoaded', event => {
  arrowBtnEl.forEach(el => {
    el.addEventListener('click', event => {
      el.classList.toggle('rotated-arrow');
    });
  });
});

document.addEventListener('DOMContentLoaded', event => {
  const updateSlider = swiperArr => {
    swiperArr.slides.forEach(el => {
      el.classList.remove('selected-skill');
    });

    if (swiperArr.slides[swiperArr.activeIndex]) {
      swiperArr.slides[swiperArr.activeIndex].classList.add('selected-skill');
    }
  };

  const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 6,
      },
    },
    navigation: {
      nextEl: '.swiper-about-button-wrapper',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    on: {
      init: function () {
        updateSlider(this);
      },
      slideChangeTransitionEnd: function () {
        updateSlider(this);
      },
    },
  });
});

//TODO: ================== /ABOUT-ME ==================

//TODO: ================== PROJECTS ==================
document.addEventListener('DOMContentLoaded', event => {
  const projectSwiperContainer = document.querySelector(
    '.swiper-projects-container'
  );
  const nextButton = document.querySelector('.swiper-button-next-project');
  const prevButton = document.querySelector('.swiper-button-prev-project');

  const updateProjectButtons = swiperArr => {
    nextButton.classList.remove('disabled-projects-btn');
    prevButton.classList.remove('disabled-projects-btn');

    if (swiperArr.activeIndex === 0) {
      prevButton.classList.add('disabled-projects-btn');
    }

    if (swiperArr.activeIndex === 2) {
      nextButton.classList.add('disabled-projects-btn');
    }
  };

  if (projectSwiperContainer && nextButton && prevButton) {
    const ProjectSwiper = new Swiper(projectSwiperContainer, {
      direction: 'horizontal',
      loop: false,
      spaceBetween: 1000,
      slidesPerView: 1,
      navigation: {
        nextEl: nextButton,
        prevEl: prevButton,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      on: {
        init: function () {
          updateProjectButtons(this);
        },
        slideChangeTransitionEnd: function () {
          updateProjectButtons(this);
        },
      },
    });
  } else {
    console.error('Swiper elements not found in the DOM');
  }
});
//TODO: ================== /PROJECTS ==================

//TODO: ================== FAQ ==================
window.addEventListener('DOMContentLoaded', evemt => {
  new Accordion('.faq-list-accordion', {
    duration: 300,
    showMultiple: false,
    openOnInit: [],
  });

  new Accordion('.faq-list-accordion-second', {
    duration: 300,
    showMultiple: false,
    openOnInit: [],
  });
});

//TODO: ================== FAQ ==================
