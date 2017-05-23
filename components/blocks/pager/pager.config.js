module.exports = {
  title: 'Pager component',
  context: {
    pages: [
      {
        index: 1,
        active: true
      },
      {
        index: 2,
        active: false
      },
      {
        index: 3,
        active: false
      },
      {
        index: 4,
        active: false
      },
      {
        index: 5,
        active: false
      },
      {
        index: 6,
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
            index: 1,
            active: false
          },
          {
            index: 2,
            active: false
          },
          {
            index: 3,
            active: true
          },
          {
            index: 4,
            active: false
          },
          {
            index: 5,
            active: false
          },
          {
            index: 6,
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
            index: 1,
            active: false
          },
          {
            index: 2,
            active: false
          },
          {
            index: 3,
            active: false
          },
          {
            index: 4,
            active: false
          },
          {
            index: 5,
            active: false
          },
          {
            index: 6,
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
            index: 1,
            active: false
          },
          {
            index: 2,
            active: false
          },
          {
            index: 3,
            active: false
          },
          {
            index: 4,
            active: false
          },
          {
            index: 5,
            active: false
          },
          {
            index: 6,
            active: true
          },
          {
            index: 7,
            active: false
          },
          {
            index: 8,
            active: false
          },
          {
            index: 9,
            active: false
          },
          {
            index: 10,
            active: false
          },
          {
            index: 11,
            active: false
          },
          {
            index: 12,
            active: false
          },
          {
            index: 13,
            active: false
          },
          {
            index: 14,
            active: false
          },
          {
            index: 15,
            active: false
          },
          {
            index: 16,
            active: false
          },
          {
            index: 17,
            active: false
          },
          {
            index: 18,
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
            index: 1,
            active: false
          },
          {
            index: 2,
            active: false
          },
          {
            index: 3,
            active: false
          },
          {
            index: 4,
            active: false
          },
          {
            index: 5,
            active: false
          },
          {
            index: 6,
            active: false
          },
          {
            index: 7,
            active: false
          },
          {
            index: 8,
            active: false
          },
          {
            index: 9,
            active: false
          },
          {
            index: 10,
            active: false
          },
          {
            index: 11,
            active: false
          },
          {
            index: 12,
            active: false
          },
          {
            index: 13,
            active: true
          },
          {
            index: 14,
            active: false
          },
          {
            index: 15,
            active: false
          },
          {
            index: 16,
            active: false
          },
          {
            index: 17,
            active: false
          },
          {
            index: 18,
            active: false
          }
        ]
      }
    }
  ]
};
