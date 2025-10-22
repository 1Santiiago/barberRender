const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Inserir um usuário de teste
  const user = await prisma.user.create({
    data: {
      name: "Santiago",
      email: "santiago@test.com",
      password: "123456",
    },
  });

  console.log("Usuário criado:", user);

  // Listar todos os usuários
  const users = await prisma.user.findMany();
  console.log("Todos os usuários:", users);
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error("Erro Prisma:", e);
    prisma.$disconnect();
  });
