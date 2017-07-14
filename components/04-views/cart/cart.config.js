module.exports = {
  context: {
    mainHeading: {
      tag: 'h1',
      text: 'Shopping Cart'
    },
    productlist: [
      {
        name: 'Product name whatever',
        image: {
          src: '/images/product/product-img-230_180.png'
        },
        price: '223.00 USD',
        subtotal: '1 115.00 USD',
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
            }
          ]
        },
        input: {
          class: 'products-list-item__details-qty-wrapper',
          label: {
            class: 'input__label--hidden'
          },
          field: {
            attribute: 'value="5"',
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
      },
      {
        name: 'Product name whatever',
        image: {
          src: '/images/product/product-img-230_180.png'
        },
        price: '223.00 USD',
        subtotal: '1 115.00 USD',
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
            }
          ]
        },
        input: {
          class: 'products-list-item__details-qty-wrapper',
          label: {
            class: 'input__label--hidden'
          },
          field: {
            attribute: 'value="5"',
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
    ],
    buttonUpdateCart: {
      tag: 'button',
      text: 'Update shopping cart',
      class: 'cart__update-button'
    },
    discountForm: {
      class: 'form--compact cart__discount',
      input: {
        label: {
          class: 'cart__discount-label'
        },
        field: {
          class: 'cart__discount-input',
          placeholder: 'Enter discount code'
        }
      },
      button: {
        tag: 'button',
        text: '',
        class: 'button--icon',
        iconId: 'arrow-right',
        iconClass: 'button__icon'
      },
      heading: {
        class: 'cart__discount-heading'
      }
    },
    buttonCheckout: {
      tag: 'button',
      text: 'Proceed to Checkout',
      class: 'button--fluid cart-summary__checkout-button'
    },
  }
};
