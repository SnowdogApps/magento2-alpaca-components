module.exports = {
  context: {
    mainTags: [
      {
        mainTag: 'thead',
        rowTags: [
          {
            rowTag: 'tr',
            childTags: [
              {
                childTag: 'th',
                content: 'Example heading'
              },
              {
                childTag: 'th',
                content: 'Example heading'
              },
              {
                childTag: 'th',
                content: 'Example heading'
              }
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
                content: 'Example content'
              },
              {
                childTag: 'td',
                content: 'Example content'
              },
              {
                childTag: 'td',
                content: 'Example content'
              }
            ]
          },
          {
            rowTag: 'tr',
            childTags: [
              {
                childTag: 'td',
                content: 'Example content'
              },
              {
                childTag: 'td',
                content: 'Example content'
              },
              {
                childTag: 'td',
                content: 'Example content'
              }
            ]
          },
          {
            rowTag: 'tr',
            childTags: [
              {
                childTag: 'td',
                content: 'Example content'
              },
              {
                childTag: 'td',
                content: 'Example content'
              },
              {
                childTag: 'td',
                content: 'Example content'
              }
            ]
          }
        ]
      },
      {
        mainTag: 'tfoot',
        rowTags: [
          {
            rowTag: 'tr',
            childTags: [
              {
                childTag: 'td',
                content: 'Footer content',
                childTabAttributes: 'colspan=\'3\''
              }
            ]
          }
        ]
      }
    ]
  }
};
