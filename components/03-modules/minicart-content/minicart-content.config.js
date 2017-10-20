module.exports = {
  context: {
    title: 'Shopping Bag',
    total: 'Cart Subtotal:',
    price: '$ 200.00',
    elements: [
      {
        name: 'Lorem ipsum  dolor sit amet copy 8',
        price: '$ 200.00',
        quantity: '1',
        image: {
          src: '/images/product/product-img-70_46.png',
          class: 'minicart-content__image'
        },
        button: {
          tag: 'button',
          class: 'button--icon minicart-content__button--icon',
          attributes: 'type="button"',
          iconClass: 'minicart-content__icon'
        }
      }
    ],
    checkout: {
      tag: 'button',
      class: 'minicart-content__button',
      attributes: 'type="button"',
      text: 'Go to Checkout'
    },
    editCart: {
      tag: 'button',
      class: 'button--secondary minicart-content__button',
      attributes: 'type="button"',
      text: 'View and edit cart'
    }
  }
};
