module.exports = {
  context: {
    nav: {
      title: 'My Account',
      list: {
        class: 'dashboard-nav__content',
        listTag: 'ul',
        elementTag: 'li',
        elements: [
          {
            text: 'Account Dashboard',
            class: 'dashboard-nav__item'
          },
          {
            text: 'Account Information',
            class: 'dashboard-nav__item'
          },
          {
            text: 'Address Book',
            class: 'dashboard-nav__item'
          },
          {
            text: 'My Orders',
            class: 'dashboard-nav__item '
          },
          {
            text: 'Store Credit',
            class: 'dashboard-nav__item'
          },
          {
            text: 'My Downloadable Products',
            class: 'dashboard-nav__item'
          },
          {
            text: 'My Wishlist',
            class: 'dashboard-nav__item '
          },
          {
            text: 'Gift Card',
            class: 'dashboard-nav__item current'
          }
        ]
      }
    },
    form: {
      title: 'Gift Card',
      fields: [
        {
          input: {
            class: 'dashboard-form__input',
            field: {
              placeholder: 'Enter gitf card code'
            }
          }
        }
      ]
    },
    buttons: {
      sides: [
        {
          action: [
            {
              button: true,
              title: 'Reedem Gift Card'
            }
          ]
        },
        {
          action: [
            {
              button: true,
              title: 'Check statuc and balance'
            }
          ]
        }
      ]
    }
  }
}
