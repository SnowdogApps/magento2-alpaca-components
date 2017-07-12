module.exports = {
  context: {
    productlist: [
      {
        name: 'Product name whatever',
        image: {
          src: 'http://m2.dev/media/catalog/product/cache/2f58bf1051a2f0ceba166b720ec0a490/l/t/lt02.jpg'
        },
        price: '223.00 zł',
        attributes: {
          listTag: 'dl',
          elementTag: 'dt',
          valueTag: 'dd',
          class: 'list--description products-list__attributes',
          description: true,
          elements: [
            {
              label: 'Color',
              value: 'Red'
            },
            {
              label: 'Size',
              value: '40/32'
            }
          ]
        }
      },
      {
        name: 'LifeLong Fitness IV Long Bame Here Long Bame Here',
        image: {
          src: 'http://m2.dev/media/catalog/product/cache/2f58bf1051a2f0ceba166b720ec0a490/m/h/mh07-gray_main.jpg'
        },
        price: '23.43 zł',
        attributes: {
          listTag: 'dl',
          elementTag: 'dt',
          valueTag: 'dd',
          description: true,
          elements: [
            {
              label: 'Color',
              value: 'Blue'
            },
            {
              label: 'Size',
              value: 'XS'
            },
            {
              label: 'Label Name',
              value: 'Value Name'
            }
          ]
        }
      }
    ]
  }
};
