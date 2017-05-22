module.exports = {
  title: 'Pager component',
  status: 'wip',
  context: {
    pages: [
      {
        pageNo: 1,
        active: true
      },
      {
        pageNo: 2,
        active: false
      },
      {
        pageNo: 3,
        active: false
      },
      {
        pageNo: 4,
        active: false
      },
      {
        pageNo: 5,
        active: false
      },
      {
        pageNo: 6,
        active: false
      }
    ]
  },
  variants: [
    {
      name: 'Middle page active',
      context: {
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
            active: true
          },
          {
            pageNo: 4,
            active: false
          },
          {
            pageNo: 5,
            active: false
          },
          {
            pageNo: 6,
            active: false
          }
        ]
      }
    },
    {
      name: 'Last page active',
      context: {
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
          },
          {
            pageNo: 4,
            active: false
          },
          {
            pageNo: 5,
            active: false
          },
          {
            pageNo: 6,
            active: true
          }
        ]
      }
    },
    {
      name: 'Many pages variant 1',
      context: {
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
          },
          {
            pageNo: 4,
            active: false
          },
          {
            pageNo: 5,
            active: false
          },
          {
            pageNo: 6,
            active: true
          },
          {
            pageNo: 7,
            active: false
          },
          {
            pageNo: 8,
            active: false
          },
          {
            pageNo: 9,
            active: false
          },
          {
            pageNo: 10,
            active: false
          },
          {
            pageNo: 11,
            active: false
          },
          {
            pageNo: 12,
            active: false
          },
          {
            pageNo: 13,
            active: false
          },
          {
            pageNo: 14,
            active: false
          },
          {
            pageNo: 15,
            active: false
          },
          {
            pageNo: 16,
            active: false
          },
          {
            pageNo: 17,
            active: false
          },
          {
            pageNo: 18,
            active: false
          }
        ]
      }
    },
    {
      name: 'Many pages variant 2',
      context: {
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
          },
          {
            pageNo: 4,
            active: false
          },
          {
            pageNo: 5,
            active: false
          },
          {
            pageNo: 6,
            active: false
          },
          {
            pageNo: 7,
            active: false
          },
          {
            pageNo: 8,
            active: false
          },
          {
            pageNo: 9,
            active: false
          },
          {
            pageNo: 10,
            active: false
          },
          {
            pageNo: 11,
            active: false
          },
          {
            pageNo: 12,
            active: false
          },
          {
            pageNo: 13,
            active: true
          },
          {
            pageNo: 14,
            active: false
          },
          {
            pageNo: 15,
            active: false
          },
          {
            pageNo: 16,
            active: false
          },
          {
            pageNo: 17,
            active: false
          },
          {
            pageNo: 18,
            active: false
          }
        ]
      }
    }
  ]
}
