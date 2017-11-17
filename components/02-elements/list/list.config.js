module.exports = {
  preview: '@docs-only-styles',
  context: {
    listTag: 'ul',
    elementTag: 'li',
    elements: [
      {
        text: 'Lorem ipsum'
      },
      {
        text: 'Lorem ipsum'
      },
      {
        text: 'Lorem ipsum'
      },
      {
        text: 'Lorem ipsum'
      },
      {
        text: 'Lorem ipsum'
      }
    ]
  },
  variants: [
    {
      name: 'horizontal',
      context: {
        class: 'list--horizontal'
      }
    },
    {
      name: 'min-medium-horizontal',
      context: {
        class: 'list--min-medium-horizontal'
      }
    },
    {
      name: 'icon',
      context: {
        class: 'list--with-icon',
        elements: [
          {
            icon: 'facebook',
            iconLink: '#'
          },
          {
            icon: 'twitter',
            iconLink: '#'
          },
          {
            icon: 'linkedin',
            iconLink: '#'
          }
        ]
      }
    },
    {
      name: 'image',
      context: {
        class: 'list--with-image'
      }
    },
    {
      name: 'divided',
      context: {
        class: 'list--divided'
      }
    },
    {
      name: 'center',
      context: {
        class: 'list--center'
      }
    },
    {
      name: 'center-horizontal',
      context: {
        class: 'list--center list--horizontal'
      }
    },
    {
      name: 'divided-horizontal',
      context: {
        class: 'list--divided list--horizontal'
      }
    },
    {
      name: 'divided-min-medium-horizontal',
      context: {
        class: 'list--divided list--min-medium-horizontal'
      }
    },
    {
      name: 'description',
      context: {
        elements: [
          {
            label: 'Lorem ipsum',
            value: 'Lorem ipsum Value'
          },
          {
            label: 'Lorem ipsum',
            value: 'Lorem ipsum Value'
          },
          {
            label: 'Lorem ipsum',
            value: 'Lorem ipsum Value'
          },
          {
            label: 'Lorem ipsum',
            value: 'Lorem ipsum Value'
          },
          {
            label: 'Lorem ipsum',
            value: 'Lorem ipsum Value'
          }
        ]
      }
    },
    {
      name: 'link',
      context: {
        elements: [
          {
            linkClass: '',
            text: 'Lorem ipsum',
            link: '#'
          },
          {
            linkClass: '',
            text: 'Lorem ipsum',
            link: '#'
          },
          {
            linkClass: '',
            text: 'Lorem ipsum',
            link: '#'
          },
          {
            linkClass: '',
            text: 'Lorem ipsum',
            link: '#'
          },
          {
            linkClass: '',
            text: 'Lorem ipsum',
            link: '#'
          }
        ]
      }
    },
    {
      name: 'link-content',
      context: {
        listTag: 'ul',
        elementTag: 'li',
        class: '',
        elements: [
          {
            linkClass: '',
            text: '',
            content: 'button',
            link: '#',
          },
          {
            linkClass: '',
            text: '',
            content: 'button',
            link: '#link',
          },
          {
            linkClass: '',
            text: '',
            content: 'image',
            contentContext: {
              src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
              dataSrc: '/images/home/brand-example_112-112.png',
              alt: 'brand name alt text'
            },
            link: '#lorem',
          },
          {
            linkClass: '',
            text: '',
            content: 'image',
            link: '#',
          },
          {
            linkClass: '',
            text: '',
            content: 'image',
            link: '#'
          }
        ]
      }
    }
  ]
};
