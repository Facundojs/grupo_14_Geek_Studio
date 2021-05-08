let first_name = document.querySelector("#first_name");
let last_name = document.querySelector("#last_name");
let email = document.querySelector("#email");
let telephone = document.querySelector("#telephone");
let avatar = document.querySelector("#avatar");
let password = document.querySelector("#password");

first_name.addEventListener("keyup", function (e) {
  if (this.value.length < 2 && this.value.length > 0) {
    validacionIncorrecta(this);
  } else {
    validacionCorrecta(this);
  }
});

last_name.addEventListener("keyup", function (e) {
  if (this.value.length < 2 && this.value.length > 0) {
    validacionIncorrecta(this);
  } else {
    validacionCorrecta(this);
  }
});

email.addEventListener("keyup", function (e) {
  if (this.value.length < 8 && this.value.length > 0) {
    validacionIncorrecta(this);
  } else {
    validacionCorrecta(this);
  }
});

//-->

telephone.addEventListener("keyup", function (e) {
  let correctKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  if (parseInt(this.value) && parseInt(this.value) > 0) {
    validacionCorrecta(this);
  } else {
    validacionIncorrecta(this);
  }
  this.value.length == 0 && limpiarValidaciones(this);
});

password.addEventListener("keyup", function (e) {
  if (this.value.length < 8 && this.value.length > 0) {
    validacionIncorrecta(this);
  } else {
    validacionCorrecta(this);
  }
});

avatar.addEventListener("change", function (e) {
  console.log(this.value);
  let filePath = this.value;
  let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
  if (!allowedExtensions.exec(filePath)) {
    this.value = "";
    validacionIncorrecta(this);
  }
});

let validacionCorrecta = (elemento) => {
  elemento.classList.remove("validation-bad");
  elemento.classList.add("validation-success");
  let feedbackDiv = document.querySelector(`#feedback-${elemento.id}`);
  feedbackDiv.classList.add("hidden");
};
let validacionIncorrecta = (elemento) => {
  elemento.classList.add("validation-bad");
  elemento.classList.remove("validation-success");
  let feedbackDiv = document.querySelector(`#feedback-${elemento.id}`);
  feedbackDiv.classList.remove("hidden");
};
let limpiarValidaciones = (elemento) => {
  let feedbackDiv = document.querySelector(`#feedback-${elemento.id}`);
  feedbackDiv.classList.add("hidden");
};
