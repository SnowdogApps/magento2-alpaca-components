module.exports = {
  collated: true,
  context: {
    class: '',
    attributes: '',
    titleClass: '',
    heading: {
      tag: 'h5',
      title: 'Size'
    },
    options: [
      {
        class: '',
        attributes: '',
        text: 'XS'
      },
      {
        class: 'swatch__option--active',
        attributes: '',
        text: 'S'
      },
      {
        class: '',
        attributes: '',
        text: 'M'
      },
      {
        class: '',
        attributes: '',
        text: 'L'
      },
      {
        class: '',
        attributes: '',
        text: 'XL'
      }
    ]
  },
  variants: [
    {
      name: 'attribute',
      context: {
        class: '',
        heading: {
          tag: 'h5',
          title: 'Color'
        },
        options: [
          {
            class: 'swatch__option--attributes',
            attributes: 'style="background: url(../../images/swatch/swatch-orange.jpg); background-size: cover; background-position: center center;"'
          },
          {
            class: 'swatch__option--attributes',
            attributes: 'style="background: url(../../images/swatch/swatch-green.jpg); background-size: cover; background-position: center center;"'
          },
          {
            class: 'swatch__option--attributes swatch__option--active',
            attributes: 'style="background: url(../../images/swatch/swatch-red.jpg); background-size: cover; background-position: center center;"'
          },
          {
            class: 'swatch__option--attributes',
            attributes: 'style="background: url(../../images/swatch/swatch-white.jpg); background-size: cover; background-position: center center;"'
          }
        ]
      }
    }
  ]
}
