document.getElementById("login-submit").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const passwordField = document.getElementById("user-password");

  if (
    emailField.value == "shishir@gmail.com" &&
    passwordField.value == "secret"
  ) {
    window.location.href = "banking.html";
  }
});
