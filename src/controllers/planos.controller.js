import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Listar planos do usuário
export async function listarPlanos(req, res) {
  const { userId } = req.params;
  const planos = await prisma.plan.findMany({
    where: { userId: parseInt(userId) },
  });
  res.json(planos);
}

// Criar plano
export async function criarPlano(req, res) {
  const { planName, price, services, userId } = req.body;

  if (!planName || !price || !userId) {
    return res.status(400).json({ message: "Campos obrigatórios faltando." });
  }

  const newPlan = await prisma.plan.create({
    data: {
      planName,
      price: parseFloat(price),
      services: JSON.stringify(services || []),
      userId: parseInt(userId),
    },
  });

  res.status(201).json(newPlan);
}

// Deletar plano
export async function deletarPlano(req, res) {
  const { nome } = req.params;
  const plan = await prisma.plan.findFirst({ where: { planName: nome } });

  if (!plan) return res.status(404).json({ message: "Plano não encontrado." });

  await prisma.plan.delete({ where: { id: plan.id } });
  res.status(204).send();
}
