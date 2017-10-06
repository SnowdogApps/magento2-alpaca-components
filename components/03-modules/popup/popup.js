(function() {

  'use strict';

  const popupsButtons = [...document.querySelectorAll('.popup__button')];

  class Popup {
    constructor(button, popup = '.popup') {
      this.button = button;
      this.popup = this.button.parentNode.querySelector(popup);

      this.body = document.querySelector('body');

      this.active = 'popup--active';

      this.arrow = document.createElement('div');
      this.arrow.classList.add('popup__arrow');
      this.arrowSize = 21;

      this.popup.appendChild(this.arrow);
      this.arrowSelector = this.popup.querySelector('.popup__arrow');

      this.button.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggle();
      });

      window.addEventListener('resize', () => {
        this.position();
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
      this.position();
    }

    hide() {
      this.popup.classList.remove(this.active);
    }

    position() {
      const arrow        = this.arrowSelector.getBoundingClientRect(),
            buttonCoords = this.button.getBoundingClientRect();

      this.popup.style.setProperty('top', `${buttonCoords.height + arrow.height / 2}px`, '');
      this.popup.style.setProperty('left', `${buttonCoords.left}px`, '');
      this.isOutOfscreen(buttonCoords);
    }

    isOutOfscreen(buttonCoords) {
      const popupContentCoords = this.popup.getBoundingClientRect();

      if (window.matchMedia('(max-width: 480px)').matches) {
        const calcLeft = this.button.getBoundingClientRect().left * -1;

        this.popup.classList.add('popup--full-width');
        this.popup.style.setProperty('left', `${calcLeft}px`, '');

        this.arrowSetPosition(buttonCoords.width, true);
      }
      else if (popupContentCoords.right >= this.body.clientWidth) {
        this.popup.classList.remove('popup--full-width');
        this.popup.style.setProperty('right', '0', '');
        this.popup.style.setProperty('left', 'auto', '');

        this.arrowSetPosition(buttonCoords.width, true);
      }
      else {
        this.arrowSetPosition(buttonCoords.width);
      }
    }

    arrowSetPosition(buttonWidth, right = false) {
      const buttonCenter = buttonWidth / 2 - this.arrowSize / 2;

      if (right) {
        if (window.matchMedia('(max-width: 480px)').matches) {
          const buttonLeft = this.button.getBoundingClientRect().left + (buttonWidth / 2 - this.arrowSize / 2);

          this.arrow.style.setProperty('left', `${buttonLeft}px`, '');
          this.arrow.style.setProperty('right', 'auto', '');
        }
        else {
          this.arrow.style.setProperty('right', `${buttonCenter}px`, '');
          this.arrow.style.setProperty('left', 'auto', '');
        }
      }
      else {
        this.arrow.style.setProperty('left', `${buttonCenter}px`, '');
        this.arrow.style.setProperty('right', 'auto', '');
      }
    }

    isActive() {
      return this.popup.classList.contains(this.active);
    }
  }

  popupsButtons.forEach(popupButton => {
    new Popup(popupButton);
  });
}());
