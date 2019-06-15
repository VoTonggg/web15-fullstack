const express = require("express");
const router = express.Router();

var controller = require("../controllers/ask.controller");

router.get("/", controller.index);

router.post("/", controller.postCreate);

module.exports = router;