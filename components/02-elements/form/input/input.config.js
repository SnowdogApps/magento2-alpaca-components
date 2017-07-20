module.exports = {
  context: {
    attribute: '',
    class: '',
    inputId: 'input',
    label: {
      attribute: '',
      text: 'Label text',
    },
    field: {
      attribute: '',
      class: '',
      placeholder: 'First and last name'
    }
  },
  variants: [
    {
      name: 'inline',
      context: {
        class: 'input--inline'
      }
    },
    {
      name: 'small',
      context: {
        class: 'input--small',
        field: {
          placeholder: 'short'
        }
      }
    }
  ]
};
