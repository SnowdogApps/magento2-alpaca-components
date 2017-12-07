module.exports = {
  name: 'list-view',
  context: {
    product: {
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
        class: 'catalog-list-item__image',
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
        class: 'button--icon catalog-list-item__actions-secondary-button',
        iconId: 'heart',
        iconClass: 'button__icon catalog-list-item__actions-secondary-button-icon',
        attributes: 'type="button" aria-label="button wishlist"'
      },
      buttonCompare: {
        tag: 'button',
        text: '',
        class: 'button--icon catalog-list-item__actions-secondary-button',
        iconId: 'compare',
        iconClass: 'button__icon catalog-list-item__actions-secondary-button-icon',
        attributes: 'type="button" aria-label="button compare"'
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
    }
  }
};
