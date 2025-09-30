'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

function showMessage(text, extraClass = '') {
  const div = document.createElement('div');

  div.className = `message ${extraClass}`.trim();
  div.textContent = text;
  document.body.appendChild(div);
}

promise1
  .then(() => showMessage('Promise was resolved!'))
  .catch(() => showMessage('Promise was rejected!', 'error-message'));

promise2
  .then(() => showMessage('Promise was resolved!'))
  .catch(() => showMessage('Promise was rejected!', 'error-message'));
