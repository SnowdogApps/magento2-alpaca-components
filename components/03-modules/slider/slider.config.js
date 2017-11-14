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
    elements: [
      {
        content: 'button'
      }
    ]
  }
}
