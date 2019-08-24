module.exports = {
  context: {
    mainHeading: {
      tag: 'h1',
      class: 'heading heading--page',
      text: 'Forgot your password'
    },
    info: 'Please enter your email address below to receive a password reset link.',
    email: {
      class: 'forgot-password__email',
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
    captcha: {
      image: {
        class: 'forgot-password__image',
        src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
        dataSrc: '/images/banner/banner-992_254.png',
        alt: 'Please type the letters below'
      },
      reload: {
        tag: 'button',
        class: 'button--secondary',
        attributes: 'type="button"',
        text: 'Reload Captcha'
      },
      field: {
        class: 'forgot-password__captcha-field',
        label: {
          text: 'Please type the letters below',
          hidden: false
        },
        field: {
          id: 'captcha',
          name: 'captcha',
          type: 'text'
        }
      },
      submit: {
        tag: 'button',
        attributes: 'type="submit"',
        text: 'Reset My Password'
      }
    }
  }
}
