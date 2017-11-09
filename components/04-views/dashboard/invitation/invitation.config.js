module.exports = {
  context: {
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
                    childTagAttributes: 'data-th="Email:"',
                    content: 'test@test.com'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Status:"',
                    content: 'Sent'
                  }
                ]
              },
              {
                rowTag: 'tr',
                childTags: [
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Email:"',
                    content: 'qwe@qwe.com'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Status:"',
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
        form: {
          title: 'Invite your friends by entering their email addresses',
          class: 'dashboard__item',
          fields: [
            {
              input: {
                class: 'dashboard-form__divider',
                field: {
                  id: 'email',
                  name: 'email',
                  placeholder: 'Email'
                }
              }
            },
          ],
          textareas: [
            {
              textarea: {
                class: 'dashboard-form__divider',
                field: {
                  id: 'email',
                  name: 'email',
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
