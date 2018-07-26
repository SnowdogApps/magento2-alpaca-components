module.exports = {
  context: {
    heading: false,
    wrapper: {
      attributes: 'aria-label="Size" tabindex="0"',
    },
    options: [
      {
        text: 'XS',
        id: 'opt-size-xs'
      },
      {
        class: 'selected',
        text: 'S',
        id: 'opt-size-s',
        attributes: 'aria-selected="true"'
      },
      {
        text: 'M',
        id: 'opt-size-m'
      },
      {
        text: 'L',
        id: 'opt-size-l'
      },
      {
        text: 'XL',
        id: 'opt-size-xl'
      }
    ]
  },
  variants: [
    {
      name: 'image',
      context: {
        heading: false,
        wrapper: {
          attributes: 'aria-label="Color" tabindex="0" aria-activedescendant="opt-color-red-3" aria-required="true" role="listbox" aria-invalid="false"',
        },
        options: [
          {
            color: 'Orange',
            optionClass: 'swatch__option--image',
            attributes: 'style="background-image: url(../../images/swatch/swatch-orange.jpg);"',
            id: 'opt-color-orange-1'
          },
          {
            color: 'Green',
            optionClass: 'swatch__option--image',
            attributes: 'style="background-image: url(../../images/swatch/swatch-green.jpg);"',
            id: 'opt-color-green-2'
          },
          {
            color: 'Red',
            class: 'selected',
            optionClass: 'swatch__option--image',
            attributes: 'style="background-image: url(../../images/swatch/swatch-red.jpg);" aria-selected="true"',
            id: 'opt-color-red-3'
          },
          {
            color: 'White',
            optionClass: 'swatch__option--image',
            attributes: 'style="background-image: url(../../images/swatch/swatch-white.jpg);"',
            id: 'opt-color-white-4'
          }
        ]
      }
    }
  ]
}
