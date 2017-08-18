module.exports = {
  context: {
    title: 'My Account',
    list: {
      class: 'dashboard-nav__content',
      listTag: 'ul',
      elementTag: 'li',
      elements: [
        {
          text: 'Account Dashboard',
          class: 'dashboard-nav__item current'
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
          text: 'Store Credit',
          class: 'dashboard-nav__item'
        },
        {
          text: 'My Downloadable Products',
          class: 'dashboard-nav__item'
        }
      ]
    }
  }
}
