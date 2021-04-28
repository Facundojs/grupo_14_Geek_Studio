window.addEventListener('load', function() {
    if (localStorage.getItem('locals.userLogged.frst_name')) {
        console.log(locals.userLogged.frst_name)
        document.querySelector('.welcome').innerHTML = 'Hola ' + locals.userLogged.frst_name
        document.querySelector('.welcome').style.display = 'block'
    }
})