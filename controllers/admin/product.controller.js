const Product = require("../../models/product.model");

module.exports.index = async (req, res) => {
  const objFind = {
    deleted: false,
  };

  //lọc theo trạng thái
  if (req.query.status) {
    objFind.status = req.query.status;
  }
  //end lọc theo trạng thái
  const products = await Product.find(objFind);

  res.render("admin/pages/product/index", {
    pageTitle: "Trang Danh Sách Sản Phẩm",
    products: products,
  });
};
