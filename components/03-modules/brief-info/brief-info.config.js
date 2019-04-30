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
          id: 'shipping-time-truck',
          title: 'Delivery truck with clock',
          class: 'brief-info__icon brief-info__icon--delivery-truck'
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
          id: 'curved-arrows',
          title: 'Curved 2 arrows in form of circle',
          class: 'brief-info__icon'
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
          id: 'shield',
          title: 'Shield',
          class: 'brief-info__icon'
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
