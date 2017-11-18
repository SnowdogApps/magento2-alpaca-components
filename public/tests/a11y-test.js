'use-strict'

let errors = [];

function logError(error) {
  errors.push(error);
  error.element.classList.add('accessibility-error');
  console.log(`%c ${error.name}\n\n${error.message}`, 'color: #ff5252');
  error.element.style.outline = '5px solid red';
  let errorMsg = `<h2 style="color:red;">${error.name}</h2>
     <div style="max-width: 500px;">${error.message}</p>`;

  document.getElementById('a11y-test').innerHTML += errorMsg;
}

function isSuccess() {
  let a11ySection = document.getElementById('a11y-test');
  let successMsg = `<h2 style="color:#31e37d;">There is no a11y erros! Well done!</h2>`
  return (errors.length === 0) ? a11ySection.innerHTML += successMsg : false;
}


document.addEventListener('DOMContentLoaded', function() {
  accessibilityjs.scanForProblems(document, logError)
});
