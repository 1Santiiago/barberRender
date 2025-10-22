import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getClients = async (req, res) => {
  try {
    const clients = await prisma.cliente.findMany();
    res.json(clients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createClient = async (req, res) => {
  const { nome, telefone, userId, planoId } = req.body;
  try {
    const client = await prisma.cliente.create({
      data: { nome, telefone, userId, planoId },
    });
    res.status(201).json(client);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
