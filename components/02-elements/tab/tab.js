'use strict';

(function() { // eslint-disable-line
  const tab                = [...document.querySelectorAll('.tab')],
        activeTitleClass   = 'tab__title--active',
        activeContentClass = 'tab__content--active';

  tab.forEach(element => {
    const title   = element.querySelectorAll('.tab__title'),
          content = element.querySelectorAll('.tab__content');

    title.forEach(key => key.addEventListener('click', event => {
      const self = event.currentTarget,
            tabId = self.dataset.tab;

      if (self.classList.contains(activeTitleClass)) {
        self.classList.remove(activeTitleClass);
      }
      else {
        title.forEach(key => key.classList.remove(activeTitleClass));
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
  });
})();
