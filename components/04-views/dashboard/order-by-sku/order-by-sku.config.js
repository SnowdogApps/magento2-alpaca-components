module.exports = {
  context: {
    form: {
      title: 'Order by SKU',
      fields: [
        {
          input: {
            class: 'dashboard-form__input',
            field: {
              placeholder: 'SKU'
            }
          }
        },
        {
          input: {
            class: 'dashboard-form__input',
            field: {
              placeholder: 'Qty'
            }
          }
        },
        {
          input: {
            class: 'dashboard-form__input',
            field: {
              placeholder: 'SKU'
            }
          }
        },
        {
          input: {
            class: 'dashboard-form__input',
            field: {
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
          title: 'Attention',
          text: 'File extension allowed: *.csv. Your CSV file must include "sku" and "qty" columns.'
        }
      ]
    },
    fileUpload: {
      class: 'dashboard__item',
      fileId: 'file',
      labelText: 'Your file (csv max 1 MB)',
      labelTextSecond: 'Choose a file',
      type: 'file',
      name: 'uploadCSV',
      fileName: 'File not choosen',
      text: 'Choose a file'
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
