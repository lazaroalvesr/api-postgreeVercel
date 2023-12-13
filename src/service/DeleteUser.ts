import { prisma } from "../prisma";

interface DeleteProps {
  id: string;
}

class DeleteUser {
  async execute({ id }: DeleteProps) {
    if (!id) {
      throw new Error("id is required");
    }

    const deleteUsers = await prisma.usuarios.findFirst({
      where: {
        id: id,
      },
    });

    if (!deleteUsers) {
      throw new Error("deleteUsers is required");
    }

    await prisma.usuarios.delete({
      where: {
        id: deleteUsers.id,
      },
    });
  }
}

export { DeleteUser };
