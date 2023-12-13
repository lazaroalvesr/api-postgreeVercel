import { FastifyReply, FastifyRequest } from "fastify";
import { CreateUser } from "../service/CreateUser";

class CreateController {
  async handle(req: FastifyRequest, rep: FastifyReply) {
    const { name, email } = req.body as { name: string; email: string };

    const createUsers = new CreateUser();
    const customer = await createUsers.execute({ name, email });
    rep.send(customer);
  }
}

export { CreateController };
