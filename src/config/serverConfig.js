process.loadEnvFile();

module.exports = {
  PORT: process.env.PORT,
  REDIS_PORT: process.env.REDIS_PORT,
  REDIS_HOST: process.env.REDIS_HOST,
  MONGO_URI: process.env.MONGO_URI,
  PROBLEM_ADMIN_SERVICE_URI: process.env.PROBLEM_ADMIN_SERVICE_URI,
  SOCKET_SERVER_PAYLOAD_URI: process.env.SOCKET_SERVER_PAYLOAD_URI,
};
