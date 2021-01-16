const express = require('express');
const router = express.Router();

const productController = require('../controllers/productsController')

router.get('/', productController.products);
router.get('/carro', productController.carro);
router.get('/detalle', productController.detalle);


module.exports = router;
