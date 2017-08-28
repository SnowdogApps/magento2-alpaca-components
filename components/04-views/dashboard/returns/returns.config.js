module.exports = {
  context: {
    return: {
      title: 'Items Return Requested For',
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
                    content: 'Product Name'
                  },
                  {
                    childTag: 'th',
                    content: 'SKU'
                  },
                  {
                    childTag: 'th',
                    content: 'Condition'
                  },
                  {
                    childTag: 'th',
                    content: 'Resolution'
                  },
                  {
                    childTag: 'th',
                    content: 'Request Qty'
                  },
                  {
                    childTag: 'th',
                    content: 'Qty'
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
                    content: 'Test Jacket'
                  },
                  {
                    childTag: 'td',
                    content: 'WJ01-L-Red'
                  },
                  {
                    childTag: 'td',
                    content: 'Unopened'
                  },
                  {
                    childTag: 'td',
                    content: 'Refund'
                  },
                  {
                    childTag: 'td',
                    content: '1'
                  },
                  {
                    childTag: 'td',
                    content: '1'
                  },
                  {
                    childTag: 'td',
                    content: 'Pending'
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    comments: {
      title: 'Comments',
      textareas: [
        {
          textarea: {
            label: {
              text: 'Leave Comment'
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
              title: 'back'
            }
          ]
        }
      ]
    }
  },
  variants: [
    {
      name: 'details',
      context: {
        returnNumer: 'Return #000000002',
        returnStatus: 'Pending',
        addresses: {
          informations: [
            {
              title: 'Request Information',
              class: 'grid__column grid__column--1-2',
              information: 'ID: 000000002 Order ID: 00000006 Date Request: 8/28/17 Email: qwe@qwe.com',
            },
            {
              title: 'Shipping Address',
              class: 'grid__column grid__column--1-2',
              information: 'This is example shipping address T: 123 213 123',
            }
          ]
        },
        buttons: {
          sides: [
            {
              action: [
                {
                  button: true,
                  title: 'Submit Comment'
                }
              ]
            }
          ]
        }
      }
    }
  ]
}
