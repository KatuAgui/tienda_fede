import { Request, Response } from "express";
import { CatalogoService } from "../services/catalogo.service";

const servicio = new CatalogoService();

// 🔹 Listar todos los registros del catálogo
export const obtenerCatalogo = async (req: Request, res: Response) => {
  try {
    const catalogo = await servicio.listarCatalogo();
    res.json(catalogo);
  } catch (error) {
    console.error("Error al obtener catálogo:", error);
    res.status(500).json({ error: "Error al listar catálogo" });
  }
};

// 🔹 Buscar productos de un inventario específico
export const buscarCatalogoPorInventario = async (req: Request, res: Response) => {
  const { idInventario } = req.params;

  try {
    const catalogo = await servicio.buscarPorInventario(Number(idInventario));
    res.json(catalogo);
  } catch (error) {
    console.error("Error al buscar productos del inventario:", error);
    res.status(500).json({ error: "Error al buscar productos por inventario" });
  }
};

// 🔹 Agregar un producto al catálogo
export const crearCatalogo = async (req: Request, res: Response) => {
  const { idInventario, idProducto, stock, stockMinimo, precioCompra } = req.body;
  try {
    await servicio.agregarCatalogo(idInventario, idProducto, stock, stockMinimo, precioCompra);
    res.status(201).json({ message: "Producto agregado al catálogo correctamente" });
  } catch (error) {
    console.error("Error al crear catálogo:", error);
    res.status(500).json({ error: "Error al crear catálogo" });
  }
};

// 🔹 Actualizar registro del catálogo (stock o precio)
export const actualizarCatalogo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { stock, stockMinimo, precioCompra } = req.body;

  try {
    await servicio.actualizarCatalogo(Number(id), stock, stockMinimo, precioCompra);
    res.json({ message: "Catálogo actualizado correctamente" });
  } catch (error) {
    console.error("Error al actualizar catálogo:", error);
    res.status(500).json({ error: "Error al actualizar catálogo" });
  }
};

// 🔹 Eliminar registro del catálogo
export const eliminarCatalogo = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await servicio.eliminarCatalogo(Number(id));
    res.json({ message: "Producto eliminado del catálogo correctamente" });
  } catch (error) {
    console.error("Error al eliminar catálogo:", error);
    res.status(500).json({ error: "Error al eliminar producto del catálogo" });
  }
};

export const listarInventariosConStockTotal = async (req: Request, res: Response) => {
  try {
    const inventarios = await servicio.listarInventariosConStockTotal();
    res.json(inventarios);
  } catch (error) {
    console.error("Error al listar inventarios con stock total:", error);
    res.status(500).json({ error: "Error al obtener inventarios con stock total" });
  }
};

// 🔹 NUEVO 2: Listar todos los productos de un inventario
export const listarProductosPorInventario = async (req: Request, res: Response) => {
  const { idInventario } = req.params;
  try {
    const productos = await servicio.listarProductosPorInventario(Number(idInventario));
    res.json(productos);
  } catch (error) {
    console.error("Error al listar productos del inventario:", error);
    res.status(500).json({ error: "Error al listar productos del inventario" });
  }
};