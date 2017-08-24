module.exports = {
  context: {
    form: {
      title: 'Subscription option',
      checkboxes: [
        {
          checkbox: {
            id: 'subscription',
            label: 'General Subscription'
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
              title: 'Save'
            }
          ]
        },
        {
          action: [
            {
              title: 'Back'
            }
          ]
        }
      ]
    }
  }
}
