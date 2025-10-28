import { connectDB } from "../config/database";
import { Producto } from "../models/producto.model";

export class ProductoService {
  // Listar todos los productos (con nombre de categoría)
  async listarProductos(): Promise<Producto[]> {
    const connection = await connectDB();
    const [rows] = await connection.execute(`
      SELECT p.*, c.nombreCategoria 
      FROM productos p 
      LEFT JOIN categorias c ON p.IdCategoria = c.idCategoria
    `);
    return rows as Producto[];
  }

  // Buscar producto por id o nombre
  async buscarProducto(termino: string): Promise<Producto[]> {
    const connection = await connectDB();
    const [rows] = await connection.execute(
      "SELECT * FROM productos WHERE nombre LIKE ? OR id = ?",
      [`%${termino}%`, Number(termino) || 0]
    );
    return rows as Producto[];
  }

  // Obtener producto por ID
  async obtenerPorId(id: number): Promise<Producto | null> {
    const connection = await connectDB();
    const [rows] = await connection.execute("SELECT * FROM productos WHERE id = ?", [id]);
    const data = rows as Producto[];
    return data.length > 0 ? data[0] : null;
  }

  // Agregar nuevo producto
  async agregarProducto(nombre: string, precio: number, IdCategoria: number): Promise<void> {
    const connection = await connectDB();
    await connection.execute("INSERT INTO productos (nombre, precio, IdCategoria) VALUES (?, ?, ?)", [
      nombre,
      precio,
      IdCategoria,
    ]);
  }

  // Actualizar producto
  async actualizarProducto(id: number, nombre: string, precio: number, IdCategoria: number): Promise<void> {
    const connection = await connectDB();
    await connection.execute("UPDATE productos SET nombre=?, precio=?, IdCategoria=? WHERE id=?", [
      nombre,
      precio,
      IdCategoria,
      id,
    ]);
  }

  // Eliminar producto
  async eliminarProducto(id: number): Promise<void> {
    const connection = await connectDB();
    await connection.execute("DELETE FROM productos WHERE id=?", [id]);
  }
}
