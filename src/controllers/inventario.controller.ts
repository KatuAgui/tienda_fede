import { Request, Response } from "express";
import { InventarioService } from "../services/inventario.service";

const servicio = new InventarioService();

// 🔹 Obtener todos los inventarios
export const obtenerInventarios = async (req: Request, res: Response) => {
  try {
    const inventarios = await servicio.listarInventarios();
    res.json(inventarios);
  } catch (error) {
    console.error("Error al obtener inventarios:", error);
    res.status(500).json({ error: "Error al listar inventarios" });
  }
};

// 🔹 Crear nuevo inventario
export const crearInventario = async (req: Request, res: Response) => {
  const { nombreInventario, ubicacion } = req.body;
  try {
    await servicio.agregarInventario(nombreInventario, ubicacion);
    res.status(201).json({ message: "Inventario creado correctamente" });
  } catch (error) {
    console.error("Error al crear inventario:", error);
    res.status(500).json({ error: "Error al crear inventario" });
  }
};

// 🔹 Actualizar inventario existente
export const actualizarInventario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombreInventario, ubicacion } = req.body;

  try {
    await servicio.actualizarInventario(Number(id), nombreInventario, ubicacion);
    res.json({ message: "Inventario actualizado correctamente" });
  } catch (error) {
    console.error("Error al actualizar inventario:", error);
    res.status(500).json({ error: "Error al actualizar inventario" });
  }
};

// 🔹 Eliminar inventario
export const eliminarInventario = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await servicio.eliminarInventario(Number(id));
    res.json({ message: "Inventario eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar inventario:", error);
    res.status(500).json({ error: "Error al eliminar inventario" });
  }
};
