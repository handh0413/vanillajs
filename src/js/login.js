const username = document.getElementById('username');
const loginButton = document.getElementById('loginButton');
const loginContent = document.getElementById('loginContent');
const mainContent = document.getElementById('mainContent');

const HIDDEN_CLASS = 'hidden';
const USERNAME = 'username';

function onLoginClick(event) {
  event.preventDefault();
  localStorage.setItem(USERNAME, username.value);
  document.getElementById('hello').innerText = `👋반가워요! ${username.value}`;
  username.value = '';
  loginContent.classList.add(HIDDEN_CLASS);
  mainContent.classList.remove(HIDDEN_CLASS);
}

const savedUsername = localStorage.getItem(USERNAME);
if (savedUsername === null) {
  loginButton.addEventListener('click', onLoginClick);
  loginContent.classList.remove(HIDDEN_CLASS);
  document.body.opacity = '100%';
} else {
  mainContent.classList.remove(HIDDEN_CLASS);
  document.body.opacity = '80%';
}
