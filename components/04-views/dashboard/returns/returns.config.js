module.exports = {
  context: {
    returns: {
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
                    childTagAttributes: 'data-th="Product Name:"',
                    content: 'Test Jacket'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="SKU:"',
                    content: 'WJ01-L-Red'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Condition:"',
                    content: 'Unopened'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Resolution:"',
                    content: 'Refund'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Request Qty:"',
                    content: '1'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Qty:"',
                    content: '1'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Status:"',
                    content: 'Pending'
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
              class: 'col-sm-6',
              information: 'ID: 000000002 Order ID: 00000006 Date Request: 8/28/17 Email: qwe@qwe.com',
            },
            {
              title: 'Shipping Address',
              class: 'col-sm-6',
              information: 'This is example shipping address T: 123 213 123',
            }
          ]
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
