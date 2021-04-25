let botonMostrar = document.querySelector('#dues-see');
let botonOcultar = document.querySelector('#cerrar-modal')
let mostrarCuotas = document.querySelector('#dues');

botonMostrar.addEventListener('click', function() {
    mostrarCuotas.style.display = 'block';
})

botonOcultar.addEventListener('click', function() {
    mostrarCuotas.style.display = 'none'
})

window.addEventListener('keyup', function() {
    e.key == 'Escape' ? aMostrar.style.display = 'none' : ''
})
