module.exports = {
  title: 'Button',
  status: 'wip',
  context: {
    text: 'I am a button'
  },
  variants: [
    {
      name: 'light',
      context: {
        text: 'Light button',
        modifier: 'light',
        iconId: 'icon-arrow-right',
        iconClass: 'button__icon'
      }
    },
    {
      name: 'icon',
      context: {
        text: 'I am a button',
        modifier: 'icon',
        iconId: 'icon-arrow-right',
        iconClass: 'button__icon'
      }
    },
    {
      name: 'capital',
      context: {
        text: 'I am a button',
        modifier: 'capital',
        iconId: 'icon-arrow-right',
        iconClass: 'button__icon'
      }
    },
    {
      name: 'color-icon',
      context: {
        text: 'I am a button',
        modifier: 'color-icon',
        iconId: 'icon-arrow-right',
        iconClass: 'button__icon'
      }
    },
    {
      name: 'dark',
      context: {
        text: 'I am a button',
        modifier: 'dark',
        iconId: 'icon-arrow-right',
        iconClass: 'button__icon'
      }
    },
    {
      name: 'borders',
      context: {
        text: 'I am a button',
        modifier: 'borders',
        modifier2: 'blue-icon',
        iconId: 'icon-arrow-right',
        iconClass: 'button__icon'
      }
    },
    {
      name: 'link',
      context: {
        text: 'I am a link',
        asLink: true
      }
    },
    {
      name: 'link blue',
      context: {
        asLink: true,
        modifier: 'blue',
        text: 'I am a link blue'
      }
    },
    {
      name: 'search',
      context: {
        text: 'I am a button',
        modifier: 'search'
      }
    }
  ]
};
