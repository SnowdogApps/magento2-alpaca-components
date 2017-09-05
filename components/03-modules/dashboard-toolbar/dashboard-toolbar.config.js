module.exports = {
  context: {
    leftItems: 'Items 1 to 10 of XX total',
    pager: {
      class: 'dashboard-toolbar__pager grid__column',
      arrowLeftVisible: false,
      arrowRightVisible: true,
      pages: [
        {
          pageNo: 1,
          active: false
        },
        {
          pageNo: 2,
          active: false
        },
        {
          pageNo: 3,
          active: false
        }
      ]
    },
    limiter: {
      class: 'dashboard-toolbar__select',
      options: [
        {
          value: '10',
          text: '10'
        },
        {
          value: '20',
          text: '20'
        },
        {
          value: '50',
          text: '50',
        }
      ]
    }
  }
}
