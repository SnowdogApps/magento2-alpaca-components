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
        emptyWishlistMessage: {
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

          }
        ]
      }
    }
  ]
}
