module.exports = {
  context: {
    heading: false,
    wrapper: {
      attributes: 'aria-label="Size" tabindex="0" aria-activedescendant="opt-size-s" aria-required="true" role="listbox" aria-invalid="false"'
    },
    options: [
      {
        id: 'opt-size-xs',
        attributes: 'tabindex="0" role="option" aria-selected="false"',
        text: 'XS'
      },
      {
        id: 'opt-size-s',
        attributes: 'tabindex="0" role="option" aria-selected="true"',
        class: 'selected',
        text: 'S'
      },
      {
        id: 'opt-size-m',
        attributes: 'tabindex="0" role="option" aria-selected="false"',
        text: 'M'
      },
      {
        id: 'opt-size-l',
        attributes: 'tabindex="0" role="option" aria-selected="false"',
        text: 'L'
      },
      {
        id: 'opt-size-xl',
        attributes: 'tabindex="0" role="option" aria-selected="false"',
        text: 'XL'
      }
    ]
  },
  variants: [
    {
      name: 'with label',
      context: {
        heading: {
          id: 'option-label-size-1',
          tag: 'span',
          text: 'Label'
        },
        options: [
          {
            headingId: 'option-label-size-1',
            id: 'opt-size-xs',
            attributes: 'tabindex="0" role="option" aria-selected="false"',
            text: 'XS'
          },
          {
            headingId: 'option-label-size-1',
            id: 'opt-size-s',
            attributes: 'tabindex="0" role="option" aria-selected="true"',
            class: 'selected',
            text: 'S'
          },
          {
            headingId: 'option-label-size-1',
            id: 'opt-size-m',
            attributes: 'tabindex="0" role="option" aria-selected="false"',
            text: 'M'
          },
          {
            headingId: 'option-label-size-1',
            id: 'opt-size-l',
            attributes: 'tabindex="0" role="option" aria-selected="false"',
            text: 'L'
          },
          {
            headingId: 'option-label-size-1',
            id: 'opt-size-xl',
            attributes: 'tabindex="0" role="option" aria-selected="false"',
            text: 'XL'
          }
        ]
      }
    },
    {
      name: 'image',
      context: {
        heading: false,
        wrapper: {
          attributes: 'aria-label="Color" tabindex="0" aria-activedescendant="opt-color-red-3" aria-required="true" role="listbox" aria-invalid="false"'
        },
        options: [
          {
            id: 'opt-color-orange-1',
            attributes: 'aria-label="Orange" tabindex="0" role="option" aria-selected="false"',
            option: {
              class: 'swatch__option--image',
              attributes: 'style="background-image: url(../../images/swatch/swatch-orange.jpg)"'
            }
          },
          {
            id: 'opt-color-green-2',
            attributes: 'aria-label="Green" tabindex="0" role="option" aria-selected="false"',
            option: {
              class: 'swatch__option--image',
              attributes: 'style="background-image: url(../../images/swatch/swatch-green.jpg)"'
            }
          },
          {
            id: 'opt-color-red-3',
            class: 'selected',
            attributes: 'aria-label="Red" tabindex="0" role="option" aria-selected="true"',
            option: {
              class: 'swatch__option--image',
              attributes: 'style="background-image: url(../../images/swatch/swatch-red.jpg)"'
            }
          },
          {
            id: 'opt-color-white-4',
            attributes: 'aria-label="White" tabindex="0" role="option" aria-selected="false"',
            option: {
              class: 'swatch__option--image',
              attributes: 'style="background-image: url(../../images/swatch/swatch-white.jpg)"'
            }
          }
        ]
      }
    },
    {
      name: 'image with label',
      context: {
        heading: {
          id: 'option-label-color-1',
          tag: 'span',
          text: 'Label'
        },
        wrapper: {
          attributes: 'aria-label="Color" tabindex="0" aria-activedescendant="opt-color-red-3" aria-required="true" role="listbox" aria-invalid="false"'
        },
        options: [
          {
            headingId: 'option-label-color-1',
            id: 'opt-color-orange-1',
            attributes: 'aria-label="Orange" tabindex="0" role="option" aria-selected="false"',
            option: {
              class: 'swatch__option--image',
              attributes: 'style="background-image: url(../../images/swatch/swatch-orange.jpg)"'
            }
          },
          {
            headingId: 'option-label-color-1',
            id: 'opt-color-green-2',
            attributes: 'aria-label="Green" tabindex="0" role="option" aria-selected="false"',
            option: {
              class: 'swatch__option--image',
              attributes: 'style="background-image: url(../../images/swatch/swatch-green.jpg)"'
            }
          },
          {
            headingId: 'option-label-color-1',
            id: 'opt-color-red-3',
            class: 'selected',
            attributes: 'aria-label="Red" tabindex="0" role="option" aria-selected="true"',
            option: {
              class: 'swatch__option--image',
              attributes: 'style="background-image: url(../../images/swatch/swatch-red.jpg)"'
            }
          },
          {
            headingId: 'option-label-color-1',
            id: 'opt-color-white-4',
            attributes: 'aria-label="White" tabindex="0" role="option" aria-selected="false"',
            option: {
              class: 'swatch__option--image',
              attributes: 'style="background-image: url(../../images/swatch/swatch-white.jpg)"'
            }
          }
        ]
      }
    }
  ]
}
