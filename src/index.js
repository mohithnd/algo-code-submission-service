const app = require("./app");
const { PORT } = require("./config/serverConfig");
const connectToDB = require("./config/dbConfig");
const errorHandler = require("./utils/errorHandler");

const fastify = require("fastify")({ logger: true });

fastify.register(app);
fastify.setErrorHandler(errorHandler);

fastify.listen({ port: PORT }, async (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }

  await connectToDB();

  console.log(`Server Is Running At Port ${PORT}`);
});
