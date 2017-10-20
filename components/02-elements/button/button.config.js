module.exports = {
  collated: true,
  context: {
    tag: 'button',
    class: '',
    attributes: 'type="button"',
    text: 'I am a button'
  },
  variants: [
    {
      name: 'icon',
      context: {
        text: '',
        class: 'button--icon',
        iconId: 'arrow-right',
        iconClass: 'button__icon'
      }
    },
    {
      name: 'secondary',
      context: {
        class: 'button--secondary',
        text: 'I am button secondary'
      }
    },
    {
      name: 'link',
      context: {
        tag: 'a',
        class: 'button--link',
        attributes: 'href="#"',
        text: 'I am a link button',
      }
    },
    {
      name: 'native link',
      context: {
        tag: 'a',
        class: 'button--native-link',
        attributes: 'href="#"',
        text: 'I am a native link button',
      }
    },
    {
      name: 'fluid',
      context: {
        class: 'button--fluid'
      }
    },

  ]
};
