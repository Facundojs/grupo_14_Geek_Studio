<<<<<<< HEAD
const path = require("path");
const { body } = require("express-validator");

module.exports = [
  body("first_name")
    .notEmpty()
    .withMessage("Tienes que escribir tu nombre")
    .bail(),
  body("surname")
    .notEmpty()
    .withMessage("Tienes que escribir tu apellido")
    .bail(),
  body("email")
    .notEmpty()
    .withMessage("Tienes que escribir tu E-mail")
    .bail()
    .isEmail()
    .withMessage("Tienes que escribir un formato de correo válido"),
  body("password")
    .notEmpty()
    .withMessage("Tienes que escribir tu Clave")
    .bail(),
  body("userImg").custom((value, { req }) => {
    console.log("entrre middleware", req);
    let file = req.file;
    let acceptedExtensions = [".jpg", ".png", ".gif"];
    let fileExtension = path.extname(file.originalname);

    if (!file) {
      throw new Error("Tienes que subir una imagen ");
    } else {
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones de archivos permitidas son ${acceptedExtensions.join(
            ", "
          )}`
        );
      }
    }
    return true;
  }),
];
=======
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
>>>>>>> d589fb1ff1a2b0f58cba2cbf81c52acca26409aa
