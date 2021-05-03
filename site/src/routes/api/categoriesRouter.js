const express = require("express");
const router = express.Router();

const categoriesController = require("../../controllers/api/categories");

//API
router.get("/", categoriesController.list);
router.get("/dashboardList", categoriesController.dashboardList);
// router.get("/search", categoriesController.search);
router.get("/:id", categoriesController.show);
// router.post("/", categoriesController.store);
// router.delete("/:id", categoriesController.delete);

module.exports = router;
