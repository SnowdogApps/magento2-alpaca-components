module.exports = {
  context: {
    class: '',
    attributes: '',
    heading: {
      tag: 'h5',
      class: '',
      text: 'Size'
    },
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
  },
  variants: [
    {
      name: 'image',
      context: {
        heading: false,
        options: [
          {
            optionClass: 'swatch__option--image',
            attributes: 'style="background-image: url(../../images/swatch/swatch-orange.jpg);"'
          },
          {
            optionClass: 'swatch__option--image',
            attributes: 'style="background-image: url(../../images/swatch/swatch-green.jpg);"'
          },
          {
            class: 'selected',
            optionClass: 'swatch__option--image',
            attributes: 'style="background-image: url(../../images/swatch/swatch-red.jpg);"'
          },
          {
            optionClass: 'swatch__option--image',
            attributes: 'style="background-image: url(../../images/swatch/swatch-white.jpg);"'
          }
        ]
      }
    }
  ]
}
