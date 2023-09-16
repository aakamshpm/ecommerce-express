var express = require("express");
var router = express.Router();
const productHelper = require("../helpers/product-helper");
const userHelper = require("../helpers/user-helpers");

/* GET home page. */
router.get("/", function (req, res, next) {
  productHelper.getProducts().then((products) => {
    res.render("user/view-products", { products, admin: false });
  });
});

router.get("/login", (req, res, next) => {
  res.render("user/login");
});

router.get("/signup", (req, res, next) => {
  res.render("user/signup");
});

router.post("/signup", (req, res) => {
  userHelper.onSignup(req.body).then((data) => {
    console.log(data);
  });
});

router.post("/login", (req, res) => {
  userHelper.onLogin(req.body);
});
module.exports = router;
