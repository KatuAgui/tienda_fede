"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoService = void 0;
const database_1 = require("../config/database");
class ProductoService {
    // Listar todos los productos (con nombre de categoría)
    async listarProductos() {
        const connection = await (0, database_1.connectDB)();
        const [rows] = await connection.execute(`
      SELECT p.*, c.nombreCategoria 
      FROM productos p 
      LEFT JOIN categorias c ON p.IdCategoria = c.idCategoria
    `);
        return rows;
    }
    // Buscar producto por id o nombre
    async buscarProducto(termino) {
        const connection = await (0, database_1.connectDB)();
        const [rows] = await connection.execute("SELECT * FROM productos WHERE nombre LIKE ? OR id = ?", [`%${termino}%`, Number(termino) || 0]);
        return rows;
    }
    // Obtener producto por ID
    async obtenerPorId(id) {
        const connection = await (0, database_1.connectDB)();
        const [rows] = await connection.execute("SELECT * FROM productos WHERE id = ?", [id]);
        const data = rows;
        return data.length > 0 ? data[0] : null;
    }
    // Agregar nuevo producto
    async agregarProducto(nombre, precio, IdCategoria) {
        const connection = await (0, database_1.connectDB)();
        await connection.execute("INSERT INTO productos (nombre, precio, IdCategoria) VALUES (?, ?, ?)", [
            nombre,
            precio,
            IdCategoria,
        ]);
    }
    // Actualizar producto
    async actualizarProducto(id, nombre, precio, IdCategoria) {
        const connection = await (0, database_1.connectDB)();
        await connection.execute("UPDATE productos SET nombre=?, precio=?, IdCategoria=? WHERE id=?", [
            nombre,
            precio,
            IdCategoria,
            id,
        ]);
    }
    // Eliminar producto
    async eliminarProducto(id) {
        const connection = await (0, database_1.connectDB)();
        await connection.execute("DELETE FROM productos WHERE id=?", [id]);
    }
}
exports.ProductoService = ProductoService;
