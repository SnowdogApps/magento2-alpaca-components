module.exports = {
  context: {
    productImage: {
      src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
      dataSrc: '/images/product/minicart-product-72_72.png',
      alt: 'product name goes here'
    },
    productName: 'Some product name',
    productPrice: '$85.00',
    productQty: 'Qty: 32',
    attributes: {
      script: true,
      class: 'minicart-product__attributes',
      dropdowns: [
        {
          itemTag: 'button',
          class: 'minicart-product__attributes-button',
          itemAttributes: 'aria-expanded="false" aria-controls="see-details"',
          title: 'See details',
          id: 'see-details',
          collapse: true,
          contentElement: 'list--description',
          contentContext: {
            listTag: 'ul',
            elementTag: 'li',
            class: 'minicart-product__attributes-list',
            elements: [
              {
                label: 'Label',
                value: 'Value'
              },
              {
                label: 'Label',
                value: 'Value'
              }
            ]
          }
        }
      ]
    },
    qtyInput: {
      class: 'input--inline minicart-product__qty-input',
      label: {
        attribute: '',
        text: 'Qty:',
        class: 'minicart-product__qty-label'
      },
      field: {
        attribute: 'type="number" value="1"',
        class: 'minicart-product__qty-input',
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
    configurable: true
  }
}
