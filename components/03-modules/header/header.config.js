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
      'phone',
      'account'
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
        placeholder: 'Search entire store here...'
      }
    },
    searchButton: {
      tag: 'button',
      text: '',
      class: 'button--icon search-form__button',
      iconId: 'search',
      iconClass: 'button__icon',
      attributes: 'type="button"',
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
      attributes: 'type="button"',
      class: 'button popup__button',
      counter: '82'
    },
    minicartPopup: {
      script: false,
      content: 'minicart-content'
    },
    loginPopup: {
      script: true,
      content: 'login-form--popup'
    }
  }
}
