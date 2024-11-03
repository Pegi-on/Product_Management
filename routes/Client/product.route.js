// File chứa routes của trang product
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("Client/pages/products/index.pug");
});

module.exports = router;
