import { prisma } from "../prisma";

class ListUser {
  async execute() {
    const userList = await prisma.usuarios.findMany();
    return userList;
  }
}

export { ListUser };
