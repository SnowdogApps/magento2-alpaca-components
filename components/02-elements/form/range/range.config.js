module.exports = {
  status: 'wip',
  preview: '@docs-only-styles',
  context: {
    class: '',
    button: {
      label: 'Filter'
    },
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
      'field': {
        class: 'range-filter__field range-filter__field--lower',
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
        placeholder: '',
        value: '1000'
      }
    }
  },
  variants: [
    {
      name: 'inline',
      context: {
        class: 'input--inline'
      }
    }
  ]
};
