const fastifyPlugin = require("fastify-plugin");
const servicePlugin = require("./services/servicePlugin");

async function app(fastify, options) {
  fastify.register(require("@fastify/cors"));

  fastify.register(servicePlugin);

  fastify.register(require("./routes/api/apiRoutes"), { prefix: "/api" });

  fastify.register(require("./routes/todoRoutes"), { prefix: "/todos" });
}

module.exports = fastifyPlugin(app);
