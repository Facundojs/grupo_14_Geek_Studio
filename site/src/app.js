const express = require('express') ;
const path = require('path') ;
const app = express() ;
const publicPath = path.join(__dirname, '/public');
app.use(express.static(publicPath));


app.get('/' , (req,res) => {
    res.sendFile(path.resolve(__dirname, '/views/home.html'))
});
// http://localhost:3000/header

// Hice este archivo HTML&CSS solo para que queden el header&footer en formato fácil de copiar
app.get('/header' , (req,res) => {
    res.sendFile(path.join(__dirname, '/views/header.html'))
});

app.listen(3000, () => {
    console.log('|==================================================================|');
    console.log('|--------------Servidor corriendo en el puerto 3000----------------|');
    console.log('|==================================================================|');
});

//console.log(publicPath);