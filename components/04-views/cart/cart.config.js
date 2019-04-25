module.exports = {
  context: {
    mainHeading: {
      tag: 'h1',
      text: 'Shopping Cart',
      class: 'heading heading--page'
    },
    discount: {
      title: 'Apply Discount Code',
      icon: {
        class: 'discount__title-icon',
        iconId: 'arrow-down',
        iconTitle: 'Arrow down'
      },
      button: {
        tag: 'button',
        text: 'Apply Discount',
        class: 'discount__button',
      },
      input: {
        class: 'discount__input',
        label: {
          class: 'label--hidden'
        },
        field: {
          placeholder: 'Enter discount code',
          id: 'discount-code',
          name: 'discount-code',
          class: 'discount__field'
        }
      },
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
            attributes: 'value="5"',
            id: 'qtyValue',
            name: 'qtyValue',
            class: 'products-list-item__details-qty-input'
          }
        },
        buttonEdit: {
          tag: 'a',
          text: '',
          class: 'button--icon products-list-item__actions-button',
          icon: {
            iconId: 'edit',
            iconTitle: 'Edit pencil',
            iconClass: 'button__icon'
          }
        },
        buttonRemove: {
          tag: 'a',
          text: '',
          class: 'button--icon products-list-item__actions-button',
          icon: {
            iconId: 'remove',
            iconTitle: 'Trash bin',
            iconClass: 'button__icon'
          }
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
            attributes: 'value="5"',
            id: 'qtyValue',
            name: 'qtyValue',
            class: 'products-list-item__details-qty-input'
          }
        },
        buttonEdit: {
          tag: 'a',
          text: '',
          class: 'button--icon products-list-item__actions-button',
          icon: {
            iconId: 'edit',
            iconTitle: 'Edit pencil',
            iconClass: 'button__icon'
          }
        },
        buttonRemove: {
          tag: 'a',
          text: '',
          class: 'button--icon products-list-item__actions-button',
          icon: {
            iconId: 'remove',
            iconTitle: 'Trash bin',
            iconClass: 'button__icon'
          }
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
          id: 'discountCode',
          name: 'discountCode',
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
    shippingMethods: {
      name: 'shippingMethods',
      legend: 'Choose option',
      legendId: 'legend-id',
      options: [
        {
          id: 'id',
          label: 'Fixed $5.00'
        },
        {
          id: 'id1',
          label: 'Table Rate $15.00'
        }
      ]
    },
    buttonCheckout: {
      tag: 'button',
      text: 'Proceed to Checkout',
      class: 'button--fluid cart-summary__checkout-button'
    },
  }
};
