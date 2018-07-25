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
          class: 'input--inline wishlist__qty',
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
          attributes: 'href="#" aria-label="edit product in your shopping cart"',
          text: '',
          class: 'button--icon cart-list-item__actions-item',
          iconClass: 'button__icon',
          iconId: 'edit'
        },
        removeIcon: {
          tag: 'button',
          attributes: 'href="#" aria-label="remove this product from your shopping cart"',
          text: '',
          class: 'button--icon cart-list-item__actions-item',
          iconClass: 'button__icon',
          iconId: 'remove'
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
          class: 'input--inline wishlist__qty',
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
          attributes: 'href="#" aria-label="edit product in your shopping cart"',
          text: '',
          class: 'button--icon cart-list-item__actions-item',
          iconClass: 'button__icon',
          iconId: 'edit'
        },
        removeIcon: {
          tag: 'button',
          attributes: 'href="#" aria-label="remove this product from your shopping cart"',
          text: '',
          class: 'button--icon cart-list-item__actions-item',
          iconClass: 'button__icon',
          iconId: 'remove'
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
