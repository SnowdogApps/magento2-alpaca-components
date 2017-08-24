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
                    content: 'TEST EVENT'
                  },
                  {
                    childTag: 'td',
                    content: 'Aug 22, 2017'
                  },
                  {
                    childTag: 'td',
                    content: 'Store Alpaca'
                  },
                  {
                    childTag: 'td',
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
                class: 'dashboard-form__input',
                field: {
                  placeholder: 'Event'
                }
              }
            }
          ],
          textareas: [
            {
              textarea: {
                class: 'dashboard-form__input',
                field: {
                  placeholder: 'Message'
                }
              }
            }
          ],
          selects: [
            {
              select: {
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
                class: 'dashboard-form__input',
                field: {
                  placeholder: 'State/Province'
                }
              }
            },
            {
              input: {
                class: 'dashboard-form__input',
                field: {
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
                class: 'dashboard-form__input',
                field: {
                  placeholder: 'Firist name'
                }
              }
            },
            {
              input: {
                class: 'dashboard-form__input',
                field: {
                  placeholder: 'Last name'
                }
              }
            },
            {
              input: {
                class: 'dashboard-form__input',
                field: {
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
                class: 'dashboard__address',
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
                class: 'dashboard-form__input',
                field: {
                  placeholder: 'First Name'
                }
              }
            },
            {
              input: {
                class: 'dashboard-form__input',
                field: {
                  placeholder: 'Last Name'
                }
              }
            },
            {
              input: {
                class: 'dashboard-form__input',
                field: {
                  placeholder: 'Company'
                }
              }
            },
            {
              input: {
                class: 'dashboard-form__input',
                field: {
                  placeholder: 'Address'
                }
              }
            },
            {
              input: {
                class: 'dashboard-form__input',
              }
            },
            {
              input: {
                class: 'dashboard-form__input',
                field: {
                  placeholder: 'State/Province'
                }
              }
            },
            {
              input: {
                class: 'dashboard-form__input',
                field: {
                  placeholder: 'Zip/Posta Code'
                }
              }
            },
            {
              input: {
                class: 'dashboard-form__input',
                field: {
                  placeholder: 'Country'
                }
              }
            },
            {
              input: {
                class: 'dashboard-form__input',
                field: {
                  placeholder: 'Phone Number'
                }
              }
            },
            {
              input: {
                class: 'dashboard-form__input',
                field: {
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
