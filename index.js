const express = require("express");
const app = express();
const port = 3000;

app.set("views", "./views"); //Tìm đến thư mục tên Views
app.set("view engine", "pug"); //template engine sử dụng: pug

app.get("/", (req, res) => {
  res.render("client/pages/home/index.pug");
});

app.get("/products", (req, res) => {
  res.render("client/pages/products/index.pug");
});

app.listen(port, () => {
  console.log(`App listening on por ${port}`);
});
