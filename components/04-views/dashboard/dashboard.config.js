module.exports = {
  context: {
    title: 'My dashboard',
    wishlist: {
      title: 'My Wish List',
      items: {
        class: 'dashboard-list-item__list',
        elementTag: 'li',
        listTag: 'ol',
        elements: [
          {
            text: 'One product in wishlist'
          }
        ]
      },
      buttons: {
        sides: [
          {
            action: [
              {
                title: 'Remove All'
              }
            ]
          }
        ]
      }
    },
    recentlyOrdered: {
      title: 'Recently Ordered',
      items: {
        class: 'dashboard-list-item__list',
        listTag: 'ol',
        elementTag: 'li',
        elements: [
          {
            text: 'First item',
          }
        ],
      },
      buttons: {
        sides: [
          {
            action: [
              {
                button: true,
                title: 'Add to Cart'
              }
            ]
          },
          {
            action: [
              {
                title: 'View All'
              }
            ]
          }
        ]
      }
    },
    account: {
      title: 'Account Information',
      informations: [
        {
          title: 'Contact information',
          class: 'grid__column grid__column--1-2',
          information: 'qweqwe qwe qwe@qwe.com',
          actions: {
            sides: [
              {
                action: [
                  {
                    title: 'Edit'
                  },
                  {
                    title: 'Change password'
                  }
                ]
              }
            ]
          }
        },
        {
          title: 'Newsletters',
          class: 'grid__column grid__column--1-2',
          information: 'You don\'t subscribe to our newsletter.',
          actions: {
            sides: [
              {
                action: [
                  {
                    title: 'Edit'
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    addreses: {
      title: 'Address Book',
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
                    title: 'Edit Address'
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
                    title: 'Edit Address'
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
      name: 'account-info',
      context: {
        nav: {
          title: 'My Account',
          list: {
            class: 'dashboard-nav__content',
            listTag: 'ul',
            elementTag: 'li',
            elements: [
              {
                text: 'Account Dashboard',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Account Information',
                class: 'dashboard-nav__item current'
              },
              {
                text: 'Address Book',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Store Credit',
                class: 'dashboard-nav__item'
              },
              {
                text: 'My Downloadable Products',
                class: 'dashboard-nav__item'
              }
            ]
          }
        },
        buttons: {
          class: 'dashboard__actions',
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
                  title: 'Go Back'
                }
              ]
            }
          ],
        }
      }
    },
    {
      name: 'address-book',
      context: {
        nav: {
          title: 'My Account',
          list: {
            class: 'dashboard-nav__content',
            listTag: 'ul',
            elementTag: 'li',
            elements: [
              {
                text: 'Account Dashboard',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Account Information',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Address Book',
                class: 'dashboard-nav__item current'
              },
              {
                text: 'Store Credit',
                class: 'dashboard-nav__item'
              },
              {
                text: 'My Downloadable Products',
                class: 'dashboard-nav__item'
              }
            ]
          }
        },
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
      }
    },
    {
      name: 'my-orders',
      context: {
        nav: {
          title: 'My Account',
          list: {
            class: 'dashboard-nav__content',
            listTag: 'ul',
            elementTag: 'li',
            elements: [
              {
                text: 'Account Dashboard',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Account Information',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Address Book',
                class: 'dashboard-nav__item'
              },
              {
                text: 'My Orders',
                class: 'dashboard-nav__item current'
              },
              {
                text: 'Store Credit',
                class: 'dashboard-nav__item'
              },
              {
                text: 'My Downloadable Products',
                class: 'dashboard-nav__item'
              }
            ]
          }
        },
        action: {
          sides: [
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
      name: 'store-credit',
      context: {
        nav: {
          title: 'My Account',
          list: {
            class: 'dashboard-nav__content',
            listTag: 'ul',
            elementTag: 'li',
            elements: [
              {
                text: 'Account Dashboard',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Account Information',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Address Book',
                class: 'dashboard-nav__item'
              },
              {
                text: 'My Orders',
                class: 'dashboard-nav__item '
              },
              {
                text: 'Store Credit',
                class: 'dashboard-nav__item current'
              },
              {
                text: 'My Downloadable Products',
                class: 'dashboard-nav__item'
              }
            ]
          }
        }
      }
    },
    {
      name: 'wishlist',
      context: {
        nav: {
          title: 'My Account',
          list: {
            class: 'dashboard-nav__content',
            listTag: 'ul',
            elementTag: 'li',
            elements: [
              {
                text: 'Account Dashboard',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Account Information',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Address Book',
                class: 'dashboard-nav__item'
              },
              {
                text: 'My Orders',
                class: 'dashboard-nav__item '
              },
              {
                text: 'Store Credit',
                class: 'dashboard-nav__item'
              },
              {
                text: 'My Downloadable Products',
                class: 'dashboard-nav__item'
              },
              {
                text: 'My Wishlist',
                class: 'dashboard-nav__item current'
              }
            ]
          }
        },
        actions: {
          sides: [
            {
              action: [
                {
                  button: true,
                  title: 'Update Wish List'
                },
                {
                  button: true,
                  title: 'Share Wish List'
                },
                {
                  button: true,
                  title: 'Add All to Cart'
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
        wishlistItems: [
          {
            item: {
              tag: 'div',
              class: 'dashboard__product',
              name: 'Some product name',
              price: '210$',
              type: 'some attribute text',
              image: {
                src: '/images/product/product-img-230_180.png'
              },
              button: {
                tag: 'a',
                text: 'Add to Cart',
                class: 'product-item__button dashboard-actions__button'
              }
            },
            qty: {
              class: 'input--inline',
              label: {
                text: 'Qty:',
                class: 'dashboard__label'
              }
            },
            itemAction: {
              sides: [
                {
                  action: [
                    {
                      title: 'Edit'
                    }
                  ]
                },
                {
                  action: [
                    {
                      title: 'Remove Item'
                    }
                  ]
                }
              ]
            }
          },
          {
            item: {
              tag: 'div',
              class: 'dashboard__product',
              name: 'Some product name',
              price: '210$',
              type: 'some attribute text',
              image: {
                src: '/images/product/product-img-230_180.png'
              },
              button: {
                tag: 'a',
                text: 'Add to Cart',
                class: 'product-item__button dashboard-actions__button'
              }
            },
            qty: {
              class: 'input--inline',
              label: {
                text: 'Qty:',
                class: 'dashboard__label'
              }
            },
            itemAction: {
              sides: [
                {
                  action: [
                    {
                      title: 'Edit'
                    }
                  ]
                },
                {
                  action: [
                    {
                      title: 'Remove Item'
                    }
                  ]
                }
              ]
            }
          }
        ]
      }
    },
    {
      name: 'gift-card',
      context: {
        nav: {
          title: 'My Account',
          list: {
            class: 'dashboard-nav__content',
            listTag: 'ul',
            elementTag: 'li',
            elements: [
              {
                text: 'Account Dashboard',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Account Information',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Address Book',
                class: 'dashboard-nav__item'
              },
              {
                text: 'My Orders',
                class: 'dashboard-nav__item '
              },
              {
                text: 'Store Credit',
                class: 'dashboard-nav__item'
              },
              {
                text: 'My Downloadable Products',
                class: 'dashboard-nav__item'
              },
              {
                text: 'My Wishlist',
                class: 'dashboard-nav__item '
              },
              {
                text: 'Gift Card',
                class: 'dashboard-nav__item current'
              }
            ]
          }
        },
        form: {
          title: 'Gift Card',
          fields: [
            {
              input: {
                class: 'dashboard-form__input',
                field: {
                  placeholder: 'Enter gitf card code'
                }
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
                  title: 'Reedem Gift Card'
                }
              ]
            },
            {
              action: [
                {
                  button: true,
                  title: 'Check statuc and balance'
                }
              ]
            }
          ]
        }
      }
    },
    {
      name: 'Order by SKU',
      context: {
        nav: {
          title: 'My Account',
          list: {
            class: 'dashboard-nav__content',
            listTag: 'ul',
            elementTag: 'li',
            elements: [
              {
                text: 'Account Dashboard',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Account Information',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Address Book',
                class: 'dashboard-nav__item'
              },
              {
                text: 'My Orders',
                class: 'dashboard-nav__item '
              },
              {
                text: 'Store Credit',
                class: 'dashboard-nav__item'
              },
              {
                text: 'My Downloadable Products',
                class: 'dashboard-nav__item'
              },
              {
                text: 'My Wishlist',
                class: 'dashboard-nav__item '
              },
              {
                text: 'Gift Card',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Order by SKU',
                class: 'dashboard-nav__item current'
              }
            ]
          }
        },
        form: {
          title: 'Order by SKU',
          fields: [
            {
              input: {
                class: 'dashboard-form__input',
                field: {
                  placeholder: 'SKU'
                }
              }
            },
            {
              input: {
                class: 'dashboard-form__input',
                field: {
                  placeholder: 'Qty'
                }
              }
            },
            {
              input: {
                class: 'dashboard-form__input',
                field: {
                  placeholder: 'SKU'
                }
              }
            },
            {
              input: {
                class: 'dashboard-form__input',
                field: {
                  placeholder: 'Qty'
                }
              }
            }
          ]
        },
        addRow: {
          class: 'dashboard__item',
          sides: [
            {
              action: [
                {
                  button: true,
                  title: 'Add Row'
                }
              ]
            }
          ]
        },
        uploadInfo: {
          informations: [
            {
              title: 'Attention',
              text: 'File extension allowed: *.csv. Your CSV file must include "sku" and "qty" columns.'
            }
          ]
        },
        fileUpload: {
          class: 'dashboard__item',
          fileId: 'file',
          labelText: 'Your file (csv max 1 MB)',
          labelTextSecond: 'Choose a file',
          type: 'file',
          name: 'uploadCSV',
          fileName: 'File not choosen',
          text: 'Choose a file'
        },
        buttons: {
          sides: [
            {
              action: [
                {
                  button: true,
                  title: 'Add to Cart'
                }
              ]
            },
            {
              action: [
                {
                  button: true,
                  title: 'Reset'
                }
              ]
            }
          ]
        }
      }
    },
    {
      name: 'newsletter sub',
      context: {
        nav: {
          title: 'My Account',
          list: {
            class: 'dashboard-nav__content',
            listTag: 'ul',
            elementTag: 'li',
            elements: [
              {
                text: 'Account Dashboard',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Account Information',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Address Book',
                class: 'dashboard-nav__item'
              },
              {
                text: 'My Orders',
                class: 'dashboard-nav__item '
              },
              {
                text: 'Store Credit',
                class: 'dashboard-nav__item'
              },
              {
                text: 'My Downloadable Products',
                class: 'dashboard-nav__item'
              },
              {
                text: 'My Wishlist',
                class: 'dashboard-nav__item '
              },
              {
                text: 'Gift Card',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Order by SKU',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Newsletter Subscriptions',
                class: 'dashboard-nav__item current'
              }
            ]
          }
        },
        form: {
          title: 'Subscription option',
          checkboxes: [
            {
              checkbox: {
                id: 'subscription',
                label: 'General Subscription'
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
    },
    {
      name: 'gift registry',
      context: {
        nav: {
          title: 'My Account',
          list: {
            class: 'dashboard-nav__content',
            listTag: 'ul',
            elementTag: 'li',
            elements: [
              {
                text: 'Account Dashboard',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Account Information',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Address Book',
                class: 'dashboard-nav__item'
              },
              {
                text: 'My Orders',
                class: 'dashboard-nav__item '
              },
              {
                text: 'Store Credit',
                class: 'dashboard-nav__item'
              },
              {
                text: 'My Downloadable Products',
                class: 'dashboard-nav__item'
              },
              {
                text: 'My Wishlist',
                class: 'dashboard-nav__item '
              },
              {
                text: 'Gift Card',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Order by SKU',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Newsletter Subscriptions',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Gift Registry',
                class: 'dashboard-nav__item current'
              }
            ]
          }
        },
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
      }
    },
    {
      name: 'gift registry general information',
      context: {
        nav: {
          title: 'My Account',
          list: {
            class: 'dashboard-nav__content',
            listTag: 'ul',
            elementTag: 'li',
            elements: [
              {
                text: 'Account Dashboard',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Account Information',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Address Book',
                class: 'dashboard-nav__item'
              },
              {
                text: 'My Orders',
                class: 'dashboard-nav__item '
              },
              {
                text: 'Store Credit',
                class: 'dashboard-nav__item'
              },
              {
                text: 'My Downloadable Products',
                class: 'dashboard-nav__item'
              },
              {
                text: 'My Wishlist',
                class: 'dashboard-nav__item '
              },
              {
                text: 'Gift Card',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Order by SKU',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Newsletter Subscriptions',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Gift Registry',
                class: 'dashboard-nav__item current'
              }
            ]
          }
        },
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
      name: 'gift registry form',
      context: {
        nav: {
          title: 'My Account',
          list: {
            class: 'dashboard-nav__content',
            listTag: 'ul',
            elementTag: 'li',
            elements: [
              {
                text: 'Account Dashboard',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Account Information',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Address Book',
                class: 'dashboard-nav__item'
              },
              {
                text: 'My Orders',
                class: 'dashboard-nav__item '
              },
              {
                text: 'Store Credit',
                class: 'dashboard-nav__item'
              },
              {
                text: 'My Downloadable Products',
                class: 'dashboard-nav__item'
              },
              {
                text: 'My Wishlist',
                class: 'dashboard-nav__item '
              },
              {
                text: 'Gift Card',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Order by SKU',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Newsletter Subscriptions',
                class: 'dashboard-nav__item'
              },
              {
                text: 'Gift Registry',
                class: 'dashboard-nav__item current'
              }
            ]
          }
        },
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
    },
    {
      name: 'empty',
      context: {
        message: {
          text: 'You have no items in your wish list'
        },
        action: {
          sides: [
            {
              action: [
                {
                  title: 'Back'
                }
              ]
            }
          ]
        },
      }
    }
  ]
}
