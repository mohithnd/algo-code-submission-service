const { Worker } = require("bullmq");
const redisConnection = require("../config/redisConfig");
const ResultJob = require("../jobs/resultJob");

function resultWorker(queueName) {
  return new Worker(
    queueName,
    async (job) => {
      if (job.name === "ResultJob") {
        const resultJobInstance = new ResultJob(job.data);
        resultJobInstance.handle(job);
        return true;
      }
    },
    {
      connection: redisConnection,
    }
  );
}

module.exports = resultWorker;
