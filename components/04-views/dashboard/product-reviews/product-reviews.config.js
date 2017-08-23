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
            class: 'dashboard-nav__item'
          },
          {
            text: 'Gift Registry',
            class: 'dashboard-nav__item'
          },
          {
            text: 'My Product Reviews',
            class: 'dashboard-nav__item current'
          },
          {
            text: 'Reward Points',
            class: 'dashboard-nav__item'
          }
        ]
      }
    },
    reviews: {
      title: 'My Product Reviews',
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
                    content: 'Created'
                  },
                  {
                    childTag: 'th',
                    content: 'Product Name'
                  },
                  {
                    childTag: 'th',
                    content: 'Rating'
                  },
                  {
                    childTag: 'th',
                    content: 'Review'
                  },
                  {
                    childTag: 'th',
                    content: ''
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
                    content: '8/23/17'
                  },
                  {
                    childTag: 'td',
                    content: 'Lorem Ipsum'
                  },
                  {
                    childTag: 'td',
                    content: '4/5'
                  },
                  {
                    childTag: 'td',
                    content: 'Lorem ipsum'
                  },
                  {
                    childTag: 'td',
                    content: 'See Details'
                  }
                ]
              },
              {
                rowTag: 'tr',
                childTags: [
                  {
                    childTag: 'td',
                    content: '1/2/17'
                  },
                  {
                    childTag: 'td',
                    content: 'Lorem Ipsum2'
                  },
                  {
                    childTag: 'td',
                    content: '2/5'
                  },
                  {
                    childTag: 'td',
                    content: 'Lorem ipsum'
                  },
                  {
                    childTag: 'td',
                    content: 'See details'
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
