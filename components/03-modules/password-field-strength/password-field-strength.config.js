module.exports = {
  collated: true,
  context: {
    strengthClass: 'password-strength-meter-1',
    strengthInfo: 'Weak'
  },
  variants: [
    {
      name: 'info',
      context: {
        strengthClass: 'password-strength-meter-2',
        strengthInfo: 'Strong'
      }
    },
    {
      name: 'success',
      context: {
        strengthClass: 'password-strength-meter-4',
        strengthInfo: 'Very Strong'
      }
    },
    {
      name: 'no-password',
      context: {
        strengthClass: 'password-strength-meter',
        strengthInfo: 'No password'
      }
    }
  ]
}
