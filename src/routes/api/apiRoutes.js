async function apiRoutes(fastify, options) {
  fastify.register(require("./v1/v1Routes"), { prefix: "/v1" });
}

module.exports = apiRoutes;
