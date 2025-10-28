"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarInventario = exports.actualizarInventario = exports.crearInventario = exports.obtenerInventarios = void 0;
const inventario_service_1 = require("../services/inventario.service");
const servicio = new inventario_service_1.InventarioService();
// 🔹 Obtener todos los inventarios
const obtenerInventarios = async (req, res) => {
    try {
        const inventarios = await servicio.listarInventarios();
        res.json(inventarios);
    }
    catch (error) {
        console.error("Error al obtener inventarios:", error);
        res.status(500).json({ error: "Error al listar inventarios" });
    }
};
exports.obtenerInventarios = obtenerInventarios;
// 🔹 Crear nuevo inventario
const crearInventario = async (req, res) => {
    const { nombreInventario, ubicacion } = req.body;
    try {
        await servicio.agregarInventario(nombreInventario, ubicacion);
        res.status(201).json({ message: "Inventario creado correctamente" });
    }
    catch (error) {
        console.error("Error al crear inventario:", error);
        res.status(500).json({ error: "Error al crear inventario" });
    }
};
exports.crearInventario = crearInventario;
// 🔹 Actualizar inventario existente
const actualizarInventario = async (req, res) => {
    const { id } = req.params;
    const { nombreInventario, ubicacion } = req.body;
    try {
        await servicio.actualizarInventario(Number(id), nombreInventario, ubicacion);
        res.json({ message: "Inventario actualizado correctamente" });
    }
    catch (error) {
        console.error("Error al actualizar inventario:", error);
        res.status(500).json({ error: "Error al actualizar inventario" });
    }
};
exports.actualizarInventario = actualizarInventario;
// 🔹 Eliminar inventario
const eliminarInventario = async (req, res) => {
    const { id } = req.params;
    try {
        await servicio.eliminarInventario(Number(id));
        res.json({ message: "Inventario eliminado correctamente" });
    }
    catch (error) {
        console.error("Error al eliminar inventario:", error);
        res.status(500).json({ error: "Error al eliminar inventario" });
    }
};
exports.eliminarInventario = eliminarInventario;
