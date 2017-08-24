module.exports = {
  context: {
    products: {
      title: 'My Downloadable Products',
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
                    content: 'Order #'
                  },
                  {
                    childTag: 'th',
                    content: 'Date'
                  },
                  {
                    childTag: 'th',
                    content: 'Title'
                  },
                  {
                    childTag: 'th',
                    content: 'Status'
                  },
                  {
                    childTag: 'th',
                    content: 'Remaining Downloads'
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
                    content: '000000003'
                  },
                  {
                    childTag: 'td',
                    content: '4/11/17'
                  },
                  {
                    childTag: 'td',
                    content: 'Lorem Ipsum 2'
                  },
                  {
                    childTag: 'td',
                    content: 'Done'
                  },
                  {
                    childTag: 'td',
                    content: 'Unlimited'
                  }
                ]
              },
              {
                rowTag: 'tr',
                childTags: [
                  {
                    childTag: 'td',
                    content: '000000001'
                  },
                  {
                    childTag: 'td',
                    content: '1/1/17'
                  },
                  {
                    childTag: 'td',
                    content: 'Lorem Ipsum'
                  },
                  {
                    childTag: 'td',
                    content: 'Done'
                  },
                  {
                    childTag: 'td',
                    content: 'Unlimited'
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    button: {
      sides: [
        {
          action: [
            {
              title: 'Back'
            }
          ]
        }
      ]
    }
  }
}
