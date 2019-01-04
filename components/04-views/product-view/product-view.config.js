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
    price: {
      content: 'price--with-special-price'
    },
    stock: {
      html: 'In stock - only 5 left',
      outOfStock: false,
      alert: true
    },
    description: 'Limestone is currently on backorder - this item is available to ship on December 24th. <br/> Palladium is currently on backorder - this item is available to ship on January 3rd.',
    attributesTitle: 'For interion and exterior use.',
    qty: {
      label: {
        text: 'Quantity',
        class: 'product-view__swatch-option-title'
      },
      field: {
        input: {
          id: 'qty',
          min: '1',
          defaultValue: '1',
          ariaLabel: 'Change the quantity'
        },
        minusQtyButton: {
          tag: 'button',
          class: 'button--icon quantity-update__button quantity-update__button--minus quantity-update__button--disabled',
          attributes: 'type="button" aria-label="Decrease the quantity"',
          iconClass: 'button__icon quantity-update__icon',
          iconId: 'minus',
          iconTitle: 'Minus mark'
        },
        plusQtyButton: {
          tag: 'button',
          class: 'button--icon quantity-update__button quantity-update__button--plus',
          attributes: 'type="button" aria-label="Increase the quantity"',
          iconClass: 'button__icon quantity-update__icon',
          iconId: 'plus',
          iconTitle: 'Plus mark',
        }
      },
    },
    button: {
      tag: 'button',
      class: 'product-view__add-to-cart-btn',
      attributes: 'type="button"',
      text: 'Add to Cart'
    },
    swatch: {
      size: {
        heading: {
          class: 'product-view__swatch-option-title',
          text: 'Size'
        }
      },
      color: {
        heading: {
          class: 'product-view__swatch-option-title',
          text: 'Color'
        }
      }
    },
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
        class: 'product-view__action--wishlist',
        icon: {
          iconId: 'heart',
          iconTitle: 'Heart',
          title: 'Add to wishlist',
          svgClass: 'product-view__action-icon'
        },
        tag: 'button'
      },
      {
        class: 'product-view__action--compare',
        icon: {
          iconId: 'compare',
          iconTitle: 'Compare',
          title: 'Add to compare',
          svgClass: 'product-view__action-icon'
        },
        tag: 'button'
      },
      {
        class: 'product-view__action--emailfriend',
        icon: {
          class: 'product-view__icon-envelope',
          iconId: 'envelope',
          iconTitle: 'Envelope',
          title: 'Send email to a friend',
          svgClass: 'product-view__action-icon product-view__icon-envelope'
        },
        tag: 'a',
        attributes: 'href="#"'
      }
    ],
    tab: {
      script: true,
      class: 'product-view__tab',
      icon: {
        class: 'tab__icon',
        iconId: 'angle-down',
        iconTitle: 'Arrow down'
      },
      tabs: [
        {
          active: true,
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
          contentElement: 'product-review'
        }
      ]
    },
    relatedProducts: {
      heading: 'Related products',
      slider: {
        class: 'product-view__slider-container',
        attributes: 'data-rewind="true" data-enable-mouse-events="true" data-slides-to-scroll="1"',
        iconPrev: {
          tag: 'button',
          text: '',
          class: 'button--icon slider__navigation-icon slider__prev',
          iconId: 'angle-left',
          iconTitle: 'Arrow left',
          iconClass: 'button__icon slider__icon',
          attributes: 'type="button" aria-label="Previous slide"'
        },
        iconNext: {
          tag: 'button',
          text: '',
          class: 'button--icon slider__navigation-icon slider__next',
          iconId: 'angle-right',
          iconTitle: 'Arrow right',
          iconClass: 'button__icon slider__icon',
          attributes: 'type="button" aria-label="Next slide"'
        },
        navigationClass: 'product-view__slider-navigation',
        slides: [
          {
            itemClass: 'product-view__slide-item',
            content: 'catalog-grid-item',
            contentContext: {
              class: 'product-view__grid-item',
              tag: 'div',
              image: {
                class: 'catalog-grid-item__image',
                dataSrc: '/images/product-view/slider-image.jpg'
              },
              name: 'Some product name',
              price: {
                name: 'price',
                context: {
                  regularPrice: '1 400',
                  specialPrice: '',
                  prefix: {
                    tag: '',
                    text: '$'
                  },
                  suffix: {
                    tag: '',
                    text: ''
                  }
                }
              },
              primaryAction: {
                tag: 'button',
                text: 'Add to Cart',
                class: 'button catalog-grid-item__primary-action',
              },
              secondaryActions: {
                wishlist: {
                  iconId: 'heart',
                  iconTitle: 'Heart'
                },
                compare: {
                  iconId: 'compare',
                  iconTitle: 'Compare'
                }
              },
              swatches: [
                {
                  name: 'swatch',
                  context: {
                    class: 'swatch--small swatch--image',
                    options: [
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-orange.jpg);"'
                      },
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-green.jpg);"'
                      },
                      {
                        class: 'swatch__option--active',
                        attributes: 'style="background-image: url(../../images/swatch/swatch-red.jpg);"'
                      },
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-white.jpg);"'
                      }
                    ]
                  }
                },
                {
                  name: 'swatch',
                  context: {
                    class: 'swatch--small',
                    attributes: '',
                    titleClass: '',
                    options: [
                      {
                        text: 'XS'
                      },
                      {
                        class: 'swatch__option--active',
                        text: 'S'
                      },
                      {
                        text: 'M'
                      },
                      {
                        text: 'L'
                      },
                      {
                        text: 'XL'
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            itemClass: 'product-view__slide-item',
            content: 'catalog-grid-item',
            contentContext: {
              class: 'product-view__grid-item',
              tag: 'div',
              badge: {
                name: 'badge--new',
                context: {
                  class: 'badge catalog-grid-item__badge',
                  text: 'NEW'
                }
              },
              image: {
                class: 'catalog-grid-item__image',
                dataSrc: '/images/product-view/slider-image.jpg'
              },
              name: 'Some product name - very long name because that\'s important and maybe SKU ?',
              price: {
                name: 'price',
                context: {
                  regularPrice: '1 400',
                  specialPrice: '',
                  prefix: {
                    tag: '',
                    text: '$'
                  },
                  suffix: {
                    tag: '',
                    text: ''
                  }
                }
              },
              primaryAction: {
                tag: 'button',
                text: 'Add to Cart',
                class: 'button catalog-grid-item__primary-action'
              },
              secondaryActions: {
                wishlist: {
                  iconId: 'heart',
                  iconTitle: 'Heart'
                },
                compare: {
                  iconId: 'compare',
                  iconTitle: 'Compare'
                }
              },
              swatches: [
                {
                  name: 'swatch',
                  context: {
                    class: 'swatch--small swatch--image',
                    options: [
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-orange.jpg);"'
                      },
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-green.jpg);"'
                      },
                      {
                        class: 'swatch__option--active',
                        attributes: 'style="background-image: url(../../images/swatch/swatch-red.jpg);"'
                      },
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-white.jpg);"'
                      }
                    ]
                  }
                },
                {
                  name: 'swatch',
                  context: {
                    class: 'swatch--small',
                    attributes: '',
                    titleClass: '',
                    options: [
                      {
                        text: 'XS'
                      },
                      {
                        class: 'swatch__option--active',
                        text: 'S'
                      },
                      {
                        text: 'M'
                      },
                      {
                        text: 'L'
                      },
                      {
                        text: 'XL'
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            itemClass: 'product-view__slide-item',
            content: 'catalog-grid-item',
            contentContext: {
              class: 'product-view__grid-item',
              tag: 'div',
              image: {
                class: 'catalog-grid-item__image',
                dataSrc: '/images/product-view/slider-image.jpg'
              },
              name: 'Some product name',
              price: {
                name: 'price',
                context: {
                  regularPrice: '1 400',
                  specialPrice: '',
                  prefix: {
                    tag: '',
                    text: '$'
                  },
                  suffix: {
                    tag: '',
                    text: ''
                  }
                }
              },
              primaryAction: {
                tag: 'button',
                text: 'Add to Cart',
                class: 'button catalog-grid-item__primary-action'
              },
              secondaryActions: {
                wishlist: {
                  iconId: 'heart',
                  iconTitle: 'Heart'
                },
                compare: {
                  iconId: 'compare',
                  iconTitle: 'Compare'
                }
              },
              swatches: [
                {
                  name: 'swatch',
                  context: {
                    class: 'swatch--small swatch--image',
                    options: [
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-orange.jpg);"'
                      },
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-green.jpg);"'
                      },
                      {
                        class: 'swatch__option--active',
                        attributes: 'style="background-image: url(../../images/swatch/swatch-red.jpg);"'
                      },
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-white.jpg);"'
                      }
                    ]
                  }
                },
                {
                  name: 'swatch',
                  context: {
                    class: 'swatch--small',
                    attributes: '',
                    titleClass: '',
                    options: [
                      {
                        text: 'XS'
                      },
                      {
                        class: 'swatch__option--active',
                        text: 'S'
                      },
                      {
                        text: 'M'
                      },
                      {
                        text: 'L'
                      },
                      {
                        text: 'XL'
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            itemClass: 'product-view__slide-item',
            content: 'catalog-grid-item',
            contentContext: {
              class: 'product-view__grid-item',
              tag: 'div',
              image: {
                class: 'catalog-grid-item__image',
                dataSrc: '/images/product-view/slider-image.jpg'
              },
              name: 'Some product name',
              price: {
                name: 'price',
                context: {
                  regularPrice: '1 400',
                  specialPrice: '',
                  prefix: {
                    tag: '',
                    text: '$'
                  },
                  suffix: {
                    tag: '',
                    text: ''
                  }
                }
              },
              primaryAction: {
                tag: 'button',
                text: 'Add to Cart',
                class: 'button catalog-grid-item__primary-action'
              },
              secondaryActions: {
                wishlist: {
                  iconId: 'heart',
                  iconTitle: 'Heart'
                },
                compare: {
                  iconId: 'compare',
                  iconTitle: 'Compare'
                }
              },
              swatches: [
                {
                  name: 'swatch',
                  context: {
                    class: 'swatch--small swatch--image',
                    options: [
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-orange.jpg);"'
                      },
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-green.jpg);"'
                      },
                      {
                        class: 'swatch__option--active',
                        attributes: 'style="background-image: url(../../images/swatch/swatch-red.jpg);"'
                      },
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-white.jpg);"'
                      }
                    ]
                  }
                },
                {
                  name: 'swatch',
                  context: {
                    class: 'swatch--small',
                    attributes: '',
                    titleClass: '',
                    options: [
                      {
                        text: 'XS'
                      },
                      {
                        class: 'swatch__option--active',
                        text: 'S'
                      },
                      {
                        text: 'M'
                      },
                      {
                        text: 'L'
                      },
                      {
                        text: 'XL'
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            itemClass: 'product-view__slide-item',
            content: 'catalog-grid-item',
            contentContext: {
              class: 'product-view__grid-item',
              tag: 'div',
              image: {
                class: 'catalog-grid-item__image',
                dataSrc: '/images/product-view/slider-image.jpg'
              },
              name: 'Some product name',
              price: {
                name: 'price',
                context: {
                  regularPrice: '1 400',
                  specialPrice: '',
                  prefix: {
                    tag: '',
                    text: '$'
                  },
                  suffix: {
                    tag: '',
                    text: ''
                  }
                }
              },
              primaryAction: {
                tag: 'button',
                text: 'Add to Cart',
                class: 'button catalog-grid-item__primary-action'
              },
              secondaryActions: {
                wishlist: {
                  iconId: 'heart',
                  iconTitle: 'Heart'
                },
                compare: {
                  iconId: 'compare',
                  iconTitle: 'Compare'
                }
              },
              swatches: [
                {
                  name: 'swatch',
                  context: {
                    class: 'swatch--small swatch--image',
                    options: [
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-orange.jpg);"'
                      },
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-green.jpg);"'
                      },
                      {
                        class: 'swatch__option--active',
                        attributes: 'style="background-image: url(../../images/swatch/swatch-red.jpg);"'
                      },
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-white.jpg);"'
                      }
                    ]
                  }
                },
                {
                  name: 'swatch',
                  context: {
                    class: 'swatch--small',
                    attributes: '',
                    titleClass: '',
                    options: [
                      {
                        text: 'XS'
                      },
                      {
                        class: 'swatch__option--active',
                        text: 'S'
                      },
                      {
                        text: 'M'
                      },
                      {
                        text: 'L'
                      },
                      {
                        text: 'XL'
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            itemClass: 'product-view__slide-item',
            content: 'catalog-grid-item',
            contentContext: {
              class: 'product-view__grid-item',
              tag: 'div',
              image: {
                class: 'catalog-grid-item__image',
                dataSrc: '/images/product-view/slider-image.jpg'
              },
              name: 'Some product name',
              price: {
                name: 'price',
                context: {
                  regularPrice: '1 400',
                  specialPrice: '',
                  prefix: {
                    tag: '',
                    text: '$'
                  },
                  suffix: {
                    tag: '',
                    text: ''
                  }
                }
              },
              primaryAction: {
                tag: 'button',
                text: 'Add to Cart',
                class: 'button catalog-grid-item__primary-action'
              },
              secondaryActions: {
                wishlist: {
                  iconId: 'heart',
                  iconTitle: 'Heart'
                },
                compare: {
                  iconId: 'compare',
                  iconTitle: 'Compare'
                }
              },
              swatches: [
                {
                  name: 'swatch',
                  context: {
                    class: 'swatch--small swatch--image',
                    options: [
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-orange.jpg);"'
                      },
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-green.jpg);"'
                      },
                      {
                        class: 'swatch__option--active',
                        attributes: 'style="background-image: url(../../images/swatch/swatch-red.jpg);"'
                      },
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-white.jpg);"'
                      }
                    ]
                  }
                },
                {
                  name: 'swatch',
                  context: {
                    class: 'swatch--small',
                    attributes: '',
                    titleClass: '',
                    options: [
                      {
                        text: 'XS'
                      },
                      {
                        class: 'swatch__option--active',
                        text: 'S'
                      },
                      {
                        text: 'M'
                      },
                      {
                        text: 'L'
                      },
                      {
                        text: 'XL'
                      }
                    ]
                  }
                }
              ]
            }
          },
        ]
      },
    },
    upsellProducts: {
      heading: 'You may also like',
      slider: {
        script: true,
        class: 'product-view__slider-container',
        attributes: 'data-rewind="true" data-enable-mouse-events="true" data-slides-to-scroll="1"',
        iconPrev: {
          tag: 'button',
          text: '',
          class: 'button--icon slider__navigation-icon slider__prev',
          iconId: 'angle-left',
          iconTitle: 'Arrow left',
          iconClass: 'button__icon slider__icon',
          attributes: 'type="button" aria-label="Previous slide"'
        },
        iconNext: {
          tag: 'button',
          text: '',
          class: 'button--icon slider__navigation-icon slider__next',
          iconId: 'angle-right',
          iconTitle: 'Arrow right',
          iconClass: 'button__icon slider__icon',
          attributes: 'type="button" aria-label="Next slide"'
        },
        navigationClass: 'product-view__slider-navigation',
        slides: [
          {
            itemClass: 'product-view__slide-item',
            content: 'catalog-grid-item',
            contentContext: {
              class: 'product-view__grid-item',
              tag: 'div',
              image: {
                class: 'catalog-grid-item__image',
                dataSrc: '/images/product-view/slider-image.jpg'
              },
              name: 'Some product name',
              price: {
                name: 'price',
                context: {
                  regularPrice: '1 400',
                  specialPrice: '',
                  prefix: {
                    tag: '',
                    text: '$'
                  },
                  suffix: {
                    tag: '',
                    text: ''
                  }
                }
              },
              primaryAction: {
                tag: 'button',
                text: 'Add to Cart',
                class: 'button catalog-grid-item__primary-action'
              },
              secondaryActions: {
                wishlist: {
                  iconId: 'heart',
                  iconTitle: 'Heart'
                },
                compare: {
                  iconId: 'compare',
                  iconTitle: 'Compare'
                }
              },
              swatches: [
                {
                  name: 'swatch',
                  context: {
                    class: 'swatch--small swatch--image',
                    options: [
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-orange.jpg);"',
                      },
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-green.jpg);"'
                      },
                      {
                        class: 'swatch__option--active',
                        attributes: 'style="background-image: url(../../images/swatch/swatch-red.jpg);"'
                      },
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-white.jpg);"'
                      }
                    ]
                  }
                },
                {
                  name: 'swatch',
                  context: {
                    class: 'swatch--small',
                    attributes: '',
                    titleClass: '',
                    options: [
                      {
                        text: 'XS'
                      },
                      {
                        class: 'swatch__option--active',
                        text: 'S'
                      },
                      {
                        text: 'M'
                      },
                      {
                        text: 'L'
                      },
                      {
                        text: 'XL'
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            itemClass: 'product-view__slide-item',
            content: 'catalog-grid-item',
            contentContext: {
              class: 'product-view__grid-item',
              tag: 'div',
              badge: {
                name: 'badge--new',
                context: {
                  class: 'badge catalog-grid-item__badge',
                  text: 'NEW'
                }
              },
              image: {
                class: 'catalog-grid-item__image',
                dataSrc: '/images/product-view/slider-image.jpg'
              },
              name: 'Some product name - very long name because that\'s important and maybe SKU ?',
              price: {
                name: 'price',
                context: {
                  regularPrice: '1 400',
                  specialPrice: '',
                  prefix: {
                    tag: '',
                    text: '$'
                  },
                  suffix: {
                    tag: '',
                    text: ''
                  }
                }
              },
              primaryAction: {
                tag: 'button',
                text: 'Add to Cart',
                class: 'button catalog-grid-item__primary-action'
              },
              secondaryActions: {
                wishlist: {
                  iconId: 'heart',
                  iconTitle: 'Heart'
                },
                compare: {
                  iconId: 'compare',
                  iconTitle: 'Compare'
                }
              },
              swatches: [
                {
                  name: 'swatch',
                  context: {
                    class: 'swatch--small swatch--image',
                    options: [
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-orange.jpg);"'
                      },
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-green.jpg);"'
                      },
                      {
                        class: 'swatch__option--active',
                        attributes: 'style="background-image: url(../../images/swatch/swatch-red.jpg);"'
                      },
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-white.jpg);"'
                      }
                    ]
                  }
                },
                {
                  name: 'swatch',
                  context: {
                    class: 'swatch--small',
                    attributes: '',
                    titleClass: '',
                    options: [
                      {
                        text: 'XS'
                      },
                      {
                        class: 'swatch__option--active',
                        text: 'S'
                      },
                      {
                        text: 'M'
                      },
                      {
                        text: 'L'
                      },
                      {
                        text: 'XL'
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            itemClass: 'product-view__slide-item',
            content: 'catalog-grid-item',
            contentContext: {
              class: 'product-view__grid-item',
              tag: 'div',
              image: {
                class: 'catalog-grid-item__image',
                dataSrc: '/images/product-view/slider-image.jpg'
              },
              name: 'Some product name',
              price: {
                name: 'price',
                context: {
                  regularPrice: '1 400',
                  specialPrice: '',
                  prefix: {
                    tag: '',
                    text: '$'
                  },
                  suffix: {
                    tag: '',
                    text: ''
                  }
                }
              },
              primaryAction: {
                tag: 'button',
                text: 'Add to Cart',
                class: 'button catalog-grid-item__primary-action'
              },
              secondaryActions: {
                wishlist: {
                  iconId: 'heart',
                  iconTitle: 'Heart'
                },
                compare: {
                  iconId: 'compare',
                  iconTitle: 'Compare'
                }
              },
              swatches: [
                {
                  name: 'swatch',
                  context: {
                    class: 'swatch--small swatch--image',
                    options: [
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-orange.jpg);"'
                      },
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-green.jpg);"'
                      },
                      {
                        class: 'swatch__option--active',
                        attributes: 'style="background-image: url(../../images/swatch/swatch-red.jpg);"'
                      },
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-white.jpg);"'
                      }
                    ]
                  }
                },
                {
                  name: 'swatch',
                  context: {
                    class: 'swatch--small',
                    attributes: '',
                    titleClass: '',
                    options: [
                      {
                        text: 'XS'
                      },
                      {
                        class: 'swatch__option--active',
                        text: 'S'
                      },
                      {
                        text: 'M'
                      },
                      {
                        text: 'L'
                      },
                      {
                        text: 'XL'
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            itemClass: 'product-view__slide-item',
            content: 'catalog-grid-item',
            contentContext: {
              class: 'product-view__grid-item',
              tag: 'div',
              image: {
                class: 'catalog-grid-item__image',
                dataSrc: '/images/product-view/slider-image.jpg'
              },
              name: 'Some product name',
              price: {
                name: 'price',
                context: {
                  regularPrice: '1 400',
                  specialPrice: '',
                  prefix: {
                    tag: '',
                    text: '$'
                  },
                  suffix: {
                    tag: '',
                    text: ''
                  }
                }
              },
              primaryAction: {
                tag: 'button',
                text: 'Add to Cart',
                class: 'button catalog-grid-item__primary-action'
              },
              secondaryActions: {
                wishlist: {
                  iconId: 'heart',
                  iconTitle: 'Heart'
                },
                compare: {
                  iconId: 'compare',
                  iconTitle: 'Compare'
                }
              },
              swatches: [
                {
                  name: 'swatch',
                  context: {
                    class: 'swatch--small swatch--image',
                    options: [
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-orange.jpg);"'
                      },
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-green.jpg);"'
                      },
                      {
                        class: 'swatch__option--active',
                        attributes: 'style="background-image: url(../../images/swatch/swatch-red.jpg);"'
                      },
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-white.jpg);"'
                      }
                    ]
                  }
                },
                {
                  name: 'swatch',
                  context: {
                    class: 'swatch--small',
                    attributes: '',
                    titleClass: '',
                    options: [
                      {
                        text: 'XS'
                      },
                      {
                        class: 'swatch__option--active',
                        text: 'S'
                      },
                      {
                        text: 'M'
                      },
                      {
                        text: 'L'
                      },
                      {
                        text: 'XL'
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            itemClass: 'product-view__slide-item',
            content: 'catalog-grid-item',
            contentContext: {
              class: 'product-view__grid-item',
              tag: 'div',
              image: {
                class: 'catalog-grid-item__image',
                dataSrc: '/images/product-view/slider-image.jpg'
              },
              name: 'Some product name',
              price: {
                name: 'price',
                context: {
                  regularPrice: '1 400',
                  specialPrice: '',
                  prefix: {
                    tag: '',
                    text: '$'
                  },
                  suffix: {
                    tag: '',
                    text: ''
                  }
                }
              },
              primaryAction: {
                tag: 'button',
                text: 'Add to Cart',
                class: 'button catalog-grid-item__primary-action'
              },
              secondaryActions: {
                wishlist: {
                  iconId: 'heart',
                  iconTitle: 'Heart'
                },
                compare: {
                  iconId: 'compare',
                  iconTitle: 'Compare'
                }
              },
              swatches: [
                {
                  name: 'swatch',
                  context: {
                    class: 'swatch--small swatch--image',
                    options: [
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-orange.jpg);"'
                      },
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-green.jpg);"'
                      },
                      {
                        class: 'swatch__option--active',
                        attributes: 'style="background-image: url(../../images/swatch/swatch-red.jpg);"'
                      },
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-white.jpg);"'
                      }
                    ]
                  }
                },
                {
                  name: 'swatch',
                  context: {
                    class: 'swatch--small',
                    attributes: '',
                    titleClass: '',
                    options: [
                      {
                        text: 'XS'
                      },
                      {
                        class: 'swatch__option--active',
                        text: 'S'
                      },
                      {
                        text: 'M'
                      },
                      {
                        text: 'L'
                      },
                      {
                        text: 'XL'
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            itemClass: 'product-view__slide-item',
            content: 'catalog-grid-item',
            contentContext: {
              class: 'product-view__grid-item',
              tag: 'div',
              image: {
                class: 'catalog-grid-item__image',
                dataSrc: '/images/product-view/slider-image.jpg'
              },
              name: 'Some product name',
              price: {
                name: 'price',
                context: {
                  regularPrice: '1 400',
                  specialPrice: '',
                  prefix: {
                    tag: '',
                    text: '$'
                  },
                  suffix: {
                    tag: '',
                    text: ''
                  }
                }
              },
              primaryAction: {
                tag: 'button',
                text: 'Add to Cart',
                class: 'button catalog-grid-item__primary-action'
              },
              secondaryActions: {
                wishlist: {
                  iconId: 'heart',
                  iconTitle: 'Heart'
                },
                compare: {
                  iconId: 'compare',
                  iconTitle: 'Compare'
                }
              },
              swatches: [
                {
                  name: 'swatch',
                  context: {
                    class: 'swatch--small swatch--image',
                    options: [
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-orange.jpg);"'
                      },
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-green.jpg);"'
                      },
                      {
                        class: 'swatch__option--active',
                        attributes: 'style="background-image: url(../../images/swatch/swatch-red.jpg);"'
                      },
                      {
                        attributes: 'style="background-image: url(../../images/swatch/swatch-white.jpg);"'
                      }
                    ]
                  }
                },
                {
                  name: 'swatch',
                  context: {
                    class: 'swatch--small',
                    attributes: '',
                    titleClass: '',
                    options: [
                      {
                        text: 'XS'
                      },
                      {
                        class: 'swatch__option--active',
                        text: 'S'
                      },
                      {
                        text: 'M'
                      },
                      {
                        text: 'L'
                      },
                      {
                        text: 'XL'
                      }
                    ]
                  }
                }
              ]
            }
          },
        ]
      }
    },
    additionalContent: {
      class: 'product-view__additional-content',
      image: {
        defaultSrc: '/images/product-view/banner.jpg',
        sources: [
          {
            src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
            mediaQuery: '(max-width: 767px)'
          },
          {
            src: '/images/product-view/banner.jpg',
            mediaQuery: '(min-width: 768px)'
          }
        ],
        alt: 'image alt text'
      }
    }
  },
  variants: [
    {
      name: 'bundle',
      context: {
        description: 'Customize Ingrid Running Jacket with Long Sleaves',
        price: {
          regularPrice: '92.00'
        },
        priceUnit: '/ bundle',
        summaryTitle: 'Summary:',
        summaries: [
          {
            title: 'Sprite Stasis Ball:',
            item: '1 x Sprite Stasis Ball 55 cm'
          },
          {
            title: 'Sprite Yoga Strap:',
            item: '1 x Sprite Yoga Strap 6 foot'
          },
          {
            title: 'Sprite Foam Roller:',
            item: '1 x Sprite Foam Roller'
          }
        ]
      }
    },
    {
      name: 'grouped',
      context: {
        productsTable: {
          class: 'product-view__grouped-table',
          captionText: 'Grouped product items',
          mainTags: [
            {
              mainTag: 'thead',
              rowTags: [
                {
                  rowTag: 'tr',
                  rowTagAttributes: 'role="row"',
                  childTags: [
                    {
                      childTag: 'th',
                      content: 'Product Name',
                      childTagAttributes: 'scope="col" role="columnheader"'
                    },
                    {
                      childTag: 'th',
                      childTagClasses: 'product-view__grouped-col-qty',
                      content: 'Qty',
                      childTagAttributes: 'scope="col" role="columnheader"'
                    }
                  ]
                }
              ]
            },
            {
              mainTag: 'tbody',
              rowTags: [
                {
                  rowTag: 'tr',
                  rowTagAttributes: 'role="row"',
                  childTags: [
                    {
                      childTag: 'td',
                      childTagAttributes: 'data-th="Product Name:" role="gridcell"',
                      content: '<span class="product-view__grouped-product-name">Sprite Yoga Strap 6 foot</span><span>$14.00</span>'
                    },
                    {
                      childTag: 'td',
                      childTagAttributes: 'data-th="Qty:" role="gridcell"',
                      contentComponent: 'input',
                      contentContext: {
                        class: 'product-view__grouped-qty',
                        label: {
                          text: 'Qty',
                          hidden: true
                        },
                        field: {
                          id: 'field-id-1',
                          name: 'field-name-1',
                          type: 'number',
                          attributes: 'min="0" value="0"'
                        }
                      }
                    }
                  ]
                },
                {
                  rowTag: 'tr',
                  rowTagAttributes: 'role="row"',
                  childTags: [
                    {
                      childTag: 'td',
                      childTagAttributes: 'data-th="Product Name:" role="gridcell"',
                      content: '<span class="product-view__grouped-product-name">Sprite Yoga Strap 8 foot</span><span>$17.00</span>'
                    },
                    {
                      childTag: 'td',
                      childTagAttributes: 'data-th="Qty:" role="gridcell"',
                      contentComponent: 'input',
                      contentContext: {
                        class: 'product-view__grouped-qty',
                        label: {
                          text: 'Qty',
                          hidden: true
                        },
                        field: {
                          id: 'field-id-1',
                          name: 'field-name-1',
                          type: 'number',
                          attributes: 'min="0" value="0"'
                        }
                      }
                    }
                  ]
                },
                {
                  rowTag: 'tr',
                  rowTagAttributes: 'role="row"',
                  childTags: [
                    {
                      childTag: 'td',
                      childTagAttributes: 'data-th="Product Name:" role="gridcell"',
                      content: '<span class="product-view__grouped-product-name">Sprite Yoga Strap 10 foot</span><span>$21.00</span>'
                    },
                    {
                      childTag: 'td',
                      childTagAttributes: 'data-th="Qty:" role="gridcell"',
                      contentComponent: 'input',
                      contentContext: {
                        class: 'product-view__grouped-qty',
                        label: {
                          text: 'Qty',
                          hidden: true
                        },
                        field: {
                          id: 'field-id-1',
                          name: 'field-name-1',
                          type: 'number',
                          attributes: 'min="0" value="0"'
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    }
  ]
};
