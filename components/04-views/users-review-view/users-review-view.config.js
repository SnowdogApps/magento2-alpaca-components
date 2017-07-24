module.exports = {
  context: {
    wrapper: {
      labelTag: 'h2',
      labelText: 'My account',
      labelIcon: 'arrow-down',
      additionalLabelClass: 'heading heading--fourth-level',
      content: 'account-navigation',
      contentContext: {
        navItems: [
          {
            item: 'Account dashboard'
          },
          {
            item: 'Account information'
          },
          {
            item: 'Address book'
          },
          {
            item: 'My orders'
          },
          {
            item: 'Newsletter Subscriptions'
          },
          {
            item: 'My Product Reviews',
            current: 'current'
          },
          {
            item: 'My Wish List'
          }
        ]
      },
      class: 'dropdown-container--open-wide',
      additionalClass: 'account-nav'
    },
    productImage: {
      src: '/images/product/product-img-285_285.png',
      additionalClasses: 'product__img'
    },
    ratingTitle1: 'Rating',
    actionToolbarReview: {
      class: '',
      buttons: [
        {
          tag: 'a',
          class: 'actions-toolbar__button',
          attributes: 'href="#"',
          text: '3 Reviews'
        },
        {
          tag: 'button',
          class: 'actions-toolbar__button-primary',
          attributes: '',
          text: 'Add Your Review'
        }
      ]
    },
    actionToolbarBottom: {
      class: 'actions-toolbar--secondary',
      buttons: [
        {
          tag: 'a',
          class: 'actions-toolbar__button',
          attributes: 'href="#"',
          text: 'Back to My Reviews'
        }
      ]
    }
  }
}
