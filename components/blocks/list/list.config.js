module.exports = {
  title: 'List',
  status: 'wip',
  context: {
    contentList: [
      {
        text: 'Some item text'
      },
      {
        text: 'Some item text'
      },
      {
        text: 'Some item text'
      }
    ]
  },
  variants: [
    {
      name: 'odd-even',
      context: {
        modifier: 'odd-even'
      }
    },
    {
      name: 'simple labeling',
      context: {
        contentList: [
          {
            label: 'Label1:',
            value: 'Value1',
            text: false
          },
          {
            label: 'Label2:',
            value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend auctor neque posuere volutpat. Nunc quam lacus, ultricies id molestie vel, sodales a massa. Vivamus auctor arcu a orci sagittis',
            text: false
          },
          {
            label: 'Label2:',
            value: 'Value2',
            text: false
          }
        ]
      }
    },
    {
      name: 'wide labeling',
      context: {
        modifier: 'labeling',
        modifier2: 'odd-even',
        contentList: [
          {
            label: 'Label text goes here',
            value: 'value text',
            text: false
          },
          {
            label: 'Label text',
            value: 'value text goes here',
            text: false
          },
          {
            label: 'Label text goes here',
            value: 'value text goes here',
            text: false
          },
          {
            label: 'Label text',
            value: 'value text',
            text: false
          },
          {
            label: 'Label text goes here',
            value: 'value text',
            text: false
          },
          {
            label: 'Label text',
            value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            text: false
          }
        ]
      }
    },
    {
      name: 'titled',
      context: {
        modifier: 'titled',
        modifier2: '2cols',
        listTitle: 'List title',
        listId: 'id1',
        contentList: [
          {
            text: 'Page 1',
            link: true
          },
          {
            text: 'Page 2',
            link: true
          },
          {
            text: 'Page 3',
            link: true
          },
          {
            text: 'Custom page',
            link: true
          },
          {
            text: 'Custom page 1',
            link: true
          },
          {
            text: 'Custom page 2',
            link: true
          },
          {
            text: 'Custom page 3',
            link: true
          }
        ]
      }
    },
    {
      name: 'search-categories',
      context: {
        modifier: 'search',
        contentList: [
          {
            text: 'Category 1',
            itemQty: '34',
            link: true
          },
          {
            text: 'Category 2',
            itemQty: '24',
            link: true
          },
          {
            text: 'Category 3',
            itemQty: '102',
            link: true
          },
          {
            text: 'Category 4',
            itemQty: '4',
            link: true
          },
          {
            text: 'Category 5',
            itemQty: '18',
            link: true
          }
        ]
      }
    },
    {
      name: 'social',
      context: {
        modifier: 'social',
        contentList: [
          {
            iconId: 'icon-facebook-project',
            iconClass: 'facebook',
            iconLink: '#somelink'
          },
          {
            iconId: 'icon-twitter-project',
            iconClass: 'twitter',
            iconLink: '#somelink'
          },
          {
            iconId: 'icon-instagram-project',
            iconClass: 'instagram',
            iconLink: '#somelink'
          },
          {
            iconId: 'icon-pinterest-project',
            iconClass: 'pinterest',
            iconLink: '#somelink'
          },
          {
            iconId: 'icon-houzz-project',
            iconClass: 'houzz',
            iconLink: '#somelink'
          }
        ]
      }
    },
    {
      name: 'social-with-newsletter',
      context: {
        newsletterText: 'Stay connected',
        modifier: 'social',
        icon: true,
        iconId: 'icon-arrow-project',
        iconModificator: '--icon',
        iconClass: 'button__icon',
        text: '',
        placeholder: 'Sign up for our newsletter',
        contentList: [
          {
            iconId: 'icon-facebook-project',
            iconClass: 'facebook',
            iconLink: '#somelink'
          },
          {
            iconId: 'icon-twitter-project',
            iconClass: 'twitter',
            iconLink: '#somelink'
          },
          {
            iconId: 'icon-instagram-project',
            iconClass: 'instagram',
            iconLink: '#somelink'
          },
          {
            iconId: 'icon-pinterest-project',
            iconClass: 'pinterest',
            iconLink: '#somelink'
          },
          {
            iconId: 'icon-houzz-project',
            iconClass: 'houzz',
            iconLink: '#somelink'
          }
        ]
      }
    },
    {
      name: 'social-product',
      context: {
        modifier: 'social',
        boxId: 'icon-like-project',
        boxClass: 'like',
        boxLink: '#somelink',
        boxText: 'Save for later',
        contentList: [
          {
            iconId: 'icon-facebook-project',
            iconClass: 'facebook',
            iconLink: '#somelink'
          },
          {
            iconId: 'icon-instagram-project',
            iconClass: 'instagram',
            iconLink: '#somelink'
          },
          {
            iconId: 'icon-pinterest-project',
            iconClass: 'pinterest',
            iconLink: '#somelink'
          },
          {
            iconId: 'icon-mail-project',
            iconClass: 'mail',
            iconLink: '#somelink'
          }
        ]
      }
    }
  ]
}
