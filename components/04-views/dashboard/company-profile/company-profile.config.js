module.exports = {
  context: {
    titleWrapper: {
      title: {
        text: 'Company profile',
        tag: 'h1',
        class: 'heading heading--page'
      },
      button: {
        tag: 'button',
        class: 'button button--secondary',
        attributes: 'type="button"',
        text: 'Edit'
      }
    },
    accountInformation: {
      title: 'Account Information',
      informations: [
        {
          class: 'col-sm-6',
          information: 'qweqwe qwe 136 N. Bay Road'
        }
      ]
    },
    legalAddress: {
      title: 'Legal Address',
      informations: [
        {
          class: 'col-sm-6',
          information: 'qweqwe qwe 601 s Galves St New Orlean'
        }
      ]
    },
    contacts: {
      title: 'Legal Address',
      informations: [
        {
          title: 'Company Administrator',
          class: 'col-sm-6',
          information: 'qweqwe qwe 601 s Galves St New Orlean'
        },
        {
          title: 'Sales Representative',
          class: 'col-sm-6',
          information: 'qweqwe qwe 601 s Galves St New Orlean'
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
