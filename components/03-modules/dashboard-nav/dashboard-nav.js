'use strict'

const content    = document.querySelector('.dashboard-nav__content'),
      mobileNav  = document.querySelector('.dashboard-nav__mobile');

mobileNav.addEventListener('click', () => {
  mobileNav.classList.toggle('dashboard-nav__mobile--active');
  content.classList.toggle('dashboard-nav__content--visible');
});
