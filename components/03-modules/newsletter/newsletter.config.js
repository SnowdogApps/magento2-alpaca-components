module.exports = {
  collated: true,
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
      name: 'short name',
      context: {
        button: {
          text: 'Submit'
        }
      }
    },
    {
      name: 'logn name',
      context: {
        button: {
          text: 'Add my email to newsletter'
        }
      }
    },
    {
      name: 'pl version',
      context: {
        button: {
          text: 'Zarejestruj się'
        }
      }
    }
  ]
};

