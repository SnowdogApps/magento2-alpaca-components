module.exports = {
  title: 'Navigation component',
  context: {
    menuItems: [
      {
        itemName: 'Page 1',
        itemLink: '#page-1',
        submenu: false
      },
      {
        itemName: 'Products',
        itemLink: '#products',
        itemId: 'menu-1',
        submenu: [
          {
            itemName: 'Products category 1',
            itemLink: '#category-1',
            itemId: 'menu-2',
            submenu: [
              {
                itemName: 'Products subcategory 1',
                itemLink: '#subcategory-1',
                submenu: false
              },
              {
                itemName: 'Products subcategory 2',
                itemLink: '#subcategory-2',
                submenu: false
              },
              {
                itemName: 'Products subcategory 3',
                itemLink: '#subcategory-3',
                submenu: false
              },
              {
                itemName: 'Products subcategory 4',
                itemLink: '#subcategory-4',
                submenu: false
              }
            ]
          },
          {
            itemName: 'Products category 2',
            itemLink: '#category-2',
            itemId: 'menu-3',
            submenu: [
              {
                itemName: 'Products subcategory 5',
                itemLink: '#subcategory-5',
                submenu: false
              },
              {
                itemName: 'Products subcategory 6',
                itemLink: '#subcategory-6',
                submenu: false
              }
            ]
          },
          {
            itemName: 'Products category 3',
            itemLink: '#category-4',
            itemId: 'menu-4',
            submenu: [
              {
                itemName: 'Products subcategory 7',
                itemLink: '#subcategory-7',
                submenu: false
              },
              {
                itemName: 'Products subcategory 8',
                itemLink: '#subcategory-8',
                submenu: false
              },
              {
                itemName: 'Products subcategory 9',
                itemLink: '#subcategory-9',
                submenu: false
              },
              {
                itemName: 'Products subcategory 10',
                itemLink: '#subcategory-10',
                submenu: false
              },
              {
                itemName: 'Products subcategory 11',
                itemLink: '#subcategory-11',
                submenu: false
              },
              {
                itemName: 'Products subcategory 12',
                itemLink: '#subcategory-12',
                submenu: false
              }
            ]
          },
        ]
      },
      {
        itemName: 'Page 2',
        itemLink: '#page-2',
        submenu: false
      },
      {
        itemName: 'Page 3',
        itemLink: '#page-3',
        submenu: false
      },
      {
        itemName: 'Contact',
        itemLink: '#contact',
        submenu: false
      }
    ]
  }
};
