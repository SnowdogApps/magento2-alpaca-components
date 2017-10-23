module.exports = {
  context: {
    class: '',
    attributes: '',
    titleClass: '',
    title: 'Choose your size',
    options: [
      {
        class: '',
        attributes: '',
        text: 'XS'
      },
      {
        class: 'swatch__option--active',
        attributes: '',
        text: 'S'
      },
      {
        class: '',
        attributes: '',
        text: 'M'
      },
      {
        class: '',
        attributes: '',
        text: 'L'
      },
      {
        class: '',
        attributes: '',
        text: 'XL'
      }
    ]
  },
  variants: [
    {
      name: 'color',
      context: {
        class: '',
        title: 'Choose color',
        options: [
          {
            class: 'swatch__option--color',
            attributes: 'style="background: #000"',
            text: ''
          },
          {
            class: 'swatch__option--color',
            attributes: 'style="background: #fff"',
            text: ''
          },
          {
            class: 'swatch__option--color swatch__option--active',
            attributes: 'style="background: #5cb85c"',
            text: ''
          },
          {
            class: 'swatch__option--color',
            attributes: 'style="background: #0275d8"',
            text: ''
          }
        ]
      }
    }
  ]
}
