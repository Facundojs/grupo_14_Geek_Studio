const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

//Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateCreateProductMiddleware');

router.get('/index', userController.index);
router.get('/login', userController.login);
router.get('/create',userController.create); //router.get('/register',userController.register);
router.post('/create', userController.processRegister);

//router.post('/', userController.store); //post para grabar
router.get('/:id/edit', userController.edit); //get para mostrar
//Edit
//router.get('/:id/show', userController.edit); //get para editar
router.put('/:id', userController.update); //post para editar

//Eliminar
router.delete('/:id', userController.destroy); // Eliminar un usuario

router.get('/recover-pass', userController.recoverPass);
//

module.exports = router;

