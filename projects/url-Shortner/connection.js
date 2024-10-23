const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

async function connectMongoDb(url) {
  return mongoose
    .connect(url)
    .then(() => {
      console.log("MongoDb connected successfully");
    })
    .catch((err) => {
      console.log("MongoDb connection failed", err);
    });
}

module.exports = connectMongoDb;
