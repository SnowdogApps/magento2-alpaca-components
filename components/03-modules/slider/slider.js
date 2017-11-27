/* globals lory */

(function alpacaSlider() {
  'use strict';

  const sliders = [...document.querySelectorAll('.slider')];

  sliders.forEach(slider => {
    const dataValues   = slider.dataset,
          items        = slider.querySelectorAll('.slider__item').length,
          dotContainer = slider.querySelector('.slider__dot-navigation');

    let config = {
      classNameFrame: 'slider__handler',
      classNameSlideContainer: 'slider__slides',
      classNamePrevCtrl: 'slider__prev',
      classNameNextCtrl: 'slider__next',
      slidesToScroll: 1
    };

    Object.keys(dataValues).map((objectKey) => {
      if (objectKey != 'slidesToScroll') {
        if (!isNaN(parseInt(dataValues[objectKey]))) {
          config[objectKey] = parseInt(dataValues[objectKey]);
        }
        else {
          config[objectKey] = dataValues[objectKey];
        }
      }
    });

    function cloneDots() {
      const dots      = dotContainer.childNodes,
            dotActive = 'slider__dot--active',
            dotCount  = dotNumber(),
            dotItem   = document.createElement('div');

      for (let i = 0; i < dotCount; i++) {
        let clone = dotItem.cloneNode();
        const nestedElement = document.createElement('span');

        clone.classList.add('slider__dot');
        clone.appendChild(nestedElement);
        nestedElement.classList.add('slider__dot-inside');
        dotContainer.appendChild(clone);
      }

      dots[0].classList.add(dotActive);
    }

    function addDotListeners() {
      const dots = dotContainer.childNodes;

      dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
          if (e.target.parentNode === dot) {
            lorySlider.slideTo(Array.prototype.indexOf.call(dots, e.target.parentNode));
          }
          else {
            lorySlider.slideTo(Array.prototype.indexOf.call(dots, e.target));
          }
        });
      })
    }

    function dotClassToggle(e) {
      const dots      = dotContainer.childNodes,
            dotActive = 'slider__dot--active';

      dots.forEach(dot => {
        dot.classList.remove(dotActive);
      });

      dots[e.detail.currentSlide].classList.add(dotActive);
    }

    function sliderResize() {
      const dots      = dotContainer.childNodes,
            dotActive = 'slider__dot--active';

      lorySlider.slideTo(0);
      dotContainer.innerHTML = '';

      cloneDots();
      addDotListeners();

      dots[0].classList.add(dotActive);
    }

    function dotNumber() {
      const visibleElements = Math.round(slider.querySelector('.slider__slides').offsetWidth / slider.querySelector('.slider__item').offsetWidth);
      let dotCount;

      dotCount = ((items - visibleElements) + 1 > 1) ? (items - visibleElements) + 1 : 1;

      return dotCount;
    }

    if (dotContainer) {
      slider.addEventListener('before.lory.init', cloneDots);
      slider.addEventListener('after.lory.init', addDotListeners);
      slider.addEventListener('after.lory.slide', dotClassToggle);
      slider.addEventListener('on.lory.resize', sliderResize);
    }

    const lorySlider = lory(slider, config); //eslint-disable-line one-var
  });
}());
