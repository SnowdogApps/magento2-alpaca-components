'use strict'

const tabletViewport = window.matchMedia('screen and (max-width: 767px)');

function setListHeight(item) {
  return Array.from(item.children)
    .map(elem => elem.clientHeight)
    .reduce((a, b) => a + b, 0);
}

function activeList() {
  const listId = this.dataset.list,
        listContent = this.parentNode.querySelector(`.list--titled[data-listcontent="${listId}"]`);

  if (listContent && listContent.clientHeight > 0) {
    listContent.style.height = 0;
    this.classList.toggle('list--active');
  }
  else {
    let listHeight = setListHeight(listContent);

    listContent.style.height = listHeight + 'px';
    listContent.classList.toggle('list--active');
    this.classList.toggle('list-title--active');
  }
}

function setAutoHeight(item) {
  item.style.height = null;
}

function statList() {
  if (tabletViewport.matches) {
    const listTitle = document.querySelectorAll('.list-title');
    listTitle.forEach(key => key.addEventListener('click', activeList));
  }
  else {
    const titledListContent = document.querySelectorAll('.list--titled');
    titledListContent.forEach(setAutoHeight);
  }
}

statList();
window.onresize = function() {
  statList();
}
