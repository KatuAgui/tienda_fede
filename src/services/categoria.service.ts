import { connectDB } from "../config/database";
import { Categoria } from "../models/categoria.model";

export class CategoriaService {
  // Obtener todas las categorías
  async listarCategorias(): Promise<Categoria[]> {
    const connection = await connectDB();
    const [rows] = await connection.execute("SELECT * FROM categorias");
    return rows as Categoria[];
  }

  // Obtener una categoría por ID
  async obtenerPorId(idCategoria: number): Promise<Categoria | null> {
    const connection = await connectDB();
    const [rows] = await connection.execute("SELECT * FROM categorias WHERE idCategoria = ?", [idCategoria]);
    const data = rows as Categoria[];
    return data.length > 0 ? data[0] : null;
  }

  // Agregar nueva categoría
  async agregarCategoria(nombreCategoria: string): Promise<void> {
    const connection = await connectDB();
    await connection.execute("INSERT INTO categorias (nombreCategoria) VALUES (?)", [nombreCategoria]);
  }

  // Actualizar categoría existente
  async actualizarCategoria(idCategoria: number, nombreCategoria: string): Promise<void> {
    const connection = await connectDB();
    await connection.execute("UPDATE categorias SET nombreCategoria = ? WHERE idCategoria = ?", [
      nombreCategoria,
      idCategoria,
    ]);
  }

  // Eliminar categoría
  async eliminarCategoria(idCategoria: number): Promise<void> {
    const connection = await connectDB();
    await connection.execute("DELETE FROM categorias WHERE idCategoria = ?", [idCategoria]);
  }
}

