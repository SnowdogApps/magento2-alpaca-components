module.exports = {
  context: {
    wrapper: {
      labelTag: 'h2',
      labelText: 'My account',
      labelIcon: 'arrow-down',
      additionalLabelClass: 'heading heading--fourth-level',
      content: 'account-navigation',
      contentContext: {
        navItems: [
          {
            item: 'Account dashboard'
          },
          {
            item: 'Account information'
          },
          {
            item: 'Address book'
          },
          {
            item: 'My orders'
          },
          {
            item: 'Newsletter Subscriptions'
          },
          {
            item: 'My Product Reviews'
          },
          {
            item: 'My Wish List',
            current: 'current'
          }
        ]
      },
      class: 'dropdown-container--open-wide',
      additionalClass: 'account-nav'
    },
    productImage: {
      src: '/images/product/product-img-230_180.png',
      additionalClasses: 'product__img'
    },
    products: [
      {
        productName: 'product name 1',
        productPrice: '$30.00'
      },
      {
        productName: 'product name 2',
        productPrice: '$80.00'
      },
      {
        productName: 'product name 3',
        productPrice: '$90.00'
      },
      {
        productName: 'product name 4',
        productPrice: '$25.00'
      }
    ],
    textareaComment: {
      attribute: '',
      class: '',
      inputId: 'wishlist-comment',
      label: {
        attribute: '',
        text: 'Comment',
      },
      field: {
        attribute: '',
        class: 'input__field--textarea',
        placeholder: 'Comment'
      }
    },
    inputQty: {
      attribute: '',
      class: 'input--inline input--small',
      inputId: 'wishlist-qty',
      label: {
        attribute: '',
        text: 'Qty',
      },
      field: {
        attribute: '',
        class: '',
        placeholder: ''
      }
    },
    btnAddToCart: {
      tag: 'button',
      class: 'button--fluid',
      attributes: '',
      text: 'Add To Cart'
    },
    btnEditProduct: {
      tag: 'a',
      class: 'wishlist-button',
      attributes: 'href="#"',
      text: 'Edit'
    },
    btnRemoveProduct: {
      tag: 'a',
      class: 'wishlist-button',
      attributes: 'href="#"',
      text: 'Remove'
    },
    actionToolbarBottom: {
      class: 'actions-toolbar--more-btns',
      buttons: [
        {
          tag: 'a',
          class: 'actions-toolbar__button',
          attributes: 'href="#"',
          text: 'Back'
        },
        {
          tag: 'button',
          class: 'actions-toolbar__button',
          attributes: '',
          text: 'Update Wish List'
        },
        {
          tag: 'button',
          class: 'actions-toolbar__button',
          attributes: '',
          text: 'Share Wish List'
        },
        {
          tag: 'button',
          class: 'actions-toolbar__button',
          attributes: '',
          text: 'Add All to Cart'
        }
      ]
    }
  }
}
