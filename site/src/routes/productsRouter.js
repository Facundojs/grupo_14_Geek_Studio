const express = require('express');
const router = express.Router();

const productController = require('../controllers/productRouter');

router.get('/productos')