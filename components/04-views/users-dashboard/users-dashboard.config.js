module.exports = {
  title: 'User\'s Dashboard',
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
    contactInfoText: [
      'user name',
      'user@email.address'
    ],
    buttonEdit: {
      tag: 'a',
      class: 'flex-column__button',
      attributes: 'href="#"',
      text: 'Edit'
    },
    buttonChangePassword: {
      tag: 'a',
      class: 'flex-column__button',
      attributes: 'href="#"',
      text: 'Change password'
    },
    addressBookHeading: 'Address Book',
    innerHeadingLink: 'Manage Addresses'

  }
}
