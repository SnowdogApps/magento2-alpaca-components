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
