module.exports = {
  status: 'wip',
  context: {
    script: true,
    dropdowns: [
      {
        itemTag: 'a',
        title: 'All',
        class: 'link--invert',
        itemAttributes: 'href="#"'
      },
      {
        itemTag: 'button',
        itemAttributes: 'aria-expanded="false" aria-controls="dropdown-1"',
        title: 'dropdown title',
        class: 'link--invert',
        id: 'dropdown-1',
        collapse: {
          class: 'dropdown-list__icon',
          iconId: 'angle-down'
        },
        contentElement: 'image'
      },
      {
        itemTag: 'button',
        itemAttributes: 'aria-expanded="false" aria-controls="dropdown-2"',
        class: 'link--invert',
        title: 'some longer longer and longer dropdown title',
        id: 'dropdown-2',
        collapse: {
          class: 'dropdown-list__icon',
          iconId: 'angle-down'
        },
        contentElement: 'paragraph'
      },
      {
        itemTag: 'button',
        itemAttributes: 'aria-expanded="false" aria-controls="dropdown-3"',
        title: 'dropdown title',
        class: 'link--invert',
        id: 'dropdown-3',
        collapse: {
          class: 'dropdown-list__icon',
          iconId: 'angle-down'
        },
        contentElement: 'image'
      },
      {
        itemTag: 'button',
        itemAttributes: 'aria-expanded="false" aria-controls="dropdown-4"',
        title: 'dropdown title',
        class: 'link--invert',
        id: 'dropdown-4',
        collapse: {
          class: 'dropdown-list__icon',
          iconId: 'angle-down'
        },
        contentElement: 'paragraph'
      }
    ]
  },
  variants: [
    {
      name: 'screen-m',
      context: {
        class: 'dropdown-list@screen-m dropdown-list--is-open@screen-m',
      }
    },
    {
      name: 'dark',
      context: {
        class: 'dropdown-list--dark'
      }
    },
    {
      name: 'secondary',
      context: {
        class: 'dropdown-list--secondary'
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
            class: 'link--invert',
            itemAttributes: 'href="#"'
          },
          {
            itemTag: 'button',
            title: 'dropdown title',
            id: 'dropdown-1',
            class: 'link--invert',
            itemAttributes: 'aria-expanded="false" aria-controls="dropdown-1"',
            collapse: {
              class: 'dropdown-list__icon',
              iconId: 'angle-down'
            },
            listNested: [
              {
                itemTag: 'a',
                itemName: 'Item name',
                itemAttributes: 'href="#" aria-expanded="false" aria-controls="dropdown-1-1"',
                id: 'dropdown-1-1',
                collapse: {
                  class: 'dropdown-list__icon dropdown-list__icon--inner',
                  iconId: 'angle-down'
                },
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
                collapse: {
                  class: 'dropdown-list__icon dropdown-list__icon--inner',
                  iconId: 'angle-down'
                },
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
            itemAttributes: 'href="#" aria-expanded="false" aria-controls="dropdown-2"',
            title: 'dropdown title',
            class: 'link--invert',
            id: 'dropdown-2',
            collapse: {
              class: 'dropdown-list__icon',
              iconId: 'angle-down'
            },
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
            class: 'link--invert',
            id: 'dropdown-3',
            collapse: {
              class: 'dropdown-list__icon',
              iconId: 'angle-down'
            },
            listNested: [
              {
                itemTag: 'a',
                itemAttributes: 'href="#" aria-expanded="false" aria-controls="dropdown-3-1"',
                itemName: 'Item name',
                id: 'dropdown-3-1',
                collapse: {
                  class: 'dropdown-list__icon dropdown-list__icon--inner',
                  iconId: 'angle-down'
                },
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
                collapse: {
                  class: 'dropdown-list__icon dropdown-list__icon--inner',
                  iconId: 'angle-down'
                },
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
                collapse: {
                  class: 'dropdown-list__icon dropdown-list__icon--inner',
                  iconId: 'angle-down'
                },
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
                collapse: {
                  class: 'dropdown-list__icon dropdown-list__icon--inner',
                  iconId: 'angle-down'
                },
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
