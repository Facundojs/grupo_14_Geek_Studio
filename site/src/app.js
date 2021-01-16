const express = require('express') ;
const app = express();
const path = require('path') ;


const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.set('view engine', 'ejs')

app.listen(3000, () => {
    console.log('|==================================================================|');
    console.log('|--------------Servidor corriendo en el puerto 3000----------------|');
    console.log('|==================================================================|');
});


app.get('/header' , (req,res) => {
    res.sendFile(path.join(__dirname, '/views/header.html'))
});

//Rutas
const mainRouter = require('./routes/mainRouter');
app.use('/' , mainRouter);

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
