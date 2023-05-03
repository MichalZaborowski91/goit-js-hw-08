'use strict';
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[name="email"]');
const messageInput = document.querySelector('[name="message"]');

form.addEventListener('input', throttle(saveFormInput, 500));
form.addEventListener('submit', submitForm);

let dataForm = {};
checkStorage();

function saveFormInput() {
  const dataInput = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(dataInput));
  dataForm = dataInput;
}

function submitForm(event) {
  event.preventDefault();
  if (!event.target.email.value || !event.target.message.value) {
    alert('Please enter values: email and message');
    return;
  }
  event.target.reset();
  console.log(dataForm);
  localStorage.removeItem('feedback-form-state');
}

function checkStorage() {
  const loadCheckedStorae = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  if (!loadCheckedStorae) {
    return;
  }
  dataForm = loadCheckedStorae;
  form.email.value = dataForm.email || '';
  form.message.value = dataForm.message || '';
}
