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
            pageNo: 1,
            active: true
          },
          {
            index: 2,
            active: false
          },
          {
            pageNo: 3,
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
      {
        text: 'Pager type with arrow in right and left',
        arrowLeftVisible: true,
        arrowRightVisible: true,
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
            pageNo: 3,
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
            index: 7,
            active: false
          },
          {
            index: 8,
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
            index: 18,
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
          }
        ]
      }
    ]
  }
};
