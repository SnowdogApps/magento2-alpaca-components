/* globals lory */

(function alpacaSlider() {
  'use strict';

  const sliders = [...document.querySelectorAll('.slider')];

  sliders.forEach(slider => {
    lory(slider, {
      rewind: true,
      enableMouseEvents: true,
      classNameFrame: 'slider__frame',
      classNameSlideContainer: 'slider__slides',
      classNamePrevCtrl: 'slider__prev',
      classNameNextCtrl: 'slider__next'
    });
  });
}());
