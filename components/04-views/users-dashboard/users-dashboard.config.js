module.exports = {
  title: 'User\'s Dashboard',
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
            item: 'Account dashboard',
            current: 'current'
          },
          {
            item: 'Account information'
          },
          {
            item: 'Address book'
          },
          {
            item: 'My orders'
          },
          {
            item: 'Newsletter Subscriptions'
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
    contactInfoText: [
      'user name',
      'user@email.address'
    ],
    buttonEdit: {
      tag: 'a',
      class: 'users-account__button',
      attributes: 'href="#"',
      text: 'Edit'
    },
    buttonChangePassword: {
      tag: 'a',
      class: 'users-account__button',
      attributes: 'href="#"',
      text: 'Change password'
    },
    addressBookHeading: 'Address Book',
    innerHeadingLink: 'Manage Addresses'

  }
}
