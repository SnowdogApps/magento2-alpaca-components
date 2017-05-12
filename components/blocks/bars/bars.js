'use strict'

const infobarClose = document.querySelector('.infobar__close'),
      infobarTop = document.querySelector('.infobar--top'),
      infobarCookie = document.querySelector('.infobar--cookie');

function closeBar() {
  const infoBar = this.parentNode.parentNode;

  if (infoBar.classList.contains('infobar--top')) {
    localStorage.setItem('infobar-top', 1);
    infobarTop.style.height = 0;
    infobarTop.classList.add('closed');
  }
  else if (infoBar.classList.contains('infobar--cookie')) {
    localStorage.setItem('infobar-cookie', 1);
    infobarCookie.style.height = 0;
    infobarCookie.classList.add('closed');
  }
}

function setBarHeight(el) {
  el.style.height = 'auto';
  el.style.height = el.clientHeight + 'px';
}

if (infobarTop) {
  setBarHeight(infobarTop);
}

if (infobarCookie) {
  setBarHeight(infobarCookie);
}

window.addEventListener('resize', () => {
  if (infobarTop) {
    setBarHeight(infobarTop);
  }
  if (infobarCookie) {
    setBarHeight(infobarCookie);
  }
}, true);

infobarClose.addEventListener('click', closeBar);
