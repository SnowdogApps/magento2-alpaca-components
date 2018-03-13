module.exports = {
  context: {
    mainHeading: {
      tag: 'h1',
      class: 'heading heading--page',
      text: 'Customer login'
    },
    formHeading: {
      tag: 'h3',
      text: 'Registered Customer'
    },
    linkHeading: {
      tag: 'h3',
      text: 'Registered Customer'
    },
    signInInfo: 'If you have an account, sign in with your email address.',
    createAccountInfo: 'Creating an account has many benefits: check out faster, keep more than one address, track orders and more.',
    email: {
      attributes: '',
      class: 'login__input',
      label: {
        attributes: '',
        text: 'Email',
        hidden: false
      },
      field: {
        attributes: '',
        class: '',
        id: 'email',
        name: 'email',
        placeholder: '',
        type: 'email'
      }
    },
    password: {
      attributes: '',
      class: 'login__input',
      label: {
        attributes: '',
        text: 'Password',
        hidden: false
      },
      field: {
        attributes: 'aria-required="true" autocomplete="off"',
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
    createAccountButton: {
      class: 'button--link login__button login__button--create-accunt',
      tag: 'a',
      text: 'Create an Account'
    },
    forgetPassword: {
      href: '#',
      text: 'Forgot your password?'
    },
    validationTips: '* Required Fields',
    tabs: {
      class: '',
      registeredCustomer: {
        active: true,
        tabId: 'registered-customer',
        title: 'Registered customer',
        content: ''
      },
      newCustomer: {
        tabId: 'new-customer',
        title: 'New customer'
      }
    },
    banner: {
      defaultSrc: '/images/login/banner-464-360@2x.jpg',
      sources: [
        {
          src: '/images/login/banner-304-144@2x.jpg',
          mediaQuery: '(max-width: 468px)'
        },
        {
          src: '/images/login/banner-304-144@3x.jpg',
          mediaQuery: '(max-width: 768px)'
        },
        {
          src: '/images/login/banner-464-360@2x.jpg',
          mediaQuery: '(max-width: 992px)'
        },
        {
          src: '/images/login/banner-656-360.jpg',
          mediaQuery: ''
        }
      ],
      alt: 'Description of image'
    }
  }
};
