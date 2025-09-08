document.getElementById('contactForm').addEventListener('submit', function (e) {
e.preventDefault();
const name = document.getElementById("name");
const email= document.getElementById('email');
const message  =document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
nameError.textContent = '';
emailError.textContent = '';
messageError.textContent = '';
let isvalid = true;
if (name.value.trim() === '') {
nameError.textContent  ='Name is required.';
isvalid = false;
I
}
const emailPattern = /^[^ ]+[^ ]+\.[a-z]{2,3}$/;
if (email.value.trim() === '') {

emailError.textContent = 'Email is required.';
isvalid = false;
}else if (!emailPattern.test(email.value)) {
emailError.textContent = 'Please enter a valid email address.';
isvalid  =false;
}
if (message.value.trim().length < 10) {
messageError.textContent = 'Message must be at least 10 characters.';
isvalid = false;
}
if (isValid) {
alert('Form submitted successfully!');
this.reset();
}
});