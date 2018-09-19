module.exports = {
  label: 'Actions toolbar',
  name: 'dashboard-actions-toolbar',
  context: {
    class: '',
    buttons: [
      {
        tag: 'button',
        class: 'dashboard-actions-toolbar__item',
        attributes: 'type="button"',
        text: 'Action 1'
      },
      {
        tag: 'button',
        class: 'dashboard-actions-toolbar__item',
        attributes: 'type="button"',
        text: 'Action 2'
      },
    ]
  }
}
