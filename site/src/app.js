const express = require('express') ;
const path = require('path') ;
const { products } = require('./controllers/productsController');
const app = express();

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.set('view engine', 'ejs')

app.listen(3000, () => {
    console.log('|==================================================================|');
    console.log('|--------------Servidor corriendo en el puerto 3000----------------|');
    console.log('|==================================================================|');
});

//Home
const mainRouter = require('./routes/mainRouter')
app.use('/', mainRouter)

/************************************************************************************/ 

//Productos
const productsRouter = require('./routes/productsRouter')
app.use('/productos', productsRouter);

/************************************************************************************/ 

//Login
const userRouter = require('./routes/userRouter')
app.use('/user', userRouter);
