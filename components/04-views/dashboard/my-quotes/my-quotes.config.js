module.exports = {
  context: {
    titleWrapper: {
      title: {
        text: 'My quotes',
        tag: 'h1',
        class: 'heading heading--page'
      }
    },
    filtersActions: {
      class: 'my-quotes__filters',
      buttons: [
        {
          tag: 'button',
          class: 'dashboard-actions-toolbar__item button--secondary',
          attributes: 'type="button"',
          text: 'Show my quotes'
        }
      ]
    },
    users: {
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
                    content: 'Quote Name'
                  },
                  {
                    childTag: 'th',
                    content: 'Created'
                  },
                  {
                    childTag: 'th',
                    content: 'Created By'
                  },
                  {
                    childTag: 'th',
                    content: 'Status'
                  },
                  {
                    childTag: 'th',
                    content: 'Last Updated'
                  },
                  {
                    childTag: 'th',
                    content: 'Quote Total	'
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
                    content: '11'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Name:"',
                    content: 'Testowy Tester'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Email:"',
                    content: 'testowy@tester.com'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Role:"',
                    content: 'Default User'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Team:"',
                    content: '-'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Status:"',
                    content: 'Active'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Actions:"',
                    content: ''
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
  }
}
