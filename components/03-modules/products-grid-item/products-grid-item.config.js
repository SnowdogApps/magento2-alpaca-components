module.exports = {
  title: 'Product grid item',
  collated: true,
  context: {
    button: {
      tag: 'a',
      text: 'Add to Cart',
      class: 'button button--link products-grid-item__button'
    },
    class: '',
    image: {
      dataSrc: '/images/products-grid-item/product-1_320_312.jpg'
    },
    name: 'Some product name - very long name because that\'s important',
    price: {
      regularPrice: '1 400',
      specialPrice: '',
      prefix: {
        tag: '',
        closingTag: '',
        text: '$'
      },
      suffix: {
        tag: '',
        closingTag: '',
        text: ''
      },
    },
    options: true,
    swatches: [
      {
        modifier: 'image',
        data: [
          {
            label: 'Color 1',
            id: '167',
            value: 'color1',
            image: {
              dataSrc: '/images/products-grid-item/product-color-swatch-image-1-32_40.jpg',
              alt: 'Color 1'
            },
          },
          {
            label: 'Color 2',
            id: '168',
            value: 'color2',
            image: {
              dataSrc: '/images/products-grid-item/product-color-swatch-image-1-32_40.jpg',
              alt: 'Color 2'
            },
            selected: true
          },
          {
            label: 'Color 3',
            id: '169',
            value: 'color3',
            image: {
              dataSrc: '/images/products-grid-item/product-color-swatch-image-1-32_40.jpg',
              alt: 'Color 3'
            },
          },
          {
            label: 'Color 4',
            id: '170',
            value: 'color4',
            image: {
              dataSrc: '/images/products-grid-item/product-color-swatch-image-1-32_40.jpg',
              alt: 'Color 4'
            },
          },
        ]
      },
      {
        modifier: 'small-rect',
        data: [
          {
            label: 'XS',
            id: '167',
            value: 'XS'
          },
          {
            label: 'S',
            id: '168',
            value: 'S'
          },
          {
            label: 'M',
            id: '169',
            value: 'M'
          },
          {
            label: 'L',
            id: '170',
            value: 'K'
          },
          {
            label: 'XL',
            id: '171',
            value: 'XL'
          }
        ],
      },
    ],
    tag: 'div'
  },
  variants: [
    {
      name: 'with-badge',
      context: {
        badge: {
          discount: {
            text: '-20%'
          },
          new: {
            text: 'NEW'
          }
        },
        price: {
          oldPriceClass: 'products-grid-item__old-price',
          regularPrice: '1 400',
          specialPrice: '999.99',
          specialPriceClass: 'products-grid-item__special-price',
          prefix: {
            tag: '',
            closingTag: '',
            text: '$'
          },
          suffix: {
            tag: '',
            closingTag: '',
            text: ''
          },
        },
      }
    },
  ]
};
