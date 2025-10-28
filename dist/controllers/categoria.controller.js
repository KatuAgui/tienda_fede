"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarCategoria = exports.crearCategoria = exports.obtenerCategorias = void 0;
const categoria_service_1 = require("../services/categoria.service");
const servicio = new categoria_service_1.CategoriaService();
const obtenerCategorias = async (req, res) => {
    try {
        const categorias = await servicio.listarCategorias();
        res.json(categorias);
    }
    catch (error) {
        console.error("Error al obtener categorías:", error);
        res.status(500).json({ error: "Error al listar categorías" });
    }
};
exports.obtenerCategorias = obtenerCategorias;
const crearCategoria = async (req, res) => {
    const { nombreCategoria } = req.body;
    try {
        await servicio.agregarCategoria(nombreCategoria);
        res.status(201).json({ message: "Categoría creada correctamente" });
    }
    catch (error) {
        console.error("Error al crear categoría:", error);
        res.status(500).json({ error: "Error al crear categoría" });
    }
};
exports.crearCategoria = crearCategoria;
const eliminarCategoria = async (req, res) => {
    const { id } = req.params;
    try {
        await servicio.eliminarCategoria(Number(id));
        res.json({ message: " Categoría eliminada correctamente" });
    }
    catch (error) {
        console.error("Error al eliminar categoría:", error);
        res.status(500).json({ error: "Error al eliminar categoría" });
    }
};
exports.eliminarCategoria = eliminarCategoria;
