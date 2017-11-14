module.exports = {
  context: {
    script: true,
    attributes: 'data-rewind="true" data-enable-mouse-events="true"',
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
    elements: [
      {
        content: 'image',
        contentContext: {
          src: '../../images/product/product-base.jpg'
        }
      },
      {
        content: 'image',
        contentContext: {
          src: '../../images/product/product-second.jpg'
        }
      },
      {
        content: 'image',
        contentContext: {
          src: '../../images/product/product-base.jpg'
        }
      },
      {
        content: 'image',
        contentContext: {
          src: '../../images/product/product-second.jpg'
        }
      },
      {
        content: 'image',
        contentContext: {
          src: '../../images/product/product-base.jpg'
        }
      },
      {
        content: 'image',
        contentContext: {
          src: '../../images/product/product-second.jpg'
        }
      },
      {
        content: 'image',
        contentContext: {
          src: '../../images/product/product-base.jpg'
        }
      }
    ]
  }
}
