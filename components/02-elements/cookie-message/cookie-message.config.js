module.exports = {
  title: 'Message',
  context: {
    linkAnchor: 'Action\'s details',
    closeIcon: 'close',
    text: 'Some action / promotion text',
    class: 'cookie-message--top'
  },
  variants: [
    {
      name: 'With button',
      context: {
        linkAnchor: 'Details',
        closeIcon:  true,
        closeLabel: 'Close  X',
        text: 'This site uses cookies. Find out more about their purpose and settings in your browser. By browsing the site you are agreeing to use cookies according to your browser settings.',
        class: 'cookie-message--with-button'
      }
    }
  ]
};
