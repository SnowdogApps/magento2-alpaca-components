module.exports = {
  title: 'Header module',
  context: {
    logo: {
      class: 'header__logo',
      logoSVG: true
    },
    searchInput: {
      class: 'header__search-input-wrapper',
      label: {
        class: 'header__search-label',
      },
      field: {
        class: 'header__search-input',
        placeholder: 'Search entire store here...'
      }
    },
    searchButton: {
      tag: 'button',
      text: '',
      class: 'button--icon header__search-button',
      iconId: 'search',
      iconClass: 'button__icon header__search-icon',
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
