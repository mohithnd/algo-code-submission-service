require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3000,
  REDIS_PORT: process.env.REDIS_PORT || "6379",
  REDIS_HOST: process.env.REDIS_HOST || "localhost",
  MONGO_URI: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/",
};
