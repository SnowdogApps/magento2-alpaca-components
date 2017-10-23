module.exports = {
  title: 'Header module',
  context: {
    logo: {
      class: 'header__logo',
      logoSVG: true
    },
    button: {
      tag: 'button',
      text: '',
      class: 'button--icon header__search-button',
      iconId: 'search',
      iconClass: 'button__icon',
      attributes: 'type="button"',
    },
    form: {
      class: 'form--compact header__search-form',
      input: {
        class: 'header__input',
        field: {
          class: 'header__field',
          placeholder: 'Search'
        }
      },
      button: {
        class: 'button--icon',
        tag: 'a',
        iconId: 'search',
        iconClass: 'button__icon'
      },
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
