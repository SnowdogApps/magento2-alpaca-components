'use strict';
class CookieMessage {
  constructor() {
    this.closing = document.querySelectorAll('.cookie-message__close');
    this.cookies = document.querySelectorAll('.cookie-message');

    this.start();
    this.setListeners();
  }
  closeBar(el) {
    const cookieMessage = el.currentTarget.parentElement.parentElement,
          dataType      = cookieMessage.dataset.type;

    cookieMessage.classList.remove('cookie-message--open');
    localStorage.setItem(dataType, 'closed')
  }
  setListeners() {
    this.closing.forEach(el => {
      el.addEventListener('click', this.closeBar);
    });
  }
  start() {
    this.cookies.forEach(el => {
      const dataType = el.dataset.type;
      if (localStorage.getItem(dataType) !== 'closed') {
        el.classList.add('cookie-message--open')
      }
    });
  }
}
new CookieMessage();
