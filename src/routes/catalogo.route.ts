import { Router } from "express";
import {
  obtenerCatalogo,
  buscarCatalogoPorInventario,
  crearCatalogo,
  actualizarCatalogo,
  eliminarCatalogo,
  listarInventariosConStockTotal,
  listarProductosPorInventario
} from "../controllers/catalogo.controller";

const router = Router();

// 🔹 Listar todos los registros del catálogo
router.get("/", obtenerCatalogo);

// 🔹 Buscar productos de un inventario específico
router.get("/buscar/inventario/:idInventario", buscarCatalogoPorInventario);

// 🔹 Agregar nuevo registro al catálogo
router.post("/", crearCatalogo);

// 🔹 Actualizar un registro del catálogo
router.put("/:id", actualizarCatalogo);

// 🔹 Eliminar producto del catálogo
router.delete("/:id", eliminarCatalogo);

router.get("/inventarios-stock", listarInventariosConStockTotal);

// 🔹 Obtener todos los productos de un inventario específico
router.get("/productos/inventario/:idInventario", listarProductosPorInventario);

export default router;
