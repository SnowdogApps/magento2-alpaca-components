module.exports = {
  context: {
    buttons: {
      class: 'dashboard__actions',
      sides: [
        {
          action: [
            {
              button: true,
              title: 'Add New Address'
            }
          ]
        },
        {
          action: [
            {
              title: 'Back'
            }
          ]
        }
      ]
    },
    addresses: {
      title: 'Default Addresses',
      informations: [
        {
          title: 'Default Billing Address',
          class: 'grid__column grid__column--1-2',
          information: 'qweqwe qwe 136 N. Bay Road',
          actions: {
            sides: [
              {
                action: [
                  {
                    title: 'Change Billing Address'
                  }
                ]
              }
            ]
          }
        },
        {
          title: 'Default Shipping address',
          class: 'grid__column grid__column--1-2',
          information: '11233 Easer 53rd Ave, Suite 600 US',
          actions: {
            sides: [
              {
                action: [
                  {
                    title: 'Change Shipping Address'
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    additionalAddresses: {
      title: 'Additional Addresses Entries',
      informations: [
        {
          class: 'grid__column grid__column--1-2',
          information: 'qweqwe qwe 601 s Galves St New Orlean',
          actions: {
            sides: [
              {
                action: [
                  {
                    title: 'Edit Address'
                  },
                  {
                    title: 'Delete Address'
                  }
                ]
              }
            ]
          }
        },
        {
          class: 'grid__column grid__column--1-2',
          information: 'Delray Beach, Florida, 33444-1250',
          actions: {
            sides: [
              {
                action: [
                  {
                    title: 'Edit Address'
                  },
                  {
                    title: 'Delete Address'
                  }
                ]
              }
            ]
          }
        },
        {
          class: 'grid__column grid__column--1-2',
          information: 'San Antonio, Texas, 78215-1298 US',
          actions: {
            sides: [
              {
                action: [
                  {
                    title: 'Edit Address'
                  },
                  {
                    title: 'Delete Address'
                  }
                ]
              }
            ]
          }
        },
        {
          class: 'grid__column grid__column--1-2',
          information: '3848 Bryn Marw Drive University Park, Texas',
          actions: {
            sides: [
              {
                action: [
                  {
                    title: 'Edit Address'
                  },
                  {
                    title: 'Delete Address'
                  }
                ]
              }
            ]
          }
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
          class: 'grid__column grid__column--1-2',
          fields: [
            {
              input: {
                field: {
                  placeholder: 'First Name'
                }
              }
            },
            {
              input: {
                field: {
                  placeholder: 'Last Name'
                }
              }
            },
            {
              input: {
                field: {
                  placeholder: 'Company'
                }
              }
            },
            {
              input: {
                field: {
                  placeholder: 'Phone Number'
                }
              }
            },
            {
              input: {
                field: {
                  placeholder: 'Fax'
                }
              }
            }
          ]
        },
        address: {
          title: 'Address',
          class: 'grid__column grid__column--1-2',
          fields: [
            {
              input: {
                field: {
                  placeholder: 'Street Address'
                }
              }
            },
            {
              input: {
                field: {
                  placeholder: 'Street Address vol.2'
                }
              }
            },
            {
              input: {
                field: {
                  placeholder: 'City'
                }
              }
            },
            {
              input: {
                field: {
                  placeholder: 'Zip/Postal Code'
                }
              }
            }
          ],
          selects: [
            {
              select: {
                class: 'dashboard__address',
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
                class: 'dashboard__address',
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
                class: 'dashboard-form__checkbox',
                id: 'defaultBillingAddress',
                label: 'Use as my default billing address'
              }
            },
            {
              checkbox: {
                class: 'dashboard-form__checkbox',
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
