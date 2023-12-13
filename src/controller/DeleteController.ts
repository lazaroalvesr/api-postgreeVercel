import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteUser } from "../service/DeleteUser";

class DeleteController {
  async handle(req: FastifyRequest, rep: FastifyReply) {
    const { id } = req.query as { id: string };

    const deleteUsers = new DeleteUser();
    const customerDelete = await deleteUsers.execute({ id });
    rep.send(customerDelete);
  }
}

export { DeleteController };
