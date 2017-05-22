module.exports = {
  title: 'Info box',
  context: {
    date: '30.12\r\n2016',
    title: 'Some title goes here',
    mainText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec arcu pretium, convallis mauris a, mattis magna. Sed pretium vitae lacus nec tempor. ',
    link: '#',
    linkText: 'See more',
    buttonVersion: 'light'
  },
  variants: [
    {
      name: 'carousel item',
      context: {
        modifier: 'carousel-item',
        date: '24.05.2017',
        title: 'Some title goes here',
        address: 'Some address goes here',
        mainText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
      }
    }
  ]
}
