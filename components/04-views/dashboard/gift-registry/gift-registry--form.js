'use static'

const hiddenForm = document.querySelector('.dashboard__form'),
      select     = document.querySelector('.dashboard__address select');

select.addEventListener('change', (event) => {
  if (event.detail.value === 'newAddress') {
    hiddenForm.classList.remove('dashboard__form--hidden');
  }
  else {
    hiddenForm.classList.add('dashboard__form--hidden');
  }
});
