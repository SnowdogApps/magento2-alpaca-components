module.exports = {
  context: {
    name: 'Product name whatever',
    image: {
      src: '/images/product/product-img-230_180.png'
    },
    price: '223.00 USD',
    subtotal: '1 343.00 USD',
    attributes: {
      listTag: 'dl',
      elementTag: 'dt',
      valueTag: 'dd',
      class: 'products-list-item__attributes',
      elements: [
        {
          label: 'Color',
          value: 'Red'
        },
        {
          label: 'Size',
          value: '40/32'
        },
        {
          label: 'Label',
          value: 'Vlue Text'
        }
      ]
    },
    input: {
      class: 'products-list-item__details-qty-wrapper',
      label: {
        class: 'label--hidden'
      },
      field: {
        attribute: 'value="5"',
        id: 'qtyValue',
        name: 'qtyValue',
        class: 'products-list-item__details-qty-input'
      }
    },
    buttonEdit: {
      tag: 'a',
      text: '',
      class: 'button--icon products-list-item__actions-button',
      iconId: 'edit',
      iconClass: 'button__icon'
    },
    buttonRemove: {
      tag: 'a',
      text: '',
      class: 'button--icon products-list-item__actions-button',
      iconId: 'remove',
      iconClass: 'button__icon'
    }
  }
}
