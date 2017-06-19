module.exports = {
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
        modificators: 'list--horizontal'
      }
    },
    {
      name: 'min-medium-horizontal',
      context: {
        modificators: 'list--min-medium-horizontal'
      }
    },
    {
      name: 'icon',
      context: {
        modificators: 'list--with-icon',
        elements: [
          {
            icon: 'facebook',
            text: 'Facebook'
          },
          {
            icon: 'twitter',
            text: 'Twitter'
          },
          {
            icon: 'linkedin',
            text: 'Linkedin'
          }
        ]
      }
    },
    {
      name: 'image',
      context: {
        modificators: 'list--with-image'
      }
    },
    {
      name: 'divided',
      context: {
        modificators: 'list--divided'
      }
    },
    {
      name: 'divided-horizontal',
      context: {
        modificators: 'list--divided list--horizontal'
      }
    },
    {
      name: 'divided-min-medium-horizontal',
      context: {
        modificators: 'list--divided list--min-medium-horizontal'
      }
    }
  ]
};
