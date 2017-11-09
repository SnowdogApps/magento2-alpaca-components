'use strict';
class CookieMessage {
  constructor() {
    this.messageClose  = document.querySelector('.cookie-message__close');
    this.cookies       = document.querySelectorAll('.cookie-message');

    // todo domyslnie wylaczony, jezeli local storage nie ma wpisu to wlaczamy
    // this.setHeight();
    this.start();
    this.setListeners();
  }
  closeBar(el) {
    const cookieMessage = el.currentTarget.parentElement.parentElement,
          dataType      = cookieMessage.dataset.type;

    // if (!localStorage.getItem(dataType) !== 'closed') {
    cookieMessage.classList.remove('cookie-message--open');
    localStorage.setItem(dataType, 'closed')
    // }
  }
  setListeners() {
    this.messageClose.addEventListener('click', this.closeBar);
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
