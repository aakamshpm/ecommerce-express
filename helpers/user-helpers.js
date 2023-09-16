const db = require("../config/connection");
const bcrypt = require("bcrypt");

module.exports = {
  onSignup: (userData) => {
    return new Promise(async (resolve, reject) => {
      userData.password = await bcrypt.hash(userData.password, 10);
      db.get()
        .collection("users")
        .insertOne(userData)
        .then((data) => {
          resolve(data.ops[0]);
        });
    });
  },
  onLogin: (userData) => {
    return new Promise(async (resolve, reject) => {
      let loginStatus = false;
      let response = {};
      const user = await db
        .get()
        .collection("users")
        .find({ email: userData.email });
      if (user) {
        bcrypt.compare(userData.password, user.password).then((status) => {
          status ? console.log("Login success") : console.log("Login failed");
        });
      } else {
        console.log("No user found");
      }
    });
  },
};
