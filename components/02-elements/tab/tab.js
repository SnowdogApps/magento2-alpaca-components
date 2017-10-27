'use strict';

const tab                = document.querySelectorAll('.tab__title'),
      content            = document.querySelectorAll('.tab__content'),
      activeTitleClass   = 'tab__title--active',
      activeContentClass = 'tab__content--active';


tab.forEach(key => key.addEventListener('click', event => {
  const self = event.target,
        tabId = self.dataset.tab;

  if (self.classList.contains(activeTitleClass)) {
    self.classList.remove(activeTitleClass);
  }
  else {
    tab.forEach(key => key.classList.remove(activeTitleClass));
    self.classList.add(activeTitleClass);
  }

  content.forEach(key => {
    if (key.dataset.content === tabId && !key.classList.contains(activeContentClass)) {
      key.classList.add(activeContentClass);
    }
    else {
      key.classList.remove(activeContentClass);
    }
  });
}));
