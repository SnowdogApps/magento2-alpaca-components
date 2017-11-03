module.exports = {
  collated: true,
  preview: '@docs-only-styles',
  context: {
    heading: {
      text: 'Sing up to our twisted newsletter'
    },
    input: {
      class: 'newsletter__input',
      field: {
        placeholder: 'Enter your email address',
        class: 'newsletter__field'
      },
      label: {
        class: 'newsletter__label'
      }
    },
    button: {
      tag: 'button',
      text: 'Submit',
      class: 'newsletter__button'
    },
    'checkbox': {
      'class': 'newsletter__checkbox',
      'id': 'newsletter',
      'label': 'I agree to <a href="#">Terms and conditions</a> and I am happy to receive your newsletter with all your promotions.'
    }
  }
};
