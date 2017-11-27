module.exports = {
  context: {
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
      class: '',
      label: {
        attribute: '',
        text: 'First name',
        hidden: true
      },
      field: {
        attribute: '',
        class: '',
        id: 'firstname',
        name: 'fisrtname',
        placeholder: 'First name',
        type: 'text'
      }
    },
    lastName: {
      attribute: '',
      class: '',
      label: {
        attribute: '',
        text: 'Last name',
        hidden: true
      },
      field: {
        attribute: '',
        class: '',
        id: 'lastname',
        name: 'lastname',
        placeholder: 'Last name',
        type: 'text'
      }
    },
    newsletterCheckbox: {
      class: 'registration__newsletter-checkbox',
      id: 'is_subscribed',
      name: 'is_subscribed',
      label: {
        text: 'Sign Up for Newsletter'
      },
      input: {
        class: 'registration__newsletter-checkbox-field'
      }
    },
    email: {
      attribute: '',
      class: '',
      label: {
        attribute: '',
        text: 'Email',
        hidden: true
      },
      field: {
        attribute: '',
        class: '',
        id: 'email',
        name: 'email',
        placeholder: 'Email',
        type: 'email'
      }
    },
    password: {
      attribute: '',
      class: '',
      label: {
        attribute: '',
        text: 'Email',
        hidden: true
      },
      field: {
        attribute: 'aria-required="true" autocomplete="off"',
        class: '',
        id: 'password',
        name: 'password',
        placeholder: 'Password',
        type: 'password'
      }
    },
    passwordConfirmation: {
      attribute: '',
      class: '',
      label: {
        attribute: '',
        text: 'Confirm password',
        hidden: true
      },
      field: {
        attribute: 'aria-required="true" autocomplete="off"',
        class: '',
        id: 'password-confirmation',
        name: 'password-confirmation',
        placeholder: 'Confirm password',
        type: 'password'
      }
    },
    passwordStrength: {
      class: 'registration__password-strength',
      text: 'Password Strength:',
      noPassword: 'No Password',
      strengthProgressClass: 'registration__password-strength-progress'
    }
  }
};
