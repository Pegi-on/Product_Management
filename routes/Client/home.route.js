// File chứa routes của trang home
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("Client/pages/home/index.pug");
});

module.exports = router;
