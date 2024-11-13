const form = document.querySelector("form");

function doesContainNumber(str) {
  return str.split("").some((e) => Number(e));
}

function handleSubmit(event) {
  let userNameError = "";
  let userError = "";
  let emailError = "";
  let phoneError = "";
  let confirmPasswordError = "";

  event.preventDefault();
  let userNameEle = event.target.elements.userName;
  if (userNameEle.value === "") {
    userNameError = "Can't be empty";
  } else if (userNameEle.value.length < 5) {
    userNameError = "username cant be less than 5 characters";
  }
  userNameEle.nextElementSibling.innerText = userNameError;

  let user = event.target.elements.name;

  if (user.value === "") {
    userError = "User name can't be empty ";
  } else if (doesContainNumber(user.value)) {
    userError = "Cant contain a number";
  }
  user.nextElementSibling.innerText = userError;

  let email = event.target.elements.email;
  if (email.value === "") {
    emailError = "Email cant be empty";
  } else if (email.value.split("@")[0].length <= 6) {
    emailError = "Email cant be less than 6 characters";
  }
  email.nextElementSibling.innerText = emailError;

  let phoneEle = event.target.elements.PhoneNumber;

  if (!Number(phoneEle.value)) {
    phoneError = "Phone number can only contain numbers";
  } else if (phoneEle.value.length < 7) {
    phoneError = "Phone number should be greater that 7";
  }
  phoneEle.nextElementSibling.innerText = phoneError;

  let password = event.target.elements.passowrd;
  let confirmPassword = event.target.elements.confirmPassword;
  

  if (password !== confirmPassword) {
    confirmPasswordError = "Password and confirm password not same";
  }
  confirmPassword.nextElementSibling.innerText = confirmPasswordError;
}

form.addEventListener("submit", handleSubmit);
