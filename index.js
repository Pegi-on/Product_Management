const express = require("express");
const app = express();
const port = 3000;
const routeClient = require("./routes/Client/index.route");

app.set("views", "./views"); //Tìm đến thư mục tên Views
app.set("view engine", "pug"); //template engine sử dụng: pug

routeClient.index(app);

app.listen(port, () => {
  console.log(`App listening on por ${port}`);
});
