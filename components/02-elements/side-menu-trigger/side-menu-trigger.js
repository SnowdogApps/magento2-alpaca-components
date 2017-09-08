'use static'

const header            = document.querySelector('header.header'),
      sideMenuTrigger   = header.querySelector('.side-menu-trigger'),
      sideMenuContainer = header.querySelector('.side-menu'),
      triggerIcon       = header.querySelector('.side-menu-trigger__icon'),
      triggerText       = header.querySelector('.side-menu-trigger__text'),
      triggerLines      = header.querySelectorAll('.side-menu-trigger__line');

sideMenuTrigger.addEventListener('click', () => {
  if (triggerIcon) {
    const childrens = triggerIcon.childNodes;

    childrens.forEach(children => {
      if (children.nodeName === 'use') {
        children.classList.toggle('side-menu-trigger__icon--hide');
      }
    });
  }
  else {
    sideMenuTrigger.classList.toggle('side-menu-trigger--close');
    triggerText.classList.toggle('side-menu-trigger__text--close');

    triggerLines.forEach(item => {
      item.classList.toggle('side-menu-trigger__line--close');
    });
  }
});

sideMenuTrigger.addEventListener('click', () => {
  header.classList.toggle('header--menu-open');
  sideMenuContainer.classList.toggle('side-menu--is-open');
});
