module.exports = {
  context: {
    wrapper: {
      labelTag: 'h2',
      labelText: 'My account',
      labelIcon: 'arrow-down',
      additionalLabelClass: 'heading heading--fourth-level',
      content: 'account-navigation',
      contentContext: {
        navItems: [
          {
            item: 'Account dashboard'
          },
          {
            item: 'Account information'
          },
          {
            item: 'Address book',
          },
          {
            item: 'My orders',
            current: 'current'
          },
          {
            item: 'Newsletter Subscriptions'
          },
          {
            item: 'My Product Reviews'
          },
          {
            item: 'My Wish List'
          }
        ]
      },
      class: 'dropdown-container--open-wide',
      additionalClass: 'account-nav'
    },
    actionToolbarTop: {
      class: 'actions-toolbar--right',
      buttons: [
        {
          tag: 'a',
          class: 'actions-toolbar__button',
          attributes: 'href="#"',
          text: 'Reorder'
        },
        {
          tag: 'a',
          class: 'actions-toolbar__button',
          attributes: 'href="#"',
          text: 'Print Order'
        }
      ]
    },
    orderComment: {
      dtLabel: 'Jul 19, 2017, 4:54:14 AM',
      ddValue: 'Some test comment'
    },
    orderedItemsTable: {
      mainTags: [
        {
          mainTag: 'thead',
          rowTags: [
            {
              rowTag: 'tr',
              childTags: [
                {
                  childTag: 'th',
                  content: 'Product name'
                },
                {
                  childTag: 'th',
                  content: 'SKU'
                },
                {
                  childTag: 'th',
                  content: 'Price'
                },
                {
                  childTag: 'th',
                  content: 'Qty'
                },
                {
                  childTag: 'th',
                  content: 'Subtotal'
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
                  content: 'Aim Analog Watch'
                },
                {
                  childTag: 'td',
                  content: '24-MG04'
                },
                {
                  childTag: 'td',
                  content: '$45.00'
                },
                {
                  childTag: 'td',
                  content: 'Ordered 1'
                },
                {
                  childTag: 'td',
                  content: '$45.00'
                }
              ]
            },
            {
              rowTag: 'tr',
              childTags: [
                {
                  childTag: 'td',
                  content: 'Aim Analog Bag'
                },
                {
                  childTag: 'td',
                  content: '24-MG04'
                },
                {
                  childTag: 'td',
                  content: '$43.00'
                },
                {
                  childTag: 'td',
                  content: 'Ordered 1'
                },
                {
                  childTag: 'td',
                  content: '$43.00'
                }
              ]
            }
          ]
        },
        {
          mainTag: 'tfoot',
          rowTags: [
            {
              rowTag: 'tr',
              childTags: [
                {
                  childTag: 'th',
                  content: 'Subtotal',
                  childTabAttributes: 'colspan=\'4\''
                },
                {
                  childTag: 'td',
                  content: '$88.00',
                  childTabAttributes: ''
                }
              ]
            },
            {
              rowTag: 'tr',
              childTags: [
                {
                  childTag: 'th',
                  content: 'Shipping & Handling',
                  childTabAttributes: 'colspan=\'4\''
                },
                {
                  childTag: 'td',
                  content: '$0.00',
                  childTabAttributes: ''
                }
              ]
            },
            {
              rowTag: 'tr',
              childTags: [
                {
                  childTag: 'th',
                  content: 'Grand total',
                  childTabAttributes: 'colspan=\'4\''
                },
                {
                  childTag: 'td',
                  content: '$88.00',
                  childTabAttributes: ''
                }
              ]
            }
          ]
        }
      ]
    },
    actionToolbar: {
      class: '',
      buttons: [
        {
          tag: 'a',
          class: 'actions-toolbar__button',
          attributes: 'href="#"',
          text: 'Back to My Orders'
        },
      ]
    },
    address: [
      'Anka Ka',
      'whatever',
      '1600 Amphitheatre Parkway',
      'Mountain View',
      'California',
      'CA 94043',
      'United States',
      'T: 123456789'
    ]
  }
}
