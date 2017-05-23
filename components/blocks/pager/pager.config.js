module.exports = {
  title: 'Pager component',
  context: {
    types: [
      {
        text: 'Pager type with arrow in right',
        arrowLeftVisible: false,
        arrowRightVisible: true,
        pages: [
          {
            pageNo: '1',
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
      {
        text: 'Pager type with arrow in right and left',
        arrowLeftVisible: true,
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
      },
      {
        text: 'Pager type with arrow in left',
        arrowLeftVisible: true,
        arrowRightVisible: false,
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
      },
      {
        text: 'Pager type with arrow in left and right with more sites',
        arrowLeftVisible: true,
        arrowRightVisible: true,
        pages: [
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
            pageNo: '...',
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
      },
      {
        text: 'Pager type with arrow in right',
        arrowLeftVisible: true,
        arrowRightVisible: true,
        pages: [
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
          }
        ]
      }
    ]
  }
};
