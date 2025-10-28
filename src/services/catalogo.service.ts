import { connectDB } from "../config/database";
import { Catalogo } from "../models/catalogo.model";

export class CatalogoService {
  // 🔹 Listar todo el catálogo con inventario y producto
  async listarCatalogo(): Promise<Catalogo[]> {
    const connection = await connectDB();
    const [rows] = await connection.execute(`
      SELECT c.*, i.nombreInventario, p.nombre AS nombreProducto 
      FROM catalogo_inventario_producto c
      INNER JOIN inventarios i ON c.idInventario = i.idInventario
      INNER JOIN productos p ON c.idProducto = p.id
    `);
    return rows as Catalogo[];
  }

  // 🔹 Buscar productos dentro de un inventario específico
  async buscarPorInventario(idInventario: number): Promise<Catalogo[]> {
    const connection = await connectDB();
    const [rows] = await connection.execute(
      `
      SELECT c.*, p.nombre AS nombreProducto
      FROM catalogo_inventario_producto c
      INNER JOIN productos p ON c.idProducto = p.id
      WHERE c.idInventario = ?
      `,
      [idInventario]
    );
    return rows as Catalogo[];
  }

  // 🔹 Agregar registro al catálogo
  async agregarCatalogo(
    idInventario: number,
    idProducto: number,
    stock: number,
    stockMinimo: number,
    precioCompra: number
  ): Promise<void> {
    const connection = await connectDB();
    await connection.execute(
      "INSERT INTO catalogo_inventario_producto (idInventario, idProducto, stock, stockMinimo, precioCompra) VALUES (?, ?, ?, ?, ?)",
      [idInventario, idProducto, stock, stockMinimo, precioCompra]
    );
  }

  // 🔹 Actualizar stock o precio de un producto en inventario
  async actualizarCatalogo(
    idCatalogo: number,
    stock: number,
    stockMinimo: number,
    precioCompra: number
  ): Promise<void> {
    const connection = await connectDB();
    await connection.execute(
      "UPDATE catalogo_inventario_producto SET stock=?, stockMinimo=?, precioCompra=? WHERE idCatalogo=?",
      [stock, stockMinimo, precioCompra, idCatalogo]
    );
  }

  // 🔹 Eliminar producto del catálogo
  async eliminarCatalogo(idCatalogo: number): Promise<void> {
    const connection = await connectDB();
    await connection.execute("DELETE FROM catalogo_inventario_producto WHERE idCatalogo=?", [idCatalogo]);
  }
}
