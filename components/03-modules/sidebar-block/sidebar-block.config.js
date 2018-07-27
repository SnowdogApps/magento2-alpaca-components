module.exports = {
  context: {
    title: 'Compare Products',
    qty: '3 items',
    product: [
      {
        name: 'Chaz Kangeroo Hoodie',
        iconLabel: 'Remove product from compare',
        icon: {
          iconId: 'close',
          class: 'sidebar-block__remove-icon'
        }
      },
      {
        name: 'Bruno Compete Hoodie',
        iconLabel: 'Remove product from compare',
        icon: {
          iconId: 'close',
          class: 'sidebar-block__remove-icon'
        }
      },
      {
        name: 'Hero Hoodie',
        iconLabel: 'Remove product from compare',
        icon: {
          iconId: 'close',
          class: 'sidebar-block__remove-icon'
        }
      }
    ]
  },
  variants: [
    {
      name: 'Wishlist',
      context: {
        title: 'My Wish List',
      }
    }
  ]
};
