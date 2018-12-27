module.exports = {
  context: {
    heading: {
      text: 'Buy with us',
      tag: 'h3',
      class: ''
    },
    items: [
      {
        iconLabel: 'Delivery truck',
        iconWrapperClass: 'brief-info__icon-wrapper--delivery-truck',
        icon: {
          class: 'brief-info__icon brief-info__icon--delivery-truck',
          iconId: 'shipping-time-truck',
          iconTitle: 'Delivery truck with clock'
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
        iconLabel: 'Curved arrows',
        icon: {
          class: 'brief-info__icon',
          iconId: 'curved-arrows',
          iconTitle: 'Curved 2 arrows in form of circle',
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
        iconLabel: 'Shield',
        icon: {
          class: 'brief-info__icon',
          iconId: 'shield',
          iconTitle: 'Shield',
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
