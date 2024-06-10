async function todoRoutes(fastify, options) {
  fastify.get("/todo", async (req, res) => {
    return {
      data: {
        todos: [{ id: 1, title: "Learn DBMS", completed: false }],
      },
    };
  });
}

module.exports = todoRoutes;
