module.exports = {
  context: {
    titleWrapper: {
      title: {
        text: 'Roles and permissions',
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
                    content: 'ID'
                  },
                  {
                    childTag: 'th',
                    content: 'Role'
                  },
                  {
                    childTag: 'th',
                    content: 'Users'
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
                    content: '1'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Role:"',
                    content: 'Admin'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Users:"',
                    content: 'Max'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Actions:"',
                    content: 'Edit'
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
      class: 'roles-and-permissions__actions',
      buttons: [
        {
          tag: 'button',
          class: 'dashboard-actions-toolbar__item',
          attributes: 'type="button"',
          text: 'Add new role'
        }
      ]
    }
  },
  variants: [
    {
      name: 'edit',
      title: 'Add/Edit',
      context: {
        mainTitle: {
          text: 'Company profile',
          tag: 'h1',
          class: 'heading heading--page'
        },
        form: {
          title: 'Account Information',
          fields: [
            {
              input: {
                class: 'dashboard__input',
                label: {
                  attributes: 'for="company-name"',
                  text: 'Company Name',
                },
                field: {
                  id: 'company-name',
                  name: 'company-name',
                  placeholder: 'Company Name'
                }
              }
            },
            {
              input: {
                class: 'dashboard__input',
                label: {
                  attributes: 'for="company-email"',
                  text: 'Company Email',
                },
                field: {
                  id: 'company-email',
                  name: 'company-email',
                  placeholder: 'Company Email'
                }
              }
            },
            {
              input: {
                class: 'dashboard__input',
                label: {
                  attributes: 'for="tax-id"',
                  text: 'VAT/TAX ID',
                },
                field: {
                  id: 'tax-id',
                  name: 'tax-id',
                  placeholder: 'VAT/TAX ID'
                }
              }
            },
            {
              input: {
                class: 'dashboard__input',
                label: {
                  attributes: 'for="e-seller"',
                  text: 'Re-seller ID',
                },
                field: {
                  id: 're-seller',
                  name: 're-seller',
                  placeholder: 'Re-seller ID'
                }
              }
            },
            {
              input: {
                class: 'dashboard__input',
                label: {
                  attributes: 'for="street-address"',
                  text: 'Street Address',
                },
                field: {
                  id: 'street-address',
                  name: 'street-address',
                  placeholder: 'Street Address'
                }
              }
            },
            {
              input: {
                class: 'dashboard__input',
                label: {
                  attributes: 'for="city"',
                  text: 'City',
                },
                field: {
                  id: 'city',
                  name: 'city',
                  placeholder: 'City'
                }
              }
            }
          ],
          selects: [
            {
              select: {
                class: 'dashboard-form__select',
                label: {
                  text: 'Country',
                },
                options: [
                  {
                    value: 'usa',
                    text: 'USA'
                  },
                  {
                    value: 'poland',
                    text: 'Poland'
                  }
                ]
              }
            }
          ]
        },
        buttons: {
          sides: [
            {
              action: [
                {
                  button: true,
                  title: 'Save Address'
                }
              ]
            }
          ]
        }
      }
    }
  ]
}
