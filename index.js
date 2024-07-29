let firstName;
let lastName;
let tel;
let email;
let preferedUsername;
let password;
let rePassword;
let displayer;

document.getElementById('signupBtn').onclick = function(){
  firstName = document.getElementById('firstName').value;
  console.log(firstName);

  lastName = document.getElementById('lastName').value;
  console.log(lastName);
  
  tel = document.getElementById('tel').value;
  console.log(tel);

  preferedUsername = document.getElementById('preferedUsername').value;
  console.log(preferedUsername);

  email = document.getElementById('email').value;
  console.log(email);

  password = document.getElementById('password').value;
  console.log(password);

  rePassword = document.getElementById('rePassword').value;
  console.log(rePassword);

  displayer = document.getElementById('displayer').innerHTML = ('Successful!');
}
