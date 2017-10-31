'use strict'

/* globals lory */

const slider = document.querySelector('.slider');

lory(slider, {
  rewind: true,
  enableMouseEvents: true,
  classNameFrame: 'slider__frame',
  classNameSlideContainer: 'slider__slides',
  classNamePrevCtrl: 'slider__prev',
  classNameNextCtrl: 'slider__next'
});
