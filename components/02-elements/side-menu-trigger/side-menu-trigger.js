'use static'

const sideMenuTrigger   = document.querySelector('.side-menu-trigger'),
      sideMenuContainer = document.querySelector('.side-menu'),
      triggerText       = document.querySelector('.side-menu-trigger__text'),
      triggerLines      = document.querySelectorAll('.side-menu-trigger__line');

sideMenuTrigger.addEventListener('click', () => {
  sideMenuTrigger.classList.toggle('side-menu-trigger--close');
  triggerText.classList.toggle('side-menu-trigger__text--close');

  triggerLines.forEach(item => {
    item.classList.toggle('side-menu-trigger__line--close');
  });
});

sideMenuTrigger.addEventListener('click', () => {
  sideMenuContainer.classList.toggle('side-menu--is-open');
});
