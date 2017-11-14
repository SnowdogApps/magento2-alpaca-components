/* global debounce */
(function() { // eslint-disable-line
  'use strict';

  // to calculate image height based on container width
  const imageRatio = 0.975,
        items = [...document.querySelectorAll('.products-grid-item')],
        mq = '(min-width: 768px)';


  function getExtraHeight(item, detailsHeight) {
    let extraHeight;
    item.classList.add('products-grid-item--active');
    extraHeight = item.querySelector('.products-grid-item__content').clientHeight;
    extraHeight = extraHeight - detailsHeight;
    return extraHeight;
  }

  function setItemHeight(item, imageHeight) {
    const detailsHeight = item.querySelector('.products-grid-item__details').clientHeight;
    item.style.height = parseInt(imageHeight + detailsHeight + 10) + 'px';

  }

  function resizeItems() {
    items.forEach(item => {
      if (!window.matchMedia(mq).matches) {
        const itemContent = item.querySelector('.products-grid-item__content');
        item.classList.remove('products-grid-item--active');
        itemContent.style.transform = '';
      }
      const imageHeight = item.clientWidth * imageRatio;
      setItemHeight(item, imageHeight);
    });
  }

  function showExtra(item, itemContent, mq) {
    const detailsHeight = item.querySelector('.products-grid-item__details').clientHeight,
          extraHeight = getExtraHeight(item, detailsHeight);
    if (window.matchMedia(mq).matches) {
      itemContent.style.transform = `translate(0%,-${extraHeight}px)`;
      item.classList.add('products-grid-item--active');
    }
  }

  function bindEvents(items) {
    window.addEventListener('resize', debounce(() => {
      resizeItems();
    }, 100));

    items.forEach(item => {
      item.addEventListener('mouseenter', () => {
        const itemContent = item.querySelector('.products-grid-item__content'),
              imageHeight = item.clientWidth * imageRatio;

        setItemHeight(item, imageHeight);
        showExtra(item, itemContent, mq);

      });
      item.addEventListener('mouseleave', () => {
        const itemContent = item.querySelector('.products-grid-item__content'),
              imageHeight = item.clientWidth * imageRatio;

        setItemHeight(item, imageHeight);

        if (window.matchMedia(mq).matches) {
          itemContent.style.transform = '';
        }
      });
    });
  }

  bindEvents(items);

}());
