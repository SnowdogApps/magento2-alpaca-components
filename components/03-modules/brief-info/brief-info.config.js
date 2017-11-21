module.exports = {
  context: {
    items: [
      {
        iconWrapperClass: 'brief-info__icon-wrapper--delivery-truck',
        icon: {
          class: 'brief-info__icon brief-info__icon--delivery-truck',
          iconId: 'shipping-time-truck',
        },
        link: {
          class: '',
          href: '#',
          text: 'see details'
        },
        title: {
          class: '',
          tag: 'h3',
          text: 'Shipping in 24h'
        }
      },
      {
        icon: {
          class: 'brief-info__icon',
          iconId: 'curved-arrows'
        },
        link: {
          class: '',
          href: '#',
          text: 'see details'
        },
        title: {
          class: '',
          tag: 'h3',
          text: 'Free returns'
        }
      },
      {
        class: 'brief-info__icon brief-info__icon--shield',
        icon: {
          class: 'brief-info__icon',
          iconId: 'shield'
        },
        link: {
          class: '',
          href: '#',
          text: 'see details'
        },
        title: {
          class: '',
          tag: 'h3',
          text: 'Secure payment'
        },

      }
    ]

  }
};
