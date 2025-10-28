import { connectDB } from "../config/database";
import { Inventario } from "../models/inventario.model";

export class InventarioService {
  // Listar todos los inventarios
  async listarInventarios(): Promise<Inventario[]> {
    const connection = await connectDB();
    const [rows] = await connection.execute("SELECT * FROM inventarios");
    return rows as Inventario[];
  }

  // Obtener inventario por ID
  async obtenerPorId(idInventario: number): Promise<Inventario | null> {
    const connection = await connectDB();
    const [rows] = await connection.execute("SELECT * FROM inventarios WHERE idInventario = ?", [idInventario]);
    const data = rows as Inventario[];
    return data.length > 0 ? data[0] : null;
  }

  // Agregar inventario nuevo
  async agregarInventario(nombreInventario: string, ubicacion: string): Promise<void> {
    const connection = await connectDB();
    await connection.execute(
      "INSERT INTO inventarios (nombreInventario, ubicacion, fechaCreacion) VALUES (?, ?, CURDATE())",
      [nombreInventario, ubicacion]
    );
  }

  // Actualizar inventario existente
  async actualizarInventario(idInventario: number, nombreInventario: string, ubicacion: string): Promise<void> {
    const connection = await connectDB();
    await connection.execute("UPDATE inventarios SET nombreInventario=?, ubicacion=? WHERE idInventario=?", [
      nombreInventario,
      ubicacion,
      idInventario,
    ]);
  }

  // Eliminar inventario
  async eliminarInventario(idInventario: number): Promise<void> {
    const connection = await connectDB();
    await connection.execute("DELETE FROM inventarios WHERE idInventario=?", [idInventario]);
  }
}
