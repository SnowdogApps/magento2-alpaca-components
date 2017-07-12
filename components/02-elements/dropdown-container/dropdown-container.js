'use strict';

const wrap         = document.querySelector('.dropdown-container'),
      wrapLabel    = wrap.querySelector('.dropdown-container__label'),
      wrapContent  = wrap.querySelector('.dropdown-container__content'),
      mqBreakpoint = window.matchMedia('screen and (min-width: 992px)');

function setListHeight(item) {
  return Array.from(item.children)
              .map(elem => elem.clientHeight)
              .reduce((a, b) => a + b, 0);
}

function isOpenWide() {
  return wrap.classList.contains('dropdown-container--open-wide');
}

function toggleContent() {
  if (!isOpenWide() || (isOpenWide() && !mqBreakpoint.matches)) {
    if (wrapContent && wrapContent.clientHeight > 0) {
      wrapContent.style.height = 0;
    }
    else {
      const contentHeight =  setListHeight(wrapContent);
      wrapContent.style.height = `${contentHeight}px`;
    }
  }
  wrap.classList.toggle('dropdown-container--open');
}

function bindEvents() {
  wrapLabel.addEventListener('click', toggleContent, false);

  window.addEventListener('resize', () => {
    if (isOpenWide()) {
      (mqBreakpoint.matches) ? wrapContent.style.height = 'auto' : wrapContent.style.height = 0;
      wrap.classList.remove('dropdown-container--open');
    }
  });
}

bindEvents();
