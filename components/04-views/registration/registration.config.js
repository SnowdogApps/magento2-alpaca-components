module.exports = {
  context: {
    title: 'Create new customer account',
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
      attribute: '',
      class: 'registration__input',
      label: {
        attribute: '',
        text: 'First name',
        hidden: false
      },
      field: {
        attribute: '',
        class: '',
        id: 'firstname',
        name: 'fisrtname',
        placeholder: '',
        type: 'text'
      }
    },
    lastName: {
      attribute: '',
      class: 'registration__input',
      label: {
        attribute: '',
        text: 'Last name',
        hidden: false
      },
      field: {
        attribute: '',
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
      attribute: '',
      class: 'registration__input',
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
      class: 'registration__input registration__input--password',
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
    passwordConfirmation: {
      attribute: '',
      class: 'registration__input',
      label: {
        attribute: '',
        text: 'Confirm password',
        hidden: false
      },
      field: {
        attribute: 'aria-required="true" autocomplete="off"',
        class: '',
        id: 'password-confirmation',
        name: 'password-confirmation',
        placeholder: '',
        type: 'password'
      }
    },
    passwordStrength: {
      class: 'registration__password-strength password-strength--none',
      text: 'Password Strength:',
      noPassword: 'No Password',
      strengthProgressClass: 'registration__password-strength-progress',
      strengthIndicatorClass: 'registration__password-strength-indicator'
    },
    registrationButton: {
      tag: 'button',
      text: 'Create an Account'
    }
  }
};
