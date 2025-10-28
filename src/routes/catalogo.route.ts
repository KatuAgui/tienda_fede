import { Router } from "express";
import {
  obtenerCatalogo,
  buscarCatalogoPorInventario,
  crearCatalogo,
  actualizarCatalogo,
  eliminarCatalogo
} from "../controllers/catalogo.controller";

const router = Router();

// 🔹 Listar todos los registros del catálogo
router.get("/", obtenerCatalogo);

// 🔹 Buscar productos de un inventario específico
router.get("/inventario/:idInventario", buscarCatalogoPorInventario);

// 🔹 Agregar nuevo registro al catálogo
router.post("/", crearCatalogo);

// 🔹 Actualizar un registro del catálogo
router.put("/:id", actualizarCatalogo);

// 🔹 Eliminar producto del catálogo
router.delete("/:id", eliminarCatalogo);

export default router;
