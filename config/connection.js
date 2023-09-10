const MongoClient = require("mongodb").MongoClient;
let db;

module.exports.connect = (done) => {
  const url = "mongodb://localhost:27017";
  const dbName = "shopping";
  MongoClient.connect(url, { useUnifiedTopology: true }, (err, data) => {
    if (err) return done(err);
    db = data.db(dbName);
    done();
  });
};

module.exports.get = () => {
  return db;
};
