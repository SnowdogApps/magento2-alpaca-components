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
          class: 'required',
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
          class: 'required',
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
          class: 'required',
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
          class: 'required',
          label: {
            text: 'Qty'
          },
          field: {
            class: 'quickorder__qty-field',
            id: 'qty2',
            name: 'qty2',
            type: 'number'
          }
        },
        remove: {
          tag: 'button',
          class: 'button--secondary',
          attributes: 'type="button"',
          text: 'Remove Row'
        }
      }
    ],
    multiple: {
      class: 'quickorder__textarea',
      label: {
        text: 'Enter Multiple SKUs'
      },
      field: {
        id: 'msku',
        name: 'msku'
      }
    },
    multipleDesc: 'Use commas or paragraph to separate SKUs.',
    addToList: {
      tag: 'button',
      class: 'button--secondary',
      attributes: 'type="button"',
      text: 'Add to List'
    },
    file: {
      title: 'Add from File',
      desc: 'File must be in .csv format and include "SKU" and "QTY" columns',
      sample: {
        href: '#',
        text: 'Download Sample'
      }
    },
    addToCart: {
      tag: 'button',
      attributes: 'type="submit"',
      text: 'Add to Cart'
    }
  }
}
