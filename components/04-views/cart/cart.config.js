module.exports = {
  context: {
    buttonEdit: {
      tag: 'a',
      text: '',
      class: 'button--icon products-list__actions-button',
      iconId: 'edit',
      iconClass: 'button__icon'
    },
    buttonRemove: {
      tag: 'a',
      text: '',
      class: 'button--icon products-list__actions-button',
      iconId: 'remove',
      iconClass: 'button__icon'
    },
    productlist: [
      {
        name: 'Product name whatever',
        image: {
          src: 'http://m2.dev/media/catalog/product/cache/2f58bf1051a2f0ceba166b720ec0a490/l/t/lt02.jpg'
        },
        price: '223.00 zł',
        subtotal: '1 343.00 zł',
        attributes: {
          listTag: 'dl',
          elementTag: 'dt',
          valueTag: 'dd',
          class: 'products-list__attributes',
          elements: [
            {
              label: 'Color',
              value: 'Red'
            },
            {
              label: 'Size',
              value: '40/32'
            }
          ]
        },
        input: {
          class: 'products-list__details-qty-wrapper',
          label: {
            class: 'input__label--hidden'
          },
          field: {
            attribute: 'value="5"',
            class: 'products-list__details-qty-input'
          }
        }
      },
      {
        name: 'LifeLong Fitness IV Long Bame Here Long Bame Here',
        image: {
          src: 'http://m2.dev/media/catalog/product/cache/2f58bf1051a2f0ceba166b720ec0a490/m/h/mh07-gray_main.jpg'
        },
        price: '23.43 zł',
        subtotal: '1 343.00 zł',
        attributes: {
          listTag: 'dl',
          elementTag: 'dt',
          valueTag: 'dd',
          class: 'products-list__attributes',
          elements: [
            {
              label: 'Color',
              value: 'Blue'
            },
            {
              label: 'Size',
              value: 'XS'
            },
            {
              label: 'Label Name',
              value: 'Value Name'
            }
          ]
        },
        input: {
          class: 'products-list__details-qty-wrapper',
          label: {
            class: 'input__label--hidden'
          },
          field: {
            attribute: 'value="1"',
            class: 'products-list__details-qty-input'
          }
        }
      }
    ]
  }
};
