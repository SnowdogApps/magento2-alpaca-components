'use strict';

(function Filters() {
  const filters = {
    init() {
      this.switcher = document.querySelector('.filters__switcher');
      this.icon = document.querySelector('.filters__switcher-icon');
      this.filters  = document.querySelector('.filters__list');
      this.switcher.addEventListener('click', this.toggle.bind(this));
    },
    toggle() {
      switch (this.switcher.dataset.stateCurrent) {
      case 'hidden':
        this.show();
        break;
      case 'display':
        this.hide();
        break
      }
    },
    show() {
      this.filters.classList.remove('filters__list--mobile-hidden');
      this.icon.classList.add('filters__switcher-icon--active');
      this.switcher.dataset.stateCurrent = 'display'
    },
    hide() {
      document.querySelector('.filters__list').classList.add('filters__list--mobile-hidden');
      this.icon.classList.remove('filters__switcher-icon--active');
      this.switcher.dataset.stateCurrent = 'hidden';
    }
  };
  filters.init();
}());

