import fastify, {
  FastifyInstance,
  FastifyRequest,
  FastifyReply,
  FastifyPluginOptions,
} from "fastify";
import { CreateController } from "./controller/CreateController";
import { ListController } from "./controller/ListController";
import { DeleteController } from "./controller/DeleteController";

const routes = async (
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) => {
  fastify.post("/clientes", async (req: FastifyRequest, rep: FastifyReply) => {
    return new CreateController().handle(req, rep);
  });

  fastify.get("/clientes", async (req: FastifyRequest, rep: FastifyReply) => {
    return new ListController().handle(req, rep);
  });

  fastify.delete(
    "/clientes",
    async (req: FastifyRequest, rep: FastifyReply) => {
      return new DeleteController().handle(req, rep);
    }
  );
};

export { routes };
