module.exports = {
  context: {
    productImage: {
      src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
      dataSrc: '/images/product/cart-product-160_160.jpg',
      alt: 'product name goes here'
    },
    productName: 'Some product long name',
    productPrice: '$85.00',
    qtyInput: {
      class: 'cart-list-item__qty-wrapper',
      label: {
        attribute: '',
        text: 'Qty:',
        class: 'label--hidden'
      },
      field: {
        attribute: 'type="number" value="1"',
        class: 'cart-list-item__qty-input',
        placeholder: 'Qty'
      }
    },
    editIcon: {
      tag: 'a',
      attributes: 'href="#" aria-label="edit product in your shopping cart"',
      text: '',
      class: 'button--icon cart-list-item__actions-item',
      icon: {
        id: 'edit',
        title: 'Edit pencil',
        class: 'button__icon'
      }
    },
    removeIcon: {
      tag: 'button',
      attributes: 'href="#" aria-label="remove this product from your shopping cart"',
      text: '',
      class: 'button--icon cart-list-item__actions-item',
      icon: {
        id: 'remove',
        title: 'Trash bin',
        class: 'button__icon'
      }
    },
    attributes: {
      class: 'cart-list-item__attributes',
      elements: [
        {
          label: 'Size',
          value: 'XXL'
        },
        {
          label: 'Color',
          value: 'Red'
        }
      ]
    },
    configurable: true
  }
}
