module.exports = {
  title: 'Header module',
  context: {
    buttons: [
      {
        ariaLabel: 'Wishlist',
        text: 'Wishlist',
        class: 'header-button--reset-margin',
        icon: {
          iconId: 'heart',
          title: 'Heart',
          class: 'header-button__icon'
        }
      },
      {
        ariaLabel: 'Store phone number',
        text: 'Contact',
        class: '',
        icon: {
          iconId: 'phone',
          title: 'Phone',
          class: 'header-button__icon'
        }
      },
      {
        ariaLabel: 'Customer Account',
        text: 'Account',
        class: '',
        icon: {
          iconId: 'account',
          title: 'Account',
          class: 'header-button__icon'
        }
      }
    ],
    logo: {
      class: 'header__logo',
      logoSVG: true,
      ariaLabel: 'Home page link',
      imageAlt: 'Alpaca Logo'
    },
    searchInput: {
      class: 'search-form__input-wrapper',
      label: {
        hidden: true
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
    sideMenuIcon: {
      iconId: 'mobile-menu',
      title: 'Side menu open',
      class: 'header-button__icon header-button__icon--small header-button__icon--open'
    },
    sideMenuIconClose: {
      iconId: 'close',
      title: 'Side menu close',
      class: 'header-button__icon header-button__icon--small header-button__icon--close'
    },
    minicartTrigger: {
      icon: {
        iconId: 'shopping-cart',
        title: 'Shopping cart',
        class: 'header-button__icon'
      },
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
