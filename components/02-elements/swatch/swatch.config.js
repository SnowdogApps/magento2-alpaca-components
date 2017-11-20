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
  },
  variants: [
    {
      name: 'small',
      context: {
        class: 'swatch--small'
      }
    },
    {
      name: 'image',
      context: {
        class: 'swatch--image',
        heading: false,
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
      name: 'small-image',
      context: {
        class: 'swatch--small swatch--image',
        heading: false,
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
    }
  ]
}
