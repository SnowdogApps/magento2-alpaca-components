module.exports = {
  context: {
    labelTag: 'button',
    labelText: 'label text',
    labelIcon: 'arrow-down',
    content: 'list--default'
  },
  variants: [
    {
      name: 'open-wide',
      context: {
        labelText: 'label open on wide screen (media queries min screen: 768p)',
        class: 'dropdown-container--open-wide',
      }
    }
  ]
}
