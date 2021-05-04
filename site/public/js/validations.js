// Create form
let productName = document.querySelector('#name');
let price = document.querySelector('#price');
let discount = document.querySelector('#discount');
let features = document.querySelector('#features');
let category = document.querySelector('#category');
let image = document.querySelector('#image');

productName.addEventListener('blur', function (e) {
    if (this.value.length <= 3 && this.value.length > 0) {
        validacionIncorrecta(this)
    } else if (this.value.length > 3) {
        validacionCorrecta(this)
    }
})
price.addEventListener('blur', function (e) {
    if (parseInt(this.value) && parseInt(this.value) != 0) {
        validacionCorrecta(this)
    } else {
        validacionIncorrecta(this)
    }
})
discount.addEventListener('blur', function (e) {
    if(parseInt(this.value) && parseInt(this.value) >= 0 && parseInt(this.value) < 100){
        validacionCorrecta(this)
    } else {
        validacionIncorrecta(this)
    }
    (this.value.length == 0 && limpiarValidaciones(this))
})
features.addEventListener('blur', function(e){
    if (this.value.length < 1) {
        validacionIncorrecta(this)
    } else {
        validacionCorrecta(this)
    }
})
category.addEventListener('change', function (e) {
    if (this.value != 0) {
        validacionCorrecta(this)
    } else {
        validacionIncorrecta(this)
    }
})
image.addEventListener('change', function (e) {
    console.log(this.value);
    let filePath = this.value;
    let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    if (!allowedExtensions.exec(filePath)) {
        this.value = '';
        validacionIncorrecta(this);
    }
})



let validacionCorrecta = (elemento) => {
    elemento.classList.remove("validation-bad")
    elemento.classList.add("validation-success")
    let feedbackDiv = document.querySelector(`#feedback-${elemento.id}`)
    feedbackDiv.classList.add("hidden")
}
let validacionIncorrecta = (elemento) => {
    elemento.classList.add("validation-bad")
    elemento.classList.remove("validation-success")
    let feedbackDiv = document.querySelector(`#feedback-${elemento.id}`)
    feedbackDiv.classList.remove("hidden")
}
let limpiarValidaciones = (elemento) => {
    let feedbackDiv = document.querySelector(`#feedback-${elemento.id}`)
    feedbackDiv.classList.add("hidden")
}