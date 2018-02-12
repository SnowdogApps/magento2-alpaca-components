module.exports = {
  context: {
    input: {
      id: 'qty',
      min: '1',
      defaultValue: '1',
      ariaLabel: 'quantity update input'
    },
    minusQtyButton: {
      tag: 'button',
      class: 'button--icon quantity-update__button quantity-update__button--minus quantity-update__button--disabled',
      attributes: 'type="button" aria-label="quantity minus button"',
      iconClass: 'button__icon quantity-update__icon',
      iconId: 'minus'
    },
    plusQtyButton: {
      tag: 'button',
      class: 'button--icon quantity-update__button quantity-update__button--plus',
      attributes: 'type="button" aria-label="quantity plus button"',
      iconClass: 'button__icon quantity-update__icon',
      iconId: 'plus'
    },
    script: true
  }
}
