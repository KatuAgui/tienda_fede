import { Router } from "express";
import {
  obtenerInventarios,
  crearInventario,
  actualizarInventario,
  eliminarInventario
} from "../controllers/inventario.controller";

const router = Router();

// 🔹 Listar inventarios
router.get("/", obtenerInventarios);

// 🔹 Crear inventario nuevo
router.post("/", crearInventario);

// 🔹 Actualizar inventario existente
router.put("/:id", actualizarInventario);

// 🔹 Eliminar inventario
router.delete("/:id", eliminarInventario);

export default router;
