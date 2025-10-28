"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioService = void 0;
const database_1 = require("../config/database");
class InventarioService {
    // Listar todos los inventarios
    async listarInventarios() {
        const connection = await (0, database_1.connectDB)();
        const [rows] = await connection.execute("SELECT * FROM inventarios");
        return rows;
    }
    // Obtener inventario por ID
    async obtenerPorId(idInventario) {
        const connection = await (0, database_1.connectDB)();
        const [rows] = await connection.execute("SELECT * FROM inventarios WHERE idInventario = ?", [idInventario]);
        const data = rows;
        return data.length > 0 ? data[0] : null;
    }
    // Agregar inventario nuevo
    async agregarInventario(nombreInventario, ubicacion) {
        const connection = await (0, database_1.connectDB)();
        await connection.execute("INSERT INTO inventarios (nombreInventario, ubicacion, fechaCreacion) VALUES (?, ?, CURDATE())", [nombreInventario, ubicacion]);
    }
    // Actualizar inventario existente
    async actualizarInventario(idInventario, nombreInventario, ubicacion) {
        const connection = await (0, database_1.connectDB)();
        await connection.execute("UPDATE inventarios SET nombreInventario=?, ubicacion=? WHERE idInventario=?", [
            nombreInventario,
            ubicacion,
            idInventario,
        ]);
    }
    // Eliminar inventario
    async eliminarInventario(idInventario) {
        const connection = await (0, database_1.connectDB)();
        await connection.execute("DELETE FROM inventarios WHERE idInventario=?", [idInventario]);
    }
}
exports.InventarioService = InventarioService;
