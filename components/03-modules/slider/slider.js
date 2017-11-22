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

    for (const key of Object.keys(dataValues)) {
      if (key != 'slidesToScroll') {
        if (!isNaN(parseInt(dataValues[key]))) {
          config[key] = parseInt(dataValues[key]);
        }
        else {
          config[key] = dataValues[key];
        }
      }
    }

    function cloneDots() {
      if (dotContainer) {
        const dots      = dotContainer.childNodes,
              dotActive = 'slider__dot--active',
              dotCount  = dotNumber(),
              dotItem   = document.createElement('div');

        for (let i = 0; i < dotCount; i++) {
          let clone = dotItem.cloneNode();

          clone.classList.add('slider__dot');
          dotContainer.appendChild(clone);
        }

        dots[0].classList.add(dotActive);
      }
    }

    function addDotListeners() {
      const dots     = dotContainer.childNodes,
            dotCount = dotNumber();

      for (let i = 0; i < dotCount; i++) {
        dots[i].addEventListener('click', (e) => {
          lorySlider.slideTo(Array.prototype.indexOf.call(dots, e.target));
        });
      }
    }

    function dotClassToggle(e) {
      const dots      = dotContainer.childNodes,
            dotActive = 'slider__dot--active',
            dotCount  = dotNumber();

      for (let i = 0; i < dotCount; i++) {
        dots[i].classList.remove(dotActive);
      }

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
      let dotCount,
          visibleElements = Math.round(slider.querySelector('.slider__slides').offsetWidth / slider.querySelector('.slider__item').offsetWidth);

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
