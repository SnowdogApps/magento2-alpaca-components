module.exports = {
  title: 'Filters',
  context: {
    tag: 'div',
    activeFiltersHeading: 'Now Shopping by',
    allFiltersHeading: 'Shopping Options',
    switcherIcon: {
      class: 'filters__switcher-icon',
      iconId: 'angle-down'
    },
    activeFilters: {
      clearHref: '#',
      clearText: 'Clear All',
      filters: [
        {
          iconId: 'close',
          label: 'Label',
          value: 'Value',
          ariaLabel: 'Disable filter',
          icon: {
            iconId: 'close',
            class: 'active-filters__remove-icon'
          }
        },
        {
          iconId: 'close',
          label: 'Label',
          value: 'Value',
          ariaLabel: 'Disable filter',
          icon: {
            iconId: 'close',
            class: 'active-filters__remove-icon'
          }
        },
        {
          iconId: 'close',
          label: 'Label',
          value: 'Value',
          ariaLabel: 'Disable filter',
          icon: {
            iconId: 'close',
            class: 'active-filters__remove-icon'
          }
        }
      ]
    },
    divider: {
      class: 'filters__divider'
    },
    dropdownList: {
      class: 'dropdown-list--secondary'
    },
    range: {
      id: 'range',
      title: 'Range',
      text: '',
      icon: {
        iconId: 'angle-down',
        class: 'dropdown-list__icon'
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
    },
    swatch: {
      id: 'swatch',
      title: 'Swatch',
      class: '',
      attributes: '',
      text: '',
      icon: {
        iconId: 'angle-down',
        class: 'dropdown-list__icon'
      },
      options: [
        {
          text: 'XS',
          ariaLabel: 'Select size XS',
          href: '#'
        },
        {
          class: 'filter__swatch-option--active',
          text: 'S',
          ariaLabel: 'Select size S',
          href: '#'
        },
        {
          text: 'M',
          ariaLabel: 'Select size M',
          href: '#'
        },
        {
          text: 'L',
          ariaLabel: 'Select size L',
          href: '#'
        },
        {
          text: 'XL',
          ariaLabel: 'Select size XL',
          href: '#'
        }
      ]
    },
    color: {
      name: 'color',
      title: 'Color',
      id: 'color',
      text: '',
      icon: {
        iconId: 'angle-down',
        class: 'dropdown-list__icon'
      },
      options: [
        {
          href: '#',
          class: 'filter__color-option--active',
          attributes: 'style="background: #000"',
          label: 'Black',
          ariaLabel: 'Select color black'
        },
        {
          href: '#',
          class: 'filter__color-option',
          attributes: 'style="background: red"',
          label: 'Red',
          ariaLabel: 'Select color red'
        },
        {
          href: '#',
          class: 'filter__color-option',
          attributes: 'style="background: #5cb85c"',
          label: 'Green',
          ariaLabel: 'Select color green'
        },
        {
          href: '#',
          class: 'filter__color-option',
          attributes: 'style="background: #0275d8"',
          label: 'Blue',
          ariaLabel: 'Select color blue'
        }
      ]
    },
    checkbox: {
      id: 'checkbox',
      title: 'Checkbox',
      icon: {
        iconId: 'angle-down',
        class: 'dropdown-list__icon'
      },
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
  }
};
