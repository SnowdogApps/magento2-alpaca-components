'use strict'

/*global Choices */

const selects = document.querySelectorAll('.select__field');

selects.forEach(select => {
  new Choices(select, {
    placeholder: true,
    placeholderValue: 'Search item',
    classNames: {
      containerInner: 'select__field',
      list: 'select__list',
      input: 'select__input',
      item: 'select__item',
      listSingle: 'select__list--single',
    }
  });
});
