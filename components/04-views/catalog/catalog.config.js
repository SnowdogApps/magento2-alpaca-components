module.exports = {
  title: 'Catalog',
  context: {
    product: {
      tag: 'li',
      class: 'products-grid__item',
      badge: {
        name: 'badge--new',
        context: {
          class: 'badge products-grid-item__badge',
          text: 'NEW'
        }
      },
      image: {
        class: 'products-grid-item__image',
        dataSrc: '/images/products-grid-item/product-1_320_312.jpg'
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
        class: 'button products-grid-item__primary-action'
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
  },
  variants: [
    {
      name: 'list',
      context: {
        productlist: [
          {
            image: '/images/product/product-img-70_46.png',
            name: 'Product name whatever',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          },
          {
            image: '/images/product/product-img-70_46.png',
            name: 'Product name whatever',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          },
          {
            image: '/images/product/product-img-70_46.png',
            name: 'Product name whatever',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          },
          {
            image: '/images/product/product-img-70_46.png',
            name: 'Product name whatever',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          }
        ]
      }
    }
  ]
};
