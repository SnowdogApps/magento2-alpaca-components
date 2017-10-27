module.exports = {
  preview: '@docs-only-styles',
  collated: true,
  context: {
    tag: 'button',
    class: '',
    attributes: 'type="button" aria-label="button"',
    text: 'I am a button'
  },
  variants: [
    {
      name: 'icon',
      context: {
        text: '',
        class: 'button--icon',
        iconId: 'arrow-left',
        iconClass: 'button__icon',
        attributes: 'type="button" aria-label="button arrow left"'
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
        attributes: 'href="#" aria-label="button"',
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
