module.exports = {
  context: {
    showMode: true,
    showSorter: true,
    showAmount: true,
    showLimit: true,
    amount: {
      class: 'toolbar__amount',
      prefix: 'Items',
      currentRange: '1-9',
      preposition: 'of',
      total: '12'
    },
    grid: {
      href: '',
      icon: {
        id: 'grid',
        title: 'Grid',
        class: 'toolbar__mode-icon toolbar__mode-icon--active',
      }
    },
    list: {
      href: '',
      icon: {
        id: 'list',
        title: 'List',
        class: 'toolbar__mode-icon',
      }
    },
    sortBy: {
      class: 'toolbar__sorter-wrapper',
      label: {
        attributes: '',
        text: 'Sort By',
        class: 'toolbar__sorter-label'
      },
      field: {
        id: 'sort-by',
        name: 'sort-by',
        class: 'toolbar__sorter-select'
      },
      options: [
        {
          text: 'Product Name',
          value: 'product-name'
        },
        {
          text: 'Price',
          value: 'price'
        },
      ]
    },
    limiter: {
      class: 'toolbar__limiter',
      select: {
        class: 'toolbar__limiter-wrapper',
        label: {
          attributes: '',
          text: 'Show',
          class: 'toolbar__limiter-label'
        },
        field: {
          id: 'sort-by',
          name: 'sort-by',
          class: 'toolbar__limiter-select'
        },
        options: [
          {
            text: '12',
            value: '12'
          },
          {
            text: '24',
            value: '24'
          },
          {
            text: '36',
            value: '36'
          },
        ]
      },
      suffix: ''
    }
  },
  variants: [
    {
      name: 'pager',
      context: {
        showPager: true,
        pager: {
          arrowLeftVisible: false,
          arrowRightVisible: true,
          pages: [
            {
              pageNo: 1,
              class: 'link--invert',
              active: false
            },
            {
              pageNo: 2,
              class: 'link--invert',
              active: false
            },
            {
              pageNo: 3,
              class: 'link--invert',
              active: false
            }
          ]
        }
      }
    }
  ]
}
