module.exports = {
  context: {
    script: true,
    attributes: 'data-rewind="true" data-enable-mouse-events="true" data-slides-to-scroll="1"',
    iconPrev: {
      tag: 'button',
      text: '',
      class: 'button--icon slider__navigation-icon slider__prev',
      icon: {
        id: 'angle-left',
        title: 'Arrow left',
        class: 'button__icon slider__icon'
      },
      attributes: 'type="button" aria-label="Previous slide"'
    },
    iconNext: {
      tag: 'button',
      text: '',
      class: 'button--icon slider__navigation-icon slider__next',
      icon: {
        id: 'angle-right',
        title: 'Arrow right',
        class: 'button__icon slider__icon'
      },
      attributes: 'type="button" aria-label="Next slide"'
    },
    slides: [
      {
        content: 'image',
        contentContext: {
          src: '../../images/product/product-base.jpg',
          alt: 'slider1'
        }
      },
      {
        content: 'image',
        contentContext: {
          src: '../../images/product/product-second.jpg',
          alt: 'slider2'
        }
      },
      {
        content: 'image',
        contentContext: {
          src: '../../images/product/product-base.jpg',
          alt: 'slider3'
        }
      },
      {
        content: 'image',
        contentContext: {
          src: '../../images/product/product-second.jpg',
          alt: 'slider4'
        }
      },
      {
        content: 'image',
        contentContext: {
          src: '../../images/product/product-base.jpg',
          alt: 'slider5'
        }
      },
      {
        content: 'image',
        contentContext: {
          src: '../../images/product/product-second.jpg',
          alt: 'slider6'
        }
      },
      {
        content: 'image',
        contentContext: {
          src: '../../images/product/product-base.jpg',
          alt: 'slider7'
        }
      }
    ]
  },
  variants: [
    {
      name: 'with-dots',
      context: {
        navigation: true
      }
    }
  ]
}
