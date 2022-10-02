import { FastifyPluginAsync } from "fastify";

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/", { logLevel: "warn" }, async function (request, reply) {
    console.log({
      victim: request.ip,
      ...(request.query as {}),
    });
    return void 0;
  });
};

export default root;
