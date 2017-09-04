module.exports = {
  context: {
    title: 'Account Information',
    fields: [
      {
        input: {
          class: 'dashboard-form__divider',
          field: {
            placeholder: 'Firist name'
          }
        }
      },
      {
        input: {
          class: 'dashboard-form__divider',
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
          class: 'dashboard-form__divider',
          id: 'changeEmail',
          label: 'Change Email'
        }
      },
      {
        checkbox: {
          class: 'dashboard-form__divider',
          id: 'changePassword',
          label: 'Change Password'
        }
      }
    ],
    hiddenFields: [
      {
        hiddenField: {
          class: 'dashboard-form__divider dashboard-form--hidden email',
          label: {
            text: 'Email',
          }
        }
      },
      {
        hiddenField: {
          class: 'dashboard-form__divider dashboard-form--hidden password',
          label: {
            text: 'Current Passwords',
          }
        }
      },
      {
        hiddenField: {
          class: 'dashboard-form__divider dashboard-form--hidden newPassword',
          label: {
            text: 'New Password'
          }
        }
      },
      {
        hiddenField: {
          class: 'dashboard-form__divider dashboard-form--hidden confirmPassword',
          label: {
            text: 'Confirm New Password'
          }
        }
      }
    ]
  }
}
