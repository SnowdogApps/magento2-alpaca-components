module.exports = {
  context: {
    input: {
      id: 'qty',
      min: '1',
      defaultValue: '1',
      ariaLabel: 'Change the quantity'
    },
    minusQtyButton: {
      tag: 'button',
      class: 'button--icon quantity-update__button quantity-update__button--minus quantity-update__button--disabled',
      attributes: 'type="button" aria-label="Decrease the quantity"',
      icon: {
        class: 'button__icon quantity-update__icon',
        iconId: 'minus',
        iconTitle: 'Minus mark'
      }
    },
    plusQtyButton: {
      tag: 'button',
      class: 'button--icon quantity-update__button quantity-update__button--plus',
      attributes: 'type="button" aria-label="Increase the quantity"',
      icon: {
        class: 'button__icon quantity-update__icon',
        iconId: 'plus',
        iconTitle: 'Plus mark'
      }
    },
    script: true
  }
}
