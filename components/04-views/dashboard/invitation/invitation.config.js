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
        form: {
          title: 'Invite your friends by entering their email addresses',
          class: 'dashboard__item',
          fields: [
            {
              input: {
                class: 'dashboard-form__input',
                field: {
                  placeholder: 'Email'
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
