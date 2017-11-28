module.exports = {
  context: {
    title: 'Customer login',
    signInInfo: 'If you have an account, sign in with your email address.',
    email: {
      attribute: '',
      class: 'login__input',
      label: {
        attribute: '',
        text: 'Email',
        hidden: false
      },
      field: {
        attribute: '',
        class: '',
        id: 'email',
        name: 'email',
        placeholder: '',
        type: 'email'
      }
    },
    password: {
      attribute: '',
      class: 'login__input',
      label: {
        attribute: '',
        text: 'Password',
        hidden: false
      },
      field: {
        attribute: 'aria-required="true" autocomplete="off"',
        class: '',
        id: 'password',
        name: 'password',
        placeholder: '',
        type: 'password'
      }
    },
    loginButton: {
      class: 'login__button',
      tag: 'button',
      text: 'Sign in'
    },
    forgetPassword: {
        href: '#',
        text: 'Forgot your password?'
    },
    validationTips: '* Required Fields'
  }
};
