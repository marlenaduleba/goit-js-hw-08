import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const { email, message } = form;
const LOCALSTORAGE_KEY = 'feedback-form-state';
let storage = {};
let savedObject = {};
const storageString = localStorage.getItem(LOCALSTORAGE_KEY);
const storageObject = JSON.parse(storageString);

if (storageString !== null) {
  email.value = storageObject.email;
  message.value = storageObject.message;
  savedObject.email = storageObject.email;
  savedObject.message = storageObject.message;
}

form.addEventListener('input', throttle(saveObject, 500));

function saveObject(event) {
  storage.email = email.value;
  storage.message = message.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(storage));
}

form.addEventListener('submit', e => {
  e.preventDefault();
  savedObject.email = email.value;
  savedObject.message = message.value;
  console.log(savedObject);
  form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
});
