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
                    childTagAttributes: 'data-th="Created:"',
                    content: '8/23/17'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Product Name:"',
                    content: 'Lorem Ipsum'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Rating:"',
                    content: '<div class="rating__summary"><span class="rating__fill" style="width: 80%;"><span>80%</span></span></div>'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Review:"',
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
                    childTagAttributes: 'data-th="Created:"',
                    content: '1/2/17'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Product Name:"',
                    content: 'Lorem Ipsum2'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Rating:"',
                    content: '<div class="rating__summary"><span class="rating__fill" style="width: 40%;"><span>40%</span></span></div>'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Review:"',
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
  },
  variants: [
    {
      name: 'details',
      context: {
        title: 'Review Details',
        product: {
          tag: 'div',
          class: 'dashboard__product',
          name: 'Some product name',
          image: {
            src: '/images/product/product-img-230_180.png'
          }
        },
        review: {
          class: 'dashboard__item',
          reviewAmountLink: '#',
          reviewAmount: '2 Reviews',
          addYourLink: '#',
          addYour: 'Add Your Review'
        },
        yourReview: 'Your review',
      }
    }
  ]
}
