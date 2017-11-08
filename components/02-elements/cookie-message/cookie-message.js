// TO DO - Needs a refactor

'use strict';

const messageClose = document.querySelector('.cookie-message__close'),
      messageTop = document.querySelector('.cookie-message--top'),
      cookieMessage = document.querySelector('.cookie-message--cookie');

function closeBar() {
  const cookieMessage = this.parentNode.parentNode;

  if (cookieMessage.classList.contains('cookie-message--top')) {
    localStorage.setItem('cookie-message-top', 1);
    messageTop.style.height = 0;
    messageTop.classList.add('closed');
  }
  else if (cookieMessage.classList.contains('cookie-message--cookie')) {
    localStorage.setItem('cookie-message-cookie', 1);
    cookieMessage.style.height = 0;
    cookieMessage.classList.add('closed');
  }
}

function setBarHeight(el) {
  el.style.height = 'auto';
  el.style.height = el.clientHeight + 'px';
}

if (messageTop) {
  setBarHeight(messageTop);
}

if (cookieMessage) {
  setBarHeight(cookieMessage);
}

window.addEventListener('resize', () => {
  if (messageTop) {
    setBarHeight(messageTop);
  }
  if (cookieMessage) {
    setBarHeight(cookieMessage);
  }
}, true);

messageClose.addEventListener('click', closeBar);
