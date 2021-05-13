const express = require("express");
const router = express.Router();

// const userController = require("../controllers/userController");
const userController = require("../controllers/userController");
const validateEditUserMiddleware = require("../middlewares/validateEditUserMiddleware");
const multer = require("multer");

//Middlewares
const uploadFile = require("../middlewares/multerUserMiddleware");
const validations = require("../middlewares/validateRegisterMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const isAdminMiddleware = require("../middlewares/isAdminMiddleware");

//Rutas
router.get("/index", isAdminMiddleware, userController.index);

//Paso middleware para validar si la sesion esta iniciada no permita volver a loguarse
router.get("/login", guestMiddleware, userController.login);
router.post("/login", userController.loginProcess); //Proceso el login

//Paso middleware para validar si la sesion esta iniciada no permita volver a registrarse
router.get("/create", guestMiddleware, userController.create); //router.get('/register',userController.register);

router.post(
  "/create",
  uploadFile.single("avatar"), //uploadFile.single("avatar"),
  validations, // KBE - AGREGAR
  userController.processRegister
);

router.get("/profile", authMiddleware, userController.profile);

router.get("/:id/edit", userController.edit); //get para mostrar

router.put(
  "/:id",
  uploadFile.single("avatar"),
  validateEditUserMiddleware,
  userController.update
); //post para editar

router.delete("/:id", userController.destroy); // Eliminar un usuario

router.get("/recover-pass", userController.recoverPass);

router.get("/logout", userController.logout);


module.exports = router;
