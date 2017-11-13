module.exports = {
  context: {
    script: true,
    iconPrev: {
      tag: 'button',
      text: '',
      class: 'button--icon slider__navigation-icon slider__prev',
      iconId: 'angle-left',
      iconClass: 'button__icon slider__icon',
      attributes: 'type="button" aria-label="button arrow slider prev"'
    },
    iconNext: {
      tag: 'button',
      text: '',
      class: 'button--icon slider__navigation-icon slider__next',
      iconId: 'angle-right',
      iconClass: 'button__icon slider__icon',
      attributes: 'type="button" aria-label="button arrow slider next"'
    },
    iconClass: 'slider__icon',
    products: [
      {
        image: {
          class: 'slider__image',
          dataSrc: '/images/product/product-base.jpg',
        },
        name: 'Some product name',
        price: '$ 200.00',
        oldPrice: '$ 250.00'
      },
      {
        image: {
          class: 'slider__image',
          src: '/images/product/product-second.jpg',
        },
        name: 'Some product name',
        price: '$ 200.00',
        badge: {
          text: 'New',
          class: 'badge--new slider__badge'
        }
      },
      {
        image: {
          class: 'slider__image',
          dataSrc: '/images/product/product-base.jpg',
        },
        name: 'Some product name',
        price: '$ 200.00',
        oldPrice: '$ 250.00'
      },
      {
        image: {
          class: 'slider__image',
          src: '/images/product/product-second.jpg',
        },
        name: 'Some product name',
        price: '$ 200.00',
        oldPrice: '$ 250.00',
        badge: {
          text: '-20%',
          class: 'badge--discount slider__badge'
        }
      },
      {
        image: {
          class: 'slider__image',
          dataSrc: '/images/product/product-base.jpg',
        },
        name: 'Some product name',
        price: '$ 200.00',
        oldPrice: '$ 250.00'
      }
    ]
  }
}
