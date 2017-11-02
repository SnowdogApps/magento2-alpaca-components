module.exports = {
  context: {
    linkList: {
      class: 'footer__links-list',
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
            class: 'footer__list',
            elements: [
              {
                text: 'Contact',
                link: '#',
                linkClass: 'footer__list-link'
              },
              {
                text: 'Frequently asked questions (FAQ)',
                link: '#',
                linkClass: 'footer__list-link'
              },
              {
                text: 'How to buy',
                link: '#',
                linkClass: 'footer__list-link'
              },
              {
                text: 'Track your package',
                link: '#',
                linkClass: 'footer__list-link'
              },
              {
                text: 'Guides',
                link: '#',
                linkClass: 'footer__list-link'
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
            class: 'footer__list',
            elements: [
              {
                text: 'Delivery time',
                link: '#',
                linkClass: 'footer__list-link'
              },
              {
                text: 'Payments',
                link: '#',
                linkClass: 'footer__list-link'
              },
              {
                text: 'Delivery cost',
                link: '#',
                linkClass: 'footer__list-link'
              },
              {
                text: 'Returns and exchanges',
                link: '#',
                linkClass: 'footer__list-link'
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
            class: 'footer__list',
            elements: [
              {
                text: '30 days for return',
                link: '#',
                linkClass: 'footer__list-link'
              },
              {
                text: 'Guarantee',
                link: '#',
                linkClass: 'footer__list-link'
              },
              {
                text: '454 Brands',
                link: '#',
                linkClass: 'footer__list-link'
              },
              {
                text: 'Discounts',
                link: '#',
                linkClass: 'footer__list-link'
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
            class: 'footer__list',
            elements: [
              {
                text: 'About us',
                link: '#',
                linkClass: 'footer__list-link'
              },
              {
                text: 'Certificates and safety',
                link: '#',
                linkClass: 'footer__list-link'
              },
              {
                text: 'Prizes and customer feedback',
                link: '#',
                linkClass: 'footer__list-link'
              },
              {
                text: 'Cookie policy',
                link: '#',
                linkClass: 'footer__list-link'
              },
              {
                text: 'Regulations',
                link: '#',
                linkClass: 'footer__list-link'
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
