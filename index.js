const express = require("express");
const app = express();
const port = 3000;

app.set("views", "./views"); //tìm đến thư mục view
app.set("view engine", "pug"); //sử dụng template engine pug

app.get("/", (req, res) => {
  res.render("client/pages/home/index.pug");
});

app.get("/products", (req, res) => {
  res.render("client/pages/products/index.pug");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
