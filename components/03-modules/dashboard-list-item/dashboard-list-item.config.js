module.exports = {
  context: {
    title: 'Recently Ordered',
    items: {
      class: 'dashboard-list-item__list',
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
