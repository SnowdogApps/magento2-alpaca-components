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
      id: 'angle-down',
      title: 'Arrow down',
      class: 'filters__switcher-icon'
    },
    divider: {
      class: 'filters__divider'
    },
    dropdownList: {
      class: 'dropdown-list--secondary'
    }
  }
};
