module.exports = {
  context: {
    ariaLabel: 'Average rating: 72%',
    title: 'Average rating: 72%',
    star: {
      attributes: 'style="width: 72%"'
    }
  },
  variants: [
    {
      name: 'rate',
      context: {
        script: true,
        star: {
          attributes: ''
        }
      }
    }
  ]
}
