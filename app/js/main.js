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




});