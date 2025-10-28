import { Request, Response } from "express";
import { ProductoService } from "../services/producto.service";

const servicio = new ProductoService();

// 🔹 Obtener todos los productos
export const obtenerProductos = async (req: Request, res: Response) => {
  try {
    const productos = await servicio.listarProductos();
    res.json(productos);
  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).json({ error: "Error al listar productos" });
  }
};

// 🔹 Buscar producto por id o nombre
export const buscarProducto = async (req: Request, res: Response) => {
  const { termino } = req.query;
  if (!termino) return res.status(400).json({ error: "Debe enviar un término de búsqueda" });

  try {
    const productos = await servicio.buscarProducto(String(termino));
    res.json(productos);
  } catch (error) {
    console.error("Error al buscar producto:", error);
    res.status(500).json({ error: "Error al buscar producto" });
  }
};

// 🔹 Crear nuevo producto
export const crearProducto = async (req: Request, res: Response) => {
  const { nombre, precio, IdCategoria } = req.body;
  try {
    await servicio.agregarProducto(nombre, precio, IdCategoria);
    res.status(201).json({ message: "Producto creado correctamente" });
  } catch (error) {
    console.error("Error al crear producto:", error);
    res.status(500).json({ error: "Error al crear producto" });
  }
};

// 🔹 Actualizar producto existente
export const actualizarProducto = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre, precio, IdCategoria } = req.body;

  try {
    await servicio.actualizarProducto(Number(id), nombre, precio, IdCategoria);
    res.json({ message: "Producto actualizado correctamente" });
  } catch (error) {
    console.error("Error al actualizar producto:", error);
    res.status(500).json({ error: "Error al actualizar producto" });
  }
};

// 🔹 Eliminar producto
export const eliminarProducto = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await servicio.eliminarProducto(Number(id));
    res.json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    res.status(500).json({ error: "Error al eliminar producto" });
  }
};
