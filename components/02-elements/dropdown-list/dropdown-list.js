'use strict';

class DropdownList {
  constructor(element) {
    this.element = element;
    this.dropdownCollapseLabel = '.dropdown-list__item--collapse > .dropdown-list__label';
    this.dropdownItem = [...this.element.querySelectorAll(this.dropdownCollapseLabel)];
    this.contentClass = 'dropdown-list__content';
    this.mq = '(min-width: 768px)';
    this.mqClass = 'dropdown-list--is-open@screen-m';
    this.dropdownMediumOpen = this.element.classList.contains(this.mqClass);
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
      this.removeAriaAttributes(item, dropdownContent);
    }
    else {
      this.setAriaAttributes(item, dropdownContent, true);
      item.disabled = false;
    }
  }

  toggleContent(trigger, dropdownContent, closing) {
    const dropdownBlock = trigger.closest('.dropdown-list');

    if (!this.isMediumOpen(dropdownBlock)) {
      if (dropdownContent.clientHeight > 0) {
        this.setAriaAttributes(trigger, dropdownContent, true);
        trigger.focus();
      }
      else if (!closing) {
        this.setAriaAttributes(trigger, dropdownContent, false);
      }
    }
  }

  setMediumOpen() {
    if (this.dropdownMediumOpen) {
      let dropdownItems = [...this.element.querySelectorAll(this.dropdownCollapseLabel)];
      dropdownItems.forEach(key => this.resetMqMediumOpen(key));
    }
  }

  init() {
    this.dropdownItem.forEach(key => {
      const dropdownId = key.getAttribute('aria-controls'),
            dropdownContent = document.getElementById(dropdownId);

      key.addEventListener('click', e => {
        e.preventDefault();
        this.toggleContent(key, dropdownContent);
      }, false);

      [key, dropdownContent].forEach(el => el.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
          this.toggleContent(key, dropdownContent, true);
        }
      }));
    });

    this.setMediumOpen();

    window.addEventListener('resize', () => {
      this.setMediumOpen();
    });
  }
}

new DropdownList(document.querySelector('.dropdown-list'));
