module.exports = {
  title: 'Filters',
  context: {
    tag: 'div',
    activeFilters: {
      clearHref: '#',
      clearText: 'Clear',
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
    range: {
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
    },
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
};
