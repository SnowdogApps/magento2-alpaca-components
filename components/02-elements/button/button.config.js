module.exports = {
  preview: '@docs-only-styles',
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
        icon: {
          iconId: 'arrow-left',
          iconTitle: 'Arrow left',
          class: 'button__icon',
        },
        attributes: 'type="button" aria-label="click to do something"'
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
        attributes: 'href="#" title="I am a link button"',
        text: 'I am a link button'
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
