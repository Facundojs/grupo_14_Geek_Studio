const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsController')

//Multer
//Solo es la config, falta agregar a la ruta y configurar los controladores
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../../public/img/products/'));
    },
    filename: (req, file, callback) => {
        //console.log(file);
        // https://www.npmjs.com/package/uuidv4
        callback(null, 'product-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

//Crud
router.get('/', productController.products);
router.get('/detalle', productController.detalle);//********// 
//router.get('/:id',);/**/
router.get('/crear', productController.create);
router.post('/crear', productController.store);
router.get('/:id/editar', productController.edit);
router.put('/editando', productController.update);
router.delete('/borrando', productController.destroy);

//Otras
router.get('/carro', productController.carro);


module.exports = router;
