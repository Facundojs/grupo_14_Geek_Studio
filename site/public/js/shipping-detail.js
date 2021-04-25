let botonMostrarEnvios = document.querySelector('#shipping-see');
let botonOcultarEnvios = document.querySelector('#cerrar-modal-envios')
let mostrarEnvios = document.querySelector('#shipping');


botonMostrarEnvios.addEventListener('click', function() {
    mostrarEnvios.style.display = 'block';
})

botonOcultarEnvios.addEventListener('click', function() {
    mostrarEnvios.style.display = 'none'
})

window.addEventListener('keyup', function() {
    e.key == 'Escape' ? aMostrar.style.display = 'none' : ''
})
