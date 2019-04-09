module.exports = {
  preview: '@views',
  context: {
    buttons: {
      class: 'dashboard__actions',
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
              title: 'Go Back'
            }
          ]
        }
      ],
    }
  }
}
