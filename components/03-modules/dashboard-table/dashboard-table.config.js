module.exports = {
  context: {
    title: 'Recent Orders',
    link: 'View All',
    table: {
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
                  content: '000000000123'
                },
                {
                  childTag: 'td',
                  content: '6/23/12'
                },
                {
                  childTag: 'td',
                  content: 'Store Alpaca'
                },
                {
                  childTag: 'td',
                  content: 'Production Facility'
                },
                {
                  childTag: 'td',
                  content: '$ 123,12'
                },
                {
                  childTag: 'td',
                  content: 'Pending'
                },
                {
                  childTag: 'td',
                  content: 'View Order'
                }
              ]
            },
            {
              rowTag: 'tr',
              childTags: [
                {
                  childTag: 'td',
                  content: '000000000124'
                },
                {
                  childTag: 'td',
                  content: '8/23/12'
                },
                {
                  childTag: 'td',
                  content: 'Store Alpaca2'
                },
                {
                  childTag: 'td',
                  content: 'Production Facility'
                },
                {
                  childTag: 'td',
                  content: '$ 1232,12'
                },
                {
                  childTag: 'td',
                  content: 'Pending'
                },
                {
                  childTag: 'td',
                  content: 'View Order'
                }
              ]
            },
            {
              rowTag: 'tr',
              childTags: [
                {
                  childTag: 'td',
                  content: '000000000125'
                },
                {
                  childTag: 'td',
                  content: '2/23/12'
                },
                {
                  childTag: 'td',
                  content: 'Store Alpaca3'
                },
                {
                  childTag: 'td',
                  content: 'Production Facility'
                },
                {
                  childTag: 'td',
                  content: '$ 1123,12'
                },
                {
                  childTag: 'td',
                  content: 'Done'
                },
                {
                  childTag: 'td',
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
