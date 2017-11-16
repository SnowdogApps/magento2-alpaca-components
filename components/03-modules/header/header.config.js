module.exports = {
  title: 'Header module',
  context: {
    phoneNumber: '+ 48 68 433 00 00',
    topLinks: [
      {
        text: 'Wish List',
        icon: 'heart'
      },
      {
        text: 'Sign In',
        icon: 'signin'
      },
      {
        text: 'Create account',
        icon: 'account-mini'
      }
    ],
    icons: [
      {
        icon: 'heart',
        ariaLabel: 'Wishlist',
        text: 'Wishlist'
      },
      {
        icon: 'phone',
        ariaLabel: 'Store phone number',
        text: 'Contact'
      },
      {
        icon: 'account',
        ariaLabel: 'Customer Account',
        text: 'Account'
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
    likeButton: {
      tag: 'button',
      text: '',
      class: 'button--icon header__button header__button--like',
      iconId: 'like',
      iconClass: 'button__icon'
    },
    infoButton: {
      tag: 'button',
      text: '',
      class: 'button--icon header__button header__button--info',
      iconId: 'info',
      iconClass: 'button__icon'
    },
    trigger: {
      attributes: 'data-popuptrigger="popup-1"',
      class: 'header-button popup-trigger',
      counter: '82'
    },
    minicartPopup: {
      class: 'header__minicart-content',
      popupId: 'popup-1',
      popupTrigger: false,
      content: 'minicart-content'
    }
  }
}
