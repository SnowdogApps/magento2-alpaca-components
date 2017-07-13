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
    }
  }
}
