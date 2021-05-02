const express = require("express");
const router = express.Router();

const userController = require("../../controllers/api/user");

//API
router.get("/", userController.list);
router.get("/dashboardList", userController.dashboardList);
router.get("/search", userController.search);
router.get("/:id", userController.show);
router.post("/", userController.store);
router.delete("/:id", userController.delete);

module.exports = router;
