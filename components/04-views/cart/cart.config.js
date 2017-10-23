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
        price: '$223.00',
        subtotal: '$1 115.00',
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
            class: 'label--hidden'
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
        price: '$195.00',
        subtotal: '$715.00',
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
            class: 'label--hidden'
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
      class: 'button--secondary cart-actions__button'
    },
    buttonClearCart: {
      tag: 'button',
      text: 'Clear shopping cart',
      class: 'button--secondary cart-actions__button'
    },
    buttonContinueShipping: {
      tag: 'a',
      text: 'Continue Shipping',
      class: 'button--secondary button--link cart-actions__button cart-actions__button--continue'
    },
    discountForm: {
      class: 'form--compact cart__discount',
      input: {
        class: '',
        field: {
          class: 'form-compact__input-field cart__discount-field',
          placeholder: 'Enter discount code'
        }
      },
      button: {
        tag: 'button',
        text: 'Apply Discount',
        class: '',
      },
      heading: {
        class: ''
      }
    },
    shippingMethods: [
      {
        heading: 'Flat Rate',
        id: 'id',
        label: 'Fixed $5.00',
        name: 'radio'
      },
      {
        heading: 'Best Way',
        id: 'id1',
        label: 'Table Rate $15.00',
        name: 'radio'
      }
    ],
    buttonCheckout: {
      tag: 'button',
      text: 'Proceed to Checkout',
      class: 'button--fluid cart-summary__checkout-button'
    },
  }
};
