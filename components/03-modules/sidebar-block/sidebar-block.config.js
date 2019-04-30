module.exports = {
  context: {
    title: {
      tag: 'h2',
      class: 'heading--first-level sidebar-block__title',
      text: 'Compare Products',
    },
    qty: '3 items',
    divider: {
      class: 'sidebar-block__divider'
    },
    product: [
      {
        productName: {
          class: 'sidebar-block__link',
          href: '#',
          text: 'Chaz Kangeroo Hoodie'
        },
        removeButton: {
          tag: 'button',
          attributes: 'aria-label="Remove product from compare" title="Remove product from compare"',
          text: '',
          class: 'sidebar-block__remove',
          icon: {
            id: 'close',
            title: 'Close',
            class: 'icon sidebar-block__remove-icon'
          }
        }
      },
      {
        productName: {
          class: 'sidebar-block__link',
          href: '#',
          text: 'Bruno Compete Hoodie'
        },
        removeButton: {
          tag: 'button',
          attributes: 'aria-label="Remove product from compare" title="Remove product from compare"',
          text: '',
          class: 'sidebar-block__remove',
          icon: {
            id: 'close',
            title: 'Close',
            class: 'icon sidebar-block__remove-icon'
          }
        }
      },
      {
        productName: {
          class: 'sidebar-block__link',
          href: '#',
          text: 'Hero Hoodie'
        },
        removeButton: {
          tag: 'button',
          attributes: 'aria-label="Remove product from compare" title="Remove product from compare"',
          text: '',
          class: 'sidebar-block__remove',
          icon: {
            id: 'close',
            title: 'Close',
            class: 'icon sidebar-block__remove-icon'
          }
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
        title: {
          tag: 'h2',
          class: 'heading--first-level sidebar-block__title',
          text: 'My Wish List',
        },
        compareLink: false,
        clearLink: false,
        product: [
          {
            name: 'Chaz Kangeroo Hoodie',
            iconLabel: 'Remove product from compare',
            icon: {
              id: 'close',
              title: 'Close',
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
              id: 'close',
              title: 'Close',
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
              id: 'close',
              title: 'Close',
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
        ],
        goToWishlist: {
          tag: 'a',
          class: 'button button--link',
          attributes: 'href="#"',
          text: 'Go to Wish List'
        }
      }
    },
    {
      name: 'Recently ordered',
      context: {
        title: {
          tag: 'h2',
          class: 'heading--first-level sidebar-block__title',
          text: 'Recently Ordered',
        },
        compareLink: false,
        clearLink: false,
        product: [
          {
            name: 'Chaz Kangeroo Hoodie',
            checkbox: {
              id: 'reorder-item-1',
              class: 'sidebar-block__checkbox',
              name: 'order-items',
              label: {
                text: 'Add to Cart'
              }
            }
          },
          {
            name: 'Bruno Compete Hoodie',
            checkbox: {
              id: 'reorder-item-2',
              class: 'sidebar-block__checkbox',
              name: 'order-items',
              label: {
                text: 'Add to Cart'
              }
            }
          },
          {
            name: 'Hero Hoodie',
            checkbox: {
              id: 'reorder-item-3',
              class: 'sidebar-block__checkbox',
              name: 'order-items',
              label: {
                text: 'Add to Cart'
              }
            }
          }
        ],
        addToCart: {
          tag: 'button',
          class: 'sidebar-block__action',
          attributes: 'type="button"',
          text: 'Add to Cart'
        },
        viewAll: {
          tag: 'a',
          class: 'button--link sidebar-block__action',
          attributes: 'href="#"',
          text: 'View All'
        }
      }
    }
  ]
};
