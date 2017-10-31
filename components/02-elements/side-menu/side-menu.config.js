module.exports = {
  title: 'Side menu',
  context: {
    list: [
      {
        text: 'Furniture',
        class: 'mega-menu__item mega-menu__item--level0 mega-menu__item--parent',
        nestedList: [
          {
            class: 'mega-menu__inner-item mega-menu__inner-item--level2',
            text: 'Lorem ipsum',
            elementLink: '#',
            linkClass: 'mega-menu__link mega-menu__link--inner',
            nestedList: [
              {
                class: 'mega-menu__inner-item mega-menu__inner-item--level2',
                text: 'Lorem ipsum',
                elementLink: '#',
                linkClass: 'mega-menu__link mega-menu__link--inner'
              },
              {
                class: 'mega-menu__inner-item mega-menu__inner-item--level2',
                text: 'Lorem ipsum',
                elementLink: '#',
                linkClass: 'mega-menu__link mega-menu__link--inner'
              }
            ],
          },
          {
            class: 'mega-menu__inner-item mega-menu__inner-item--level2',
            text: 'Lorem ipsum',
            elementLink: '#',
            linkClass: 'mega-menu__link mega-menu__link--inner'
          },
          {
            class: 'mega-menu__inner-item mega-menu__inner-item--level2',
            text: 'Lorem ipsum',
            elementLink: '#',
            linkClass: 'mega-menu__link mega-menu__link--inner'
          },
          {
            class: 'mega-menu__inner-item mega-menu__inner-item--level2',
            text: 'Lorem ipsum',
            elementLink: '#',
            linkClass: 'mega-menu__link mega-menu__link--inner'
          }
        ],
      },
      {
        text: 'Accessories',
        class: 'mega-menu__item mega-menu__item--level0'
      },
      {
        text: 'TBD',
        class: 'mega-menu__item mega-menu__item--level0'
      },
      {
        text: 'Sale',
        class: 'mega-menu__item mega-menu__item--level0'
      },
      {
        text: 'World of',
        class: 'mega-menu__item mega-menu__item--level0'
      }
    ]
  }
}
