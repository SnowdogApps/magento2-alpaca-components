module.exports = {
  title: 'Product grid item',
  context: {
    tag: 'div',
    class: '',
    name: 'Some product name',
    price: '210$',
    type: 'some attribute text',
    image: {
      src: '/images/product/product-img-230_180.png'
    }
  },
  variants: [
    {
      name: 'with-badge',
      context: {
        badge: {
          text: 'New'
        }
      }
    },
    {
      name: 'with-add-to-cart-button',
      context: {
        button: {
          tag: 'a',
          text: 'Add to Cart',
          class: 'product-item__button'
        }
      }
    }
  ]
};
