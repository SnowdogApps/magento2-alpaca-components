module.exports = {
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
}
