'use strict';

(function Filters() {
  const filters = {
    init() {
      this.switcher = document.querySelector('.filters__switcher');
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
      this.switcher.innerText = this.switcher.dataset.stateDisplayText;
      this.switcher.dataset.stateCurrent = 'display'
    },
    hide() {
      document.querySelector('.filters__list').classList.add('filters__list--mobile-hidden');
      this.switcher.innerText = this.switcher.dataset.stateHiddenText;
      this.switcher.dataset.stateCurrent = 'hidden';
    }
  };
  filters.init();
}());

