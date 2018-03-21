module.exports = {
  context: {
    mainHeading: {
      tag: 'h1',
      class: 'heading heading--page',
      text: 'Create new customer account'
    },
    headingDivider: {
      class: 'registration__divider'
    },
    personalSection: {
      fieldset: {
        attributes: '',
        class: ''
      },
      legend: {
        class: '',
        text: 'Personal information'
      }
    },
    signInSection: {
      fieldset: {
        attributes: '',
        class: ''
      },
      legend: {
        class: '',
        text: 'Sign-In information'
      }
    },
    firstName: {
      attributes: '',
      class: 'registration__input',
      label: {
        attributes: '',
        text: 'First name',
        hidden: false
      },
      field: {
        attributes: '',
        class: '',
        id: 'firstname',
        name: 'fisrtname',
        placeholder: '',
        type: 'text'
      }
    },
    lastName: {
      attributes: '',
      class: 'registration__input',
      label: {
        attributes: '',
        text: 'Last name',
        hidden: false
      },
      field: {
        attributes: '',
        class: '',
        id: 'lastname',
        name: 'lastname',
        placeholder: '',
        type: 'text'
      }
    },
    newsletterCheckbox: {
      class: 'registration__newsletter-checkbox',
      id: 'is_subscribed',
      name: 'is_subscribed',
      label: {
        text: 'Sign Up for Newsletter',
        class: 'registration__newsletter-checkbox-label'
      },
      input: {
        class: 'registration__newsletter-checkbox-field'
      },
      icon: {
        class: 'registration__newsletter-checkbox-icon'
      }
    },
    email: {
      attributes: '',
      class: 'registration__input',
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
    passwordConfirmation: {
      attributes: '',
      class: 'registration__input',
      label: {
        attributes: '',
        text: 'Confirm password',
        hidden: false
      },
      field: {
        attributes: 'aria-required="true" autocomplete="off"',
        class: '',
        id: 'password-confirmation',
        name: 'password-confirmation',
        placeholder: '',
        type: 'password'
      }
    },
    passwordStrength: {
      text: 'Password Strength:',
      noPassword: 'No Password'
    },
    registrationButton: {
      tag: 'button',
      text: 'Create an Account'
    }
  }
};
