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
        title: 'dropdown title',
        id: 'dropdown-1',
        collapse: true,
        contentElement: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere magna at erat mollis egestas a ut quam. Pellentesque ac varius ligula.</p>'
      },
      {
        itemTag: 'button',
        title: 'some longer longer and longer dropdown title',
        id: 'dropdown-2',
        collapse: true,
        contentElement: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere magna at erat mollis egestas a ut quam. Pellentesque ac varius ligula.</p>'
      },
      {
        itemTag: 'button',
        title: 'dropdown title',
        id: 'dropdown-3',
        collapse: true,
        contentElement: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere magna at erat mollis egestas a ut quam. Pellentesque ac varius ligula.</p>'
      },
      {
        itemTag: 'button',
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
        class: 'dropdown-list--with-nested'
      }
    },
    {
      name: 'middle-screen-inline',
      context: {
        class: 'dropdown-list--middle-inline'
      }
    }
  ]
};
