class Modal {
  constructor() {
    this.triggers = document.querySelectorAll('.modal-trigger');
    this.init();
  }

  trap(e, modal) {
    if (e.which == 27) {
      this.closeModal(modal);
    }
    if (e.which == 9) {
      let currentFocus = document.activeElement;
      let totalOfFocusable = modal.focusableChildren.length;
      let focusedIndex = modal.focusableChildren.indexOf(currentFocus);
      if (e.shiftKey) {
        if (focusedIndex === 0) {
          e.preventDefault();
          modal.focusableChildren[totalOfFocusable - 1].focus();
        }
      }
      else {
        if (focusedIndex == totalOfFocusable - 1) {
          e.preventDefault();
          modal.focusableChildren[0].focus();
        }
      }
    }
  }

  openModal(modal) {
    modal.el.classList.add('modal--active');
    modal.focusableChildren = Array.from(modal.el.querySelectorAll(modal.focusable));
    modal.focusableChildren[0].focus();
    modal.el.addEventListener('keydown', (e) => {
      this.trap(e, modal);
    });
  }

  closeModal(modal) {
    modal.el.classList.remove('modal--active');
    modal.focused.focus();
  }

  setListeners() {
    this.triggers.forEach(trigger => {
      const modal = {};
            modal.triggerId   = trigger.dataset.modaltrigger,
            modal.el          = document.querySelector(`.modal[data-modal=${modal.triggerId}]`),
            modal.content     = modal.el.querySelector('.modal__content'),
            modal.closeButton = modal.el.querySelector('.modal__close-button'),
            modal.focusable   = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), object, embed, *[tabindex], *[contenteditable]',
            modal.focused     = '';

      /// When the user clicks on trigger, open the modal
      trigger.addEventListener('click',
        () => this.openModal(modal)
      );

      // When the user clicks on button (x), close the modal
      if (modal.closeButton) {
        modal.closeButton.addEventListener('click',
          () => this.closeModal(modal)
        );
      }

      // When the user clicks anywhere outside of the modal, close the modal
      window.addEventListener('click', (e) => {
        if (e.target === modal.el
          && modal.el.classList.contains('modal--active')
          && !modal.content.contains(e.target)
        ) {
          this.closeModal(modal)
        }
      });

      // When the user push escape, close the modal
      window.addEventListener('keydown', (e) => {
        if (e.which === 27
          && modal.el.classList.contains('modal--active')
        ) {
          this.closeModal(modal)
        }
      });
    })
  }

  init() {
    this.setListeners();
  }
}

new Modal();
