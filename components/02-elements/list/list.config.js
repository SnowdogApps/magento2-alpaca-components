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
      name: 'desktop-hotizontal',
      context: {
        modificators: 'list--desktop-hotizontal'
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
      name: 'center',
      context: {
        modificators: 'list--desktop-hotizontal list--center'
      }
    }
  ]
};
