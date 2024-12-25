const express = require("express");

require("dotenv").config();

const app = express();

const port = process.env.PORT;

const routeClient = require("./routes/client/index.route");

app.set("views", "./views"); //tìm đến thư mục view
app.set("view engine", "pug"); //sử dụng template engine pug

routeClient.index(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
