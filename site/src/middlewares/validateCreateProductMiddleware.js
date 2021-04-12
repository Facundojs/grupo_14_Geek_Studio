const path = require('path');
const { body } = require('express-validator');
const db = require('../../../database/models') 

// let existinDb = async function (category){
// 	let exist = await db.Category.findOne({where:{id: parseInt(body.category_id)}}) 
// 	return exist
// };
	
module.exports = [
	body('name').notEmpty().withMessage('Tienes que escribir un nombre de producto').bail(),
    body('features').notEmpty().withMessage('Debes poner las características del producto'),
	body('price').notEmpty().withMessage('Debes poner un precio'),
	body('category')
		.notEmpty().withMessage('Debes elegir una categoría').bail()
		.custom(async(value, { req }) => {
			let exist = await db.Category.findOne({where:{id: parseInt(req.body.category)}}) 
			if (exist) { return true } else { throw new Error('Debes elegir una categoría válida')
				
			}
		}).withMessage('Debes elegir una categoría válida').bail()
	,
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