module.exports = {
  context: {
    titleWrapper: {
      title: {
        text: 'Requisition lists',
        tag: 'h1',
        class: 'heading heading--page'
      }
    },
    itemsOrdered: {
      table: {
        class: 'dashboard-table__table',
        mainTags: [
          {
            mainTag: 'thead',
            rowTags: [
              {
                rowTag: 'tr',
                childTags: [
                  {
                    childTag: 'th',
                    content: 'Name & Description'
                  },
                  {
                    childTag: 'th',
                    content: 'Items'
                  },
                  {
                    childTag: 'th',
                    content: 'Latest Activity'
                  },
                  {
                    childTag: 'th',
                    content: 'Actions'
                  }
                ]
              },
            ]
          },
          {
            mainTag: 'tbody',
            rowTags: [
              {
                rowTag: 'tr',
                childTags: [
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="ID:"',
                    content: 'Test'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Role:"',
                    content: '09/05/2018'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Users:"',
                    content: '0'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Actions:"',
                    content: 'View'
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    toolbar: {
      showLimit: true,
      showMode: false,
      showSorter: false,
      showAmount: false,
      limiter: {
        class: 'toolbar__limiter toolbar__limiter--relative'
      }
    }
  },
  variants: [
    {
      name: 'view',
      title: 'View',
      context: {
        titleWrapper: {
          title: {
            text: 'Requisition list name',
            tag: 'h1',
            class: 'heading heading--page'
          },
          button: {
            tag: 'button',
            class: 'button button--secondary',
            attributes: 'type="button"',
            text: 'Remove'
          }
        },
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    }
  ]
}
