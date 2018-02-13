module.exports = {
  name: 'grid-view',
  context: {
    product: {
      tag: 'li',
      class: 'catalog-grid__item',
      badge: {
        name: 'badge--new',
        context: {
          class: 'badge catalog-grid-item__badge',
          text: 'NEW'
        }
      },
      image: {
        class: 'catalog-grid-item__image',
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
      primaryAction: {
        tag: 'button',
        text: 'Add to Cart',
        class: 'button catalog-grid-item__primary-action'
      },
      secondaryActions: [
        {
          icon: {
            iconId: 'heart'
          }
        },
        {
          icon: {
            iconId: 'compare'
          }
        }
      ],
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
