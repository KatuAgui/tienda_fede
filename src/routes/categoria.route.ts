import { Router } from "express";
import {
  obtenerCategorias,
  crearCategoria,
  eliminarCategoria
} from "../controllers/categoria.controller";

const router = Router();

router.get("/", obtenerCategorias);
router.post("/", crearCategoria);
router.delete("/:id", eliminarCategoria);

export default router;
