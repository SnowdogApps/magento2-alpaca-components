module.exports = {
  title: 'Product grid item',
  context: {
    class: '',
    productLabel: {
      text: 'NEW',
      type: 'new'
    },
    typeHorizontal: false,
    imageMain: {
      src: '/images/gallery/product-img-496-496.jpg'
    },
    thumbs: [
      {
        imageThumb: {
          src: '/images/gallery/product-img-80-80.jpg',
          active: true
        }
      },
      {
        imageThumb: {
          src: '/images/gallery/product-img-80-80.jpg'
        }
      },
      {
        imageThumb: {
          src: '/images/gallery/product-img-80-80.jpg'
        }
      },
      {
        imageThumb: {
          src: '/images/gallery/product-img-80-80.jpg'
        }
      }
    ]
  },
  variants: [
    {
      name: 'horizontal',
      context: {
        typeHorizontal: true
      },
    },
    {
      name: 'with-label',
      context: {
        productLabel: {
          text: 'NEW',
          type: 'new'
        }
      }
    }
  ]
};
