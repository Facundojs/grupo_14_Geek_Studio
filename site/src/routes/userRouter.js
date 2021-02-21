const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

const multer = require("multer");

//Middlewares
const uploadFile = require("../middlewares/multerUserMiddleware");
const validations = require("../middlewares/validateRegisterMiddleware");

router.get("/index", userController.index);

router.get("/login", userController.login);
router.post("/login", userController.loginProcess); //Proceso el login

router.get("/create", userController.create); //router.get('/register',userController.register);

router.post(
  "/create",
  uploadFile.single("userImg"),
  validations,
  userController.processRegister
);

router.get("/:id/edit", userController.edit); //get para mostrar
router.put("/:id", userController.update); //post para editar
router.delete("/:id", userController.destroy); // Eliminar un usuario

router.get("/recover-pass", userController.recoverPass);

module.exports = router;
