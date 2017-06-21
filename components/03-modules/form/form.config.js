module.exports = {
  context: {
    placeholder: 'This is placeholder',
    tag: 'a',
    text: '',
    buttonClass: 'button--icon',
    iconId: 'arrow-right',
    iconClass: 'button__icon'
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
