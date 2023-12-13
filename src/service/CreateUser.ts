import { prisma } from "../prisma";

interface UserProps {
  name: string;
  email: string;
}

class CreateUser {
  async execute({ name, email }: UserProps) {
    if (!name || !email) {
      throw new Error("name and email is required");
    }

    const createUser = await prisma.usuarios.create({
      data: {
        name,
        email,
      },
    });

    return createUser;
  }
}

export { CreateUser };
