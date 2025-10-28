var password = document.getElementById("password"),
    confirm_password = document.getElementById("confirmpassword");

function validatePassword() {
  if (password.value !== confirm_password.value) {
    confirm_password.setCustomValidity("As senhas não coincidem!");
    confirm_password.style.border = "2px solid red";
  } else {
    confirm_password.setCustomValidity('');
    confirm_password.style.border = "2px solid green";
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;