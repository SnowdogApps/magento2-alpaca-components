module.exports = {
  title: 'Product grid item',
  collated: true,
  context: {
    badge: {
      class: 'badge--new products-grid-item__badge',
      text: 'NEW'
    },
    button: {
      tag: 'a',
      text: 'Add to Cart',
      class: 'button button--link products-grid-item__button'
    },
    buttonWishlist: {
      text: '',
      iconId: 'heart'
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
        attributeCode: 'color',
        attributeId: '100',
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
            type: 0,
            tooltipType: 'option-tooltip-thumb',
            tooltipValue: 'Color 1',
          },
          {
            label: 'Color 2',
            id: '168',
            value: 'color2',
            image: {
              dataSrc: '/images/products-grid-item/product-color-swatch-image-1-32_40.jpg',
              alt: 'Color 2'
            },
            selected: true,
            type: 0,
            tooltipType: 'option-tooltip-thumb',
            tooltipValue: 'Color 2',
          },
          {
            label: 'Color 3',
            id: '169',
            value: 'color3',
            image: {
              dataSrc: '/images/products-grid-item/product-color-swatch-image-1-32_40.jpg',
              alt: 'Color 3'
            },
            type: 0,
            tooltipType: 'option-tooltip-thumb',
            tooltipValue: 'Color 3',
          },
          {
            label: 'Color 4',
            id: '170',
            value: 'color4',
            image: {
              dataSrc: '/images/products-grid-item/product-color-swatch-image-1-32_40.jpg',
              alt: 'Color 4'
            },
            type: 0,
            tooltipType: 'option-tooltip-thumb',
            tooltipValue: 'Color 4'
          },
        ]
      },
      {
        attributeCode: 'size',
        attributeId: '200',
        modifier: 'small-rect',
        data: [
          {
            id: '167',
            label: 'XS',
            tooltipType: 'option-tooltip-thumb',
            tooltipValue: 'XS',
            type: 0,
            value: 'XS'
          },
          {
            id: '168',
            label: 'S',
            tooltipType: 'option-tooltip-thumb',
            tooltipValue: 'S',
            type: 0,
            value: 'S'
          },
          {
            id: '169',
            label: 'M',
            tooltipType: 'option-tooltip-thumb',
            tooltipValue: 'M',
            type: 0,
            value: 'M'
          },
          {
            id: '170',
            label: 'L',
            selected: true,
            tooltipType: 'option-tooltip-thumb',
            tooltipValue: 'L',
            type: 0,
            value: 'L'
          },
          {
            id: '171',
            label: 'XL',
            tooltipType: 'option-tooltip-thumb',
            tooltipValue: 'XL',
            type: 0,
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
        name: 'Short name',
        price: {
          oldPriceClass: 'products-grid-item__old-price',
          regularPrice: '1  400',
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
        script: true
      }
    },
  ]
};
