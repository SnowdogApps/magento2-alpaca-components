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
            class: 'dashboard-nav__item current'
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
            class: 'dashboard-nav__item'
          },
          {
            text: 'Gift Registry',
            class: 'dashboard-nav__item'
          },
          {
            text: 'My Product Reviews',
            class: 'dashboard-nav__item'
          },
          {
            text: 'Reward Points',
            class: 'dashboard-nav__item'
          }
        ]
      }
    },
    products: {
      title: 'My Downloadable Products',
      class: 'dashboard__item',
      table: {
        mainTags: [
          {
            mainTag: 'thead',
            rowTags: [
              {
                rowTag: 'tr',
                childTags: [
                  {
                    childTag: 'th',
                    content: 'Order #'
                  },
                  {
                    childTag: 'th',
                    content: 'Date'
                  },
                  {
                    childTag: 'th',
                    content: 'Title'
                  },
                  {
                    childTag: 'th',
                    content: 'Status'
                  },
                  {
                    childTag: 'th',
                    content: 'Remaining Downloads'
                  }
                ]
              },
            ]
          },
          {
            mainTag: 'tbody',
            rowTags: [
              {
                rowTag: 'tr',
                childTags: [
                  {
                    childTag: 'td',
                    content: '000000003'
                  },
                  {
                    childTag: 'td',
                    content: '4/11/17'
                  },
                  {
                    childTag: 'td',
                    content: 'Lorem Ipsum 2'
                  },
                  {
                    childTag: 'td',
                    content: 'Done'
                  },
                  {
                    childTag: 'td',
                    content: 'Unlimited'
                  }
                ]
              },
              {
                rowTag: 'tr',
                childTags: [
                  {
                    childTag: 'td',
                    content: '000000001'
                  },
                  {
                    childTag: 'td',
                    content: '1/1/17'
                  },
                  {
                    childTag: 'td',
                    content: 'Lorem Ipsum'
                  },
                  {
                    childTag: 'td',
                    content: 'Done'
                  },
                  {
                    childTag: 'td',
                    content: 'Unlimited'
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    button: {
      sides: [
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
