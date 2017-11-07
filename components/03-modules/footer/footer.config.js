module.exports = {
  context: {
    handlerClass: 'container',
    bottomBar: {
      handlerClass: 'container'
    },
    linkList: {
      class: 'dropdown-list@screen-m dropdown-list--is-open@screen-m dropdown-list--dark',
      dropdowns: [
        {
          itemTag: 'button',
          itemAttributes: 'aria-expanded="false" aria-controls="dropdown-help"',
          title: 'Help',
          id: 'dropdown-help',
          collapse: true,
          contentElement: 'list--link',
          contentContext: {
            listTag: 'ul',
            elementTag: 'li',
            class: 'footer__links-list',
            elements: [
              {
                text: 'Contact',
                link: '#'
              },
              {
                text: 'Frequently asked questions (FAQ)',
                link: '#'
              },
              {
                text: 'How to buy',
                link: '#'
              },
              {
                text: 'Track your package',
                link: '#'
              },
              {
                text: 'Guides',
                link: '#'
              }
            ]
          }
        },
        {
          itemTag: 'button',
          itemAttributes: 'aria-expanded="false" aria-controls="dropdown-info"',
          title: 'Information',
          id: 'dropdown-info',
          collapse: true,
          contentElement: 'list--link',
          contentContext: {
            listTag: 'ul',
            elementTag: 'li',
            class: 'footer__links-list',
            elements: [
              {
                text: 'Delivery time',
                link: '#'
              },
              {
                text: 'Payments',
                link: '#'
              },
              {
                text: 'Delivery cost',
                link: '#'
              },
              {
                text: 'Returns and exchanges',
                link: '#'
              }
            ]
          }
        },
        {
          itemTag: 'button',
          itemAttributes: 'aria-expanded="false" aria-controls="dropdown-worth"',
          title: 'Why is worth it',
          id: 'dropdown-worth',
          collapse: true,
          contentElement: 'list--link',
          contentContext: {
            listTag: 'ul',
            elementTag: 'li',
            class: 'footer__links-list',
            elements: [
              {
                text: '30 days for return',
                link: '#'
              },
              {
                text: 'Guarantee',
                link: '#'
              },
              {
                text: '454 Brands',
                link: '#'
              },
              {
                text: 'Discounts',
                link: '#'
              }
            ]
          }
        },
        {
          itemTag: 'button',
          itemAttributes: 'aria-expanded="false" aria-controls="dropdown-alpaca"',
          title: 'Alpaca.pl',
          id: 'dropdown-alpaca',
          collapse: true,
          contentElement: 'list--link',
          contentContext: {
            listTag: 'ul',
            elementTag: 'li',
            class: 'footer__links-list',
            elements: [
              {
                text: 'About us',
                link: '#'
              },
              {
                text: 'Certificates and safety',
                link: '#'
              },
              {
                text: 'Prizes and customer feedback',
                link: '#'
              },
              {
                text: 'Cookie policy',
                link: '#'
              },
              {
                text: 'Regulations',
                link: '#'
              }
            ]
          }
        },
      ]
    },
    socialListSubtitle: 'Find us on',
    copyrightText: 'Copyright © 2017 Alpaca. All rights reserved.',
    socialIconList: {
      listTag: 'ul',
      elementTag: 'li',
      class: 'list--with-icon list--horizontal footer__social-list',
      elements: [
        {
          icon: 'youtube',
          class: 'footer__social-list-item',
          iconClass: 'footer__social-icon'
        },
        {
          icon: 'facebook',
          class: 'footer__social-list-item',
          iconClass: 'footer__social-icon'
        },
        {
          icon: 'instagram',
          class: 'footer__social-list-item',
          iconClass: 'footer__social-icon'
        },
        {
          icon: 'google-plus',
          class: 'footer__social-list-item',
          iconClass: 'footer__social-icon'
        }
      ]
    }
  }
}
