const express = require('express');
const router = express.Router();

const productController = require('../controllers/productsController')

router.get('/', productController.products);
router.get('/carro', productController.carro);
router.get('/crear', productController.create);
router.get('/detalle', productController.detalle);
router.get('/productscrud', productController.productscrud);


module.exports = router;
