const Product = require("../../models/product.model");
module.exports.index = async (req, res) => {
  const products = await Product.find({
    deleted: false,
  });
  console.log(products);

  res.render("admin/pages/product/index", {
    pageTitle: "Trang Danh Sách Sản Phẩm",
    products: products,
  });
};
