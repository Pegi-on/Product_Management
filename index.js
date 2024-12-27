const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

// cấu hình route
const routeAdmin = require("./routes/admin/index.route");
const routeClient = require("./routes/client/index.route");
// end cấu hình route

// cấu hình database
const databse = require("./config/database");
databse.connect();
// end cấu hình database

app.set("views", "./views"); //tìm đến thư mục view
app.set("view engine", "pug"); //sử dụng template engine pug

app.use(express.static("public")); //thiết lập thư mục chứa file tĩnh

routeAdmin.index(app);
routeClient.index(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
