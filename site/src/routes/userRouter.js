const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

//Multer
//Solo es la config, falta agregar a la ruta y configurar los controladores
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../../public/img/users/'));
    },
    filename: (req, file, callback) => {
        //console.log(file);
        // https://www.npmjs.com/package/uuidv4
        callback(null, 'user-img' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

//Crud
router.get('/login', userController.login)
router.get('/register',userController.register)
router.get('/recover-pass', userController.recoverPass);

module.exports = router;

