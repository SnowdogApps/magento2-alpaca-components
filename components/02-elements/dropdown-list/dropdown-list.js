'use strict';

class DropdownList {
  constructor() {
    this.dropdownCollapseLabel = '.dropdown-list__item--collapse > .dropdown-list__label';
    this.dropdownItem = [...document.querySelectorAll(this.dropdownCollapseLabel)];
    this.contentClass = 'dropdown-list__content';
    this.mq = '(min-width: 768px)';
    this.dropdownMediumOpen = [...document.querySelectorAll('.dropdown-list--is-open\\@screen-m')];
    this.init();
  }

  setAriaAttributes(label, content, expanded) {
    if (expanded) {
      label.setAttribute('aria-expanded', 'false');
      content.setAttribute('aria-hidden', 'true');
    }
    else {
      label.setAttribute('aria-expanded', 'true');
      content.setAttribute('aria-hidden', 'false');
    }
  }

  removeAriaAttributes(label, content) {
    label.removeAttribute('aria-expanded');
    content.setAttribute('aria-hidden', 'false');
    label.disabled = true;
  }

  isMediumOpen(dropdownBlock) {
    return (dropdownBlock.classList.contains('dropdown-list--is-open@screen-m')) && window.matchMedia(this.mq).matches;
  }

  resetMqMediumOpen(item) {
    const dropdownItem    = item.parentNode,
          dropdownContent = dropdownItem.querySelector(`.${this.contentClass}`);

    if (window.matchMedia(this.mq).matches) {
      dropdownContent.style.height = 'auto';
      this.removeAriaAttributes(item, dropdownContent);
    }
    else {
      dropdownContent.style.height = 0;
      this.setAriaAttributes(item, dropdownContent, true);
      item.disabled = false;
    }
  }

  getContentHeight(item) {
    return [...item.children]
      .map(elem => elem.clientHeight)
      .reduce((a, b) => a + b, 0);
  }

  closeInnerdDropdowns(item) {
    const subDropDowns = [...item.querySelectorAll(`${this.dropdownCollapseLabel}[aria-expanded="true"]`)];
    subDropDowns.forEach(key => {
      const dropdownId      = key.getAttribute('aria-controls'),
            dropdownItem    = key.parentNode,
            dropdownContent = dropdownItem.querySelector(`.${this.contentClass}[data-content="${dropdownId}"]`);
      this.setAriaAttributes(key, dropdownContent, true);
      dropdownContent.style.height = 0;
    });
  }

  toggleContent(item) {
    const dropdownId      = item.getAttribute('aria-controls'),
          dropdownItem    = item.parentNode,
          dropdownContent = dropdownItem.querySelector(`.${this.contentClass}[data-content="${dropdownId}"]`),
          dropdownBlock   = item.closest('.dropdown-list');

    if (!this.isMediumOpen(dropdownBlock)) {
      if (dropdownContent.clientHeight > 0) {
        const sectionHeight     = this.getContentHeight(dropdownContent),
              elementTransition = dropdownContent.style.transition;
        dropdownContent.style.transition = '';
        this.setAriaAttributes(item, dropdownContent, true);
        requestAnimationFrame(() => {
          dropdownContent.style.height = sectionHeight + 'px';
          dropdownContent.style.transition = elementTransition;
          requestAnimationFrame(() => {
            dropdownContent.style.height = 0 + 'px';
            this.closeInnerdDropdowns(dropdownContent);
          });
        });
      }
      else {
        const openedDropdowns = [...document.querySelectorAll('.dropdown-list__content[aria-hidden="false"]')];
        dropdownContent.style.height = this.getContentHeight(dropdownContent);
        openedDropdowns.map(openedDropdown => {
          openedDropdown.style.height = 'auto';
        });
        this.setAriaAttributes(item, dropdownContent, false);
      }
    }
  }

  setMediumOpen() {
    if (this.dropdownMediumOpen.length) {
      let dropdownItems = [];
      this.dropdownMediumOpen.forEach(
        key => dropdownItems.push(...key.querySelectorAll(this.dropdownCollapseLabel))
      );
      dropdownItems.forEach(key => this.resetMqMediumOpen(key));
    }
  }

  init() {
    this.dropdownItem.forEach(
      key => key.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleContent(key);
      }, false)
    );
    this.setMediumOpen();

    window.addEventListener('resize', () => {
      this.setMediumOpen();
    });
  }
}

new DropdownList();
