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
        attributes: {
          script: false,
        }
      },
      {
        productName: 'Some product 2 name',
      }
    ]
  }
};
