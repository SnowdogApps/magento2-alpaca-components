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
    ],
    compareLink: {
      tag: 'a',
      class: 'button--link sidebar-block__action',
      attributes: 'href="#"',
      text: 'Compare'
    },
    clearLink: {
      tag: 'a',
      class: 'button--link sidebar-block__action',
      attributes: 'href="#"',
      text: 'Clear all'
    }
  },
  variants: [
    {
      name: 'Wishlist',
      context: {
        title: 'My Wish List',
        compareLink: false,
        clearLink: false,
        product: [
          {
            name: 'Chaz Kangeroo Hoodie',
            iconLabel: 'Remove product from compare',
            icon: {
              iconId: 'close',
              class: 'sidebar-block__remove-icon'
            },
            addToCart: {
              tag: 'button',
              class: 'button--secondary sidebar-block__action',
              attributes: 'type="button"',
              text: 'Add to Cart'
            },
            removeFromWishlist: {
              tag: 'a',
              class: 'button--link button--secondary sidebar-block__action',
              attributes: 'href="#"',
              text: 'Remove this item'
            }
          },
          {
            name: 'Bruno Compete Hoodie',
            iconLabel: 'Remove product from compare',
            icon: {
              iconId: 'close',
              class: 'sidebar-block__remove-icon'
            },
            addToCart: {
              tag: 'button',
              class: 'button--secondary sidebar-block__action',
              attributes: 'type="button"',
              text: 'Add to Cart'
            },
            removeFromWishlist: {
              tag: 'a',
              class: 'button--link button--secondary sidebar-block__action',
              attributes: 'href="#"',
              text: 'Remove this item'
            }
          },
          {
            name: 'Hero Hoodie',
            iconLabel: 'Remove product from compare',
            icon: {
              iconId: 'close',
              class: 'sidebar-block__remove-icon'
            },
            addToCart: {
              tag: 'button',
              class: 'button--secondary sidebar-block__action',
              attributes: 'type="button"',
              text: 'Add to Cart'
            },
            removeFromWishlist: {
              tag: 'a',
              class: 'button--link button--secondary sidebar-block__action',
              attributes: 'href="#"',
              text: 'Remove this item'
            }
          }
        ]
      }
    }
  ]
};
