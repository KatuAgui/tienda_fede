"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producto_controller_1 = require("../controllers/producto.controller");
const router = (0, express_1.Router)();
// 🔹 Listar todos los productos
router.get("/", producto_controller_1.obtenerProductos);
// 🔹 Buscar producto por nombre o id (?termino=)
router.get("/buscar", producto_controller_1.buscarProducto);
// 🔹 Crear nuevo producto
router.post("/", producto_controller_1.crearProducto);
// 🔹 Actualizar producto existente
router.put("/:id", producto_controller_1.actualizarProducto);
// 🔹 Eliminar producto por ID
router.delete("/:id", producto_controller_1.eliminarProducto);
exports.default = router;
