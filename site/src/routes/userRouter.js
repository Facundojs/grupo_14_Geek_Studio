const express = require("express");
const router = express.Router();

// const userController = require("../controllers/userController");
const userController2 = require("../controllers/userController2");

const multer = require("multer");

//Middlewares
const uploadFile = require("../middlewares/multerUserMiddleware");
const validations = require("../middlewares/validateRegisterMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const isAdminMiddleware = require("../middlewares/isAdminMiddleware")



//Rutas
router.get("/index", isAdminMiddleware, userController2.index);

//Paso middleware para validar si la sesion esta iniciada no permita volver a loguarse
router.get("/login", guestMiddleware, userController2.login);
router.post("/login", userController2.loginProcess); //Proceso el login

//Paso middleware para validar si la sesion esta iniciada no permita volver a registrarse
router.get("/create", guestMiddleware, userController2.create); //router.get('/register',userController.register);

router.post(
  "/create",
  uploadFile.single("avatar"), //uploadFile.single("avatar"),
  validations, // KBE - AGREGAR
  userController2.processRegister
);

router.get("/profile", authMiddleware, userController2.profile);

router.get("/:id/edit", userController2.edit); //get para mostrar

router.put(
  "/:id",
  uploadFile.single("avatar"),
  validations,
  userController2.update
); //post para editar

router.delete("/:id", userController2.destroy); // Eliminar un usuario

router.get("/recover-pass", userController2.recoverPass);

router.get("/logout", userController2.logout);

module.exports = router;
