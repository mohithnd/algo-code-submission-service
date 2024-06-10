const fastifyPlugin = require("fastify-plugin");
const testService = require("./testService");

async function servicePlugin(fastify, options) {
  fastify.decorate("testService", testService);
}

module.exports = fastifyPlugin(servicePlugin);
