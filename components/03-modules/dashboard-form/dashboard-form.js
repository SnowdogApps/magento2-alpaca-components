'use strict'

const checkboxPassword = document.querySelector('input#changePassword'),
      checkboxEmail    = document.querySelector('input#changeEmail'),
      confirmPassword  = document.querySelector('.confirmPassword'),
      email            = document.querySelector('.email'),
      fields           = document.querySelector('.dashboard-form__fields'),
      newPassword      = document.querySelector('.newPassword'),
      password         = document.querySelector('.password'),
      title            = document.querySelector('.dashboard-form__title-form');


checkboxEmail.addEventListener('change', () => {
  if (checkboxPassword.checked && checkboxEmail.checked) {
    title.innerHTML = 'Change Email and Password';

    email.classList.remove('dashboard-form--hidden');
    password.classList.remove('dashboard-form--hidden');
    newPassword.classList.remove('dashboard-form--hidden');
    confirmPassword.classList.remove('dashboard-form--hidden');
  }
  else if (checkboxPassword.checked && !checkboxEmail.checked) {
    title.innerHTML = 'Change Password';

    email.classList.add('dashboard-form--hidden');
    password.classList.remove('dashboard-form--hidden');
    newPassword.classList.remove('dashboard-form--hidden');
    confirmPassword.classList.remove('dashboard-form--hidden');
  }
  else {
    fields.classList.toggle('dashboard-form--hidden');
    title.innerHTML = 'Change Email';

    email.classList.remove('dashboard-form--hidden');
    password.classList.remove('dashboard-form--hidden');
    newPassword.classList.add('dashboard-form--hidden');
    confirmPassword.classList.add('dashboard-form--hidden');
  }
});

checkboxPassword.addEventListener('change', () => {
  if (checkboxEmail.checked && checkboxPassword.checked) {
    title.innerHTML = 'Change Email and Password';

    email.classList.remove('dashboard-form--hidden');
    password.classList.remove('dashboard-form--hidden');
    newPassword.classList.remove('dashboard-form--hidden');
    confirmPassword.classList.remove('dashboard-form--hidden');
  }
  else if (checkboxEmail.checked && !checkboxPassword.checked) {
    title.innerHTML = 'Change Email';

    email.classList.remove('dashboard-form--hidden');
    password.classList.remove('dashboard-form--hidden');
    newPassword.classList.add('dashboard-form--hidden');
    confirmPassword.classList.add('dashboard-form--hidden');
  }
  else {
    fields.classList.toggle('dashboard-form--hidden');
    title.innerHTML = 'Change Password';

    email.classList.add('dashboard-form--hidden');
    password.classList.remove('dashboard-form--hidden');
    newPassword.classList.remove('dashboard-form--hidden');
    confirmPassword.classList.remove('dashboard-form--hidden');
  }
});
