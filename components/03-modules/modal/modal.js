class Modal {
  constructor() {
    this.triggers = document.querySelectorAll('.modal-trigger');
    this.init();
  }

  toggleModal(modalElement) {
    modalElement.classList.toggle('modal--active')
  }

  setListeners() {
    this.triggers.forEach(trigger => {
      const triggerId           = trigger.dataset.modaltrigger,
            modalElement        = document.querySelector(`.modal[data-modal=${triggerId}]`),
            modalContentElement = modalElement.querySelector('.modal__content'),
            closeButton         = modalElement.querySelector('.modal__close-button');

      /// When the user clicks on trigger, open the modal
      trigger.addEventListener('click',
        () => this.toggleModal(modalElement)
      );

      // When the user clicks on button (x), close the modal
      if (closeButton) {
        closeButton.addEventListener('click',
          () => this.toggleModal(modalElement)
        );
      }

      // When the user clicks anywhere outside of the modal, close the modal
      window.addEventListener('click', (e) => {
        if (e.target === modalElement
          && modalElement.classList.contains('modal--active')
          && !modalContentElement.contains(e.target)
        ) {
          this.toggleModal(modalElement)
        }
      });

      // When the user push escape, close the modal
      window.addEventListener('keydown', (e) => {
        if (e.which === 27
          && modalElement.classList.contains('modal--active')
        ) {
          this.toggleModal(modalElement)
        }
      });
    })
  }

  init() {
    this.setListeners();
  }
}

new Modal();
