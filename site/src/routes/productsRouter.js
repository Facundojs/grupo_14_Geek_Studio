const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const isAdminMiddleware = require("../middlewares/isAdminMiddleware");
const productController = require("../controllers/productsController");

const uploadFile = require("../middlewares/multerMiddleware");
const validations = require("../middlewares/validateCreateProductMiddleware");

//Otras
router.get("/carro", productController.chart);

//Crud
router.get("/", productController.index); //Done
router.get(
  "/crear",
  authMiddleware,
  isAdminMiddleware,
  productController.create
); // Formulario de creación

router.get("/favoritos", productController.favorite) // Página de Favoritos
router.get("/:id", productController.show); // Detalle del producto (Terminado)
router.post(
  "/crear",
  uploadFile.single("image"),
  validations,
  productController.store
); //Proceso de Formulario (Terminado)
router.get("/:id/editar", productController.edit); // Formulario de edición
router.put(
  "/:id",
  uploadFile.single("image"),
  validations,
  productController.update
); // Proceso de edición (Terminado)
router.delete("/:id", productController.destroy); // Proceso de eliminar un producto

module.exports = router;
