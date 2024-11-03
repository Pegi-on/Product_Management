// Các hàm xử lý code cho product
module.exports.productPage = (req, res) => {
  res.render("Client/pages/products/index.pug", {
    pageTitle: "Trang Danh Sách Sản Phẩm",
  });
};
