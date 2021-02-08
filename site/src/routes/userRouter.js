const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

//Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateCreateProductMiddleware');

router.get('/index', userController.index);
router.get('/login', userController.login);
router.get('/crear',userController.crear); //router.get('/register',userController.register);
router.post('/', userController.store); //post para grabar
router.get('/:id', userController.show); //get para mostrar

//Edit
router.get('/:id/edit', userController.edit); //get para editar
router.post('/:id/edit', userController.update); //post para editar

//router.delete('/borrando', productController.destroy);

router.get('/recover-pass', userController.recoverPass);

module.exports = router;

