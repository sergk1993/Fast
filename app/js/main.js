window.addEventListener('load', function () {
  const headerBtn = document.querySelector('.header-btn');
  const hideNavMenu = document.querySelector('.header-nav');

  headerBtn.addEventListener('click', function () {
    this.classList.toggle('active-btn');
    hideNavMenu.classList.toggle('active-nav');
  });


  const swiper = new Swiper('.park', {
    loop: true,
    grabCursor: true,
    slidesPerView: 1,
    lazy: true,
    preloadImages: false,
    pagination: {
      el: '.park-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.park-button-next',
      prevEl: '.park-button-prev',
    },
  });


  /* Swiper start */
  const allSwiperBtn = document.querySelectorAll('.autopark__btn');
  const tabsItems = document.querySelectorAll('.autopark__swiper');


  allSwiperBtn.forEach(function (item) {
    item.addEventListener('click', function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);

      allSwiperBtn.forEach(function (item) {
        item.classList.remove('active-swiper-btn');
      });

      tabsItems.forEach(function (item) {
        item.classList.remove('swiper-show');
      });

      currentBtn.classList.add('active-swiper-btn');
      currentTab.classList.add('swiper-show');
    });
  });
  /* Swiper end */

  /* Обрезание строки отзывов начало */

  Ellipsis({
    ellipsis: '…',
    debounce: 300,
    responsive: true,
    className: '.clamp',
    lines: 3,
    portrait: null,
    break_word: false,
  });
  /* Обрезание строки отзывов  конец */

/* модальное окно начало */
  const modalBtns = document.querySelectorAll('.btn');
  const modalsBg = document.querySelector('.modal');
  const modalsForm = document.querySelector('.modal__form');
  const closseModal = document.querySelector('.modal__close');

  modalBtns.forEach(function (el) {
    el.addEventListener('click', function (e) {
      modalsBg.classList.add('modal-active-2');
      modalsForm.classList.add('modal-active-1');
    });
  })

  closseModal.addEventListener('click', function () {
    modalsBg.classList.remove('modal-active-2');
    modalsForm.classList.remove('modal-active-1');
  });

  document.addEventListener('click', function(e) {
      if (e.target === modalsBg) {
        modalsBg.classList.remove('modal-active-2');
        modalsForm.classList.remove('modal-active-1');
      }
  });
/* модальное окно конец */



/* прокрутка по якорям начало */
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function(event) {
    event.preventDefault();
    const blockId = anchor.getAttribute('href');

    document.querySelector('' + blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  })
}
/* прокрутка по якорям конец */


});








