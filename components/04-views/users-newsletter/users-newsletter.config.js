module.exports = {
  context: {
    wrapper: {
      labelTag: 'h2',
      labelText: 'My account',
      labelIcon: 'arrow-down',
      additionalLabelClass: 'heading heading--fourth-level',
      content: 'account-navigation',
      class: 'dropdown-container--open-wide',
      additionalClass: 'account-nav'
    },
    checkboxNewsletter: {
      id: 'subscription',
      label: 'General Subscription'
    },
    actionToolbar: {
      class: '',
      buttons: [
        {
          tag: 'a',
          class: 'actions-toolbar__button',
          attributes: 'href="#"',
          text: 'Back'
        },
        {
          tag: 'a',
          class: 'actions-toolbar__button-primary',
          attributes: 'href="#"',
          text: 'Save'
        }
      ]
    }
  }
}
