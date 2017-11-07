module.exports = {
  context: {
    giftRegistry: {
      title: 'Gift Registry',
      table: {
        mainTags: [
          {
            mainTag: 'thead',
            rowTags: [
              {
                rowTag: 'tr',
                childTags: [
                  {
                    childTag: 'th',
                    content: 'Event'
                  },
                  {
                    childTag: 'th',
                    content: 'Created on'
                  },
                  {
                    childTag: 'th',
                    content: 'Message'
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
                    childTagAttributes: 'data-th="Event:"',
                    content: 'TEST EVENT'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Created on:"',
                    content: 'Aug 22, 2017'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Message:"',
                    content: 'Store Alpaca'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Actions:"',
                    content: 'Manage Items Share Edit Delete'
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    buttons: {
      sides: [
        {
          action: [
            {
              button: true,
              title: 'Add New'
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
    }
  },
  variants: [
    {
      name: 'general information',
      context: {
        form: {
          title: 'General Information',
          selects: [
            {
              select: {
                class: 'dashboard-form__select',
                label: {
                  text: 'Gift Registry Type*',
                },
                options: [
                  {
                    value: 'birthday',
                    text: 'Birthday'
                  },
                  {
                    value: 'babyregistry',
                    text: 'Baby Registry'
                  },
                  {
                    value: 'weeding',
                    text: 'Weeding'
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
                  title: 'Next'
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
        }
      }
    },
    {
      name: 'form',
      context: {
        generalInformation: {
          class: 'dashboard__item',
          title: 'General Information',
          fields: [
            {
              input: {
                class: 'dashboard-form__divider',
                field: {
                  id: 'event',
                  name: 'event',
                  placeholder: 'Event'
                }
              }
            }
          ],
          textareas: [
            {
              textarea: {
                class: 'dashboard-form__divider',
                field: {
                  id: 'message',
                  name: 'message',
                  placeholder: 'Message'
                }
              }
            }
          ],
          selects: [
            {
              select: {
                class: 'dashboard-form__select',
                label: {
                  text: 'Privacy Settings',
                },
                options: [
                  {
                    value: 'public',
                    text: 'Public'
                  },
                  {
                    value: 'private',
                    text: 'Privete'
                  }
                ]
              }
            },
            {
              select: {
                class: 'dashboard-form__select',
                label: {
                  text: 'Status',
                },
                options: [
                  {
                    value: 'active',
                    text: 'Active'
                  },
                  {
                    value: 'inactive',
                    text: 'Inactive'
                  }
                ]
              }
            }
          ]
        },
        eventInformation: {
          title: 'Event Information',
          selects: [
            {
              select: {
                class: 'dashboard-form__select',
                label: {
                  text: 'Country'
                },
                options: [
                  {
                    value: 'example',
                    text: 'Example country'
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
            },
            {
              select: {
                class: 'dashboard-form__select',
                label: {
                  text: 'State/Province'
                },
                options: [
                  {
                    value: 'example',
                    text: 'Example state'
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
            }
          ]
        },
        eventInformationSecondPart: {
          class: 'dashboard__item',
          fields: [
            {
              input: {
                class: 'dashboard-form__divider',
                field: {
                  id: 'state',
                  name: 'state',
                  placeholder: 'State/Province'
                }
              }
            },
            {
              input: {
                class: 'dashboard-form__divider',
                field: {
                  id: 'date',
                  name: 'date',
                  placeholder: 'Event Date'
                }
              }
            }
          ]
        },
        registrantInformation: {
          title: 'Registrant Information',
          fields: [
            {
              input: {
                class: 'dashboard-form__divider',
                field: {
                  id: 'firstName',
                  name: 'firstName',
                  placeholder: 'Firist name'
                }
              }
            },
            {
              input: {
                class: 'dashboard-form__divider',
                field: {
                  id: 'lastName',
                  name: 'lastName',
                  placeholder: 'Last name'
                }
              }
            },
            {
              input: {
                class: 'dashboard-form__divider',
                field: {
                  id: 'email',
                  name: 'email',
                  placeholder: 'Email'
                }
              }
            }
          ]
        },
        addRegistrant: {
          class: 'dashboard__item',
          sides: [
            {
              action: [
                {
                  button: true,
                  title: 'Add registrant'
                }
              ]
            }
          ]
        },
        shippingAddress: {
          class: 'dashboard__item',
          title: 'Shipping Address',
          selects: [
            {
              select: {
                class: 'dashboard__address dashboard-form__select',
                label: {
                  text: 'Select a shipping addres from your address book or enter a new address',
                },
                options: [
                  {
                    value: 'address1',
                    text: 'Address'
                  },
                  {
                    value: 'address2',
                    text: 'Address 2'
                  },
                  {
                    value: 'address3',
                    text: 'Address 3'
                  },
                  {
                    value: 'newAddress',
                    text: 'New Address'
                  }
                ]
              }
            }
          ]
        },
        hiddenNewAddressForm: {
          class: 'dashboard__item dashboard__form dashboard__form--hidden',
          title: 'Add new address',
          fields: [
            {
              input: {
                class: 'dashboard-form__divider',
                field: {
                  id: 'firstName',
                  name: 'firstName',
                  placeholder: 'First Name'
                }
              }
            },
            {
              input: {
                class: 'dashboard-form__divider',
                field: {
                  id: 'lastName',
                  name: 'lastName',
                  placeholder: 'Last Name'
                }
              }
            },
            {
              input: {
                class: 'dashboard-form__divider',
                field: {
                  id: 'company',
                  name: 'company',
                  placeholder: 'Company'
                }
              }
            },
            {
              input: {
                class: 'dashboard-form__divider',
                field: {
                  id: 'address',
                  name: 'address',
                  placeholder: 'Address'
                }
              }
            },
            {
              input: {
                class: 'dashboard-form__divider',
              }
            },
            {
              input: {
                class: 'dashboard-form__divider',
                field: {
                  id: 'state',
                  name: 'state',
                  placeholder: 'State/Province'
                }
              }
            },
            {
              input: {
                class: 'dashboard-form__divider',
                field: {
                  id: 'zipCode',
                  name: 'zipCode',
                  placeholder: 'Zip/Posta Code'
                }
              }
            },
            {
              input: {
                class: 'dashboard-form__divider',
                field: {
                  id: 'county',
                  name: 'country',
                  placeholder: 'Country'
                }
              }
            },
            {
              input: {
                class: 'dashboard-form__divider',
                field: {
                  id: 'phoneNumber',
                  name: 'phoneNumber',
                  placeholder: 'Phone Number'
                }
              }
            },
            {
              input: {
                class: 'dashboard-form__divider',
                field: {
                  id: 'fax',
                  name: 'fax',
                  placeholder: 'Fax'
                }
              }
            },
          ]
        },
        buttons: {
          sides: [
            {
              action: [
                {
                  button: true,
                  title: 'Save'
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
        }
      }
    }
  ]
}
