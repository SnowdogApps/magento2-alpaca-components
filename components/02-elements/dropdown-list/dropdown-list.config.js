module.exports = {
  status: 'wip',
  context: {
    script: true,
    dropdowns: [
      {
        itemTag: 'a',
        title: 'All',
        itemAttributes: 'href="#"'
      },
      {
        itemTag: 'button',
        itemAttributes: 'aria-expanded="false"',
        title: 'dropdown title',
        id: 'dropdown-1',
        collapse: {
          class: 'dropdown-list__icon',
          iconId: 'angle-down',
          iconTitle: 'Arrow down',
          attributes: 'aria-hidden="true"'
        },
        contentElement: 'image'
      },
      {
        itemTag: 'button',
        itemAttributes: 'aria-expanded="false"',
        title: 'some longer longer and longer dropdown title',
        id: 'dropdown-2',
        collapse: {
          class: 'dropdown-list__icon',
          iconId: 'angle-down',
          iconTitle: 'Arrow down',
          attributes: 'aria-hidden="true"'
        },
        contentElement: 'paragraph'
      },
      {
        itemTag: 'button',
        itemAttributes: 'aria-expanded="false"',
        title: 'dropdown title',
        id: 'dropdown-3',
        collapse: {
          class: 'dropdown-list__icon',
          iconId: 'angle-down',
          iconTitle: 'Arrow down',
          attributes: 'aria-hidden="true"'
        },
        contentElement: 'image'
      },
      {
        itemTag: 'button',
        itemAttributes: 'aria-expanded="false"',
        title: 'dropdown title',
        id: 'dropdown-4',
        collapse: {
          class: 'dropdown-list__icon',
          iconId: 'angle-down',
          iconTitle: 'Arrow down',
          attributes: 'aria-hidden="true"'
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
      name: 'inner',
      context: {
        class: 'dropdown-list--inner'
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
            itemAttributes: 'href="#"'
          },
          {
            itemTag: 'button',
            title: 'dropdown title',
            id: 'dropdown-1',
            itemAttributes: 'aria-expanded="false"',
            collapse: {
              class: 'dropdown-list__icon',
              iconId: 'angle-down',
              iconTitle: 'Arrow Down',
              attributes: 'aria-hidden="true"'
            },
            contentElement: 'dropdown-list',
            contentContext: {
              class: 'dropdown-list--inner',
              dropdowns: [
                {
                  itemTag: 'a',
                  itemAttributes: 'href="#" aria-expanded="false"',
                  title: 'Item name',
                  id: 'dropdown-1-1',
                  collapse: {
                    class: 'dropdown-list__icon',
                    iconId: 'angle-down',
                    iconTitle: 'Arrow Down',
                    attributes: 'aria-hidden="true"'
                  },
                  contentElement: 'dropdown-list',
                  contentContext: {
                    class: 'dropdown-list--inner',
                    dropdowns: [
                      {
                        itemTag: 'a',
                        title: 'sublist item name',
                        itemAttributes: 'href="#" aria-expanded="false"',
                        id: 'dropdown-1-2',
                        collapse: {
                          class: 'dropdown-list__icon',
                          iconId: 'angle-down',
                          iconTitle: 'Arrow Down',
                          attributes: 'aria-hidden="true"'
                        },
                        contentElement: 'dropdown-list',
                        contentContext: {
                          class: 'dropdown-list--inner',
                          dropdowns: [
                            {
                              itemTag: 'a',
                              title: 'sub sublist item name',
                              itemAttributes: 'href="#"'
                            },
                            {
                              itemTag: 'a',
                              title: 'sub sublist item name',
                              itemAttributes: 'href="#"'
                            }
                          ]
                        }
                      },
                      {
                        itemTag: 'a',
                        title: 'sublist item name',
                        itemAttributes: 'href="#"'
                      },
                      {
                        itemTag: 'a',
                        title: 'sublist item name',
                        itemAttributes: 'href="#"'
                      }
                    ]
                  }
                },
                {
                  itemTag: 'a',
                  title: 'Item name',
                  itemAttributes: 'href="#" aria-expanded="false"',
                  id: 'dropdown-2-2',
                  collapse: {
                    class: 'dropdown-list__icon',
                    iconId: 'angle-down',
                    iconTitle: 'Arrow Down',
                    attributes: 'aria-hidden="true"'
                  },
                  contentElement: 'dropdown-list',
                  contentContext: {
                    class: 'dropdown-list--inner',
                    dropdowns: [
                      {
                        itemTag: 'a',
                        title: 'sublist item name',
                        itemAttributes: 'href="#"'
                      },
                      {
                        itemTag: 'a',
                        title: 'sublist item name',
                        itemAttributes: 'href="#"'
                      },
                      {
                        itemTag: 'a',
                        title: 'sublist item name',
                        itemAttributes: 'href="#"'
                      }
                    ]
                  },
                },
                {
                  itemTag: 'a',
                  title: 'Item name',
                  itemAttributes: 'href="#"',
                },
                {
                  itemTag: 'a',
                  title: 'Item name',
                  itemAttributes: 'href="#"',
                }
              ]
            }
          },
          {
            itemTag: 'a',
            itemAttributes: 'href="#" aria-expanded="false"',
            title: 'dropdown title',
            id: 'dropdown-2',
            collapse: {
              class: 'dropdown-list__icon',
              iconId: 'angle-down',
              iconTitle: 'Arrow Down',
              attributes: 'aria-hidden="true"'
            },
            contentElement: 'dropdown-list',
            contentContext: {
              class: 'dropdown-list--inner',
              dropdowns: [
                {
                  itemTag: 'a',
                  title: 'Item name',
                  itemAttributes: 'href="#"',
                },
                {
                  itemTag: 'a',
                  title: 'Item name',
                  itemAttributes: 'href="#"',
                }
              ]
            }
          },
          {
            itemTag: 'a',
            itemAttributes: 'href="#" aria-expanded="false"',
            title: 'dropdown title',
            id: 'dropdown-3',
            collapse: {
              class: 'dropdown-list__icon',
              iconId: 'angle-down',
              iconTitle: 'Arrow Down',
              attributes: 'aria-hidden="true"'
            },
            contentElement: 'dropdown-list',
            contentContext: {
              class: 'dropdown-list--inner',
              dropdowns: [
                {
                  itemTag: 'a',
                  title: 'Item name',
                  id: 'dropdown-3-1',
                  itemAttributes: 'href="#" aria-expanded="false"',
                  collapse: {
                    class: 'dropdown-list__icon',
                    iconId: 'angle-down',
                    iconTitle: 'Arrow Down',
                    attributes: 'aria-hidden="true"'
                  },
                  contentElement: 'dropdown-list',
                  contentContext: {
                    class: 'dropdown-list--inner',
                    dropdowns: [
                      {
                        itemTag: 'a',
                        title: 'sublist item name',
                        itemAttributes: 'href="#"'
                      },
                      {
                        itemTag: 'a',
                        title: 'sublist item name',
                        itemAttributes: 'href="#"'
                      }
                    ]
                  }
                },
                {
                  itemTag: 'a',
                  title: 'Item name',
                  itemAttributes: 'href="#"',
                },
                {
                  itemTag: 'a',
                  title: 'Item name',
                  itemAttributes: 'href="#" aria-expanded="false"',
                  id: 'dropdown-3-2',
                  collapse: {
                    class: 'dropdown-list__icon',
                    iconId: 'angle-down',
                    iconTitle: 'Arrow Down',
                    attributes: 'aria-hidden="true"'
                  },
                  contentElement: 'dropdown-list',
                  contentContext: {
                    class: 'dropdown-list--inner',
                    dropdowns: [
                      {
                        itemTag: 'a',
                        title: 'sublist item name',
                        itemAttributes: 'href="#"'
                      },
                      {
                        itemTag: 'a',
                        title: 'sublist item name',
                        itemAttributes: 'href="#"'
                      },
                      {
                        itemTag: 'a',
                        title: 'sublist item name',
                        itemAttributes: 'href="#"'
                      },
                      {
                        itemTag: 'a',
                        title: 'sublist item name',
                        itemAttributes: 'href="#"'
                      },
                      {
                        itemTag: 'a',
                        title: 'sublist item name',
                        itemAttributes: 'href="#"'
                      },
                      {
                        itemTag: 'a',
                        title: 'sublist item name',
                        itemAttributes: 'href="#"'
                      }
                    ]
                  }
                },
                {
                  itemTag: 'a',
                  title: 'Item name',
                  itemAttributes: 'href="#" aria-expanded="false"',
                  id: 'dropdown-3-3',
                  collapse: {
                    class: 'dropdown-list__icon',
                    iconId: 'angle-down',
                    iconTitle: 'Arrow Down',
                    attributes: 'aria-hidden="true"'
                  },
                  contentElement: 'dropdown-list',
                  contentContext: {
                    class: 'dropdown-list--inner',
                    dropdowns: [
                      {
                        itemTag: 'a',
                        title: 'sublist item name',
                        itemAttributes: 'href="#"'
                      }
                    ]
                  }
                },
                {
                  itemTag: 'a',
                  title: 'item name',
                  itemAttributes: 'href="#" aria-expanded="false"',
                  id: 'dropdown-3-4',
                  collapse: {
                    class: 'dropdown-list__icon',
                    iconId: 'angle-down',
                    iconTitle: 'Arrow Down',
                    attributes: 'aria-hidden="true"'
                  },
                  contentElement: 'dropdown-list',
                  contentContext: {
                    class: 'dropdown-list--inner',
                    dropdowns: [
                      {
                        itemTag: 'a',
                        title: 'sublist item name',
                        itemAttributes: 'href="#"'
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
};
