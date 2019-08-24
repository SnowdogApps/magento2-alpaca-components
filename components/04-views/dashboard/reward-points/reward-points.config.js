module.exports = {
  context: {
    info: {
      informations: [
        {
          headingTag: 'h4',
          title: 'Reward points balance Information',
          text: 'Your balance is 0 Reward points.'
        },
        {
          headingTag: 'h4',
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
                    childTagAttributes: 'data-th="Balance:"',
                    content: '50'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Amount:"',
                    content: '$0.00'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Points:"',
                    content: '30'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Reason:"',
                    content: 'Updated by moderator'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Date:"',
                    content: '8/23/17, 9:28 AM'
                  }
                ]
              },
              {
                rowTag: 'tr',
                childTags: [
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Balance:"',
                    content: '20'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Amount:"',
                    content: '$10.00'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Points:"',
                    content: '20'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Reason:"',
                    content: 'Updated by moderator'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Date:"',
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
            class: 'dashboard-form__divider',
            id: 'subBalanceUpdates',
            label: 'Subscribe for Balance Updates'
          }
        },
        {
          checkbox: {
            class: 'dashboard-form__divider',
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
