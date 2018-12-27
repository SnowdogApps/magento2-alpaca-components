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
          iconTitle: 'Heart',
          class: 'header-button__icon'
        }
      },
      {
        ariaLabel: 'Store phone number',
        text: 'Contact',
        class: '',
        icon: {
          iconId: 'phone',
          iconTitle: 'Phone',
          class: 'header-button__icon'
        }
      },
      {
        ariaLabel: 'Customer Account',
        text: 'Account',
        class: '',
        icon: {
          iconId: 'account',
          iconTitle: 'User\'s account',
          class: 'header-button__icon'
        }
      }
    ],
    logo: {
      class: 'header__logo',
      logoSVG: true,
      ariaLabel: 'Home page link',
      imageAlt: 'Alpaca Logo',
      imageAttributes: '',
      imageClass: '',
      imageSrc: '/images/logo/alpaca.svg',
      href: '#'
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
        type: 'search',
        placeholder: 'Search entire store here...'
      }
    },
    searchButton: {
      tag: 'button',
      text: '',
      class: 'button--icon search-form__button',
      iconId: 'search',
      iconTitle: 'Search',
      iconClass: 'button__icon',
      attributes: 'type="button" aria-label="Search"',
    },
    minicartTrigger: {
      icon: {
        iconId: 'shopping-cart',
        iconTitle: 'Shopping cart',
        class: 'header-button__icon'
      },
      text: 'Cart',
      link: '/cart',
      ariaLabel: 'Shopping cart dropdown trigger'
    },
    minicartPopup: {
      class: 'header__minicart-content',
      popupId: 'popup-minicart',
      popupTrigger: false,
      content: 'minicart-content',
      script: true
    }
  }
}
