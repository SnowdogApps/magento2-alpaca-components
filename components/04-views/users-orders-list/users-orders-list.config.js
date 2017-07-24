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
    ordersTable: {
      mainTags: [
        {
          mainTag: 'thead',
          rowTags: [
            {
              rowTag: 'tr',
              childTags: [
                {
                  childTag: 'th',
                  content: 'Order#'
                },
                {
                  childTag: 'th',
                  content: 'Date'
                },
                {
                  childTag: 'th',
                  content: 'Ship to'
                },
                {
                  childTag: 'th',
                  content: 'Order total'
                },
                {
                  childTag: 'th',
                  content: 'Status'
                },
                {
                  childTag: 'th',
                  content: 'Actions'
                },

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
                  content: '000000013'
                },
                {
                  childTag: 'td',
                  content: '7/18/17'
                },
                {
                  childTag: 'td',
                  content: 'client name'
                },
                {
                  childTag: 'td',
                  content: '$88.00'
                },
                {
                  childTag: 'td',
                  content: 'Complete'
                },
                {
                  childTag: 'td',
                  content: 'link view detail'
                }
              ]
            },
            {
              rowTag: 'tr',
              childTags: [
                {
                  childTag: 'td',
                  content: '000000013'
                },
                {
                  childTag: 'td',
                  content: '7/18/17'
                },
                {
                  childTag: 'td',
                  content: 'client name'
                },
                {
                  childTag: 'td',
                  content: '$88.00'
                },
                {
                  childTag: 'td',
                  content: 'Complete'
                },
                {
                  childTag: 'td',
                  content: 'link view detail'
                }
              ]
            },
            {
              rowTag: 'tr',
              childTags: [
                {
                  childTag: 'td',
                  content: '000000013'
                },
                {
                  childTag: 'td',
                  content: '7/18/17'
                },
                {
                  childTag: 'td',
                  content: 'client name'
                },
                {
                  childTag: 'td',
                  content: '$88.00'
                },
                {
                  childTag: 'td',
                  content: 'Complete'
                },
                {
                  childTag: 'td',
                  content: 'link view detail'
                }
              ]
            }
          ]
        }
      ]
    },
    actionToolbarBottom: {
      class: 'actions-toolbar--secondary',
      buttons: [
        {
          tag: 'a',
          class: 'actions-toolbar__button',
          attributes: 'href="#"',
          text: 'Back'
        }
      ]
    }
  }
}
