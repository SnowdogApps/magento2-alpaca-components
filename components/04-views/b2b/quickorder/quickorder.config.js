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
        qty: {
          label: {
            text: 'Qty'
          },
          field: {
            id: 'qty1',
            name: 'qty1',
            type: 'text'
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
            id: 'sku1',
            name: 'sku1',
            type: 'text'
          }
        },
        qty: {
          label: {
            text: 'Qty'
          },
          field: {
            id: 'qty1',
            name: 'qty1',
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
