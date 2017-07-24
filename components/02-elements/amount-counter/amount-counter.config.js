module.exports = {
  collated: true,
  context: {
    firstItem: '1',
    lastItem: '10',
    totalItems: '11',
    additionalClass: ''
  },
  variants: [
    {
      name: 'one-item',
      context: {
        firstItem: '1',
        lastItem: 0,
        totalItems: '1',
        class: 'testClass'
      }
    }
  ]
}
