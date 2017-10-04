'use strict'

/**
 * This script is only for preview
 * Don't use it in Magento
 */

const swatches = document.querySelectorAll('.swatch');

swatches.forEach(swatch => {
  const getOptions = swatch.querySelectorAll('.swatch__option');

  getOptions.forEach(option => {
    option.addEventListener('click', event => {
      const allOptions = event.currentTarget.parentNode.querySelectorAll('.swatch__option'),
            thisOption = event.currentTarget;

      if (!thisOption.classList.contains('swatch--active')) {
        allOptions.forEach(otherOption => {
          if (otherOption.classList.contains('swatch--active')) {
            otherOption.classList.remove('swatch--active');
          }
        });

        thisOption.classList.add('swatch--active');
      }
      else {
        thisOption.classList.remove('swatch--active');
      }
    });
  });
})
