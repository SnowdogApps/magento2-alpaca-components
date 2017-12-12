module.exports = {
  context: {
    amount: {
      prefix: 'Items',
      currentRange: '1-9',
      preposition: 'of',
      total: '12'
    },
    grid: {
      href: '',
      icon: {
        iconId: 'grid',
        class: 'toolbar__mode-icon toolbar__mode-icon--active',
        title: 'Grid view'
      }
    },
    list: {
      href: '',
      icon: {
        iconId: 'list',
        class: 'toolbar__mode-icon',
        title: 'List view'
      }
    },
    sortBy: {
      class: 'toolbar__sorter-wrapper',
      label: {
        attribute: '',
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
      select: {
        class: 'toolbar__limiter-wrapper',
        label: {
          attribute: '',
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
  }
}
