module.exports = {
  context: {
    form: {
      title: 'Order by SKU',
      fields: [
        {
          input: {
            class: 'dashboard-form__divider',
            field: {
              id: 'sku',
              name: 'sku',
              placeholder: 'SKU'
            }
          }
        },
        {
          input: {
            class: 'dashboard-form__divider',
            field: {
              id: 'qty',
              name: 'qty',
              placeholder: 'Qty'
            }
          }
        },
        {
          input: {
            class: 'dashboard-form__divider',
            field: {
              id: 'sku2',
              name: 'sku2',
              placeholder: 'SKU'
            }
          }
        },
        {
          input: {
            class: 'dashboard-form__divider',
            field: {
              id: 'qty2',
              name: 'qty2',
              placeholder: 'Qty'
            }
          }
        }
      ]
    },
    addRow: {
      class: 'dashboard__item',
      sides: [
        {
          action: [
            {
              button: true,
              title: 'Add Row'
            }
          ]
        }
      ]
    },
    uploadInfo: {
      informations: [
        {
          headingTag: 'h4',
          title: 'Attention',
          text: 'File extension allowed: *.csv. Your CSV file must include "sku" and "qty" columns.'
        }
      ]
    },
    fileUpload: {
      class: 'dashboard__item',
      labelText: 'Your file (csv max 1 MB)',
      input: {
        id: 'file',
        type: 'file',
        name: 'uploadCSV',
        formats: '.pdf,.doc,.png',
        size: '1024'
      },
      fileName: 'File not choosen',
      text: 'Choose a file',
      button: {
        tag: 'button',
        class: 'file-upload__button',
        attributes: 'type="button"',
        text: 'Upload a file'
      }
    },
    buttons: {
      sides: [
        {
          action: [
            {
              button: true,
              title: 'Add to Cart'
            }
          ]
        },
        {
          action: [
            {
              button: true,
              title: 'Reset'
            }
          ]
        }
      ]
    }
  }
}
