const express = require('express');
const router = express.Router();

const productController = require('../controllers/productsController')

//Crud

router.get('/', productController.products);
router.get('/detalle', productController.detalle);//********// 
//router.get('/:id',);/**/
router.get('/crear', productController.create);
router.post('/crear', productController.store);
router.get('/:id/edit', productController.edit);
router.put('/:id', productController.update);
router.delete('/:id', productController.destroy);

//Otras
router.get('/carro', productController.carro);


module.exports = router;
