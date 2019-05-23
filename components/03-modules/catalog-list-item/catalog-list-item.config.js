module.exports = {
  context: {
    tag: 'section',
    class: 'catalog-list__item',
    badge: {
      name: 'badge--new',
      context: {
        class: 'badge catalog-list-item__badge',
        text: 'NEW'
      }
    },
    image: {
      wrapperClass: 'catalog-list-item__image-wrapper',
      dataSrc: '/images/catalog-grid-item/product-1_320_312.jpg'
    },
    name: 'Some product name - very long name because that\'s important',
    price: {
      name: 'price',
      context: {
        regularPrice: '1 400,00',
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
    addToCartButton: {
      tag: 'button',
      text: 'Add to Cart',
      class: 'button button--secondary catalog-list-item__actions-primary-button'
    },
    buttonWishlist: {
      tag: 'button',
      text: '',
      class: 'button--icon',
      icon: {
        id: 'heart',
        title: 'Heart',
        class: 'button__icon'
      },
      attributes: 'type="button" aria-label="Add to wishlist"'
    },
    buttonCompare: {
      tag: 'button',
      text: '',
      class: 'button--icon',
      icon: {
        id: 'compare',
        title: 'Compare',
        class: 'button__icon'
      },
      attributes: 'type="button" aria-label="Add to compare"'
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
            class: 'badge--discount catalog-list-item__badge'
          }
        },
        name: 'Short name',
        price: {
          name: 'price--with-special-price',
          context: {
            oldPriceClass: 'catalog-list-item__old-price',
            regularPrice: '400.00',
            specialPrice: '999.99',
            specialPriceClass: 'catalog-list-item__special-price',
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
