const { Queue } = require("bullmq");
const redisConnection = require("../config/redisConfig");

module.exports = new Queue("ResultQueue", {
  connection: redisConnection,
});
