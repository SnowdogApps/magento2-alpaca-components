module.exports = {
  context: {
    mainHeading: {
      tag: 'h1',
      class: 'heading heading--page',
      text: 'Forgot your password'
    },
    info: 'Please enter your email address below to receive a password reset link.',
    email: {
      label: {
        text: 'Email',
        hidden: false
      },
      field: {
        id: 'email',
        name: 'email',
        placeholder: '',
        type: 'email'
      }
    },
    captcha: {
      field: {
        class: 'login__input',
        label: {
          text: 'Please type the letters below',
          hidden: false
        },
        field: {
          id: 'captcha',
          name: 'captcha',
          placeholder: '',
          type: 'text'
        }
      }
    }
  }
}
