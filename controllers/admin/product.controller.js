module.exports.index = (req, res) => {
  res.render("admin/pages/product/index", {
    pageTitle: "Trang Danh Sách Sản Phẩm",
  });
};