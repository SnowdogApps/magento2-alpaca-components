module.exports = {
  context: {
    handlerClass: 'container',
    scrollToTop: {
      tag: 'button',
      class: 'footer__scroll-top',
      icon: {
        id: 'arrow-up',
        title: 'Arrow up',
        class: 'footer__icon'
      },
      attributes: 'type="button" aria-label="Scroll to top"'
    },
    bottomBar: {
      handlerClass: 'container'
    },
    linkList: {
      id: 'dropdown-footer',
      class: 'dropdown-list@screen-m dropdown-list--is-open@screen-m dropdown-list--dark',
      dropdowns: [
        {
          itemTag: 'button',
          itemAttributes: 'aria-expanded="false" aria-controls="dropdown-help"',
          title: 'Help',
          id: 'dropdown-help',
          collapse: {
            id: 'angle-down',
            title: 'Arrow down',
            class: 'dropdown-list__icon dropdown-list__icon--inner'
          },
          contentElement: 'list--link',
          contentContext: {
            listTag: 'ul',
            elementTag: 'li',
            class: 'footer__links-list',
            elements: [
              {
                text: 'Contact',
                linkClass: 'footer__link',
                link: '#',
                linkAttributes: 'title="Contact"'
              },
              {
                text: 'Frequently asked questions (FAQ)',
                linkClass: 'footer__link',
                link: '#',
                linkAttributes: 'title="Frequently asked questions (FAQ)"'
              },
              {
                text: 'How to buy',
                linkClass: 'footer__link',
                link: '#',
                linkAttributes: 'title="How to buy"'
              },
              {
                text: 'Track your package',
                linkClass: 'footer__link',
                link: '#',
                linkAttributes: 'title="Track your package"'
              },
              {
                text: 'Guides',
                linkClass: 'footer__link',
                link: '#',
                linkAttributes: 'title="Guides"'
              }
            ]
          }
        },
        {
          itemTag: 'button',
          itemAttributes: 'aria-expanded="false" aria-controls="dropdown-info"',
          title: 'Information',
          id: 'dropdown-info',
          collapse: {
            id: 'angle-down',
            title: 'Arrow down',
            class: 'dropdown-list__icon dropdown-list__icon--inner'
          },
          contentElement: 'list--link',
          contentContext: {
            listTag: 'ul',
            elementTag: 'li',
            class: 'footer__links-list',
            elements: [
              {
                text: 'Delivery time',
                linkClass: 'footer__link',
                link: '#',
                linkAttributes: 'title="Delivery time"'
              },
              {
                text: 'Payments',
                linkClass: 'footer__link',
                link: '#',
                linkAttributes: 'title="Payments"'
              },
              {
                text: 'Delivery cost',
                linkClass: 'footer__link',
                link: '#',
                linkAttributes: 'title="Delivery cost"'
              },
              {
                text: 'Returns and exchanges',
                linkClass: 'footer__link',
                link: '#',
                linkAttributes: 'title="Returns and exchanges"'
              }
            ]
          }
        },
        {
          itemTag: 'button',
          itemAttributes: 'aria-expanded="false" aria-controls="dropdown-worth"',
          title: 'Why is worth it',
          id: 'dropdown-worth',
          collapse: {
            id: 'angle-down',
            title: 'Arrow down',
            class: 'dropdown-list__icon dropdown-list__icon--inner'
          },
          contentElement: 'list--link',
          contentContext: {
            listTag: 'ul',
            elementTag: 'li',
            class: 'footer__links-list',
            elements: [
              {
                text: '30 days for return',
                linkClass: 'footer__link',
                link: '#',
                linkAttributes: 'title="30 days for return"'
              },
              {
                text: 'Guarantee',
                linkClass: 'footer__link',
                link: '#',
                linkAttributes: 'title="Guarantee"'
              },
              {
                text: '454 Brands',
                linkClass: 'footer__link',
                link: '#',
                linkAttributes: 'title="454 Brands"'
              },
              {
                text: 'Discounts',
                linkClass: 'footer__link',
                link: '#',
                linkAttributes: 'title="Discounts"'
              }
            ]
          }
        },
        {
          itemTag: 'button',
          itemAttributes: 'aria-expanded="false" aria-controls="dropdown-alpaca"',
          title: 'Alpaca.pl',
          id: 'dropdown-alpaca',
          collapse: {
            id: 'angle-down',
            title: 'Arrow down',
            class: 'dropdown-list__icon dropdown-list__icon--inner'
          },
          contentElement: 'list--link',
          contentContext: {
            listTag: 'ul',
            elementTag: 'li',
            class: 'footer__links-list',
            elements: [
              {
                text: 'About us',
                linkClass: 'footer__link',
                link: '#',
                linkAttributes: 'title="About us"'
              },
              {
                text: 'Certificates and safety',
                linkClass: 'footer__link',
                link: '#',
                linkAttributes: 'title="Certificates and safety"'
              },
              {
                text: 'Prizes and customer feedback',
                linkClass: 'footer__link',
                link: '#',
                linkAttributes: 'title="Prizes and customer feedback"'
              },
              {
                text: 'Cookie policy',
                linkClass: 'footer__link',
                link: '#',
                linkAttributes: 'title="Cookie policy"'
              },
              {
                text: 'Regulations',
                linkClass: 'footer__link',
                link: '#',
                linkAttributes: 'title="Regulations"'
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
          icon: {
            id: 'youtube',
            title: 'Youtube logo',
            class: 'footer__social-icon',
          },
          linkAttributes: 'aria-label="Go to Alpaca Youtube Channel"'
        },
        {
          icon: {
            id: 'facebook',
            title: 'Facebook logo',
            class: 'footer__social-icon',
          },
          linkAttributes: 'aria-label="Go to Alpaca Facebook Page"'
        },
        {
          icon: {
            id: 'instagram',
            title: 'Instagram logo',
            class: 'footer__social-icon',
          },
          linkAttributes: 'aria-label="Check Alpaca on Instagram"'
        },
        {
          icon: {
            id: 'google-plus',
            title: 'Google plus logo',
            class: 'footer__social-icon',
          },
          linkAttributes: 'aria-label="Find Alpaca on Google Plus"'
        }
      ]
    }
  }
}
