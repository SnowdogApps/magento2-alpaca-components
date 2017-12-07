'use strict'

const components = [...document.querySelectorAll('.file-upload')];

components.forEach(component => {
  const input  = component.querySelector('.file-upload__input'),
        name   = component.querySelector('.file-upload__name'),
        button = component.querySelector('span[role="button"]');

  input.addEventListener('change', file => {
    const filePath = file.target.value,
          fileName = filePath.split('\\').pop();

    if (fileName) {
      name.innerHTML = fileName;
    }
    else {
      name.innerHTML = name.dataset.defaultText;
    }
    name.focus();
  });

  button.addEventListener('keypress', function(e){
    if(e.which === 32 || e.which === 13){
      input.click();
    }
  });
})
