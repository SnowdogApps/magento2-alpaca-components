module.exports = {
  title: 'Layout',
  status: 'wip',
  context: {
    mainContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat laoreet lacus a lacinia. Nam facilisis, eros ornare interdum lobortis, purus magna posuere eros, sit amet ultricies est erat quis ipsum. Curabitur leo mi, pharetra et arcu sed, blandit iaculis ex. Duis commodo lectus ac massa tincidunt, et tristique sem blandit. Fusce tempor augue in nisl egestas placerat. Integer faucibus consequat posuere. Vivamus eu aliquet odio. Aenean commodo est vel elit sagittis, id mollis diam dictum. In hac habitasse platea dictumst. Mauris finibus sapien vitae felis rutrum, eget consequat mi auctor. Duis sed finibus ipsum, nec blandit sapien.',
    sidebarContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat laoreet lacus a lacinia. Nam facilisis, eros ornare interdum lobortis, purus magna posuere eros, sit amet ultricies est erat quis ipsum. Curabitur leo mi, pharetra et arcu sed, blandit iaculis ex. Duis commodo lectus ac massa tincidunt, et tristique sem blandit. Fusce tempor augue in nisl egestas placerat. Integer faucibus consequat posuere. Vivamus eu aliquet odio. Aenean commodo est vel elit sagittis, id mollis diam dictum. In hac habitasse platea dictumst. Mauris finibus sapien vitae felis rutrum, eget consequat mi auctor. Duis sed finibus ipsum, nec blandit sapien.'
  },
  variants: [
    {
      name: 'column left',
      context: {
        columnLeft: true
      }
    },
    {
      name: 'column right',
      context: {
        columnRight: true
      }
    },
    {
      name: 'columns left and right',
      context: {
        columnLeft: true,
        columnRight: true,
        columnBoth: true
      }
    },
  ]
};
