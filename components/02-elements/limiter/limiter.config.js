module.exports = {
  context: {
    labelText: 'Show',
    limits: [
      {
        number: '10',
        current: true,
        urlKey: false
      },
      {
        number: '20',
        current: false,
        urlKey: 'key20'
      },
      {
        number: '30',
        current: false,
        urlKey: 'key30'
      }
    ],
    additionalText: 'items per page',
    class: false
  }
}
