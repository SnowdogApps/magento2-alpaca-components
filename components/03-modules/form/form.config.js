module.exports = {
  context: {
    input: {
      field: {
        placeholder: 'This is placeholder'
      }
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
        heading: {
          text: 'Newsletter',
          class: ''
        },
        class: 'form--compact'
      }
    }
  ]
};
