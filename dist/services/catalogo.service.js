"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogoService = void 0;
const database_1 = require("../config/database");
class CatalogoService {
    // 🔹 Listar todo el catálogo con inventario y producto
    async listarCatalogo() {
        const connection = await (0, database_1.connectDB)();
        const [rows] = await connection.execute(`
      SELECT c.*, i.nombreInventario, p.nombre AS nombreProducto 
      FROM catalogo_inventario_producto c
      INNER JOIN inventarios i ON c.idInventario = i.idInventario
      INNER JOIN productos p ON c.idProducto = p.id
    `);
        return rows;
    }
    // 🔹 Buscar productos dentro de un inventario específico
    async buscarPorInventario(idInventario) {
        const connection = await (0, database_1.connectDB)();
        const [rows] = await connection.execute(`
      SELECT c.*, p.nombre AS nombreProducto
      FROM catalogo_inventario_producto c
      INNER JOIN productos p ON c.idProducto = p.id
      WHERE c.idInventario = ?
      `, [idInventario]);
        return rows;
    }
    // 🔹 Agregar registro al catálogo
    async agregarCatalogo(idInventario, idProducto, stock, stockMinimo, precioCompra) {
        const connection = await (0, database_1.connectDB)();
        await connection.execute("INSERT INTO catalogo_inventario_producto (idInventario, idProducto, stock, stockMinimo, precioCompra) VALUES (?, ?, ?, ?, ?)", [idInventario, idProducto, stock, stockMinimo, precioCompra]);
    }
    // 🔹 Actualizar stock o precio de un producto en inventario
    async actualizarCatalogo(idCatalogo, stock, stockMinimo, precioCompra) {
        const connection = await (0, database_1.connectDB)();
        await connection.execute("UPDATE catalogo_inventario_producto SET stock=?, stockMinimo=?, precioCompra=? WHERE idCatalogo=?", [stock, stockMinimo, precioCompra, idCatalogo]);
    }
    // 🔹 Eliminar producto del catálogo
    async eliminarCatalogo(idCatalogo) {
        const connection = await (0, database_1.connectDB)();
        await connection.execute("DELETE FROM catalogo_inventario_producto WHERE idCatalogo=?", [idCatalogo]);
    }
}
exports.CatalogoService = CatalogoService;
