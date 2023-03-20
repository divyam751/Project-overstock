
const wrapper = document.querySelector(".wrapper"),
  signupHeader = document.querySelector(".signup header"),
  loginHeader = document.querySelector(".login header");

loginHeader.addEventListener("click", () => {
  wrapper.classList.add("active");
});
signupHeader.addEventListener("click", () => {
  wrapper.classList.remove("active");
});


// Store data in local storage when user submits signup form
const signupForm = document.querySelector('.form.signup form');
signupForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const user = {name, email, password};
  let users = localStorage.getItem('users');
  if (users) {
    users = JSON.parse(users);
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  } else {
    localStorage.setItem('users', JSON.stringify([user]));
  }
  alert('Signup successful!');
  signupForm.reset();
});

// Retrieve data from local storage when user submits login form
const loginForm = document.querySelector('.form.login form');
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.querySelector('#login_email').value;
  const password = document.querySelector('#login_password').value;
  const users = localStorage.getItem('users');
  if (users) {
    const parsedUsers = JSON.parse(users);
    const user = parsedUsers.find(u => u.email === email && u.password === password);
    if (user) {
      // alert('Login successful!');
      window.location.href = 'addresspage.html'
    } else {
      alert('Incorrect email or password. Please try again.');
    }
  } else {
    alert('No users found. Please sign up.');
  }
  loginForm.reset();
});
