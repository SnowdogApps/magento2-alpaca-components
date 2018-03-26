module.exports = {
  title: 'Mega menu',
  context: {
    list: [
      {
        class: 'mega-menu__item--parent',
        text: 'Furniture',
        link: '/furniture',
        nestedList: [
          {
            class: 'mega-menu__inner-list mega-menu__inner-list--level2',
            linkClass: 'mega-menu__link mega-menu__link--inner-heading',
            heading: 'Example',
            link: '/example',
            list: {
              elements: [
                {
                  class: 'mega-menu__inner-item mega-menu__inner-item--level2',
                  text: 'Lorem ipsum1',
                  link: '/lorem-ipsum',
                  linkClass: 'mega-menu__link mega-menu__link--inner link--invert'
                },
                {
                  class: 'mega-menu__inner-item mega-menu__inner-item--level2',
                  text: 'Lorem ipsum',
                  link: '/lorem-ipsum',
                  linkClass: 'mega-menu__link mega-menu__link--inner link--invert'
                },
                {
                  class: 'mega-menu__inner-item mega-menu__inner-item--level2',
                  text: 'Lorem ipsum',
                  link: '/lorem-ipsum',
                  linkClass: 'mega-menu__link mega-menu__link--inner link--invert'
                },
                {
                  class: 'mega-menu__inner-item mega-menu__inner-item--level2',
                  text: 'Lorem ipsum',
                  link: '/lorem-ipsum',
                  linkClass: 'mega-menu__link mega-menu__link--inner link--invert'
                }
              ]
            }
          },
          {
            class: 'mega-menu__inner-list mega-menu__inner-list--level2',
            linkClass: 'mega-menu__link mega-menu__link--inner-heading',
            heading: 'Example',
            link: '/example',
          }
        ],
        imageTitle: 'Lorem Ipsum',
        secondImageTitle: 'lorem ipsum'
      },
      {
        text: 'Accessories',
        link: '/accessories'
      },
      {
        text: 'World of',
        link: '/world-of'
      }
    ]
  }
}
