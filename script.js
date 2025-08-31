const regExUsername = /^\w{2,8}$/;
const regExEmail = /^[\w%.+-]+@[a-z_.]+\.[a-z]{2,}$/i;
const regExPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{6,20}$/;

const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

const usernameMessage = document.getElementById('username-message');
const emailMessage = document.getElementById('email-message');
const passwordMessage = document.getElementById('password-message');

username.addEventListener('input', () => {
  if (!username.value) {
    username.classList.remove('border-green');
    username.classList.remove('border-red');
    usernameMessage.style.color = "#b1b1b1";
  } else if (regExUsername.test(username.value) === true) {
    setTimeout(() => {
      username.classList.add('border-green');
      username.classList.remove('border-red');
      usernameMessage.style.color = "#b1b1b1";
    }, 1000);
  } else {
    setTimeout(() => {
      username.classList.add('border-red');
      username.classList.remove('border-green');
      usernameMessage.style.color = "rgb(250, 1, 1)";
    }, 1000);
  }
});

email.addEventListener('input', () => {
  if (!email.value) {
    email.classList.remove('border-green');
    email.classList.remove('border-red');
    emailMessage.style.color = "#b1b1b1";
  } else if (regExEmail.test(email.value) === true) {
    setTimeout(() => {
      email.classList.add('border-green');
      email.classList.remove('border-red');
      emailMessage.style.color = "#b1b1b1";
    }, 1000);
  } else {
    setTimeout(() => {
      email.classList.add('border-red');
      email.classList.remove('border-green');
      emailMessage.style.color = "rgb(250, 1, 1)";
    }, 1000);
  }
});

password.addEventListener('input', () => {
  if (!password.value) {
    password.classList.remove('border-green');
    password.classList.remove('border-red');
    passwordMessage.style.color = "#b1b1b1";
  } else if (regExPassword.test(password.value) === true) {
    setTimeout(() => {
      password.classList.add('border-green');
      password.classList.remove('border-red');
      passwordMessage.style.color = "#b1b1b1";
    }, 1000);
  } else {
    setTimeout(() => {
      password.classList.add('border-red');
      password.classList.remove('border-green');
      passwordMessage.style.color = "rgb(250, 1, 1)";
    }, 1000);
  }
});
