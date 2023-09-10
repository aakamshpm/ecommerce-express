var express = require("express");
var router = express.Router();
var productHelper = require("../helpers/product-helper");

router.get("/", function (req, res, next) {
  productHelper.getProducts().then((products) => {
    console.log(products);
    res.render("admin/view-products", { products, admin: true });
  });
});

router.get("/add-product", (req, res) => {
  res.render("admin/add-product");
});

router.post("/add-product", (req, res) => {
  productHelper.addProduct(req.body, (id) => {
    const img = req.files.image;
    img.mv("public/product-images/" + id + ".jpg", (err, data) => {
      if (!err) res.render("admin/add-product");
      else console.log("Error uploading image");
    });
  });
});

module.exports = router;
