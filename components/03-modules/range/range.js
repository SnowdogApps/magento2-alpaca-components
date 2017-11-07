/* global noUiSlider */
(function () { // eslint-disable-line
  'use strict';

  function init() {
    const rangeFilters = [...document.querySelectorAll('.range-filter')];
    rangeFilters.forEach(rangeFilter => {
      createRangeSlider(rangeFilter);
    });
  }

  function createRangeSlider(rangeFilter) {
    const inputMax = rangeFilter.querySelector('.range-filter__field--upper'),
          inputMin = rangeFilter.querySelector('.range-filter__field--lower'),
          rangeSlider = rangeFilter.querySelector('.range-filter__slider');

    rangeSlider.classList.add('noUi-extended');
    initNoUiSlider(rangeSlider);
    bindEvents(rangeSlider, inputMin, inputMax);
  }

  function initNoUiSlider(rangeSlider) {
    noUiSlider.create(rangeSlider, {
      start: [0, 1000],
      connect: true,
      tooltips: [
        true,
        true
      ],
      range: {
        'min': 0,
        'max': 200
      },
      formatter: {
        to(value) {
          return value + ',-';
        },
        from(value) {
          return value.replace(',-', '');
        }
      },
    });
  }

  function bindEvents(rangeSlider, inputMin, inputMax) {
    rangeSlider.noUiSlider.on('update', (values) => {
      inputMin.value = values[0];
      inputMax.value = values[1];
    });

    inputMax.addEventListener('change', () => {
      rangeSlider.noUiSlider.set([null, this.value]);
    });

    inputMin.addEventListener('change', () => {
      rangeSlider.noUiSlider.set([null, this.value]);
    });
  }

  init();

}());
