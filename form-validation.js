const form = document.querySelector("#contact-form");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const addressError = document.querySelector("#message-error");
const msg = "Thank you, we will get back to you as soon as posible";
/* const msgContainer = document.getElementById("succsess") */ function validateContactForm() {
  event.preventDefault();

  if (checkforErrors(name.value, 3) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
  if (checkforErrors(subject.value, 4) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }
  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  if (checkforErrors(message.value, 25) === true) {
    addressError.style.display = "none";
    document.getElementById("succsess").textContent = `${msg}`;
  } else {
    addressError.style.display = "block";
  }
}

form.addEventListener("submit", validateContactForm);

function checkforErrors(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
