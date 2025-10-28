import { Router } from "express";
import {
  obtenerProductos,
  buscarProducto,
  crearProducto,
  actualizarProducto,
  eliminarProducto
} from "../controllers/producto.controller";

const router = Router();

// 🔹 Listar todos los productos
router.get("/", obtenerProductos);

// 🔹 Buscar producto por nombre o id (?termino=)
router.get("/buscar", buscarProducto);

// 🔹 Crear nuevo producto
router.post("/", crearProducto);

// 🔹 Actualizar producto existente
router.put("/:id", actualizarProducto);

// 🔹 Eliminar producto por ID
router.delete("/:id", eliminarProducto);

export default router;
