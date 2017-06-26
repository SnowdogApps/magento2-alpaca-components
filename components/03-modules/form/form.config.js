module.exports = {
  context: {
    input: {
      placeholder: 'This is placeholder',
    },
    button: {
      tag: 'a',
      text: '',
      class: 'button--icon',
      iconId: 'arrow-right',
      iconClass: 'button__icon'
    }
  },
  variants: [
    {
      name: 'compact',
      context: {
        heading: 'Newsletter',
        class: 'form--compact'
      }
    }
  ]
};
