module.exports = {
  context: {
    tag: 'div',
    class: '',
    badge: {
      name: 'badge--new',
      context: {
        class: 'badge catalog-grid-item__badge',
        text: 'NEW'
      }
    },
    image: {
      wrapperClass: 'catalog-grid-item__image-wrapper',
      dataSrc: '/images/catalog-grid-item/product-1_320_312.jpg'
    },
    name: 'Some product name - very long name because that\'s important',
    price: {
      name: 'price',
      context: {
        regularPrice: '1 400',
        specialPrice: '',
        prefix: {
          tag: '',
          text: '$'
        },
        suffix: {
          tag: '',
          text: ''
        }
      }
    },
    rating: {
      class: 'catalog-grid-item__rating'
    },
    swatches: true,
    primaryAction: {
      tag: 'button',
      text: '<span class="catalog-grid-item__cart-text">Add to Cart</span>',
      class: 'button button--secondary catalog-grid-item__primary-action',
      iconId: 'shopping-cart',
      iconTitle: 'Shopping cart',
      iconClass: 'icon catalog-grid-item__cart-icon'
    },
    secondaryActions: {
      wishlist: {
        tag: 'button',
        class: 'button--icon',
        iconId: 'heart',
        iconTitle: 'Heart',
        iconClass: 'button__icon',
        attributes: 'type="button" aria-label="Add to Wish List"',
      },
      compare: {
        tag: 'button',
        class: 'button--icon',
        iconId: 'compare',
        iconTitle: 'Compare',
        iconClass: 'button__icon',
        attributes: 'type="button" aria-label="Add to compare"',
      }
    }
  },
  variants: [
    {
      name: 'special-price',
      context: {
        badge: {
          name: 'badge--discount',
          context: {
            text: '-10%',
            class: 'badge--discount catalog-grid-item__badge'
          }
        },
        name: 'Short name',
        price: {
          name: 'price--with-special-price',
          context: {
            oldPriceClass: 'catalog-grid-item__old-price',
            regularPrice: '1000.00',
            specialPrice: '899.99',
            specialPriceClass: 'catalog-grid-item__special-price',
            prefix: {
              tag: '',
              text: '$'
            },
            suffix: {
              tag: '',
              text: ''
            }
          }
        }
      }
    }
  ]
};
