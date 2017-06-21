module.exports = {
  context: {
    label: 'Label text',
    placeholder: 'First and last name'
  },
  variants: [
    {
      name: 'textarea',
      context: {
        textarea: true
      }
    },
    {
      name: 'inline-small-right',
      context: {
        class: 'input--inline-small-right'
      }
    }
  ]
};
