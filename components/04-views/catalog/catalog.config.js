module.exports = {
  context: {
    product: {
      tag: 'li',
      class: 'products-grid__item',
      name: 'Some product name',
      price: '210$',
      type: 'some attribute text',
      image: {
        dataSrc: '/images/product/product-img-230_180.png'
      }
    },
    product2: {
      tag: 'li',
      class: 'products-grid__item',
      name: 'Some product name',
      price: '210$',
      type: 'some attribute text',
      image: {
        dataSrc: 'https://loremflickr.com/640/620/brazil,rio'
      }
    }
  },
  variants: [
    {
      name: 'list',
      context: {
        productlist: [
          {
            image: '/images/product/product-img-70_46.png',
            name: 'Product name whatever',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          },
          {
            image: '/images/product/product-img-70_46.png',
            name: 'Product name whatever',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          },
          {
            image: '/images/product/product-img-70_46.png',
            name: 'Product name whatever',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          },
          {
            image: '/images/product/product-img-70_46.png',
            name: 'Product name whatever',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          }
        ]
      }
    }
  ]
};
