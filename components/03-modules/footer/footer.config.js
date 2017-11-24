module.exports = {
  context: {
    handlerClass: 'container',
    scrollToTop: {
      tag: 'button',
      class: 'footer__scroll-top',
      iconId: 'arrow-up',
      iconClass: 'footer__icon',
      attributes: 'type="button" aria-label="arrow scroll top"'
    },
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
                link: '#',
                linkAttributes: 'title="Contact"'
              },
              {
                text: 'Frequently asked questions (FAQ)',
                linkClass: 'link--secondary',
                link: '#',
                linkAttributes: 'title="Frequently asked questions (FAQ)"'
              },
              {
                text: 'How to buy',
                linkClass: 'link--secondary',
                link: '#',
                linkAttributes: 'title="How to buy"'
              },
              {
                text: 'Track your package',
                linkClass: 'link--secondary',
                link: '#',
                linkAttributes: 'title="Track your package"'
              },
              {
                text: 'Guides',
                linkClass: 'link--secondary',
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
                link: '#',
                linkAttributes: 'title="Delivery time"'
              },
              {
                text: 'Payments',
                linkClass: 'link--secondary',
                link: '#',
                linkAttributes: 'title="Payments"'
              },
              {
                text: 'Delivery cost',
                linkClass: 'link--secondary',
                link: '#',
                linkAttributes: 'title="Delivery cost"'
              },
              {
                text: 'Returns and exchanges',
                linkClass: 'link--secondary',
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
                link: '#',
                linkAttributes: 'title="30 days for return"'
              },
              {
                text: 'Guarantee',
                linkClass: 'link--secondary',
                link: '#',
                linkAttributes: 'title="Guarantee"'
              },
              {
                text: '454 Brands',
                linkClass: 'link--secondary',
                link: '#',
                linkAttributes: 'title="454 Brands"'
              },
              {
                text: 'Discounts',
                linkClass: 'link--secondary',
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
                link: '#',
                linkAttributes: 'title="About us"'
              },
              {
                text: 'Certificates and safety',
                linkClass: 'link--secondary',
                link: '#',
                linkAttributes: 'title="Certificates and safety"'
              },
              {
                text: 'Prizes and customer feedback',
                linkClass: 'link--secondary',
                link: '#',
                linkAttributes: 'title="Prizes and customer feedback"'
              },
              {
                text: 'Cookie policy',
                linkClass: 'link--secondary',
                link: '#',
                linkAttributes: 'title="Cookie policy"'
              },
              {
                text: 'Regulations',
                linkClass: 'link--secondary',
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
          icon: 'youtube',
          class: 'footer__social-list-item',
          iconClass: 'footer__social-icon',
          linkAttributes: 'aria-label="Go to Alpaca Youtube Channel"'
        },
        {
          icon: 'facebook',
          class: 'footer__social-list-item',
          iconClass: 'footer__social-icon',
          linkAttributes: 'aria-label="Go to Alpaca Facebook Page"'
        },
        {
          icon: 'instagram',
          class: 'footer__social-list-item',
          iconClass: 'footer__social-icon',
          linkAttributes: 'aria-label="Check Alpaca on Instagram"'
        },
        {
          icon: 'google-plus',
          class: 'footer__social-list-item',
          iconClass: 'footer__social-icon',
          linkAttributes: 'aria-label="Find Alpaca on Google Plus"'
        }
      ]
    }
  }
}
