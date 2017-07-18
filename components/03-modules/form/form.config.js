module.exports = {
  context: {
    input: {
      field: {
        placeholder: 'This is placeholder'
      }
    },
    button: {
      tag: 'a',
      text: '',
      class: 'button--icon',
      iconId: 'arrow-right',
      iconClass: 'button__icon'
    }
  },
  variants: [
    {
      name: 'compact',
      context: {
        heading: {
          text: 'Newsletter',
          class: ''
        },
        input: {
          class: 'form-compact__input',
          label: {
            class: 'form-compact__input-label'
          },
          field: {
            class: 'form-compact__input-field',
            placeholder: 'Enter discount code'
          }
        },
        button: {
          tag: 'button',
          text: '',
          class: 'button--icon form-compact__button',
          iconId: 'arrow-right',
          iconClass: 'button__icon form-compact__button'
        },
        class: ''
      }
    }
  ]
};
