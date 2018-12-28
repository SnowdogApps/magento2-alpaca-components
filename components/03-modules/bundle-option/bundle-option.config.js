module.exports = {
  context: {
    title: {
      tag: 'h4',
      message: 'Sprite Stasis Ball'
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
      class: 'bundle-option__input',
      label: {
        class: 'bundle-option__label',
        text: 'Qty:'
      },
      field: {
        type: 'number',
        class: 'bundle-option__input-field',
        id: 'qty1',
        name: 'qty1',
        placeholder: '',
        attributes: 'min="0"'
      }
    },
    fields: [
      {
        content: 'radio',
        config: {
          name: 'bundleOption1',
          legend: false,
          options: [
            {
              id: 'id1',
              label: 'Sprite Stasis Ball 55 cm',
            },
            {
              id: 'id2',
              label: 'Sprite Stasis Ball 65 cm',
            },
            {
              id: 'id3',
              label: 'Sprite Stasis Ball 75 cm',
            }
          ]
        }
      }
    ]
  }
}
