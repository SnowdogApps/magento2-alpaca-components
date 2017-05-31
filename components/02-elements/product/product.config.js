module.exports = {
  title: 'Product grid item',
  context: {
    link: '#somelink',
    name: 'Some product name',
    price: '210$',
    type: 'some attribute text',
    imagesrc: '/images/product/product-img-230_180.png',
    alttext: 'some alt text',
    additionalClass: false,
    modifier: false
  },
  variants: [
    {
      name: 'with-badge',
      context: {
        newflag: true
      }
    },
    {
      name: 'with-add-to-cart-button',
      context: {
        buttonAddToCart: true,
        button: {
          text: 'Add to Cart',
          modifier: 'dark',
          additionalClass: 'product-item__button'
        }
      }
    }
  ]
};
