module.exports = {
  name: 'price',
  context: {
    regularPrice: '1 400.00',
    specialPrice: '',
    prefix: {
      tag: '',
      text: '$'
    },
    suffix: {
      tag: '',
      text: ''
    },
  },
  variants: [
    {
      name: 'with-special-price',
      context: {
        oldPriceClass: '',
        prefix: {
          tag: '',
          closingTag: '',
          text: '$'
        },
        regularPrice: '1 400.00',
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
    {
      name: 'between',
      context: {
        priceClass: 'price__value--between',
        textBeforeFromPrice: 'From',
        textBeforeToPrice: 'To',
        fromPrice: '61.00',
        toPrice: '79.00',
      }
    }
  ]
}
