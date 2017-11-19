module.exports = {
  context: {
    breadcrumbs: {
      class: 'product-view__breadcrumbs',
      categories: [
        {
          name: 'Home',
          href: '#',
          ariaLabel: 'Breadcrumb Home'
        },
        {
          name: 'Women',
          href: '#',
          ariaLabel: 'Breadcrumb Women'
        },
        {
          name: 'Tops',
          href: '#',
          ariaLabel: 'Breadcrumb Tops'
        },
        {
          name: 'Jackets',
          href: '#',
          ariaLabel: 'Breadcrumb Jackets'
        },
      ]
    },
    title: 'Ingrid Running Jacket with Long Sleaves',
    sku: {
      label: 'SKU',
      value: 'WSH09'
    },
    price: '$ 200.00',
    rating: {
      class: '',
      href: '#',
      value: '34',
      parenthesis: true
    },
    addReview: {
      text: 'Add Your Review',
      href: '#',
      class: ''
    },
    stock: {
      html: 'In stock - only 5 left',
      outOfStock: false,
      alert: true
    },
    description: 'Limestone is currently on backorder - this item is available to ship on December 24th. <br/> Palladium is currently on backorder - this item is available to ship on January 3rd.',
    attributesTitle: 'For interion and exterior use.',
    button: {
      tag: 'button',
      class: 'product-view__add-to-cart-btn',
      attributes: 'type="button"',
      text: 'Add to Cart'
    },
    options: [
      {
        class: '',
        attributes: '',
        titleClass: '',
        heading: {
          tag: 'h2',
          title: 'Size'
        },
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
      {
        class: '',
        attributes: '',
        titleClass: '',
        heading: {
          tag: 'h2',
          title: 'Color'
        },
        options: [
          {
            class: 'swatch__option--attributes',
            attributes: 'style="background: url(../../images/swatch/swatch-orange.jpg); background-size: cover; background-position: center center;"'
          },
          {
            class: 'swatch__option--attributes',
            attributes: 'style="background: url(../../images/swatch/swatch-green.jpg); background-size: cover; background-position: center center;"'
          },
          {
            class: 'swatch__option--attributes swatch__option--active',
            attributes: 'style="background: url(../../images/swatch/swatch-red.jpg); background-size: cover; background-position: center center;"'
          },
          {
            class: 'swatch__option--attributes',
            attributes: 'style="background: url(../../images/swatch/swatch-white.jpg); background-size: cover; background-position: center center;"'
          }
        ]
      }
    ],
    listIcon: {
      listTag: 'ul',
      elementTag: 'li',
      class: 'list--with-icon list--horizontal product-view__list',
      elements: [
        {
          iconClass: 'product-view__icon',
          icon: 'facebook'
        },
        {
          iconClass: 'product-view__icon',
          icon: 'pinterest'
        },
        {
          iconClass: 'product-view__icon',
          icon: 'instagram'
        },
        {
          iconClass: 'product-view__icon',
          icon: 'mail'
        }
      ]
    },
    extraActions: [
      {
        icon: {
          iconId: 'heart',
          title: 'Add to wishlist',
          svgClass: 'product-view__action-icon'
        },
        tag: 'button'
      },
      {
        icon: {
          iconId: 'compare',
          title: 'Add to compare',
          svgClass: 'product-view__action-icon'
        },
        tag: 'button'
      },
      {
        icon: {
          iconId: 'envelope',
          title: 'Send email to a friend'
        },
        tag: 'a',
        attributes: 'href="#"'
      }
    ],
    tab: {
      class: 'product-view__tab',
      tabs: [
        {
          tabId: 'tab-1',
          title: 'Details',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra ut magna ornare lacinia. Cras sodales elit ac pellentesque aliquet. Nulla nec viverra turpis. Mauris eget quam interdum, viverra enim eget, ultricies purus. Suspendisse eleifend, turpis id pretium consectetur, massa nunc suscipit elit, a porta neque neque sed ex. Curabitur nec ante non urna rhoncus semper. Maecenas id pulvinar erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis sit amet quam id vestibulum. Nunc faucibus quam non venenatis laoreet. Pellentesque eu feugiat tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
          class: 'tab__title--active',
          contentClass: 'tab__content--active',
          table: {
            class: 'product-view__table',
            mainTags: [
              {
                mainTag: 'tbody',
                rowTags: [
                  {
                    rowTag: 'tr',
                    childTags: [
                      {
                        childTag: 'td',
                        content: 'SKU'
                      },
                      {
                        childTag: 'td',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                      }
                    ]
                  },
                  {
                    rowTag: 'tr',
                    childTags: [
                      {
                        childTag: 'td',
                        content: 'LENGTH'
                      },
                      {
                        childTag: 'td',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                      }
                    ]
                  },
                  {
                    rowTag: 'tr',
                    childTags: [
                      {
                        childTag: 'td',
                        content: 'WIDTH'
                      },
                      {
                        childTag: 'td',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                      }
                    ]
                  },
                  {
                    rowTag: 'tr',
                    childTags: [
                      {
                        childTag: 'td',
                        content: 'HEIGTH'
                      },
                      {
                        childTag: 'td',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                      }
                    ]
                  }
                ]
              }
            ]
          }
        },
        {
          tabId: 'tab-2',
          title: 'More information',
          content: 'Etiam orci ex, tristique at tempor quis, bibendum vel diam. Nullam vel mollis leo. Etiam facilisis mattis tortor, a ullamcorper nulla congue sed. Morbi non odio neque. In ut leo a elit consectetur fermentum aliquet non eros. In elementum vitae nulla sed semper. Nulla lacinia fermentum quam eu scelerisque. Sed et bibendum augue. Etiam sagittis enim eu ex aliquet ornare. Donec congue facilisis neque.'
        },
        {
          tabId: 'tab-3',
          title: 'Reviews (34)',
          content: 'Pellentesque velit nisl, posuere ac erat nec, iaculis auctor magna. Donec ut elementum mauris. Sed in scelerisque lorem. Cras pretium laoreet vestibulum. In dui mauris, sagittis vitae rhoncus quis, ornare in enim. Vivamus pellentesque ligula sed quam sollicitudin lobortis. Etiam interdum euismod nisi a interdum. Nunc turpis urna, pharetra nec nunc sit amet, consequat porta orci. Suspendisse sit amet dignissim lacus. Quisque vel est pretium, aliquam lacus id, lobortis neque. Nullam non neque mi. Vivamus quis pulvinar mi, in elementum nulla. Etiam neque diam, suscipit vitae luctus et, sollicitudin in turpis. Proin vitae cursus augue, sit amet vestibulum mi. Mauris feugiat justo eget purus fringilla aliquam vitae a massa.'
        }
      ]
    },
    relatedProducts: {
      heading: 'Related products',
      slider: {
        class: 'product-view__slider',
        iconPrev: 'arrow-left',
        iconNext: 'arrow-right',
        iconClass: 'slider__icon',
        products: [
          {
            product: {
              image: {
                src: '/images/produkt-image.png'
              },
              class: 'slider__item',
              tag: 'div',
              name: 'Some product name',
              price: '$ 200.00'
            }
          },
          {
            product: {
              image: {
                src: '/images/produkt-image.png'
              },
              class: 'slider__item',
              tag: 'div',
              name: 'Some product name',
              price: '$ 200.00'
            }
          },
          {
            product: {
              image: {
                src: '/images/produkt-image.png'
              },
              class: 'slider__item',
              tag: 'div',
              name: 'Some product name',
              price: '$ 200.00'
            }
          },
          {
            product: {
              image: {
                src: '/images/produkt-image.png'
              },
              class: 'slider__item',
              tag: 'div',
              name: 'Some product name',
              price: '$ 200.00'
            }
          },
          {
            product: {
              image: {
                src: '/images/produkt-image.png'
              },
              class: 'slider__item',
              tag: 'div',
              name: 'Some product name',
              price: '$ 200.00'
            }
          }
        ]
      }
    },
    upsellProducts: {
      heading: 'You may also like',
      slider: {
        class: 'product-view__slider',
        iconPrev: 'arrow-left',
        iconNext: 'arrow-right',
        iconClass: 'slider__icon',
        products: [
          {
            product: {
              image: {
                src: '/images/produkt-image.png'
              },
              class: 'slider__item',
              tag: 'div',
              name: 'Some product name',
              price: '$ 200.00'
            }
          },
          {
            product: {
              image: {
                src: '/images/produkt-image.png'
              },
              class: 'slider__item',
              tag: 'div',
              name: 'Some product name',
              price: '$ 200.00'
            }
          },
          {
            product: {
              image: {
                src: '/images/produkt-image.png'
              },
              class: 'slider__item',
              tag: 'div',
              name: 'Some product name',
              price: '$ 200.00'
            }
          },
          {
            product: {
              image: {
                src: '/images/produkt-image.png'
              },
              class: 'slider__item',
              tag: 'div',
              name: 'Some product name',
              price: '$ 200.00'
            }
          },
          {
            product: {
              image: {
                src: '/images/produkt-image.png'
              },
              class: 'slider__item',
              tag: 'div',
              name: 'Some product name',
              price: '$ 200.00'
            }
          }
        ]
      }
    },
  }
};
