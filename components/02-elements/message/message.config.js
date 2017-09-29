module.exports = {
  collated: true,
  context: {
    class: '',
    attributes: '',
    text: 'You added Jacket to your shopping cart.',
  },
  variants: [
    {
      name: 'success',
      context: {
        class: 'message--success',
      }
    },
    {
      name: 'error',
      context: {
        class: 'message--error',
        text: 'Please specify product\'s required options(s).'
      }
    }
  ]
}
