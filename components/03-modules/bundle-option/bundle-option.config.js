module.exports = {
  context: {
    title: {
      tag: 'h4',
      message: 'Choose first option'
    },
    checkboxes: [
      {
        content: 'radio',
        config: {
          name: 'bundleOption1'
        }
      }
    ],
    qty: {
      label: {
        text: 'Qty'
      },
      field: {
        class: 'bundle-option__input-field',
        id: 'qty1',
        name: 'qty1',
        placeholder: ''
      }
    }
  }
}
