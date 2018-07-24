module.exports = {
  context: {
    heading: false,
    wrapper: {
      attributes: 'aria-label="Size" tabindex="0"',
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
        wrapper: {
          attributes: 'aria-label="Color" tabindex="0"',
        },
        options: [
          {
            color: 'Orange',
            optionClass: 'swatch__option--image',
            attributes: 'style="background-image: url(../../images/swatch/swatch-orange.jpg);"'
          },
          {
            color: 'Green',
            optionClass: 'swatch__option--image',
            attributes: 'style="background-image: url(../../images/swatch/swatch-green.jpg);"'
          },
          {
            color: 'Red',
            class: 'selected',
            optionClass: 'swatch__option--image',
            attributes: 'style="background-image: url(../../images/swatch/swatch-red.jpg);"'
          },
          {
            color: 'White',
            optionClass: 'swatch__option--image',
            attributes: 'style="background-image: url(../../images/swatch/swatch-white.jpg);"'
          }
        ]
      }
    }
  ]
}
