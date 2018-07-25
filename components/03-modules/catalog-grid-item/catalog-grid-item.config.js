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
    primaryAction: {
      tag: 'button',
      text: '<span class="catalog-grid-item__cart-text">Add to Cart</span>',
      class: 'button button--secondary catalog-grid-item__primary-action',
      iconId: 'shopping-cart',
      iconClass: 'icon catalog-grid-item__cart-icon'
    },
    secondaryActions: {
      wishlist: {
        tag: 'button',
        class: 'button--icon',
        iconId: 'heart',
        iconClass: 'button__icon',
        attributes: 'type="button" aria-label="Add to Wish List"',
      },
      compare: {
        tag: 'button',
        class: 'button--icon',
        iconId: 'compare',
        iconClass: 'button__icon',
        attributes: 'type="button" aria-label="Add to compare"',
      }
    },
    swatches: [
      {
        name: 'swatch',
        context: {
          class: 'swatch--small swatch--image',
          options: [
            {
              attributes: 'style="background-image: url(../../images/swatch/swatch-orange.jpg);"'
            },
            {
              attributes: 'style="background-image: url(../../images/swatch/swatch-green.jpg);"'
            },
            {
              class: 'swatch__option--active',
              attributes: 'style="background-image: url(../../images/swatch/swatch-red.jpg);"'
            },
            {
              attributes: 'style="background-image: url(../../images/swatch/swatch-white.jpg);"'
            }
          ]
        }
      },
      {
        name: 'swatch',
        context: {
          class: 'swatch--small',
          attributes: '',
          titleClass: '',
          options: [
            {
              text: 'XS'
            },
            {
              class: 'swatch__option--active',
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
      }
    ]
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
            regularPrice: '400.00',
            specialPrice: '999.99',
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
    },
    {
      name: 'with-details'
    }
  ]
};
