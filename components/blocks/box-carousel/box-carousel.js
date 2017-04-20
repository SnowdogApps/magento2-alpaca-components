'use strict'
$(document).ready(function(){
    $('.box-carousel__items')
        .slick({
            prevArrow:
            `<svg title="previous slide" class="box-carousel__icon box-carousel__icon-prev">
                <use xlink:href="#icon-carousel-left"></use>
            </svg>`,
            nextArrow:
            `<svg title="next slide" class="box-carousel__icon box-carousel__icon-next">
                <use xlink:href="#icon-carousel-right"></use>
            </svg>`,
            touchThreshold: 20,
            swipeToSlide: true
        })
        .addClass('loaded');
});
