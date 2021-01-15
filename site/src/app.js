const express = require('express') ;
const path = require('path') ;
const app = express() ;
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.listen(3000, () => {
    console.log('|==================================================================|');
    console.log('|--------------Servidor corriendo en el puerto 3000----------------|');
    console.log('|==================================================================|');
});

app.get('/header' , (req,res) => {
    res.sendFile(path.join(__dirname, '/views/header.html'))
});

//Home
app.get('/' , (req,res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
});

app.get('/home' , (req,res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
    //Redirección
});

//Productos
app.get('/productos' , (req,res) => {
    res.sendFile(path.join(__dirname, '/views/products.html'))
});

//Detalle del producto
app.get('/detalle' , (req,res) => {
    res.sendFile(path.join(__dirname, '/views/detalle.html'))
});

//Carrito
app.get('/carro' , (req,res) => {
    res.sendFile(path.join(__dirname, '/views/carrito.html'))
});


//Login
app.get('/login' , (req,res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
});


//Registro
app.get('/registro' , (req,res) => {
    res.sendFile(path.join(__dirname, '/views/registro.html'))
});


//Recuperar contraseña
app.get('/recover-pass' , (req,res) => {
    res.sendFile(path.join(__dirname, '/views/recover-pass.html'))
});
