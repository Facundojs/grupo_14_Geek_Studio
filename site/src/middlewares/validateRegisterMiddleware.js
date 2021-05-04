const path = require("path");
const { body } = require("express-validator");

module.exports = [
  body("first_name")
    .notEmpty()
    .withMessage("Tienes que escribir tu nombre")
    .bail(),
  body("last_name")
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
  body("country").not().contains('Selecciona un país').withMessage('Selecciona un país').bail(),
  body("avatar").custom((value, { req }) => {
    // let file = req.file;
    let acceptedExtensions = [".jpg", ".png", ".gif"];
    
    if (!req.file) {
      throw new Error("Tienes que subir una imagen ");
    } else {
      let fileExtension = path.extname(req.file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones de archivos permitidas son ${acceptedExtensions.join(
            ", "
          )}`
        );
      } else {
        return true;
      }
    }
  }),
];
