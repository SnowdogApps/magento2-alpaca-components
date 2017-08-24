module.exports = {
  context: {
    reviews: {
      title: 'My Product Reviews',
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
                    content: 'Created'
                  },
                  {
                    childTag: 'th',
                    content: 'Product Name'
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
                    content: ''
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
                    content: '8/23/17'
                  },
                  {
                    childTag: 'td',
                    content: 'Lorem Ipsum'
                  },
                  {
                    childTag: 'td',
                    content: '4/5'
                  },
                  {
                    childTag: 'td',
                    content: 'Lorem ipsum'
                  },
                  {
                    childTag: 'td',
                    content: 'See Details'
                  }
                ]
              },
              {
                rowTag: 'tr',
                childTags: [
                  {
                    childTag: 'td',
                    content: '1/2/17'
                  },
                  {
                    childTag: 'td',
                    content: 'Lorem Ipsum2'
                  },
                  {
                    childTag: 'td',
                    content: '2/5'
                  },
                  {
                    childTag: 'td',
                    content: 'Lorem ipsum'
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
