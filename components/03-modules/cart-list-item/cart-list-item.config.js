module.exports = {
  context: {
    productImage: {
      src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
      dataSrc: '/images/product/minicart-product-72_72.png',
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
    },
    configurable: true
  }
}
