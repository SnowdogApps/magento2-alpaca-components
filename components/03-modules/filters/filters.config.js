module.exports = {
  title: 'Filters',
  context: {
    tag: 'div',
    activeFilters: {
      clearHref: '#',
      clearText: 'Clear All',
      filters: [
        {
          iconId: 'close',
          label: 'Label',
          value: 'Value',
          ariaLabel: 'Disable filter'
        },
        {
          iconId: 'close',
          label: 'Label',
          value: 'Value',
          ariaLabel: 'Disable filter'
        },
        {
          iconId: 'close',
          label: 'Label',
          value: 'Value',
          ariaLabel: 'Disable filter'
        }
      ]
    },
    divider: {
      class: 'filters__divider'
    },
    dropdownList: {
      class: 'dropdown-list--secondary'
    },
    range: {
      default: false,
      rangeEnabled: true,
      id: 'range',
      title: 'Range',
      config: {
        attributes: '',
        class: 'filter__range',
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
    },
    swatch: {
      default: false,
      swatchEnabled: true,
      id: 'swatch',
      title: 'Swatch',
      class: '',
      attributes: '',
      options: [
        {
          text: 'XS'
        },
        {
          class: 'filter__swatch-option--active',
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
    color: {
      name: 'color',
      title: 'Color'
    },
    checkbox: {
      default: false,
      checkboxEnabled: true,
      id: 'checkbox',
      title: 'Checkbox',
      checkboxes: [
        {
          class: '',
          label: {
            text: 'Value 1',
          }
        },
        {
          class: 'checkbox--link-checked',
          label: {
            text: 'Value 2'
          }
        },
        {
          class: '',
          label: {
            text: 'Value 3',
          }
        }
      ]
    }
  }
};
