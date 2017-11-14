/* globals lory */

(function alpacaSlider() {
  'use strict';

  const sliders = [...document.querySelectorAll('.slider')];

  sliders.forEach(slider => {
    const dataValues = slider.dataset;

    let config = {
      classNameFrame: 'slider__handler',
      classNameSlideContainer: 'slider__slides',
      classNamePrevCtrl: 'slider__prev',
      classNameNextCtrl: 'slider__next'
    };

    for (const key of Object.keys(dataValues)) {
      config[key] = dataValues[key];
    }

    lory(slider, config);
  });
}());
