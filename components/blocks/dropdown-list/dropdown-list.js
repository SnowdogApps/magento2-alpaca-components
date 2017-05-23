'use-strict'
const dropdownItem      = document.querySelectorAll('.dropdown-list__item--parent > .dropdown-list__link'),
      dropdownInnerItem = document.querySelectorAll('.dropdown-list__inner-item--parent > .dropdown-list__inner-link'),
      alliTemLabel    = 'All products';

function setListHeight(item) {
  return Array.from(item.children)
    .map(elem => elem.clientHeight)
    .reduce((a, b) => a + b, 0);
}

function slideList(item, inner) {

  const dropdownId = item.dataset.dropdown,
        dropdownList = inner
        ? item.parentNode.querySelector(`.dropdown-list__inner-list--level2[data-dropdown="${dropdownId}"]`)
        : document.querySelector(`.dropdown-list__inner-list--level1[data-dropdown="${dropdownId}"]`),
        innerLists = inner
        ? null
        : item.parentNode.querySelectorAll('.dropdown-list__inner-list--level2'),
        upperList = inner
        ? item.closest('.dropdown-list__inner-list--level1')
        : null;

  item.parentNode.classList.toggle('open');

  if (dropdownList && dropdownList.clientHeight > 0) {
    if (innerLists) {
      innerLists.forEach(key => {
        key.style.height = 0;
        key.parentNode.classList.remove('open');
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

function appendAllItem(item) {
  const itemHref = item.href,
        sublist = document.querySelector(`ul[data-dropdown="${item.dataset.dropdown}"]`),
        levelClass = sublist.classList.value.includes('level1')
        ? ' dropdown-list__inner-item--level1'
        : ' dropdown-list__inner-item--level2',
        allLink = `<a href="${itemHref}" class="dropdown-list__inner-link">
        ${alliTemLabel}
        </a>`,
        allItem = document.createElement('li');

  allItem.innerHTML = allLink;
  allItem.classList = `dropdown-list__inner-item dropdown-list__inner-item--all ${levelClass}`;
  sublist.insertBefore(allItem, sublist.firstChild);
}

dropdownItem.forEach(
  key => {
    key.addEventListener(
      'click',
      (e) => {
        e.preventDefault();
        slideList(key, false);
      },
      false
      );
    appendAllItem(key);
  }
);

dropdownInnerItem.forEach(
  key => {
    key.addEventListener(
      'click',
      (e) => {
        e.preventDefault();
        slideList(key, true);
      },
      false
      );
    appendAllItem(key);
  }
);
