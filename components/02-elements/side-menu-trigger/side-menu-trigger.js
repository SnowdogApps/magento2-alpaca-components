'use static'

const sideMenuTrigger   = document.querySelector('.side-menu-trigger'),
      sideMenuContainer = document.querySelector('.side-menu'),
      triggerIcon       = document.querySelector('.side-menu-trigger__icon'),
      triggerText       = document.querySelector('.side-menu-trigger__text'),
      triggerLines      = document.querySelectorAll('.side-menu-trigger__line');

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
  sideMenuContainer.classList.toggle('side-menu--is-open');
});
