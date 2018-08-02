module.exports = {
  context: {
    captionText: 'This text should explain what kind of data this table presents. Can be also a longer text with inline HTML elements inside',
    mainTags: [
      {
        mainTag: 'thead',
        rowTags: [
          {
            rowTag: 'tr',
            childTags: [
              {
                childTag: 'th',
                content: 'Example heading',
                childTagAttributes: 'scope="col"'
              },
              {
                childTag: 'th',
                content: 'Example heading',
                childTagAttributes: 'scope="col"'
              },
              {
                childTag: 'th',
                content: 'Example heading',
                childTagAttributes: 'scope="col"'
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
                childTagAttributes: 'data-th="Example content:"',
                content: 'Example content'
              },
              {
                childTag: 'td',
                childTagAttributes: 'data-th="Example content:"',
                content: 'Example content'
              },
              {
                childTag: 'td',
                childTagAttributes: 'data-th="Example content:"',
                content: 'Example content'
              }
            ]
          },
          {
            rowTag: 'tr',
            childTags: [
              {
                childTag: 'td',
                childTagAttributes: 'data-th="Example content:"',
                content: 'Example content'
              },
              {
                childTag: 'td',
                childTagAttributes: 'data-th="Example content:"',
                content: 'Example content'
              },
              {
                childTag: 'td',
                childTagAttributes: 'data-th="Example content:"',
                content: 'Example content'
              }
            ]
          },
          {
            rowTag: 'tr',
            childTags: [
              {
                childTag: 'td',
                childTagAttributes: 'data-th="Example content:"',
                content: 'Example content'
              },
              {
                childTag: 'td',
                childTagAttributes: 'data-th="Example content:"',
                content: 'Example content'
              },
              {
                childTag: 'td',
                childTagAttributes: 'data-th="Example content:"',
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
                childTagAttributes: 'colspan=\'3\''
              }
            ]
          }
        ]
      }
    ]
  },
  variants: [
    {
      name: 'odd-even',
      context: {
        class: 'table--odd-even'
      }
    }
  ]
};
