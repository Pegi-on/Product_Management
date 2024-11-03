// File chứa routes của trang product
const express = require("express");
const router = express.Router();
const controller = require("../../controllers/Client/product.controller");
router.get("/", controller.productPage);

module.exports = router;
