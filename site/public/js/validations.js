// Create form

let productName = document.querySelector('#name');
let price = document.querySelector('#price');
let discount = document.querySelector('#discount');
let features = document.querySelector('#features');
let category = document.querySelector('#category');
let image = document.querySelector('#image');

productName.addEventListener('keyup', function(e){
    if (this.value >= 3) {
        
    }
})
price.addEventListener('keyup', function (e) {
    if (this.value > 99 && this.value != 0) {
        price.classList.add('form-error');
        price.classList.remove('form-success');
    } else {
        price.classList.add('form-success');
        price.classList.remove('form-error');
    }
    if (this.value.length < 1) {
        price.classList.remove('form-success');
        price.classList.remove('form-error');
    }
    // if (typeof this.value != Number && this.value != 0) {
    //     price.classList.add('form-error')
    // } else {
    //     price.classList.add('form-success')
    // }   
})
discount.addEventListener('keyup', function(e){
    console.log(e);
})
features.addEventListener('keyup', function(e){
    console.log(e);
})
