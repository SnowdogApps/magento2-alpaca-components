module.exports = {
  context: {
    productImage: {
      src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
      dataSrc: '/images/product/minicart-product-72_72.png',
      alt: 'product name goes here'
    },
    productName: 'Some product name',
    productPrice: '$85.00',
    qtyInput: {
      class: 'input--inline minicart-product__qty-input',
      label: {
        attribute: '',
        text: 'Qty:',
        class: 'minicart-product__qty-label'
      },
      field: {
        attribute: 'type="number" value="1"',
        class: '',
        placeholder: 'Qty'
      }
    },
    editIcon: {
      tag: 'a',
      attributes: 'href="#" aria-label="edit product in your shopping cart"',
      text: '',
      class: 'button--icon minicart-product__button',
      iconClass: 'button__icon minicart-product__button-icon',
      iconId: 'edit'
    },
    removeIcon: {
      tag: 'a',
      attributes: 'href="#" aria-label="remove this product from your shopping cart"',
      text: '',
      class: 'button--icon minicart-product__button',
      iconClass: 'button__icon minicart-product__button-icon',
      iconId: 'remove'
    },
    configurable: true,
    detailsList: {
      class: 'minicart-product__details',
      dropdowns: [
        {
          itemTag: 'button',
          itemAttributes: 'aria-expanded="false" aria-controls="minicart-product-details-1"',
          title: 'see product details',
          id: 'minicart-product-details-1',
          collapse: true,
          contentElement: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere magna at erat mollis egestas a ut quam. Pellentesque ac varius ligula.</p>'
        },
      ]
    }
  }
}
