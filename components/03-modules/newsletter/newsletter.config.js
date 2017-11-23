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
        id: 'newsletterEmail',
        name: 'newsletterEamil',
        class: 'newsletter__field'
      },
      label: {
        class: 'newsletter__label',
        hidden: true,
        text: 'Email for newsletter subscription'
      }
    },
    button: {
      tag: 'button',
      text: 'Submit',
      class: 'newsletter__button'
    },
    checkbox: {
      class: 'newsletter__checkbox',
      id: 'newsletter',
      label: {
        text: 'I agree to <a href="#" title="Terms and conditions">Terms and conditions</a> and I am happy to receive your newsletter with all your promotions.'
      }
    }
  }
};
