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
          class: 'grid__column grid__column--1-2',
          information: 'qweqwe qwe 136 N. Bay Road'
        }
      ]
    },
    legalAddress: {
      title: 'Legal Address',
      informations: [
        {
          class: 'grid__column grid__column--1-2',
          information: 'qweqwe qwe 601 s Galves St New Orlean'
        }
      ]
    },
    contacts: {
      title: 'Legal Address',
      informations: [
        {
          title: 'Company Administrator',
          class: 'grid__column grid__column--1-2',
          information: 'qweqwe qwe 601 s Galves St New Orlean'
        },
        {
          title: 'Sales Representative',
          class: 'grid__column grid__column--1-2',
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
        contactInfo: {
          title: 'Contact Information',
          class: 'grid__column grid__column--1-2 dashboard__form',
          fields: [
            {
              input: {
                class: 'dashboard__input',
                field: {
                  id: 'firstName',
                  name: 'firstName',
                  placeholder: 'First Name'
                }
              }
            },
            {
              input: {
                class: 'dashboard__input',
                field: {
                  id: 'lastName',
                  name: 'lastName',
                  placeholder: 'Last Name'
                }
              }
            },
            {
              input: {
                class: 'dashboard__input',
                field: {
                  id: 'company',
                  name: 'company',
                  placeholder: 'Company'
                }
              }
            },
            {
              input: {
                class: 'dashboard__input',
                field: {
                  id: 'phoneNumber',
                  name: 'phoneNumber',
                  placeholder: 'Phone Number'
                }
              }
            },
            {
              input: {
                class: 'dashboard__input',
                field: {
                  id: 'fax',
                  name: 'fax',
                  placeholder: 'Fax'
                }
              }
            }
          ]
        },
        address: {
          title: 'Address',
          class: 'grid__column grid__column--1-2 dashboard__form',
          fields: [
            {
              input: {
                class: 'dashboard__input',
                field: {
                  id: 'address',
                  name: 'address',
                  placeholder: 'Street Address'
                }
              }
            },
            {
              input: {
                class: 'dashboard__input',
                field: {
                  id: 'address2',
                  name: 'address2',
                  placeholder: 'Street Address vol.2'
                }
              }
            },
            {
              input: {
                class: 'dashboard__input',
                field: {
                  id: 'city',
                  name: 'city',
                  placeholder: 'City'
                }
              }
            },
            {
              input: {
                class: 'dashboard__input',
                field: {
                  id: 'zipCode',
                  name: 'zipCode',
                  placeholder: 'Zip/Postal Code'
                }
              }
            }
          ],
          selects: [
            {
              select: {
                class: 'dashboard__address dashboard-form__select',
                label: {
                  text: 'State/Province',
                },
                options: [
                  {
                    value: 'example1',
                    text: 'Example State 1'
                  },
                  {
                    value: 'example2',
                    text: 'Example state 2'
                  },
                  {
                    value: 'example3',
                    text: 'Example state 3'
                  }
                ]
              }
            },
            {
              select: {
                class: 'dashboard__address dashboard-form__select',
                label: {
                  text: 'Country'
                },
                options: [
                  {
                    value: 'example1',
                    text: 'Example country 1'
                  },
                  {
                    value: 'example2',
                    text: 'Example country 2'
                  },
                  {
                    value: 'example3',
                    text: 'Example country 3'
                  }
                ]
              }
            }
          ],
          checkboxes: [
            {
              checkbox: {
                class: 'dashboard-form__divider',
                id: 'defaultBillingAddress',
                label: 'Use as my default billing address'
              }
            },
            {
              checkbox: {
                class: 'dashboard-form__divider',
                id: 'defaultShippingAddress',
                label: 'Use as my default shipping address'
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
