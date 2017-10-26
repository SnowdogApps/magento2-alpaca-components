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
        class: 'badge--new'
      }
    },
    {
      name: 'discount',
      context: {
        text: 'discount',
        class: 'badge--discount'
      }
    }
  ]
};
