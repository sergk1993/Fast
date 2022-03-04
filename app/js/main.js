const headerBtn = document.querySelector('.header-btn');
const hideNavMenu = document.querySelector('.header-nav');

headerBtn.addEventListener('click', function() {
    this.classList.toggle('active-btn');
    hideNavMenu.classList.toggle('active-nav');
});




