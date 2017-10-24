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
      name: 'middle-screen-inline',
      context: {
        class: 'dropdown-list--middle-inline'
      }
    },
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
                itemAttributes: 'href="#"',
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
                temAttributes: 'href="#"',
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
            itemAttributes: 'href="#"',
            title: 'dropdown title',
            id: 'dropdown-2',
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
            itemAttributes: 'href="#"',
            title: 'dropdown title',
            id: 'dropdown-3',
            collapse: true,
            listNested: [
              {
                itemTag: 'a',
                itemAttributes: 'href="#"',
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
                itemAttributes: 'href="#"',
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
                itemAttributes: 'href="#"',
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
                itemAttributes: 'href="#"',
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
