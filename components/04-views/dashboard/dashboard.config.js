module.exports = {
  context: {
    wishlist: {
      title: 'My Wish List',
      items: {
        class: 'dashboard-items__list',
        elementTag: 'li',
        listTag: 'ul',
        elements: [
          {
            text: 'One product in wishlist'
          }
        ]
      },
      toolbar: {
        title: 'Remove all'
      }
    },
    address: {
      title: 'Billing Address',
      items: {
        class: 'dashboard-items__list',
        elementTag: 'li',
        listTag: 'ul',
        elements: [
          {
            text: 'Address 123 123 address'
          }
        ]
      }
    }
  }
}
