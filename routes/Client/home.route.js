// File chứa routes của trang home
const express = require("express");
const router = express.Router();
const controller = require("../../controllers/Client/home.controller");
router.get("/", controller.homePage);

module.exports = router;
