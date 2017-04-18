'use-strict'
const filterItem      = document.querySelectorAll('.filters__item--parent > .filters__link'),
      filterInnerItem = document.querySelectorAll('.filters__inner-item--parent > .filters__inner-link'),
      alliTemLabel    = 'All products';

function setListHeight(item) {
    return Array.from(item.children)
                .map(elem => elem.clientHeight)
                .reduce((a, b) => a + b, 0);
}

function slideList(item, inner) {

    const filterId = item.dataset.filter,
          filterList = inner
          ? item.parentNode.querySelector(`.filters__inner-list--level2[data-filter="${filterId}"]`)
          : document.querySelector(`.filters__inner-list--level1[data-filter="${filterId}"]`),
          innerLists = inner
          ? null
          : item.parentNode.querySelectorAll(`.filters__inner-list--level2`),
          upperList = inner
          ? item.closest(`.filters__inner-list--level1`)
          : null;

    item.parentNode.classList.toggle('open');
    if (filterList && filterList.clientHeight > 0) {
        if (innerLists) {
            innerLists.forEach(key => {
                key.style.height = 0;
                key.parentNode.classList.remove('open');
            });
        }
        else if (upperList) {
            upperList.style.height = upperList.clientHeight - filterList.clientHeight + 'px';
        }
        filterList.style.height = 0;
    }
    else {

        const listHeight = setListHeight(filterList);
        filterList.style.height = listHeight + 'px';
        if (upperList) {
            upperList.style.height = upperList.clientHeight + listHeight + 'px';
        }
    }
}

function appendAllItem(item) {
    console.log(item);
    const itemHref = item.href,
          sublist = document.querySelector(`ul[data-filter="${item.dataset.filter}"]`),
          levelClass = sublist.classList.value.includes('level1') ? ' filters__inner-item--level1' : ' filters__inner-item--level2',
          allLink = `<a href="${itemHref}" class="filters__inner-link">
                        ${alliTemLabel}
                    </a>`,
         allItem = document.createElement('li');
         console.log(sublist);
    allItem.innerHTML = allLink;
    allItem.classList = `filters__inner-item filters__inner-item--all ${levelClass}`;
    sublist.insertBefore(allItem, sublist.firstChild);
}

filterItem.forEach(
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

filterInnerItem.forEach(
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
