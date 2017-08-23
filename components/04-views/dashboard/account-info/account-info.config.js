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
            class: 'dashboard-nav__item current'
          },
          {
            text: 'Address Book',
            class: 'dashboard-nav__item'
          },
          {
            text: 'Store Credit',
            class: 'dashboard-nav__item'
          },
          {
            text: 'My Downloadable Products',
            class: 'dashboard-nav__item'
          }
        ]
      }
    },
    buttons: {
      class: 'dashboard__actions',
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
              title: 'Go Back'
            }
          ]
        }
      ],
    }
  }
}
