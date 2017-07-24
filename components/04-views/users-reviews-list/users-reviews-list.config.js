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
            item: 'Address book'
          },
          {
            item: 'My orders'
          },
          {
            item: 'Newsletter Subscriptions'
          },
          {
            item: 'My Product Reviews',
            current: 'current'
          },
          {
            item: 'My Wish List'
          }
        ]
      },
      class: 'dropdown-container--open-wide',
      additionalClass: 'account-nav'
    },
    reviewsTable: {
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
                  content: 'Product name'
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
                  content: ' '
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
                  content: '7/19/17'
                },
                {
                  childTag: 'td',
                  content: 'Gabrielle Micro Sleeve Top'
                },
                {
                  childTag: 'td',
                  content: 'rating component'
                },
                {
                  childTag: 'td',
                  content: 'Lorem ipsum dolor sit amet, consectetur adipisc...'
                },
                {
                  childTag: 'td',
                  content: 'See details'
                }
              ]
            },
            {
              rowTag: 'tr',
              childTags: [
                {
                  childTag: 'td',
                  content: '7/21/17'
                },
                {
                  childTag: 'td',
                  content: 'Stellar Solar Jacket'
                },
                {
                  childTag: 'td',
                  content: 'rating component'
                },
                {
                  childTag: 'td',
                  content: 'Lorem ipsum dolor sit amet, consectetur adipisc...'
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
