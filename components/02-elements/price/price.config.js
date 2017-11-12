module.exports = {
  name: 'price',
  context: {
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
  variants: [
    {
      name: 'special-price',
      context: {
        oldPriceClass: '',
        prefix: {
          tag: '',
          closingTag: '',
          text: '$'
        },
        regularPrice: '1 400',
        regularPriceClass: '',
        specialPrice: '1 299.99',
        specialPriceClass: '',
        suffix: {
          tag: '',
          closingTag: '',
          text: ''
        },
      }
    },
  ]
}
