"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaService = void 0;
const database_1 = require("../config/database");
class CategoriaService {
    // Obtener todas las categorías
    async listarCategorias() {
        const connection = await (0, database_1.connectDB)();
        const [rows] = await connection.execute("SELECT * FROM categorias");
        return rows;
    }
    // Obtener una categoría por ID
    async obtenerPorId(idCategoria) {
        const connection = await (0, database_1.connectDB)();
        const [rows] = await connection.execute("SELECT * FROM categorias WHERE idCategoria = ?", [idCategoria]);
        const data = rows;
        return data.length > 0 ? data[0] : null;
    }
    // Agregar nueva categoría
    async agregarCategoria(nombreCategoria) {
        const connection = await (0, database_1.connectDB)();
        await connection.execute("INSERT INTO categorias (nombreCategoria) VALUES (?)", [nombreCategoria]);
    }
    // Actualizar categoría existente
    async actualizarCategoria(idCategoria, nombreCategoria) {
        const connection = await (0, database_1.connectDB)();
        await connection.execute("UPDATE categorias SET nombreCategoria = ? WHERE idCategoria = ?", [
            nombreCategoria,
            idCategoria,
        ]);
    }
    // Eliminar categoría
    async eliminarCategoria(idCategoria) {
        const connection = await (0, database_1.connectDB)();
        await connection.execute("DELETE FROM categorias WHERE idCategoria = ?", [idCategoria]);
    }
}
exports.CategoriaService = CategoriaService;
