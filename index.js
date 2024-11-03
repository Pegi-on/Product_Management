const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

const routeClient = require("./routes/Client/index.route");

app.set("views", "./views"); //Tìm đến thư mục tên Views
app.set("view engine", "pug"); //template engine sử dụng: pug

routeClient.index(app);

app.listen(port, () => {
  console.log(`App listening on por ${port}`);
});
