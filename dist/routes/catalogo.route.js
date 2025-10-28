"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const catalogo_controller_1 = require("../controllers/catalogo.controller");
const router = (0, express_1.Router)();
// 🔹 Listar todos los registros del catálogo
router.get("/", catalogo_controller_1.obtenerCatalogo);
// 🔹 Buscar productos de un inventario específico
router.get("/inventario/:idInventario", catalogo_controller_1.buscarCatalogoPorInventario);
// 🔹 Agregar nuevo registro al catálogo
router.post("/", catalogo_controller_1.crearCatalogo);
// 🔹 Actualizar un registro del catálogo
router.put("/:id", catalogo_controller_1.actualizarCatalogo);
// 🔹 Eliminar producto del catálogo
router.delete("/:id", catalogo_controller_1.eliminarCatalogo);
exports.default = router;
