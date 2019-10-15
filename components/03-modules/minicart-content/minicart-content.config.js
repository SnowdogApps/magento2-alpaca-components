module.exports = {
  context: {
    total: 'Cart Subtotal',
    counter: '2 items',
    price: '$ 200.00',
    editButton: {
      label: 'View and edit cart',
      link: '/edit'
    },
    checkoutButton: {
      tag: 'button',
      class: 'button--secondary button--fluid minicart-content__checkout',
      attributes: 'type="button"',
      text: 'Go to Checkout'
    },
    products: [
      {
        productQty: {
          field: {
            id: 'mini-qty-1'
          }
        },
        attributes: {
          id: 'test-1',
          dropdowns: [
            {
              itemAttributes: 'aria-expanded="false" aria-controls="see-details-1"',
              id: 'see-details-1'
            }
          ]
        }
      },
      {
        productName: 'Some product 2 name',
        updateQty: false,
        productQty: {
          field: {
            id: 'mini-qty-2'
          }
        },
        attributes: {
          id: 'test-2',
          dropdowns: [
            {
              itemAttributes: 'aria-expanded="false" aria-controls="see-details-2"',
              id: 'see-details-2'
            }
          ]
        }
      }
    ]
  }
};
