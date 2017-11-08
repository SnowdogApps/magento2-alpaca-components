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
                linkClass: 'link--secondary',
                link: '#'
              },
              {
                text: 'Frequently asked questions (FAQ)',
                linkClass: 'link--secondary',
                link: '#'
              },
              {
                text: 'How to buy',
                linkClass: 'link--secondary',
                link: '#'
              },
              {
                text: 'Track your package',
                linkClass: 'link--secondary',
                link: '#'
              },
              {
                text: 'Guides',
                linkClass: 'link--secondary',
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
                linkClass: 'link--secondary',
                link: '#'
              },
              {
                text: 'Payments',
                linkClass: 'link--secondary',
                link: '#'
              },
              {
                text: 'Delivery cost',
                linkClass: 'link--secondary',
                link: '#'
              },
              {
                text: 'Returns and exchanges',
                linkClass: 'link--secondary',
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
                linkClass: 'link--secondary',
                link: '#'
              },
              {
                text: 'Guarantee',
                linkClass: 'link--secondary',
                link: '#'
              },
              {
                text: '454 Brands',
                linkClass: 'link--secondary',
                link: '#'
              },
              {
                text: 'Discounts',
                linkClass: 'link--secondary',
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
                linkClass: 'link--secondary',
                link: '#'
              },
              {
                text: 'Certificates and safety',
                linkClass: 'link--secondary',
                link: '#'
              },
              {
                text: 'Prizes and customer feedback',
                linkClass: 'link--secondary',
                link: '#'
              },
              {
                text: 'Cookie policy',
                linkClass: 'link--secondary',
                link: '#'
              },
              {
                text: 'Regulations',
                linkClass: 'link--secondary',
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
