var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  const products = [
    {
      name: "iPhone 13",
      category: "Mobile",
      description: "Unaffordable device from Apple",
      imageUrl:
        "https://rukminim2.flixcart.com/image/850/1000/ktketu80/mobile/2/y/o/iphone-13-mlpk3hn-a-apple-original-imag6vpyur6hjngg.jpeg?q=90",
    },
    {
      name: "Nothing Phone 2",
      category: "Mobile",
      description: "A showoff device with great UI",
      imageUrl:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/u/m/b/-original-imagrdefbw6bhbjr.jpeg?q=90",
    },
    {
      name: "S23 Ultra",
      category: "Mobile",
      description: "Value for money. A great option",
      imageUrl:
        "https://cdn1.smartprix.com/rx-izLSMVlI0-w1200-h1200/zLSMVlI0.jpg",
    },
    {
      name: "Xiaomi 13 Pro",
      category: "Mobile",
      description: "Well...idk",
      imageUrl:
        "https://i02.appmifile.com/324_operator_in/03/03/2023/de94b40a14b8e329c491e7a4b752635f.jpg",
    },
  ];
  res.render("admin/view-products", { products, admin: true });
});

router.get("/add-product", (req, res) => {
  res.render("admin/add-product");
});

router.post("/add-product", (req, res) => {
  console.log(req.body);
  console.log(req.files.image);
});

module.exports = router;
