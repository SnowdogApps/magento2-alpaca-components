module.exports = {
  context: {
    headingText: 'My Cart',
    buttonView: 'View and edit cart',
    cuttonCheckout: 'Go to checkout',
    itemsTotal: '2 items',
    subtitleText: 'Recently items added',
    totalPrice: '$150',
    products: [
      {
        productName: 'Some name 1',
        price: '$75',
        options: {
          'color': 'red',
          'size': 'M'
        }
      },
      {
        productName: 'Some name 2',
        price: '$75',
        options: {
          'color': 'blue',
          'size': 'L'
        }
      }
    ],
    editIcon: 'edit',
    removeIcon: 'remove'
  }
}
