'use-strict'


function logError(error) {
  const a11yWrap = document.getElementById('a11y-test');
  const errorMsg = `<h2 class="a11y-test__error-msg">${error.name}</h2>
     <div class="a11y-test__error-preview">${error.message}</p>`;

  error.element.classList.add('a11y-test__error-element');
  console.log(`%c ${error.name}\n\n${error.message}`, 'color: #ff5252');
  a11yWrap.classList.add('a11y-test--error');
  a11yWrap.innerHTML += errorMsg;
}

document.addEventListener('DOMContentLoaded', function() {
  accessibilityjs.scanForProblems(document, logError)
});
