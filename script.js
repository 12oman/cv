const quote = "Kia ora Taiao, kia ora Tangata, kia ora Te Ao Mārama.";
const email = "romanmitch@gmail.com";
let jumbledEmail = "";
let emailIndex = 0;

for (let i = 0; i < email.length; i++) {
  jumbledEmail += quote[emailIndex % quote.length];
  emailIndex++;
}

const emailElement = document.getElementById("email");
emailElement.textContent = jumbledEmail;

let currentEmail = jumbledEmail;
let currentEmailIndex = 0;
const intervalEmail = setInterval(() => {
  if (currentEmail === email) {
    clearInterval(intervalEmail);
    emailElement.innerHTML = `<a href="mailto:${email}">${email}</a>`;
  } else {
    currentEmail =
      currentEmail.slice(0, currentEmailIndex) +
      email[currentEmailIndex] +
      currentEmail.slice(currentEmailIndex + 1);
    emailElement.textContent = currentEmail;
    currentEmailIndex++;
  }
}, 100);

// Phone number jumbling and animation
const phone = "021 02288442";
let jumbledPhone = "";
let phoneIndex = 0;

for (let i = 0; i < phone.length; i++) {
  jumbledPhone += quote[phoneIndex % quote.length];
  phoneIndex++;
}

const phoneElement = document.getElementById("phone");
phoneElement.textContent = jumbledPhone;

let currentPhone = jumbledPhone;
let currentPhoneIndex = 0;
const intervalPhone = setInterval(() => {
  if (currentPhone === phone) {
    clearInterval(intervalPhone);
  } else {
    currentPhone =
      currentPhone.slice(0, currentPhoneIndex) +
      phone[currentPhoneIndex] +
      currentPhone.slice(currentPhoneIndex + 1);
    phoneElement.textContent = currentPhone;
    currentPhoneIndex++;
  }
}, 100);
