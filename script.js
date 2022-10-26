const form = document.querySelector(".form");
const fName = form.querySelector(".fName");
const lName = form.querySelector(".lName");
const email = form.querySelector(".email");
const password = form.querySelector(".password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});
function validateForm() {
  if (fName.value == "") {
    setError(fName);
  } else {
    setSuccess(fName);
  }

  validateEmail(email.value) ? setSuccess(email) : setError(email);

  if (lName.value === "") {
    setError(lName);
  } else {
    setSuccess(lName);
  }
  if (password.value == "") {
    setError(password);
  } else {
    setSuccess(password);
  }
}

function setSuccess(x) {
  x.parentElement.querySelector(".check").classList.remove("opacity-0");
  x.parentElement.querySelector(".error").classList.add("opacity-0");
  x.classList.add("border-green-10");
  x.classList.remove("border-red");
}
function setError(x) {
  x.parentElement.querySelector(".error").classList.remove("opacity-0");
  x.parentElement.querySelector(".check").classList.add("opacity-0");
  x.classList.add("border-red");
  x.classList.remove("border-green-10");
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
