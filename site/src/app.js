const express = require('express') ;
const app = express();
const path = require('path') ;

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.set('view engine', 'ejs');
<<<<<<< HEAD
// app.set('views', '../src/views');
=======
//app.set('views', '../src/views');
>>>>>>> 1fd5fb3dfc69d0e7ace044c1e538e2004a9bac56

app.listen(process.env.PORT || 3000, () => {
    console.log('|==================================================================|');
    console.log('|--------------Servidor corriendo en el puerto 3000----------------|');
    console.log('|==================================================================|');
});

/************************************************************************************/ 

//Main
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
