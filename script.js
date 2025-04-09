const quote = "Kia ora Taiao, kia ora Tangata, kia ora Te Ao Mārama.";
const email = "roman@hey.com";
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

// Check for saved theme preference, otherwise use dark
const getPreferredTheme = () => {
  const saved = localStorage.getItem("theme");
  if (saved) {
    return saved;
  }
  return "dark"; // Default to dark
};

// Apply theme to document
const applyTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  // Update toggle button text
  const toggle = document.getElementById("theme-toggle");
  toggle.textContent = theme === "light" ? "" : ""; // experiment with this
};

// Initialize theme
document.addEventListener("DOMContentLoaded", () => {
  // Apply initial theme
  applyTheme(getPreferredTheme());

  // Add toggle button listener
  const toggle = document.getElementById("theme-toggle");
  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  });
});
