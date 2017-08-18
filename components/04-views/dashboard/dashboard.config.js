module.exports = {
  context: {
    title: 'My dashboard',
    wishlist: {
      title: 'My Wish List',
      items: {
        elementTag: 'li',
        listTag: 'ul',
        elements: [
          {
            text: 'One product in wishlist'
          }
        ]
      },
      toolbar: {
        title: 'Remove all'
      }
    },
    recentlyOrdered: {
      title: 'Recently Ordered',
      informations: [
        {
          title: '',
          class: 'grid__column',
          information: '',
          toolbar: {
            links: [
              {
                title: 'Delete',
              }
            ]
          }
        }
      ]
    },
    account: {
      title: 'Account Information',
      informations: [
        {
          title: 'Contact information',
          class: 'grid__column grid__column--1-4',
          information: 'qweqwe qwe qwe@qwe.com',
          toolbar: {
            links: [
              {
                title: 'Edit'
              },
              {
                title: 'Change password'
              }
            ]
          }
        },
        {
          title: 'Newsletters',
          class: 'grid__column grid__column--1-4',
          information: 'You don\'t subscribe to our newsletter.',
          toolbar: {
            links: [
              {
                title: 'Edit'
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
          class: 'grid__column grid__column--1-4',
          information: 'qweqwe qwe 136 N. Bay Road',
          toolbar: {
            links: [
              {
                title: 'Edit Address'
              }
            ]
          }
        },
        {
          title: 'Default Shipping address',
          class: 'grid__column grid__column--1-4',
          information: '11233 Easer 53rd Ave, Suite 600 US',
          toolbar: {
            links: [
              {
                title: 'Edit Address'
              }
            ]
          }
        }
      ]
    }
  }
}
