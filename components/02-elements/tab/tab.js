'use strict';

(function() { // eslint-disable-line
  const tab                = [...document.querySelectorAll('.tab')],
        activeTitleClass   = 'tab__title--active',
        activeContentClass = 'tab__content--active',
        mediaQuery         = window.matchMedia('(min-width: 768px)');

  tab.forEach(element => {
    const title   = element.querySelectorAll('.tab__title'),
          content = element.querySelectorAll('.tab__content');

    title.forEach(key => key.addEventListener('click', event => {
      const self = event.currentTarget,
            tabId = self.dataset.tab;

      if (!self.classList.contains(activeTitleClass)) {
        title.forEach(key => key.classList.remove(activeTitleClass));
        self.classList.add(activeTitleClass);
      }

      content.forEach(key => {
        if (key.dataset.content === tabId
            && !key.classList.contains(activeContentClass)) {
          content.forEach(key => key.classList.remove(activeContentClass));
          key.classList.add(activeContentClass);
        }
      });
    }));

    window.addEventListener('resize', () => {
      if (mediaQuery.matches
          && !document.querySelectorAll('.tab__title--active').length
      ) {
        title[0].classList.add('tab__title--active');
        content[0].classList.add('tab__content--active');
      }
    });
  });
})();
