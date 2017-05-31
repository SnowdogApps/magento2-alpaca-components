module.exports = {
  status: 'ready',
  collated: true,
  context : {
    text: 'Default'
  },
  variants: [
    {
      name: 'success',
      context: {
        text: 'Success',
        modifier: 'success'
      }
    },
    {
      name: 'info',
      context: {
        text: 'Info',
        modifier: 'info'
      }
    },
    {
      name: 'warning',
      context: {
        text: 'Warning',
        modifier: 'warning'
      }
    },
    {
      name: 'danger',
      context: {
        text: 'Danger',
        modifier: 'danger'
      }
    }
  ]
};
