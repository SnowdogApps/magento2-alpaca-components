module.exports = {
  context: {
    results: {
      text: 'Results for your request:',
      typed: 'Ni'
    },
    close: {
      tag: 'button',
      class: 'button--icon quicksearch__close-button',
      iconId: 'close',
      iconClass: 'button__icon quicksearch__close-icon',
      attributes: 'type="button" aria-label="Close quicksearch"',
    },
    product: [
      {
        image: {
          class: 'quicksearch__product-image',
          dataSrc: '/images/catalog-grid-item/product-1_320_312.jpg'
        },
        name: {
          class: 'quicksearch__product-name',
          tag: 'h3',
          text: 'Lorem Ipsum is simply dummy...'
        }
      },
      {
        image: {
          class: 'quicksearch__product-image',
          dataSrc: '/images/catalog-grid-item/product-1_320_312.jpg'
        },
        name: {
          class: 'quicksearch__product-name',
          tag: 'h3',
          text: 'Lorem Ipsum is simply dummy...'
        }
      },
      {
        image: {
          class: 'quicksearch__product-image',
          dataSrc: '/images/catalog-grid-item/product-1_320_312.jpg'
        },
        name: {
          class: 'quicksearch__product-name',
          tag: 'h3',
          text: 'Lorem Ipsum is simply dummy...'
        }
      },
      {
        image: {
          class: 'quicksearch__product-image',
          dataSrc: '/images/catalog-grid-item/product-1_320_312.jpg'
        },
        name: {
          class: 'quicksearch__product-name',
          tag: 'h3',
          text: 'Lorem Ipsum is simply dummy...'
        }
      }
    ],
    category: [
      {
        name: {
          class: 'quicksearch__category-name',
          tag: 'h3',
          text: 'Category name'
        },
        items: '598 item(s)'
      },
      {
        name: {
          class: 'quicksearch__category-name',
          tag: 'h3',
          text: 'Category name'
        },
        items: '598 item(s)'
      },
      {
        name: {
          class: 'quicksearch__category-name',
          tag: 'h3',
          text: 'Category name'
        },
        items: '598 item(s)'
      },
      {
        name: {
          class: 'quicksearch__category-name',
          tag: 'h3',
          text: 'Category name'
        },
        items: '598 item(s)'
      }
    ],
    more: 'See All'
  }
}
