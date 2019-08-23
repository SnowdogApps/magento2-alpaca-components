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
        icon: {
          id: 'arrow-left',
          title: 'Arrow left',
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
    {
      name: 'icon-before',
      view: 'button--icon.hbs',
      context: {
        text: 'Button Icon before',
        iconBefore: {
          id: 'arrow-left',
          title: 'Arrow left',
          class: 'button__icon',
          hidden: true
        },
        attributes: 'type="button" aria-label="click to do something"'
      }
    },
    {
      name: 'icon-after',
      view: 'button--icon.hbs',
      context: {
        text: 'Button Icon after',
        iconAfter: {
          id: 'arrow-right',
          title: 'Arrow Right',
          class: 'button__icon',
          hidden: true
        },
        attributes: 'type="button" aria-label="click to do something"'
      }
    },
  ]
};
