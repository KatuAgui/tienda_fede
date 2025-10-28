"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inventario_controller_1 = require("../controllers/inventario.controller");
const router = (0, express_1.Router)();
// 🔹 Listar inventarios
router.get("/", inventario_controller_1.obtenerInventarios);
// 🔹 Crear inventario nuevo
router.post("/", inventario_controller_1.crearInventario);
// 🔹 Actualizar inventario existente
router.put("/:id", inventario_controller_1.actualizarInventario);
// 🔹 Eliminar inventario
router.delete("/:id", inventario_controller_1.eliminarInventario);
exports.default = router;
