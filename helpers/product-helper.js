var db = require("../config/connection");
var constants = require("../config/constants");
module.exports = {
  addProduct: (product, callback) => {
    db.get()
      .collection("products")
      .insertOne(product)
      .then((data) => {
        callback(data.ops[0]._id);
      });
  },

  getProducts: () => {
    return new Promise(async (resolve, reject) => {
      const products = await db.get().collection("products").find().toArray();
      resolve(products);
    });
  },
};
