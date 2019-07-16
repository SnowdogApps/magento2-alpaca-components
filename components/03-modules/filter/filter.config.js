module.exports = {
  preview: '@docs-only-styles',
  default: 'checkbox',
  context: {
    icon: {
      id: 'angle-down',
      title: 'Arrow down',
      class: 'dropdown-list__icon'
    }
  },
  variants: [
    {
      name: 'checkbox',
      label: 'Checkbox',
      context: {
        title: {
          class: 'filter__label-title',
          tag: 'h3',
          text: 'Checkbox'
        },
        id: 'checkbox',
        checkboxes: [
          {
            class: '',
            href: '#',
            label: {
              text: 'Value 1',
            }
          },
          {
            class: 'checkbox--link-checked',
            href: '#',
            label: {
              text: 'Value 2'
            }
          },
          {
            class: '',
            href: '#',
            label: {
              text: 'Value 3',
            }
          }
        ]
      }
    },
    {
      name: 'swatch',
      context: {
        id: 'swatch',
        title: {
          class: 'filter__label-title',
          tag: 'h3',
          text: 'Swatch'
        },
        options: [
          {
            text: 'XS',
            href: '#'
          },
          {
            class: 'filter__swatch-option--active',
            text: 'S',
            href: '#'
          },
          {
            text: 'M',
            href: '#'
          },
          {
            text: 'L',
            href: '#'
          },
          {
            text: 'XL',
            href: '#'
          }
        ]
      }
    },
    {
      name: 'color',
      context: {
        id: 'color',
        title: {
          class: 'filter__label-title',
          tag: 'h3',
          text: 'Color'
        },
        options: [
          {
            href: '#',
            class: 'filter__color-option--active',
            attributes: 'style="background: #000"',
            label: 'Black'
          },
          {
            href: '#',
            class: 'filter__color-option',
            attributes: 'style="background: red"',
            label: 'Red'
          },
          {
            href: '#',
            class: 'filter__color-option',
            attributes: 'style="background: #5cb85c"',
            label: 'Green'
          },
          {
            href: '#',
            class: 'filter__color-option',
            attributes: 'style="background: #0275d8"',
            label: 'Blue'
          }
        ]
      }
    },
    {
      name: 'range',
      context: {
        id: 'range',
        title: {
          class: 'filter__label-title',
          tag: 'h3',
          text: 'Range'
        },
        componentObject: {
          name: 'range',
          config: {
            attributes: '',
            class: 'filter__range',
            filter: {
              wrapperClass: '',
              input: {
                upperClass: '',
                lowerClass: '',
                maxValue: '1000',
                minValue: '0',
                type: 'text'
              },
              suffix: {
                lowerText: '$',
                upperText: '$',
                lowerClass: '',
                upperClass: ''
              }
            },
            rangeInputLower: {
              class: 'range-filter__input range-filter__input--lower',
              label: {
                class: 'range-filter__label',
                text: 'Minimum value'
              },
              field: {
                class: 'range-filter__field range-filter__field--lower',
                id: 'range-filter-min',
                name: 'range-filter-min',
                placeholder: '',
                value: '0'
              }
            },
            rangeInputUpper: {
              class: 'range-filter__input range-filter__input--upper',
              label: {
                class: 'range-filter__label',
                text: 'Maximum value'
              },
              field: {
                class: 'range-filter__field range-filter__field--upper',
                id: 'range-filter-max',
                name: 'range-filter-max',
                placeholder: '',
                value: '1000'
              }
            },
            apply: {
              class: 'button--secondary range-filter__button',
              tag: 'button',
              text: 'Apply',
              attributes: 'type="button" data-min="0" data-max="1000" data-attribute="price" href="#" data-filter-url="#"'
            },
            script: true,
            showFloat: 0
          }
        }
      }
    },
    {
      name: 'category',
      context: {
        title: {
          class: 'filter__label-title',
          tag: 'h3',
          text: 'Category'
        },
        id: 'category',
        categories: {
          class: 'filter__category-list',
          listTag: 'ul',
          elementTag: 'li',
          elements: [
            {
              class: 'filter__category-item',
              linkClass: 'filter__category-link',
              text: 'Jackets',
              link: '#'
            },
            {
              class: 'filter__category-item',
              linkClass: 'filter__category-link',
              text: 'Hoodies & Sweatshirts',
              link: '#'
            },
            {
              class: 'filter__category-item',
              linkClass: 'filter__category-link',
              text: 'Tees',
              link: '#'
            },
            {
              class: 'filter__category-item',
              linkClass: 'filter__category-link',
              text: 'Tanks',
              link: '#'
            }
          ]
        }
      }
    }
  ]
};
