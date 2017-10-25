module.exports = {
  collated: true,
  context : {
    text: 'Default'
  },
  variants: [
    {
      name: 'new',
      context: {
        text: 'new',
        modifier: 'new',
        class: 'test'
      }
    },
    {
      name: 'discount',
      context: {
        text: 'discount',
        modifier: 'discount'
      }
    }
  ]
};
