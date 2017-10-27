module.exports = {
  context: {
    title: 'My dashboard',
    wishlist: {
      title: 'My Wish List',
      items: {
        class: 'sidebar-nav-list__list',
        elementTag: 'li',
        listTag: 'ol',
        elements: [
          {
            text: 'One product in wishlist'
          }
        ]
      },
      buttons: {
        sides: [
          {
            action: [
              {
                title: 'Remove All'
              }
            ]
          }
        ]
      }
    },
    recentlyOrdered: {
      title: 'Recently Ordered',
      items: {
        class: 'sidebar-nav-list__list',
        listTag: 'ol',
        elementTag: 'li',
        elements: [
          {
            text: 'First item',
          }
        ],
      },
      buttons: {
        sides: [
          {
            action: [
              {
                button: true,
                class: 'sidebar-nav-list__button',
                title: 'Add to Cart'
              }
            ]
          },
          {
            action: [
              {
                title: 'View All'
              }
            ]
          }
        ]
      }
    },
    account: {
      title: 'Account Information',
      informations: [
        {
          title: 'Contact information',
          class: 'grid__column grid__column--1-2',
          information: 'qweqwe qwe qwe@qwe.com',
          actions: {
            sides: [
              {
                action: [
                  {
                    title: 'Edit'
                  },
                  {
                    title: 'Change password'
                  }
                ]
              }
            ]
          }
        },
        {
          title: 'Newsletters',
          class: 'grid__column grid__column--1-2',
          information: 'You don\'t subscribe to our newsletter.',
          actions: {
            sides: [
              {
                action: [
                  {
                    title: 'Edit'
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    addreses: {
      title: 'Address Book',
      informations: [
        {
          title: 'Default Billing Address',
          class: 'grid__column grid__column--1-2',
          information: 'qweqwe qwe 136 N. Bay Road',
          actions: {
            sides: [
              {
                action: [
                  {
                    title: 'Edit Address'
                  }
                ]
              }
            ]
          }
        },
        {
          title: 'Default Shipping address',
          class: 'grid__column grid__column--1-2',
          information: '11233 Easer 53rd Ave, Suite 600 US',
          actions: {
            sides: [
              {
                action: [
                  {
                    title: 'Edit Address'
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  }
}
