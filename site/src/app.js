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

app.get('/' , (req,res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
});

// http://localhost:3000/header acá pueden agarrar head, header, main y footer, pegarlo en su archivo HTML
// Y ya les queda la pág. con las configuraciones y alineaciones, así solo trabajan el interior del main
app.get('/header' , (req,res) => {
    res.sendFile(path.join(__dirname, '/views/header.html'))
});


app.get('/detalle' , (req,res) => {
    res.sendFile(path.join(__dirname, '/views/detalle.html'))
});