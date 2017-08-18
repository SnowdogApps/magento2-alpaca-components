module.exports = {
  context: {
    title: 'Addresses',
    contentClass: 'dashboard-items__content',
    informations: [
      {
        title: 'Contact information',
        class: 'grid__column grid__column--1-4',
        information: 'qweqwe qwe qwe@qwe.com',
        toolbar: {
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
        title: 'Address second',
        class: 'grid__column grid__column--1-4',
        information: 'Second address qwe@qwe.com',
        toolbar: {
          links: [
            {
              title: 'Edit'
            }
          ]
        }
      }
    ]
  }
}
