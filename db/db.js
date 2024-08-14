const mongoose = require("mongoose");
const CONFIG = require("../config/config");

function connectToDb() {
  mongoose.connect(CONFIG.MONGODB_URL);

  mongoose.connection.on("connected", () => {
    console.log("MongoDB Connected Successfully");
  });

  mongoose.connection.on("error", () => {
    console.log("An error occured");
    console.log(err);
  });
}

module.exports = connectToDb;
