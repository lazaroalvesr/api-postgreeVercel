import { FastifyReply, FastifyRequest } from "fastify";
import { ListUser } from "../service/ListUser";

class ListController {
  async handle(req: FastifyRequest, rep: FastifyReply) {
    const list = new ListUser();
    const customerList = await list.execute();
    rep.send(customerList);
  }
}

export { ListController };
