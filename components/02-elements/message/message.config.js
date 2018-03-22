module.exports = {
  collated: true,
  context: {
    class: '',
    attributes: '',
    text: 'You added Jacket to your shopping cart.',
    icon: 'warning'
  },
  variants: [
    {
      name: 'success',
      context: {
        class: 'message--success',
        icon: 'check'
      }
    },
    {
      name: 'error',
      context: {
        class: 'message--error',
        text: 'Please specify product\'s required options(s).',
        icon: 'error'
      }
    }
  ]
}
