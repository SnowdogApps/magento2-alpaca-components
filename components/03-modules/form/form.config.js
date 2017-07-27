module.exports = {
  context: {
    heading: {
      text: 'Newsletter'
    },
    input: {
      field: {
        placeholder: 'This is placeholder'
      }
    },
    button: {
      tag: 'a',
      class: 'button--icon',
      iconId: 'arrow-right',
      iconClass: 'button__icon'
    }
  },
  variants: [
    {
      name: 'compact',
      context: {
        class: 'form--compact'
      }
    }
  ]
};
