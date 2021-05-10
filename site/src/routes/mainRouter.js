const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");

router.get("/", mainController.index);
router.get("/home", mainController.index);
router.get("/faqs", mainController.faqs);

module.exports = router;
