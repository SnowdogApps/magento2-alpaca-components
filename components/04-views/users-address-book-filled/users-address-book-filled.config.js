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
    noDefaultAddress: 'You have no default billing address in your address book.',
    address: [
      'Anka Ka',
      'whatever',
      '1600 Amphitheatre Parkway',
      'Mountain View',
      'California',
      'CA 94043',
      'United States',
      'T: 123456789'
    ],
    buttonChangeShipAddress: {
      tag: 'a',
      class: 'users-account__button',
      attributes: 'href="#"',
      text: 'Change Shipping Address'
    },
    additionalAddressButtons: [
      {
        tag: 'a',
        class: 'users-account__button',
        attributes: 'href="#"',
        text: 'Edit Address'
      },
      {
        tag: 'a',
        class: 'users-account__button',
        attributes: 'href="#"',
        text: 'Delete address'
      }
    ],
    actionsToolbar: {
      class: 'actions-toolbar--secondary',
      buttons: [
        {
          tag: 'a',
          class: 'users-account__button',
          attributes: 'href="#"',
          text: 'Go back'
        },
        {
          tag: 'button',
          class: 'users-account__button-primary',
          attributes: 'type="button"',
          text: 'Add New Address'
        }
      ]
    }
  }
}
