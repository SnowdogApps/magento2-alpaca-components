module.exports = {
  context: {
    title: 'Recently Ordered',
    items: {
      class: 'sidebar-nav-list__list',
      listTag: 'ol',
      elementTag: 'li',
      elements: [
        {
          text: 'First item',
        },
        {
          text: 'Second item',
        }
      ]
    },
    buttons: {
      sides: [
        {
          action: [
            {
              button: true,
              class: 'sidebar-nav-list__button',
              title: 'Example button'
            }
          ]
        },
        {
          action: [
            {
              title: 'Link this title'
            }
          ]
        }
      ]
    }
  }
}
