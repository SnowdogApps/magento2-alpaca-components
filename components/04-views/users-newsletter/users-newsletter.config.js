module.exports = {
  context: {
    wrapper: {
      labelTag: 'h2',
      labelText: 'My account',
      labelIcon: 'arrow-down',
      additionalLabelClass: 'heading heading--fourth-level',
      content: 'account-navigation',
      contentContext: {
        navItems: [
          {
            item: 'Account dashboard'
          },
          {
            item: 'Account information'
          },
          {
            item: 'Address book',
          },
          {
            item: 'My orders'
          },
          {
            item: 'Newsletter Subscriptions',
            current: 'current'
          },
          {
            item: 'My Product Reviews'
          },
          {
            item: 'My Wish List'
          }
        ]
      },
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
