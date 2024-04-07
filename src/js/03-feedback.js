import _ from 'lodash';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name=email]');

const data = {
  email: '',
  message: '',
};
console.log(email);
const dataStorage = JSON.parse(localStorage.getItem('feedback-form-state'));
if (dataStorage.email !== '') {
  email.value = dataStorage.email;
}

form.addEventListener('input', e => {
  if (e.target.name === 'email') {
    data.email = e.target.value;
  }
  if (e.target.name === 'message') {
    data.message = e.target.value;
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
});
