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
        class: 'cart-message--success',
      }
    },
    {
      name: 'error',
      context: {
        class: 'cart-message--error',
        text: 'Please specify product\'s required options(s).'
      }
    }
  ]
}
