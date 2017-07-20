module.exports = {
  context: {
    buttons: [
      {
        tag: 'a',
        class: 'users-account__button',
        attributes: 'href="#"',
        text: 'Go back'
      },
      {
        tag: 'button',
        class: 'users-account__button-primary',
        attributes: 'type="button"',
        text: 'Save'
      }
    ]

  },
  variants: [
    {
      name: 'pager',
      context: {
        amountCounter: {
          class: 'actions-toolbar__item'
        },
        limiter: {
          class: 'actions-toolbar__item'
        },
        pager: {
          class: 'actions-toolbar__item'
        }
      }
    },
    {
      name: 'more-buttons',
      context: {
        class: 'actions-toolbar--more-btns',
        buttons: [
          {
            tag: 'a',
            class: 'users-account__button',
            attributes: 'href="#"',
            text: 'Go back'
          },
          {
            tag: 'a',
            class: 'users-account__button',
            attributes: 'href="#"',
            text: 'Add to cart'
          },
          {
            tag: 'a',
            class: 'users-account__button',
            attributes: 'href="#"',
            text: 'Share'
          },
          {
            tag: 'a',
            class: 'users-account__button',
            attributes: 'href="#"',
            text: 'Update'
          }
        ]
      }
    }
  ]
}
