// Sign In Form
document.getElementById("signInForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = document.getElementById("InputEmail").value;
  const passwordInput = document.getElementById("InputPass");
  const showPasswordCheckbox = document.getElementById("showPassword");
  const isPasswordVisible = showPasswordCheckbox.checked;

  // Toggle password visibility based on the checkbox state
  passwordInput.type = isPasswordVisible ? "text" : "password";

  // Check the email and password for a successful login
  if (emailInput === "admin@mail.ru" && passwordInput.value === "123321") {
      alert("Successful Login!");
  } else {
      alert("Invalid email or password. Please try again.");
  }
});

// Toggle Sign In Password Visibility
document.getElementById("showPassword").addEventListener("change", function () {
  const passwordInput = document.getElementById("InputPass");
  passwordInput.type = this.checked ? "text" : "password";
});

// Sign Up Form
document.getElementById("signUpForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const signUpNameInput = document.getElementById("SignUpName").value;
  const signUpSurnameInput = document.getElementById("SignUpSurname").value;
  const signUpEmailInput = document.getElementById("SignUpEmail").value;
  const signUpPasswordInput = document.getElementById("SignUpPass").value;
  const signUpConfirmPasswordInput = document.getElementById("SignUpConfirmPass").value;

  // Check if passwords match
  if (signUpPasswordInput !== signUpConfirmPasswordInput) {
      alert("Passwords do not match. Please enter matching passwords.");
      return;
  }

  // Display registration information
  alert(`Registration successful!\nName: ${signUpNameInput}\nSurname: ${signUpSurnameInput}\nEmail: ${signUpEmailInput}\nPassword: ${signUpPasswordInput}`);
});

// Toggle Sign Up Password Visibility
document.getElementById("showSignUpPassword").addEventListener("change", function () {
  const signUpPasswordInput = document.getElementById("SignUpPass");
  signUpPasswordInput.type = this.checked ? "text" : "password";
});
