module.exports = {
  context: {
    form: {
      title: 'Gift Card',
      fields: [
        {
          input: {
            class: 'dashboard-form__input',
            field: {
              placeholder: 'Enter gitf card code'
            }
          }
        }
      ]
    },
    buttons: {
      sides: [
        {
          action: [
            {
              button: true,
              title: 'Reedem Gift Card'
            }
          ]
        },
        {
          action: [
            {
              button: true,
              title: 'Check statuc and balance'
            }
          ]
        }
      ]
    }
  }
}
