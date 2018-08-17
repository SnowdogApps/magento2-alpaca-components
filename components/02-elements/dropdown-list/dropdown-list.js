'use-strict';

(function DropdownList() {
  const dropdownCollapseLabel = '.dropdown-list__item--collapse .dropdown-list__label',
        dropdownItem          = [ ...document.querySelectorAll(dropdownCollapseLabel) ],
        openClass             = 'dropdown-list__item--open',
        contentClass          = 'dropdown-list__content',
        mq                    = '(min-width: 768px)',
        dropdownMediumOpen    = [ ...document.querySelectorAll('.dropdown-list--is-open\\@screen-m')];

  function setAriaAttributes(label, content, expanded) {
    if (expanded) {
      label.setAttribute('aria-expanded', 'false');
      content.setAttribute('aria-hidden', 'true');
    }
    else {
      label.setAttribute('aria-expanded', 'true');
      content.setAttribute('aria-hidden', 'false');
    }
  }
  function removeAriaAttributes(label, content) {
    label.removeAttribute('aria-expanded');
    content.setAttribute('aria-hidden', 'false');
    label.disabled = true;
  }

  function isMediumOpen(dropdownBlock) {
    return (dropdownBlock.classList.contains('dropdown-list--is-open@screen-m')) && window.matchMedia(mq).matches;
  }

  function resetMqMediumOpen(item) {
    const dropdownItem = item.parentNode,
          dropdownContent = dropdownItem.querySelector(`.${contentClass}`);

    if (window.matchMedia(mq).matches) {
      dropdownContent.style.height = 'auto';
      dropdownItem.classList.remove(openClass);
      removeAriaAttributes(item, dropdownContent);
    }
    else {
      dropdownContent.style.height = 0;
      dropdownItem.classList.remove(openClass);
      setAriaAttributes(item, dropdownContent, false);
      item.disabled = false;
    }
  }

  function toggleContent(item) {
    const dropdownId      = item.dataset.dropdown,
          dropdownItem    = item.parentNode,
          dropdownContent = dropdownItem.querySelector(`.${contentClass}[data-content="${dropdownId}"]`),
          dropdownBlock   = item.closest('.dropdown-list');

    if (!isMediumOpen(dropdownBlock)) {
      if (dropdownContent.clientHeight > 0) {
        dropdownContent.style.height = 0;
        dropdownItem.classList.remove(openClass);
        setAriaAttributes(item, dropdownContent, true);
      }
      else {
        dropdownContent.style.height = 'auto';
        dropdownItem.classList.add(openClass);
        setAriaAttributes(item, dropdownContent, false);
      }
    }
  }

  function setMediumOpen() {
    if (dropdownMediumOpen.length) {
      let dropdownItems =  [];
      dropdownMediumOpen.forEach(
        key => dropdownItems.push(...key.querySelectorAll(dropdownCollapseLabel))
      )
      dropdownItems.forEach(key => resetMqMediumOpen(key));
    }
  }

  function init() {
    dropdownItem.forEach(
      key => key.addEventListener('click', (e) => {
        e.preventDefault();
        toggleContent(key, false);
      }, false)
    );
    setMediumOpen();
  }

  init();

  window.addEventListener('resize', () => {
    setMediumOpen();
  });
})();
