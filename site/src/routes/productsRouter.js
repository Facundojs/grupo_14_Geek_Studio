const express = require('express');
const router = express.Router();

const productController = require('../controllers/productsController')


//Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateCreateProductMiddleware');

//Otras
router.get('/chart', productController.chart);

//Crud
router.get('/', productController.index);//Done
router.get('/crear', productController.create);// Formulario de creación
router.get('/:id', productController.show);// Detalle del producto (Terminado)
router.post('/crear', uploadFile.single('image'), validations, productController.store); //Proceso de Formulario (Terminado)
router.get('/:id/editar', productController.edit); // Formulario de edición
router.put('/:id', uploadFile.single('image'),productController.update); // Proceso de edición (Terminado)
router.delete('/:id', productController.destroy); // Proceso de eliminar un producto

    

module.exports = router;
