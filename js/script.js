const nameError=document.getElementById("name-error");
const phoneError=document.getElementById("phone-error");
const emailError=document.getElementById("email-error");
const messageError=document.getElementById("message-error");
 const submitError=document.getElementById("submit-error");

// function validateName(){
//   let name=document.getElementById("contact-name").value;

//   if(name===""){
//     nameError.innerHTML ="Name is required";
//     return false;
//   }
//   if(!name.match(/^[A-Za-z]*s{1}[A-Za-z]*&/)){
//     nameError.innerHTML="Write full name";
//     return false;
//   }
//   nameError.innerHTML="valid";
//   return true
// }
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault(); // Formani avtomatik jo'natishdan to'xtatadi
  if (validateForm()) {
    document.getElementById('submit-error').innerText = 'Form successfully submitted!';
  }
});

function validateForm() {
  let isValid = true;
  if (!validateName()) isValid = false;
  if (!validatePhone()) isValid = false;
  if (!validateEmail()) isValid = false;
  if (!validateMessage()) isValid = false;
  return isValid;
}

function validateName() {
  const name = document.getElementById('contact-name').value.trim();
  const nameError = document.getElementById('name-error');
  if (name === '') {
    nameError.innerText = 'Name is required';
    return false;
  } else {
    nameError.innerText = '';
    return true;
  }
}

function validatePhone() {
  const phone = document.getElementById('phone').value.trim();
  const phoneError = document.getElementById('phone-error');
  const phonePattern = /^\d{3} \d{3} \d{4}$/;
  if (!phonePattern.test(phone)) {
    phoneError.innerText = 'Invalid phone format (e.g., 123 456 7890)';
    return false;
  } else {
    phoneError.innerText = '';
    return true;
  }
}

function validateEmail() {
  const email = document.getElementById('email').value.trim();
  const emailError = document.getElementById('email-error');
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    emailError.innerText = 'Invalid email format';
    return false;
  } else {
    emailError.innerText = '';
    return true;
  }
}

function validateMessage() {
  const message = document.getElementById('message').value.trim();
  const messageError = document.getElementById('message-error');
  if (message === '') {
    messageError.innerText = 'Message is required';
    return false;
  } else {
    messageError.innerText = '';
    return true;
  }
}
