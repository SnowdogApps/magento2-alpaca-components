module.exports = {
  collated: true,
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
      }
    ],
    class: false,
    controls: true,
    iconPrevId: 'arrow-left',
    iconNextId: 'arrow-right'
  },
  variants: [
    {
      name: 'more sites',
      context: {
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
          }
        ],
        class: false,
        controls: true
      }
    }
  ]
};
