module.exports = {
  context: {
    nav: {
      title: 'My Account',
      list: {
        class: 'dashboard-nav__content',
        listTag: 'ul',
        elementTag: 'li',
        elements: [
          {
            text: 'Account Dashboard',
            class: 'dashboard-nav__item'
          },
          {
            text: 'Account Information',
            class: 'dashboard-nav__item'
          },
          {
            text: 'Address Book',
            class: 'dashboard-nav__item'
          },
          {
            text: 'My Orders',
            class: 'dashboard-nav__item '
          },
          {
            text: 'Store Credit',
            class: 'dashboard-nav__item'
          },
          {
            text: 'My Downloadable Products',
            class: 'dashboard-nav__item'
          },
          {
            text: 'My Wishlist',
            class: 'dashboard-nav__item current'
          }
        ]
      }
    },
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
            class: 'product-item__button dashboard-actions__button'
          }
        },
        qty: {
          class: 'input--inline',
          label: {
            text: 'Qty:',
            class: 'dashboard__label'
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
            class: 'product-item__button dashboard-actions__button'
          }
        },
        qty: {
          class: 'input--inline',
          label: {
            text: 'Qty:',
            class: 'dashboard__label'
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
