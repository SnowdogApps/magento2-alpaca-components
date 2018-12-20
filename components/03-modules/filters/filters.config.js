module.exports = {
  title: 'Filters',
  context: {
    tag: 'div',
    activeFiltersHeading: 'Now Shopping by',
    skip: {
      tag: 'button',
      class: 'button button--secondary filters__skip-button',
      attributes: 'type="button"',
      text: 'Skip to products'
    },
    allFiltersHeading: 'Shopping Options',
    switcherIcon: {
      class: 'filters__switcher-icon',
      iconId: 'angle-down',
      iconTitle: 'Arrow down'
    },
    divider: {
      class: 'filters__divider'
    },
    dropdownList: {
      class: 'dropdown-list--secondary'
    }
  }
};
