module.exports = {
  context: {
    mainHeading: {
      tag: 'h1',
      class: 'heading heading--page',
      text: 'Send confirmation link'
    },
    info: 'Please enter your email below and we will send you the confirmation link.',
    email: {
      label: {
        text: 'Email',
        hidden: false
      },
      field: {
        id: 'email',
        name: 'email',
        type: 'email'
      }
    },
    submit: {
      tag: 'button',
      attributes: 'type="submit"',
      text: 'Send confirmation link'
    },
    back: {
      href: '#',
      class: 'confirmation-link__link',
      text: 'Back to Sign In'
    }
  }
}
