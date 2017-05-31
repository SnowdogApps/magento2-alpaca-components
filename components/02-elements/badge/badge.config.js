module.exports = {
  title: 'Badge component',
  context : {
    text: 'Badge'
  },
  variants: [
    {
      name: 'New',
      context: {
        text: 'New',
        modifier: 'new'
      }
    },
    {
      name: 'Alert',
      context: {
        text: 'Alert',
        modifier: 'alert'
      }
    },
    {
      name: 'Error',
      context: {
        text: 'Error',
        modifier: 'error'
      }
    }
  ]
};
