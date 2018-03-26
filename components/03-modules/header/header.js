'use strict';

class Header {
  constructor() {
    this.header = document.querySelector('.header')
    this.sideMenuContainer = this.header.querySelector('.side-menu');
    this.sideMenuBg = this.sideMenuContainer.querySelector('.side-menu__bg');
    this.menuTrigger = this.header.querySelector('.header__menu-trigger');
    this.init();
  }

  toggleSideMenu(el) {
    this.header.classList.toggle('header--menu-open');
    this.sideMenuContainer.classList.toggle('side-menu--is-open');
  }

  setListeners() {
    this.menuTrigger.addEventListener('click', () => {
      this.toggleSideMenu();
    });

    this.sideMenuBg.addEventListener('click', () => {
      this.toggleSideMenu();
    });
  }

  init() {
    this.setListeners();
  }
}

new Header();
