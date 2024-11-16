const express = require("express");

require("dotenv").config();
const app = express();
const port = process.env.PORT;

// Kết nối database
const database = require("./config/database.js");
database.connect();

const routeClient = require("./routes/Client/index.route");

app.set("views", "./views"); //Tìm đến thư mục tên Views
app.set("view engine", "pug"); //template engine sử dụng: pug
app.use(express.static("public")); //Thiết lập thư mục chứa file tĩnh

routeClient.index(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
