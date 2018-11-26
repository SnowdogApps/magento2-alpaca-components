module.exports = {
  context: {
    titleWrapper: {
      title: {
        text: 'Company structure',
        tag: 'h1',
        class: 'heading heading--page'
      }
    },
    businessStructureHeading: {
      tag: 'h3',
      text: 'Business Structure',
      class: 'dashboard__title'
    },
    businessStructureActions: {
      class: 'roles-and-permissions__actions',
      buttons: [
        {
          tag: 'button',
          class: 'dashboard-actions-toolbar__item button--secondary',
          attributes: 'type="button"',
          text: 'Expand All'
        },
        {
          tag: 'button',
          class: 'dashboard-actions-toolbar__item button--secondary',
          attributes: 'type="button"',
          text: 'Collapse All'
        },
        {
          tag: 'button',
          class: 'dashboard-actions-toolbar__item button--secondary',
          attributes: 'type="button"',
          text: 'Add User'
        },
        {
          tag: 'button',
          class: 'dashboard-actions-toolbar__item button--secondary',
          attributes: 'type="button"',
          text: 'Add Team'
        },
        {
          tag: 'button',
          class: 'dashboard-actions-toolbar__item button--secondary',
          attributes: 'type="button"',
          text: 'Edit Selected'
        },
        {
          tag: 'button',
          class: 'dashboard-actions-toolbar__item button--secondary',
          attributes: 'type="button"',
          text: 'Delete Selected'
        }
      ]
    }
  }
}
