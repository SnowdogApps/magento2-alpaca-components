'use-strict'
const dropdownItem      = document.querySelectorAll('.dropdown-list__item--parent .dropdown-list__label'),
      dropdownInnerItem = document.querySelectorAll('.dropdown-list__inner-item--parent .dropdown-list__inner-label'),
      activeClass       = 'open';

function setListHeight(item) {
  return Array.from(item.children)
    .map(elem => elem.clientHeight)
    .reduce((a, b) => a + b, 0);
}

function toggleSubmenu(item, inner) {
  const dropdownId = item.dataset.dropdown;
  let dropdownList = document.querySelector(`.dropdown-list__inner-list--level1[data-dropdown="${dropdownId}"]`),
      innerLists   = item.parentNode.querySelectorAll('.dropdown-list__inner-list--level2'),
      upperList    = null;

  if (inner) {
    dropdownList = item.parentNode.querySelector(`.dropdown-list__inner-list--level2[data-dropdown="${dropdownId}"]`);
    innerLists = null;
    upperList  = item.closest('.dropdown-list__inner-list--level1');
  }

  item.parentNode.classList.toggle('open');

  if (dropdownList && dropdownList.clientHeight > 0) {
    if (innerLists) {
      innerLists.forEach(key => {
        key.style.height = 0;
        key.parentNode.classList.remove(activeClass);
      });
    }
    else if (upperList) {
      upperList.style.height = upperList.clientHeight - dropdownList.clientHeight + 'px';
    }

    dropdownList.style.height = 0;
  }
  else {
    const listHeight = setListHeight(dropdownList);
    dropdownList.style.height = listHeight + 'px';

    if (upperList) {
      upperList.style.height = upperList.clientHeight + listHeight + 'px';
    }
  }
}

dropdownItem.forEach(
  key => key.addEventListener('click', (e) => {
    e.preventDefault();
    toggleSubmenu(key, false);
  }, false)
);

dropdownInnerItem.forEach(
  key => key.addEventListener('click', (e) => {
    e.preventDefault();
    toggleSubmenu(key, true);
  }, false)
);
