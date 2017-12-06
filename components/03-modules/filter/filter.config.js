module.exports = {
  preview: '@docs-only-styles',
  context: {
    content: 'Content',
    id: 'default',
    title: 'Default',
    text: 'content-text',
    icon: {
      iconId: 'angle-down',
      class: 'dropdown-list__icon'
    }
  },
  variants: [
    {
      name: 'Checkbox',
      context: {
        text: '',
        title: 'Checkbox',
        id: 'checkbox',
        checkboxes: [
          {
            class: '',
            href: '#',
            label: {
              text: 'Value 1',
            }
          },
          {
            class: 'checkbox--link-checked',
            href: '#',
            label: {
              text: 'Value 2'
            }
          },
          {
            class: '',
            href: '#',
            label: {
              text: 'Value 3',
            }
          }
        ]
      }
    },
    {
      name: 'swatch',
      context: {
        id: 'swatch',
        title: 'Swatch',
        class: '',
        attributes: '',
        text: '',
        options: [
          {
            text: 'XS',
            ariaLabel: 'Placaholder for arialabel',
            href: '#'
          },
          {
            class: 'filter__swatch-option--active',
            text: 'S',
            ariaLabel: 'Placaholder for arialabel',
            href: '#'
          },
          {
            text: 'M',
            ariaLabel: 'Placaholder for arialabel',
            href: '#'
          },
          {
            text: 'L',
            ariaLabel: 'Placaholder for arialabel',
            href: '#'
          },
          {
            text: 'XL',
            ariaLabel: 'Placaholder for arialabel',
            href: '#'
          }
        ]
      }
    },
    {
      name: 'color',
      context: {
        id: 'color',
        title: 'Color',
        text: '',
        name: 'color',
        class: '',
        options: [
          {
            href: '#',
            class: 'filter__color-option--active',
            attributes: 'style="background: #000"',
            label: 'Black',
            ariaLabel: 'Placeholder for aria-label'
          },
          {
            href: '#',
            class: 'filter__color-option',
            attributes: 'style="background: red"',
            label: 'Red',
            ariaLabel: 'Placeholder for aria-label'
          },
          {
            href: '#',
            class: 'filter__color-option',
            attributes: 'style="background: #5cb85c"',
            label: 'Green',
            ariaLabel: 'Placeholder for aria-label'
          },
          {
            href: '#',
            class: 'filter__color-option',
            attributes: 'style="background: #0275d8"',
            label: 'Blue',
            ariaLabel: 'Placeholder for aria-label'
          }
        ]
      }
    },
    {
      name: 'range',
      context: {
        id: 'range',
        title: 'Range',
        text: '',
        componentObject: {
          name: 'range',
          config: {
            attributes: '',
            class: '',
            filter: {
              wrapperClass: '',
              input: {
                upperClass: '',
                lowerClass: '',
                maxValue: '1000',
                minValue: '0',
                type: 'text'
              },
              suffix: {
                lowerText: '$',
                upperText: '$',
                lowerClass: '',
                upperClass: ''
              }
            },
            rangeInputLower: {
              class: 'range-filter__input range-filter__input--lower',
              label: {
                class: 'range-filter__label',
                text: 'Minimum value'
              },
              field: {
                class: 'range-filter__field range-filter__field--lower',
                id: 'range-filter-min',
                name: 'range-filter-min',
                placeholder: '',
                value: '0'
              }
            },
            rangeInputUpper: {
              class: 'range-filter__input range-filter__input--upper',
              label: {
                class: 'range-filter__label',
                text: 'Maximum value'
              },
              field: {
                class: 'range-filter__field range-filter__field--upper',
                id: 'range-filter-max',
                name: 'range-filter-max',
                placeholder: '',
                value: '1000'
              }
            },
            script: true,
            showFloat: 0
          }
        }
      }
    },
  ]
};
