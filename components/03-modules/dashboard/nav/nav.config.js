module.exports = {
  label: 'Nav',
  name: 'dashboard-nav',
  context: {
    title: 'My Account',
    actualPage: 'Account Dashboard',
    list: {
      class: 'dashboard-nav__list',
      listTag: 'ul',
      elementTag: 'li',
      elements: [
        {
          text: 'Account Dashboard',
          class: 'dashboard-nav__item current',
          linkClass: 'dashboard-nav__link link--invert',
          link: '#'
        },
        {
          text: 'Account Information',
          class: 'dashboard-nav__item',
          linkClass: 'dashboard-nav__link link--invert',
          link: '#'
        },
        {
          text: 'Address Book',
          class: 'dashboard-nav__item',
          linkClass: 'dashboard-nav__link link--invert',
          link: '#'
        },
        {
          text: 'My Orders',
          class: 'dashboard-nav__item ',
          linkClass: 'dashboard-nav__link link--invert',
          link: '#'
        },
        {
          text: 'My Downloadable Products',
          class: 'dashboard-nav__item',
          linkClass: 'dashboard-nav__link link--invert',
          link: '#'
        },
        {
          text: 'Order by SKU',
          class: 'dashboard-nav__item',
          linkClass: 'dashboard-nav__link link--invert',
          link: '#'
        },
        {
          text: 'My Wishlist',
          class: 'dashboard-nav__item ',
          linkClass: 'dashboard-nav__link link--invert',
          link: '#'
        },
        {
          text: 'Store Credit',
          class: 'dashboard-nav__item',
          linkClass: 'dashboard-nav__link link--invert',
          link: '#'
        },
        {
          text: 'Gift Card',
          class: 'dashboard-nav__item',
          linkClass: 'dashboard-nav__link link--invert',
          link: '#'
        },
        {
          text: 'Gift Registry',
          class: 'dashboard-nav__item',
          linkClass: 'dashboard-nav__link link--invert',
          link: '#'
        },
        {
          text: 'Newsletter Subscriptions',
          class: 'dashboard-nav__item',
          linkClass: 'dashboard-nav__link link--invert',
          link: '#'
        },
        {
          text: 'My Product Reviews',
          class: 'dashboard-nav__item',
          linkClass: 'dashboard-nav__link link--invert',
          link: '#'
        },
        {
          text: 'Reward Points',
          class: 'dashboard-nav__item',
          linkClass: 'dashboard-nav__link link--invert',
          link: '#'
        },
        {
          text: 'My Invations',
          class: 'dashboard-nav__item',
          linkClass: 'dashboard-nav__link link--invert',
          link: '#'
        }
      ]
    }
  }
}
