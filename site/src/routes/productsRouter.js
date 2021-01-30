const express = require('express');
const router = express.Router();

const productController = require('../controllers/productsController')

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
