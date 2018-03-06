module.exports = {
  context: {
    attribute: '',
    class: '',
    label: {
      attribute: '',
      text: 'Label text',
      hidden: false
    },
    field: {
      attribute: '',
      class: '',
      id: 'field-id',
      name: 'field-name',
      placeholder: 'First and last name',
      type: 'text'
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
