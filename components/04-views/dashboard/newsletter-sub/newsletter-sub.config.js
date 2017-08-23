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
            class: 'dashboard-nav__item'
          },
          {
            text: 'Order by SKU',
            class: 'dashboard-nav__item'
          },
          {
            text: 'Newsletter Subscriptions',
            class: 'dashboard-nav__item current'
          }
        ]
      }
    },
    form: {
      title: 'Subscription option',
      checkboxes: [
        {
          checkbox: {
            id: 'subscription',
            label: 'General Subscription'
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
              title: 'Save'
            }
          ]
        },
        {
          action: [
            {
              title: 'Back'
            }
          ]
        }
      ]
    }
  }
}
