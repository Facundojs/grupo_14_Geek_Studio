const path = require('path');
const { body } = require('express-validator');

module.exports = [
	body('first_name').notEmpty().withMessage('Escribí tu primer nombre').bail(),
    body('surname').notEmpty().withMessage('Escribí tu apellido'),
    body('email').notEmpty().withMessage('Escribe una dirección de correo').bail()
        .isEmail().withMessage('Escribe una dirección de correo con un formato válido').bail(),
    body('telephone').notEmpty().withMessage('Escribe un número de teléfono').bail()
        .isNumeric().withMessage('Solo debes ingresar números').bail(),
    body('pass-1').notEmpty().withMessage('Escribe tu contraseña').bail()
        .isStrongPassword().withMessage('Tu contraseña no es suficientemente fuerte'),
    body('pass-2').notEmpty().withMessage('Repite tu contraseña').bail()
    .equals('pass-2'),

    // body('img').custom((value, { req }) => {
	// 	let file = req.file;
	// 	let acceptedExtensions = ['.jpg', 'jpeg', '.png', '.gif'];

	// 	if (!file) {
	// 		throw new Error('Tienes que subir una imagen');
	// 	} else {
	// 		let fileExtension = path.extname(file.originalname);
	// 		if (!acceptedExtensions.includes(fileExtension)) {
	// 			throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
	// 		}
	// 	}

	// 	return true;
	// })
]