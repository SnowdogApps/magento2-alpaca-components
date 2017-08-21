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
        links: [
          {
            title: 'Remove All'
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
        links: [
          {
            title: 'Add to Cart'
          },
          {
            title: 'View All'
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
            links: [
              {
                title: 'Edit'
              },
              {
                title: 'Change password'
              }
            ]
          }
        },
        {
          title: 'Newsletters',
          class: 'grid__column grid__column--1-2',
          information: 'You don\'t subscribe to our newsletter.',
          actions: {
            links: [
              {
                title: 'Edit'
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
            links: [
              {
                title: 'Edit Address'
              }
            ]
          }
        },
        {
          title: 'Default Shipping address',
          class: 'grid__column grid__column--1-2',
          information: '11233 Easer 53rd Ave, Suite 600 US',
          actions: {
            links: [
              {
                title: 'Edit Address'
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
          links: [
            {
              title: 'Save'
            },
            {
              title: 'Go Back'
            }
          ]
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
          links: [
            {
              title: 'Add New Address'
            },
            {
              title: 'Go Back'
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
                links: [
                  {
                    title: 'Change Billing Address'
                  }
                ]
              }
            },
            {
              title: 'Default Shipping address',
              class: 'grid__column grid__column--1-2',
              information: '11233 Easer 53rd Ave, Suite 600 US',
              actions: {
                links: [
                  {
                    title: 'Change Shipping Address'
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
                links: [
                  {
                    title: 'Edit Address'
                  },
                  {
                    title: 'Delete Address'
                  }
                ]
              }
            },
            {
              class: 'grid__column grid__column--1-2',
              information: 'Delray Beach, Florida, 33444-1250',
              actions: {
                links: [
                  {
                    title: 'Edit Address'
                  },
                  {
                    title: 'Delete Address'
                  }
                ]
              }
            },
            {
              class: 'grid__column grid__column--1-2',
              information: 'San Antonio, Texas, 78215-1298 US',
              actions: {
                links: [
                  {
                    title: 'Edit Address'
                  },
                  {
                    title: 'Delete Address'
                  }
                ]
              }
            },
            {
              class: 'grid__column grid__column--1-2',
              information: '3848 Bryn Marw Drive University Park, Texas',
              actions: {
                links: [
                  {
                    title: 'Edit Address'
                  },
                  {
                    title: 'Delete Address'
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
                class: 'dashboard-nam__item current'
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
                class: 'dashboard-nam__item '
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
        },
      }
    }
  ]
}
