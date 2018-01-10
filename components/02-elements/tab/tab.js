'use strict';

(function() { // eslint-disable-line
  const tab                = [...document.querySelectorAll('.tab')],
        activeTitleClass   = 'tab__title--active',
        activeContentClass = 'tab__content--active';

  tab.forEach(element => {
    const children = Array.from(element.children);
    
    children.forEach(item => {

      if (item.classList.contains('tab__title')) {
        item.addEventListener('click', (e) => {
          const self = e.currentTarget,
                tabId = self.dataset.tab;

          if (!self.classList.contains(activeTitleClass)) {
            children.forEach(key => {
              key.classList.remove(activeTitleClass);
              key.classList.remove(activeContentClass);

              if (key.dataset.content === tabId &&
                  key.classList.contains('tab__content')) {
                item.classList.add(activeTitleClass);
                key.classList.add(activeContentClass);
              }
            });
          }
        });
      }
    });
  });
})();

