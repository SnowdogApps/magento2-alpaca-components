module.exports = {
  context: {
    mainHeading: {
      tag: 'h1',
      class: 'heading heading--page',
      text: 'Quick order'
    },
    products: [
      {
        name: {
          label: {
            text: 'Enter SKU or Product Name'
          },
          field: {
            id: 'sku1',
            name: 'sku1',
            type: 'text'
          }
        },
        image: {
          src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
          dataSrc: '/images/gallery/product-img-80-80.jpg'
        },
        link: {
          href: '#',
          text: 'Mona Pullover Hoodlie'
        },
        qty: {
          label: {
            text: 'Qty'
          },
          field: {
            class: 'quickorder__qty-field',
            id: 'qty1',
            name: 'qty1',
            type: 'number'
          }
        },
        remove: {
          tag: 'button',
          class: 'button--secondary',
          attributes: 'type="button"',
          text: 'Remove Row'
        }
      },
      {
        name: {
          label: {
            text: 'Enter SKU or Product Name'
          },
          field: {
            id: 'sku2',
            name: 'sku2',
            type: 'text'
          }
        },
        image: {
          src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
          dataSrc: '/images/gallery/product-img-80-80.jpg'
        },
        link: {
          href: '#',
          text: 'Chaz Kangeroo Hoodie'
        },
        qty: {
          label: {
            text: 'Qty'
          },
          field: {
            class: 'quickorder__qty-field',
            id: 'qty2',
            name: 'qty2',
            type: 'text'
          }
        },
        remove: {
          tag: 'button',
          class: 'button--secondary',
          attributes: 'type="button"',
          text: 'Remove Row'
        }
      }
    ]
  }
}
