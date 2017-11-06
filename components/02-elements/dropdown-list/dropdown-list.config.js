module.exports = {
  status: 'wip',
  context: {
    dropdowns: [
      {
        itemTag: 'a',
        title: 'All',
        itemAttributes: 'href="#"',
        collapse: false
      },
      {
        itemTag: 'button',
        itemAttributes: 'aria-expanded="false" aria-controls="dropdown-1"',
        title: 'dropdown title',
        id: 'dropdown-1',
        collapse: true,
        contentElement: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere magna at erat mollis egestas a ut quam. Pellentesque ac varius ligula.</p>'
      },
      {
        itemTag: 'button',
        itemAttributes: 'aria-expanded="false" aria-controls="dropdown-2"',
        title: 'some longer longer and longer dropdown title',
        id: 'dropdown-2',
        collapse: true,
        contentElement: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere magna at erat mollis egestas a ut quam. Pellentesque ac varius ligula.</p>'
      },
      {
        itemTag: 'button',
        itemAttributes: 'aria-expanded="false" aria-controls="dropdown-3"',
        title: 'dropdown title',
        id: 'dropdown-3',
        collapse: true,
        contentElement: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere magna at erat mollis egestas a ut quam. Pellentesque ac varius ligula.</p>'
      },
      {
        itemTag: 'button',
        itemAttributes: 'aria-expanded="false" aria-controls="dropdown-4"',
        title: 'dropdown title',
        id: 'dropdown-4',
        collapse: true,
        contentElement: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere magna at erat mollis egestas a ut quam. Pellentesque ac varius ligula.</p>'
      }
    ]
  },
  variants: [
    {
      name: 'with-nested',
      context: {
        class: 'dropdown-list--with-nested',
        dropdowns: [
          {
            itemTag: 'a',
            title: 'All',
            itemAttributes: 'href="#"',
            collapse: false
          },
          {
            itemTag: 'button',
            title: 'dropdown title',
            id: 'dropdown-1',
            itemAttributes: 'aria-expanded="false" aria-controls="dropdown-1"',
            collapse: true,
            listNested: [
              {
                itemTag: 'a',
                itemName: 'Item name',
                itemAttributes: 'href="#" aria-expanded="false" aria-controls="dropdown-1-1"',
                id: 'dropdown-1-1',
                collapse: true,
                sublist: [
                  {
                    itemTag: 'a',
                    itemName: 'sublist item name',
                    itemAttributes: 'href="#"'
                  },
                  {
                    itemTag: 'a',
                    itemName: 'sublist item name',
                    itemAttributes: 'href="#"'
                  },
                  {
                    itemTag: 'a',
                    itemName: 'sublist item name',
                    itemAttributes: 'href="#"'
                  },
                  {
                    itemTag: 'a',
                    itemName: 'sublist item name',
                    itemAttributes: 'href="#"'
                  }
                ]
              },
              {
                itemTag: 'a',
                itemName: 'Item name',
                itemAttributes: 'href="#" aria-expanded="false" aria-controls="dropdown-1-2"',
                id: 'dropdown-1-2',
                collapse: true,
                sublist: [
                  {
                    itemTag: 'a',
                    itemName: 'sublist item name',
                    itemAttributes: 'href="#"'
                  },
                  {
                    itemTag: 'a',
                    itemName: 'sublist item name',
                    itemAttributes: 'href="#"'
                  },
                  {
                    itemTag: 'a',
                    itemName: 'sublist item name',
                    itemAttributes: 'href="#"'
                  }
                ]
              },
              {
                itemTag: 'a',
                itemName: 'Item name',
                itemAttributes: 'href="#"',
                collapse: false,
                sublist: false
              },
              {
                itemTag: 'a',
                itemName: 'Item name',
                itemAttributes: 'href="#"',
                collapse: false,
                sublist: false
              }
            ]
          },
          {
            itemTag: 'a',
            itemAttributes: 'href="#" aria-expanded="false" aria-controls="dropdown-2"',
            title: 'dropdown title',
            id: 'dropdown-2',
            collapse: true,
            listNested: [
              {
                itemTag: 'a',
                itemName: 'Item name',
                itemAttributes: 'href="#"',
                sublist: false
              },
              {
                itemTag: 'a',
                itemName: 'Item name',
                itemAttributes: 'href="#"',
                sublist: false
              }
            ]
          },
          {
            itemTag: 'a',
            itemAttributes: 'href="#" aria-expanded="false" aria-controls="dropdown-3"',
            title: 'dropdown title',
            id: 'dropdown-3',
            collapse: true,
            listNested: [
              {
                itemTag: 'a',
                itemAttributes: 'href="#" aria-expanded="false" aria-controls="dropdown-3-1"',
                itemName: 'Item name',
                id: 'dropdown-3-1',
                collapse: true,
                sublist: [
                  {
                    itemTag: 'a',
                    itemName: 'sublist item name',
                    itemAttributes: 'href="#"'
                  },
                  {
                    itemTag: 'a',
                    itemName: 'sublist item name',
                    itemAttributes: 'href="#"'
                  }
                ]
              },
              {
                itemTag: 'a',
                itemName: 'Item name',
                itemAttributes: 'href="#"',
                sublist: false
              },
              {
                itemTag: 'a',
                itemName: 'Item name',
                itemAttributes: 'href="#" aria-expanded="false" aria-controls="dropdown-3-2"',
                id: 'dropdown-3-2',
                collapse: true,
                sublist: [
                  {
                    itemTag: 'a',
                    itemName: 'sublist item name',
                    itemAttributes: 'href="#"'
                  },
                  {
                    itemTag: 'a',
                    itemName: 'sublist item name',
                    itemAttributes: 'href="#"'
                  },
                  {
                    itemTag: 'a',
                    itemName: 'sublist item name',
                    itemAttributes: 'href="#"'
                  },
                  {
                    itemTag: 'a',
                    itemName: 'sublist item name',
                    itemAttributes: 'href="#"'
                  },
                  {
                    itemTag: 'a',
                    itemName: 'sublist item name',
                    itemAttributes: 'href="#"'
                  },
                  {
                    itemTag: 'a',
                    itemName: 'sublist item name',
                    itemAttributes: 'href="#"'
                  }
                ]
              },
              {
                itemTag: 'a',
                itemName: 'Item name',
                itemAttributes: 'href="#" aria-expanded="false" aria-controls="dropdown-3-3"',
                id: 'dropdown-3-3',
                collapse: true,
                sublist: [
                  {
                    itemTag: 'a',
                    itemName: 'sublist item name',
                    itemAttributes: 'href="#"'
                  }
                ]
              },
              {
                itemTag: 'a',
                itemName: 'item name',
                itemAttributes: 'href="#" aria-expanded="false" aria-controls="dropdown-3-4"',
                id: 'dropdown-3-4',
                collapse: true,
                sublist: [
                  {
                    itemTag: 'a',
                    itemName: 'sublist item name',
                    itemAttributes: 'href="#"'
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  ]
};
