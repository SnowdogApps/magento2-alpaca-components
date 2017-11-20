module.exports = {
  title: 'Header module',
  context: {
    buttons: [
      {
        icon: 'heart',
        ariaLabel: 'Wishlist',
        text: 'Wishlist',
        class: 'header-button--reset-margin'
      },
      {
        icon: 'phone',
        ariaLabel: 'Store phone number',
        text: 'Contact',
        class: ''
      },
      {
        icon: 'account',
        ariaLabel: 'Customer Account',
        text: 'Account',
        class: ''
      }
    ],
    logo: {
      class: 'header__logo',
      logoSVG: true
    },
    searchInput: {
      class: 'search-form__input-wrapper',
      label: {
        class: 'search-form__label',
      },
      field: {
        class: 'search-form__input',
        id: 'search',
        name: 'search',
        placeholder: 'Search entire store here...'
      }
    },
    searchButton: {
      tag: 'button',
      text: '',
      class: 'button--icon search-form__button',
      iconId: 'search',
      iconClass: 'button__icon',
      attributes: 'type="button" aria-label="Search button"',
    },
    minicartTrigger: {
      icon: 'shopping-cart',
      text: 'Cart',
      link: '/cart',
      ariaLabel: 'Cart trigger'
    },
    minicartPopup: {
      class: 'header__minicart-content',
      popupId: 'popup-1',
      popupTrigger: false,
      content: 'minicart-content'
    }
  }
}
