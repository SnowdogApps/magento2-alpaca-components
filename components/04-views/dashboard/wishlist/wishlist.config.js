module.exports = {
  context: {
    wishlistItems: [
      {
        textarea: {
          class: 'wishlist__input',
          field: {
            id: 'comment',
            name: 'comment',
            placeholder: 'Comment'
          }
        },
        qty: {
          class: 'input--inline',
          label: {
            text: 'Qty:',
            class: 'dashboard__label'
          },
          field: {
            id: 'qty',
            name: 'qty',
            type: 'number',
            class: 'dashboard__field-qty'
          }
        },
        editIcon: {
          tag: 'a',
          attributes: 'href="#" aria-label="Edit product parameters"',
          class: 'button--icon',
          iconClass: 'button__icon',
          iconId: 'edit'
        },
        removeIcon: {
          tag: 'button',
          attributes: 'href="#" aria-label="Remove product from wishlist"',
          class: 'button--icon wishlist__remove',
          iconClass: 'button__icon ',
          iconId: 'remove'
        },
        addToCart: {
          tag: 'button',
          text: 'Add to Cart',
          class: 'wishlist__button'
        }
      },
      {
        textarea: {
          class: 'wishlist__input',
          field: {
            id: 'comment',
            name: 'comment',
            placeholder: 'Comment'
          }
        },
        qty: {
          class: 'input--inline',
          label: {
            text: 'Qty:',
            class: 'dashboard__label'
          },
          field: {
            id: 'qty',
            name: 'qty',
            type: 'number',
            class: 'dashboard__field-qty'
          }
        },
        editIcon: {
          tag: 'a',
          attributes: 'href="#" aria-label="Edit product parameters"',
          class: 'button--icon',
          iconClass: 'button__icon',
          iconId: 'edit'
        },
        removeIcon: {
          tag: 'button',
          attributes: 'href="#" aria-label="Remove product from wishlist"',
          class: 'button--icon wishlist__remove',
          iconClass: 'button__icon',
          iconId: 'remove'
        },
        addToCart: {
          tag: 'button',
          text: 'Add to Cart',
          class: 'wishlist__button'
        }
      }
    ],
    actions: [
      {
        tag: 'button',
        text: 'Update Wish List',
        class: 'button--secondary action__button'
      },
      {
        tag: 'button',
        text: 'Share Wish List',
        class: 'button--secondary action__button'
      },
      {
        tag: 'button',
        text: 'Add All to Cart',
        class: 'button--secondary action__button'
      }
    ]
  }
}
