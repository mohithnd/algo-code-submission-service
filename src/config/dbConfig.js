const mongoose = require("mongoose");
const { MONGO_URI } = require("./serverConfig");

async function connectToDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Successfully Connected To DB");
  } catch (error) {
    console.log("Unable To Connect To The DB Server");
    console.log(error);
    process.exit(1);
  }
}

module.exports = connectToDB;
