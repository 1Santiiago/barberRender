import express from "express";
import cors from "cors";

import clientRoutes from "./routes/client.route.js";
import planosRoutes from "./routes/planos.route.js";

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.use("/clients", clientRoutes);
app.use("/planos", planosRoutes);

// Rota raiz para teste
app.get("/", (req, res) => {
  res.send("Backend rodando com sucesso!");
});

export default app;
