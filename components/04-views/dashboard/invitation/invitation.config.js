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
            text: 'Reward Points',
            class: 'dashboard-nav__item'
          },
          {
            text: 'My Invations',
            class: 'dashboard-nav__item current'
          }
        ]
      }
    },
    invitations: {
      title: 'My Invitations',
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
                    content: 'Email'
                  },
                  {
                    childTag: 'th',
                    content: 'Status'
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
                    content: 'test@test.com'
                  },
                  {
                    childTag: 'td',
                    content: 'Sent'
                  }
                ]
              },
              {
                rowTag: 'tr',
                childTags: [
                  {
                    childTag: 'td',
                    content: 'qwe@qwe.com'
                  },
                  {
                    childTag: 'td',
                    content: 'Sent'
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    buttons: {
      sides: [
        {
          action: [
            {
              button: true,
              title: 'Send Invations'
            }
          ]
        },
        {
          action: [
            {
              title: 'Back'
            }
          ]
        }
      ]
    }
  },
  variants: [
    {
      name: 'form',
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
                text: 'Reward Points',
                class: 'dashboard-nav__item'
              },
              {
                text: 'My Invations',
                class: 'dashboard-nav__item current'
              }
            ]
          }
        },
        form: {
          title: 'Invite your friends by entering their email addresses',
          class: 'dashboard__item',
          fields: [
            {
              input: {
                class: 'dashboard-form__input',
                field: {
                  placeholder: 'Enter Email'
                }
              }
            },
          ],
          textareas: [
            {
              textarea: {
                class: 'dashboard-form__input',
                field: {
                  placeholder: 'Message'
                }
              }
            }
          ]
        },
        buttons: {
          sides: [
            {
              action: [
                {
                  button: true,
                  title: 'Add New Mail Field'
                },
                {
                  button: true,
                  title: 'Send Invations'
                }
              ]
            }
          ]
        }
      }
    }
  ]
}
