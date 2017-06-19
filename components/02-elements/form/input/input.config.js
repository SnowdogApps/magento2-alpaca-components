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
      name: 'compact',
      context: {
        class: 'input--compact'
      }
    }
  ]
};
