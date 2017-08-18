module.exports = {
  context: {
    title: 'Account Information',
    fields: [
      {
        input: {
          class: 'dashboard-form__input',
          field: {
            placeholder: 'Firist name'
          }
        }
      },
      {
        input: {
          class: 'dashboard-form__input',
          field: {
            placeholder: 'Second name'
          }
        }
      }
    ],
    formTitle: 'Change',
    checkboxes: [
      {
        checkbox: {
          id: 'changeEmail',
          label: 'Change Email'
        }
      },
      {
        checkbox: {
          id: 'changePassword',
          label: 'Change Password'
        }
      }
    ],
    hiddenFields: [
      {
        hiddenField: {
          class: 'dashboard-form__input dashboard-form--hidden email',
          label: {
            text: 'Email',
          }
        }
      },
      {
        hiddenField: {
          class: 'dashboard-form__input dashboard-form--hidden password',
          label: {
            text: 'Current Passwords',
          }
        }
      },
      {
        hiddenField: {
          class: 'dashboard-form__input dashboard-form--hidden newPassword',
          label: {
            text: 'New Password'
          }
        }
      },
      {
        hiddenField: {
          class: 'dashboard-form__input dashboard-form--hidden confirmPassword',
          label: {
            text: 'Confirm New Password'
          }
        }
      }
    ]
  }
}
