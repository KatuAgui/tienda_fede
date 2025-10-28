"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoria_controller_1 = require("../controllers/categoria.controller");
const router = (0, express_1.Router)();
router.get("/", categoria_controller_1.obtenerCategorias);
router.post("/", categoria_controller_1.crearCategoria);
router.delete("/:id", categoria_controller_1.eliminarCategoria);
exports.default = router;
