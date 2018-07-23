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
    swatches: [
      {
        name: 'swatch',
        class: 'swatch__wrapper',
        context: {
          options: [
            {
              text: 'XS'
            },
            {
              class: 'selected',
              text: 'S'
            },
            {
              text: 'M'
            },
            {
              text: 'L'
            },
            {
              text: 'XL'
            }
          ]
        }
      },
      {
        name: 'swatch',
        class: 'swatch__wrapper',
        context: {
          options: [
            {
              attributes: 'style="background: #000000"'
            },
            {
              attributes: 'style="background: #8f8f8f"'
            },
            {
              class: 'selected',
              attributes: 'style="background: #eb6703"'
            }
          ]
        }
      }
    ],
    addToCartButton: {
      tag: 'button',
      text: 'Add to Cart',
      class: 'button button--secondary catalog-list-item__actions-primary-button'
    },
    buttonWishlist: {
      tag: 'button',
      text: '',
      class: 'button--icon',
      iconId: 'heart',
      iconClass: 'button__icon',
      attributes: 'type="button" aria-label="Add to wishlist"'
    },
    buttonCompare: {
      tag: 'button',
      text: '',
      class: 'button--icon',
      iconId: 'compare',
      iconClass: 'button__icon',
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
