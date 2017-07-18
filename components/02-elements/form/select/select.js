/* global Choices */

(function() { // eslint-disable-line
  'use strict'

  const args    = {},
        selects = [...document.querySelectorAll('.select__field')];

  selects.forEach(select => {
    args.searchEnabled = false;
    args.classNames = {
      containerInner: 'select__field',
      list: 'select__field-list',
      input: 'select__field-input',
      item: 'select__field-item',
      listSingle: 'select__field-list--single'
    };

    const choice = new Choices(select, args); // eslint-disable-line
  });
}());
