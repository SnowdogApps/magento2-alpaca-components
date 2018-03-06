'use strict';

const scrollToTop = document.querySelector('.footer__scroll-top');

scrollToTop.addEventListener('click', () => {
  window.scrollTo(0, 0);
});
