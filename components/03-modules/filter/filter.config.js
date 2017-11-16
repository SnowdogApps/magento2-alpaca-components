module.exports = {
  status: 'wip',
  context: {
    default: true,
    content: 'Content',
    id: 'default',
    title: 'Default'
  },
  variants: [
    {
      name: 'Checkbox',
      context: {
        default: false,
        checkboxEnabled: true,
        id: 'checkbox',
        title: 'Checkbox',
        checkboxes: [
          {
            id: 'checkbox',
            name: 'checkbox-name',
            label: {
              text: 'Insulated',
              class: ''
            },
            icon: {
              class: ''
            },
            input: {
              class: ''
            }
          },
          {
            id: 'checkbox1',
            name: 'checkbox-name1',
            label: {
              text: 'Lightweight',
              class: ''
            },
            icon: {
              class: ''
            },
            input: {
              class: ''
            }
          },
          {
            id: 'checkbox2',
            name: 'checkbox-name2',
            label: {
              text: 'Value',
              class: ''
            },
            icon: {
              class: ''
            },
            input: {
              class: ''
            }
          }
        ]
      }
    },
    {
      name: 'swatch',
      context: {
        default: false,
        swatchEnabled: true,
        id: 'swatch',
        title: 'Swatch',
        config: {
          class: '',
          attributes: '',
          titleClass: '',
          title: 'Choose your size',
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
        }
      }
    },
    {
      name: 'color',
      context: {
        default: false,
        colorEnabled: true,
        id: 'color',
        title: 'Color',
        config: {
          name: 'color',
          class: '',
          title: 'Choose color',
          options: [
            {
              class: 'swatch__option--color',
              attributes: 'style="background: #000"',
              text: ''
            },
            {
              class: 'swatch__option--color',
              attributes: 'style="background: #fff"',
              text: ''
            },
            {
              class: 'swatch__option--color swatch__option--active',
              attributes: 'style="background: #5cb85c"',
              text: ''
            },
            {
              class: 'swatch__option--color',
              attributes: 'style="background: #0275d8"',
              text: ''
            }
          ]
        }
      }
    },
    {
      name: 'range',
      context: {
        default: false,
        rangeEnabled: true,
        id: 'range',
        title: 'Range',
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
    },
  ]
};
