const mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },

  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },

  // And if we need scrollbar

});




const priceItem = document.querySelectorAll('.price__item');
const mainTitle = document.querySelector('.main-text__title');
const mainItem = document.querySelectorAll('.main-text__item');
const sectionTitle = document.querySelectorAll('.section__title');

sectionTitle.forEach(item => {
  item.classList.add('wow', 'fadeInUp')
});

mainTitle.classList.add('wow', 'fadeInUp');

for (let i = 0, j = 0; i < mainItem.length, j < 0.6; i++, j = j + 0.2) {
  const element = mainItem[i];
  element.classList.add('wow', 'fadeInLeft');
  element.setAttribute('data-wow-delay', `${j}s`);

}





for (let i = 0, j = 0; i < priceItem.length, j < 1.2; i++, j = j + 0.2) {
  const element = priceItem[i];
  element.classList.add('wow', 'fadeInUp');
  element.setAttribute('data-wow-delay', `${j}s`);

}