'use strict'
$(document).ready(function() {
  $('.slider__items')
    .slick({
      fade: true,
      speed: 1500,
      prevArrow:
      `<svg title="previous slide" class="slider__icon slider__icon-prev">
      <use xlink:href="#icon-slider-left"></use>
      </svg>`,
      nextArrow:
      `<svg title="next slide" class="slider__icon slider__icon-next">
      <use xlink:href="#icon-slider-right"></use>
      </svg>`,
      touchThreshold: 20,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 5000
    })
    .addClass('loaded');
});
