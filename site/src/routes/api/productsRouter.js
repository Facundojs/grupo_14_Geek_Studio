const express = require("express");
const router = express.Router();

const productsController = require("../../controllers/api/products");

//API
router.get("/", productsController.list);
// router.get("/search", productsController.search);
router.get("/:id", productsController.show);
router.post("/", productsController.store);
router.delete("/:id", productsController.delete);

module.exports = router;
