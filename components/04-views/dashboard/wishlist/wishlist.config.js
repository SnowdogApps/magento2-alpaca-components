module.exports = {
  context: {
    actions: {
      sides: [
        {
          action: [
            {
              button: true,
              title: 'Update Wish List'
            },
            {
              button: true,
              title: 'Share Wish List'
            },
            {
              button: true,
              title: 'Add All to Cart'
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
    },
    wishlistItems: [
      {
        item: {
          tag: 'div',
          class: 'dashboard__product',
          name: 'Some product name',
          price: '210$',
          type: 'some attribute text',
          image: {
            src: '/images/product/product-img-230_180.png'
          },
          button: {
            tag: 'a',
            text: 'Add to Cart',
            class: 'product-item__button action__button'
          }
        },
        textarea: {
          class: 'dashboard__input',
          field: {
            placeholder: 'Comment'
          }
        },
        qty: {
          class: 'input--inline dashboard__input',
          label: {
            text: 'Qty:',
            class: 'dashboard__label'
          },
          field: {
            class: 'dashboard__field-qty'
          }
        },
        itemAction: {
          sides: [
            {
              action: [
                {
                  title: 'Edit'
                }
              ]
            },
            {
              action: [
                {
                  title: 'Remove Item'
                }
              ]
            }
          ]
        }
      },
      {
        item: {
          tag: 'div',
          class: 'dashboard__product',
          name: 'Some product name',
          price: '210$',
          type: 'some attribute text',
          image: {
            src: '/images/product/product-img-230_180.png'
          },
          button: {
            tag: 'a',
            text: 'Add to Cart',
            class: 'product-item__button action__button'
          }
        },
        textarea: {
          class: 'dashboard__input',
          field: {
            placeholder: 'Comment'
          }
        },
        qty: {
          class: 'input--inline dashboard__input',
          label: {
            text: 'Qty:',
            class: 'dashboard__label'
          },
          field: {
            class: 'dashboard__field-qty'
          }
        },
        itemAction: {
          sides: [
            {
              action: [
                {
                  title: 'Edit'
                }
              ]
            },
            {
              action: [
                {
                  title: 'Remove Item'
                }
              ]
            }
          ]
        }
      }
    ]
  }
}
