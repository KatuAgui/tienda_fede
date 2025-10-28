"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarCatalogo = exports.actualizarCatalogo = exports.crearCatalogo = exports.buscarCatalogoPorInventario = exports.obtenerCatalogo = void 0;
const catalogo_service_1 = require("../services/catalogo.service");
const servicio = new catalogo_service_1.CatalogoService();
// 🔹 Listar todos los registros del catálogo
const obtenerCatalogo = async (req, res) => {
    try {
        const catalogo = await servicio.listarCatalogo();
        res.json(catalogo);
    }
    catch (error) {
        console.error("Error al obtener catálogo:", error);
        res.status(500).json({ error: "Error al listar catálogo" });
    }
};
exports.obtenerCatalogo = obtenerCatalogo;
// 🔹 Buscar productos de un inventario específico
const buscarCatalogoPorInventario = async (req, res) => {
    const { idInventario } = req.params;
    try {
        const catalogo = await servicio.buscarPorInventario(Number(idInventario));
        res.json(catalogo);
    }
    catch (error) {
        console.error("Error al buscar productos del inventario:", error);
        res.status(500).json({ error: "Error al buscar productos por inventario" });
    }
};
exports.buscarCatalogoPorInventario = buscarCatalogoPorInventario;
// 🔹 Agregar un producto al catálogo
const crearCatalogo = async (req, res) => {
    const { idInventario, idProducto, stock, stockMinimo, precioCompra } = req.body;
    try {
        await servicio.agregarCatalogo(idInventario, idProducto, stock, stockMinimo, precioCompra);
        res.status(201).json({ message: "Producto agregado al catálogo correctamente" });
    }
    catch (error) {
        console.error("Error al crear catálogo:", error);
        res.status(500).json({ error: "Error al crear catálogo" });
    }
};
exports.crearCatalogo = crearCatalogo;
// 🔹 Actualizar registro del catálogo (stock o precio)
const actualizarCatalogo = async (req, res) => {
    const { id } = req.params;
    const { stock, stockMinimo, precioCompra } = req.body;
    try {
        await servicio.actualizarCatalogo(Number(id), stock, stockMinimo, precioCompra);
        res.json({ message: "Catálogo actualizado correctamente" });
    }
    catch (error) {
        console.error("Error al actualizar catálogo:", error);
        res.status(500).json({ error: "Error al actualizar catálogo" });
    }
};
exports.actualizarCatalogo = actualizarCatalogo;
// 🔹 Eliminar registro del catálogo
const eliminarCatalogo = async (req, res) => {
    const { id } = req.params;
    try {
        await servicio.eliminarCatalogo(Number(id));
        res.json({ message: "Producto eliminado del catálogo correctamente" });
    }
    catch (error) {
        console.error("Error al eliminar catálogo:", error);
        res.status(500).json({ error: "Error al eliminar producto del catálogo" });
    }
};
exports.eliminarCatalogo = eliminarCatalogo;
