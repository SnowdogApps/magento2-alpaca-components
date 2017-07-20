module.exports = {
  title: 'User\'s Account Information',
  context: {
    wrapper: {
      labelTag: 'h2',
      labelText: 'My account',
      labelIcon: 'arrow-down',
      additionalLabelClass: 'heading heading--fourth-level',
      content: 'account-navigation',
      class: 'dropdown-container--open-wide',
      additionalClass: 'account-nav'
    },
    select: {
      selectId: 'gender',
      options: [
        {
          value: '',
          text: 'Choose option'
        },
        {
          value: '1',
          text: 'Male'
        },
        {
          value: '2',
          text: 'Female'
        },
        {
          value: '3',
          text: 'Not Specified'
        }
      ]
    },
    inputPrefix: {
      class: 'form__field required users-account__field-short',
      inputId: 'prefix',
      label: {
        text: 'Prefix',
      },
      field: {
        placeholder: ''
      }
    },
    inputFirstName: {
      attribute: '',
      class: 'form__field required',
      inputId: 'firstname',
      label: {
        text: 'First Name',
      },
      field: {
        class: 'required-entry',
        placeholder: 'First name'
      }
    },
    inputLastName: {
      attribute: '',
      class: 'form__field required',
      inputId: 'lastname',
      label: {
        text: 'Last Name',
      },
      field: {
        class: 'required-entry',
        placeholder: 'Last name'
      }
    },
    inputVatNumber: {
      class: 'form__field',
      inputId: 'taxvat',
      label: {
        text: 'Tax/VAT number',
      },
      field: {
        placeholder: 'Tax/VAT number'
      }
    },
    inputEmail: {
      class: 'form__field',
      inputId: 'email',
      label: {
        text: 'Email',
      },
      field: {
        placeholder: 'Email'
      }
    },
    inputPasswordConfirmation: {
      class: 'form__field required',
      inputId: 'password-confirmation',
      label: {
        text: 'Confirm New Password',
      },
      field: {
        placeholder: 'Confirm New Password'
      }
    },
    checkboxMail: {
      id: 'change-email',
      label: 'Change Email'
    },
    checkboxPassword: {
      id: 'change-password',
      label: 'Change Password'
    },
    actionToolbar: {
      class: 'users-account__actions'
    }
  }
}
