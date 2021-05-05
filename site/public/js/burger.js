let button = document.querySelector('#burger');
let nav = document.querySelector('#nav-2')
button.addEventListener('click', () => {
    nav.style.display != "block" ? nav.style.display = 'block' : nav.style.display = 'none'  
})
