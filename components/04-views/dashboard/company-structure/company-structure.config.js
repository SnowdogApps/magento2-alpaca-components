module.exports = {
  context: {
    titleWrapper: {
      title: {
        text: 'Company structure',
        tag: 'h1',
        class: 'heading heading--page'
      }
    },
    businessStructure: {
      title: 'Business Structure',
      informations: [
        {
          actions: {
            sides: [
              {
                action: [
                  {
                    button: true,
                    class: 'button--secondary company-structure__action-button',
                    title: 'Expand All'
                  },
                  {
                    button: true,
                    class: 'button--secondary company-structure__action-button',
                    title: 'Collapse All'
                  },
                  {
                    button: true,
                    class: 'button--secondary company-structure__action-button',
                    title: 'Add User'
                  },
                  {
                    button: true,
                    class: 'button--secondary company-structure__action-button',
                    title: 'Add Team'
                  },
                  {
                    button: true,
                    class: 'button--secondary company-structure__action-button',
                    title: 'Edit Selected'
                  },
                  {
                    button: true,
                    class: 'button--secondary company-structure__action-button',
                    title: 'Delete Selected'
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  }
}
