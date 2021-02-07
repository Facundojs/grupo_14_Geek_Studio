const path = require('path');
const { body } = require('express-validator');

module.exports = [
	body('productName').notEmpty().withMessage('Tienes que escribir un nombre de producto').bail(),
    body('features').notEmpty().withMessage('Debes poner las características del producto'),
	body('price').notEmpty().withMessage('Debes poner un precio'),
	body('category').notEmpty().withMessage('Debes elegir una categoría'),
    body('image').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', 'jpeg', '.png', '.gif'];

		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
]