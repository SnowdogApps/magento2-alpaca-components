(function() {

  'use strict';
  const popupsButtons = [...document.querySelectorAll('.popup-trigger')],
        popupSelector = '.popup';

  class Popup {
    constructor(button, popup = popupSelector) {
      this.button = button;
      this.buttonId = button.dataset.popuptrigger;
      this.popup = document.querySelector(`${popup}[data-popup=${this.buttonId}]`);
      this.popupContent = this.popup.querySelector('.popup__content');
      this.active = 'popup--active';
      this.fullWidth = 'popup--full-width';
      this.body = document.querySelector('body');
      this.closeButton = this.popup.querySelector('.popup__close-button');

      this.button.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggle();
      });

      this.closeButton.addEventListener('click', () => {
        this.hide();
      });

      window.addEventListener('resize', () => {
        this.position();
      });

      window.addEventListener('click', (e) => {
        if ((e.target !== this.button) && (!this.popup.contains(e.target))) {
          if (this.isActive()) {
            this.hide();
          }
        }
      });
    }

    toggle() {
      if (this.isActive()) {
        this.hide();
      }
      else {
        this.show();
      }
    }

    show() {
      this.popup.classList.add(this.active);
      this.popup.open = true;
      this.popupContent.focus();
      this.position();
      window.addEventListener('keydown', this.keyboardClosePopup.bind(this));
    }

    hide() {
      this.popup.classList.remove(this.active);
      this.button.focus();
      this.popup.open = false;
    }

    position() {
      const buttonCoords = this.button.getBoundingClientRect();
      this.popup.style.setProperty('top', `${buttonCoords.height + buttonCoords.top}px`, '');
      this.popup.style.setProperty('left', `${buttonCoords.left}px`);
      this.isOutOfscreen();
    }

    isOutOfscreen() {
      const popupContentCoords = this.popup.getBoundingClientRect();

      if (window.matchMedia('(max-width: 480px)').matches) {
        this.popup.classList.add(this.fullWidth);
        this.popup.style.setProperty('left', 0);
      }
      else if (popupContentCoords.right >= this.body.clientWidth) {
        this.popup.classList.remove(this.fullWidth);
        this.popup.style.setProperty('right', 0);
        this.popup.style.setProperty('left', 'auto');
      }
    }

    isActive() {
      return this.popup.classList.contains(this.active);
    }

    keyboardClosePopup(event) {
      if (event.which === 27) {
        if (this.isActive()) {
          event.preventDefault();
          this.hide();
        }
      }
    }
  }

  popupsButtons.forEach(popupButton => {
    new Popup(popupButton);
  });
}());
