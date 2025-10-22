import express from "express";
import {
  listarPlanos,
  criarPlano,
  deletarPlano,
} from "../controllers/planos.controller.js";

const router = express.Router();

router.get("/:userId", listarPlanos);
router.post("/", criarPlano);
router.delete("/:nome", deletarPlano);

export default router;
