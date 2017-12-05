'use strict'

const components = [...document.querySelectorAll('.file-upload')];

components.forEach(component => {
  const input = component.querySelector('.file-upload__input'),
        name  = component.querySelector('.file-upload__name');

  input.addEventListener('change', file => {
    const filePath          = file.target.value,
          fileName       = filePath.split('\\').pop();

    if (fileName) {
      name.innerHTML = fileName;
    }
    else {
      name.innerHTML = name.dataset.defaultText;
    }
  });
})

