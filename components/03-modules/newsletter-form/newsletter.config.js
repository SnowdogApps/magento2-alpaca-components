module.exports = {
  collated: true,
  status: 'wip',
  context: {
    heading: {
      text: 'Newsletter'
    },
    input: {
      field: {
        placeholder: 'This is placeholder'
      }
    },
    button: {
      tag: 'button',
      text: 'Zarejestruj sie'
    }
  },
  variants: [
    {
      name: 'Short name button',
      context: {
        button: {
          text: 'Submit'
        }
      }
    },
    {
      name: 'Long version',
      context: {
        button: {
          text: 'Add my email to newsletter'
        }
      }
    },
    {
      name: 'Polish version',
      context: {
        button: {
          text: 'Zarejestruj się'
        }
      }
    },
  ]
};

