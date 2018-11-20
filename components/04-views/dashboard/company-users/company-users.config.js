module.exports = {
  context: {
    titleWrapper: {
      title: {
        text: 'Company Users',
        tag: 'h1',
        class: 'heading heading--page'
      }
    },
    filters: {
      informations: [
        {
          actions: {
            sides: [
              {
                action: [
                  {
                    button: true,
                    class: 'button--secondary',
                    title: 'Show inactive users'
                  },
                  {
                    button: true,
                    class: 'button--secondary',
                    title: 'Show all users'
                  }
                ]
              }
            ]
          }
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
                    content: 'ID'
                  },
                  {
                    childTag: 'th',
                    content: 'Name'
                  },
                  {
                    childTag: 'th',
                    content: 'Email'
                  },
                  {
                    childTag: 'th',
                    content: 'Role'
                  },
                  {
                    childTag: 'th',
                    content: 'Team'
                  },
                  {
                    childTag: 'th',
                    content: 'Status'
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
    },
    actions: {
      informations: [
        {
          actions: {
            sides: [
              {
                action: [
                  {
                    button: true,
                    title: 'Add new user'
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
