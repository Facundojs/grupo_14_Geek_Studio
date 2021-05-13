const path = require("path");
const { body } = require("express-validator");
const db = require("../../../database/models");
const bcryptjs = require("bcryptjs");

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
      .custom(async (value, { req }) => {
        let updatedUser = await db.User.findOne({
          where: {
            id: req.params.id,
          }
        })
        const ignorePassword = updatedUser.dataValues.id != req.session.userLogged.id;
        console.log(ignorePassword)
        if (ignorePassword) {
          console.log('Ignorando...');
          return true  
        } else {
          let id = parseInt(req.params.id);
          let {dataValues} = await db.User.findOne({
              where:{id: id}
          })
          let okPassword = bcryptjs.compareSync(
              req.body.password,
            dataValues.password
          )
          if (!okPassword) {
              throw new Error("La contraseña es incorrecta");
          } else {
            return true
          }
        }
      }),
    body("country").not().contains('Selecciona un país').withMessage('Selecciona un país').bail(),
    body("avatar").custom((value, { req }) => {
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
  