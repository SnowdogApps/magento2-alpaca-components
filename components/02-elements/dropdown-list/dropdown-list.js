'use-strict'
const dropdownItem = [ ...document.querySelectorAll('.dropdown-list__item--collapse .dropdown-list__label') ],
      openClass = 'dropdown-list__item--open';

function setListHeight(item) {
  return Array.from(item.children)
    .map(elem => elem.clientHeight)
    .reduce((a, b) => a + b, 0);
}

function toggleContent(item) {
  const dropdownId      = item.dataset.dropdown,
        dropdownItem    = item.parentNode,
        dropdownContent = dropdownItem.querySelector(`.dropdown-list__content[data-content="${dropdownId}"]`);

  if (dropdownContent.clientHeight > 0) {
    dropdownContent.style.height = 0;
    dropdownItem.classList.remove(openClass);
  }
  else {
    dropdownContent.style.height = `${setListHeight(dropdownContent)}px`;
    dropdownItem.classList.add(openClass);
  }
}

dropdownItem.forEach(
  key => key.addEventListener('click', (e) => {
    e.preventDefault();
    toggleContent(key, false);
  }, false)
);
