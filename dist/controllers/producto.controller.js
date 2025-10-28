"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarProducto = exports.actualizarProducto = exports.crearProducto = exports.buscarProducto = exports.obtenerProductos = void 0;
const producto_service_1 = require("../services/producto.service");
const servicio = new producto_service_1.ProductoService();
// 🔹 Obtener todos los productos
const obtenerProductos = async (req, res) => {
    try {
        const productos = await servicio.listarProductos();
        res.json(productos);
    }
    catch (error) {
        console.error("Error al obtener productos:", error);
        res.status(500).json({ error: "Error al listar productos" });
    }
};
exports.obtenerProductos = obtenerProductos;
// 🔹 Buscar producto por id o nombre
const buscarProducto = async (req, res) => {
    const { termino } = req.query;
    if (!termino)
        return res.status(400).json({ error: "Debe enviar un término de búsqueda" });
    try {
        const productos = await servicio.buscarProducto(String(termino));
        res.json(productos);
    }
    catch (error) {
        console.error("Error al buscar producto:", error);
        res.status(500).json({ error: "Error al buscar producto" });
    }
};
exports.buscarProducto = buscarProducto;
// 🔹 Crear nuevo producto
const crearProducto = async (req, res) => {
    const { nombre, precio, IdCategoria } = req.body;
    try {
        await servicio.agregarProducto(nombre, precio, IdCategoria);
        res.status(201).json({ message: "Producto creado correctamente" });
    }
    catch (error) {
        console.error("Error al crear producto:", error);
        res.status(500).json({ error: "Error al crear producto" });
    }
};
exports.crearProducto = crearProducto;
// 🔹 Actualizar producto existente
const actualizarProducto = async (req, res) => {
    const { id } = req.params;
    const { nombre, precio, IdCategoria } = req.body;
    try {
        await servicio.actualizarProducto(Number(id), nombre, precio, IdCategoria);
        res.json({ message: "Producto actualizado correctamente" });
    }
    catch (error) {
        console.error("Error al actualizar producto:", error);
        res.status(500).json({ error: "Error al actualizar producto" });
    }
};
exports.actualizarProducto = actualizarProducto;
// 🔹 Eliminar producto
const eliminarProducto = async (req, res) => {
    const { id } = req.params;
    try {
        await servicio.eliminarProducto(Number(id));
        res.json({ message: "Producto eliminado correctamente" });
    }
    catch (error) {
        console.error("Error al eliminar producto:", error);
        res.status(500).json({ error: "Error al eliminar producto" });
    }
};
exports.eliminarProducto = eliminarProducto;
