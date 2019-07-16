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
      name: 'native',
      context: {
        class: 'list--native'
      }
    },
    {
      name: 'horizontal',
      context: {
        class: 'list--horizontal'
      }
    },
    {
      name: 'horizontal-medium',
      context: {
        class: 'list--horizontal@medium'
      }
    },
    {
      name: 'icon',
      context: {
        class: 'list--with-icon',
        elements: [
          {
            icon: {
              id: 'facebook',
              title: 'Facebook logo'
            },
            iconItemLink: '#'
          },
          {
            icon: {
              id: 'twitter',
              title: 'Twitter logo'
            },
            iconItemLink: '#'
          },
          {
            icon: {
              id: 'linkedin',
              title: 'LinkedIn logo'
            },
            iconItemLink: '#'
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
      name: 'divided-horizontal-medium',
      context: {
        class: 'list--divided list--horizontal@medium'
      }
    },
    {
      name: 'description',
      context: {
        attributes: 'title="Alpaca description list"',
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
