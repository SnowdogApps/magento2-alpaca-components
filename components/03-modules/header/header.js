'use strict';

class Header {
  constructor() {
    this.header = document.querySelector('.header')
    this.sideMenuContainer = this.header.querySelector('.side-menu');
    this.menuTrigger = this.header.querySelectorAll('.header__menu-trigger');
    this.init();
  }

  toggleSideMenu(el) {
    el.currentTarget.classList.toggle('header__menu-trigger--active');
    this.header.classList.toggle('header--menu-open');
    this.sideMenuContainer.classList.toggle('side-menu--is-open');
  }

  setListeners() {
    this.menuTrigger.forEach(el => {
      el.addEventListener('click',
        el => this.toggleSideMenu(el)
      );
    });
  }

  init() {
    this.setListeners();
  }
}

new Header();
