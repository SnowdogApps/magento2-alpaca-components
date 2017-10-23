module.exports = {
  label: 'Table',
  name: 'dashboard-table',
  context: {
    title: 'Recent Orders',
    link: 'View All',
    table: {
      class: 'dashboard-table__table',
      mainTags: [
        {
          mainTag: 'thead',
          rowTags: [
            {
              rowTag: 'tr',
              childTags: [
                {
                  childTag: 'th',
                  content: 'Order #'
                },
                {
                  childTag: 'th',
                  content: 'Date'
                },
                {
                  childTag: 'th',
                  content: 'Ship To'
                },
                {
                  childTag: 'th',
                  content: 'Order'
                },
                {
                  childTag: 'th',
                  content: 'Total'
                },
                {
                  childTag: 'th',
                  content: 'Status'
                },
                {
                  childTag: 'th',
                  content: 'Action'
                },
              ]
            },
          ]
        },
        {
          mainTag: 'tbody',
          rowTags: [
            {
              rowTag: 'tr',
              childTags: [
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Order #:"',
                  content: '000000000123'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Date:"',
                  content: '6/23/12'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Ship To:"',
                  content: 'Store Alpaca'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Order:"',
                  content: 'Production Facility'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Total:"',
                  content: '$ 123,12'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Status:"',
                  content: 'Pending'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Action:"',
                  content: 'View Order'
                }
              ]
            },
            {
              rowTag: 'tr',
              childTags: [
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Order #:"',
                  content: '000000000124'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Date:"',
                  content: '8/23/12'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Ship To:"',
                  content: 'Store Alpaca2'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Order:"',
                  content: 'Production Facility'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Total:"',
                  content: '$ 1232,12'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Status:"',
                  content: 'Pending'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Action:"',
                  content: 'View Order'
                }
              ]
            },
            {
              rowTag: 'tr',
              childTags: [
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Order #:"',
                  content: '000000000125'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Date:"',
                  content: '2/23/12'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Ship To:"',
                  content: 'Store Alpaca3'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Order:"',
                  content: 'Production Facility'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Total:"',
                  content: '$ 1123,12'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Status:"',
                  content: 'Done'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Action:"',
                  content: 'View Order'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
