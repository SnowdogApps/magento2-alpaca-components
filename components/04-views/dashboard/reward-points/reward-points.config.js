module.exports = {
  context: {
    info: {
      informations: [
        {
          title: 'Reward points balance Information',
          text: 'Your balance is 0 Reward points.'
        },
        {
          class: 'dashboard__item',
          text: 'Current exchange rates: None'
        }
      ]
    },
    points: {
      title: 'Balance history',
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
                    content: 'Balance'
                  },
                  {
                    childTag: 'th',
                    content: 'Amount'
                  },
                  {
                    childTag: 'th',
                    content: 'Points'
                  },
                  {
                    childTag: 'th',
                    content: 'Reason'
                  },
                  {
                    childTag: 'th',
                    content: 'Date'
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
                    content: '50'
                  },
                  {
                    childTag: 'td',
                    content: '$0.00'
                  },
                  {
                    childTag: 'td',
                    content: '30'
                  },
                  {
                    childTag: 'td',
                    content: 'Updated by moderator'
                  },
                  {
                    childTag: 'td',
                    content: '8/23/17, 9:28 AM'
                  }
                ]
              },
              {
                rowTag: 'tr',
                childTags: [
                  {
                    childTag: 'td',
                    content: '20'
                  },
                  {
                    childTag: 'td',
                    content: '$10.00'
                  },
                  {
                    childTag: 'td',
                    content: '20'
                  },
                  {
                    childTag: 'td',
                    content: 'Updated by moderator'
                  },
                  {
                    childTag: 'td',
                    content: '8/23/17, 9:27 AM'
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    form: {
      title: 'Email Notification Settings',
      class: 'dashboard__item',
      checkboxes: [
        {
          checkbox: {
            id: 'subBalanceUpdates',
            label: 'Subscribe for Balance Updates'
          }
        },
        {
          checkbox: {
            id: 'subExpirationPoints',
            label: 'Subscripte for Points Expiration Notification'
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
              title: 'Save Subscription Settings'
            }
          ]
        },
        {
          action: [
            {
              title: 'back'
            }
          ]
        }
      ]
    }
  }
}
