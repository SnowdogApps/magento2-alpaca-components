'use strict';
const mobileBtn = document.querySelector('.wrapper-collapsible__trigger'),
      wrap = mobileBtn.parentNode.querySelector('.wrapper-collapsible__container');

function showContent() {
  const allLinksWraps = document.querySelectorAll('.wrapper-collapsible__container.open');
  if (allLinksWraps.length && !wrap.classList.contains('open')) {
    allLinksWraps.forEach(key => key.classList.remove('open'));
    wrap.classList.add('open')
  }
  else {
    wrap.classList.toggle('open');
  }
}
mobileBtn.addEventListener('click', showContent);
