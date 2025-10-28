import { Request, Response } from "express";
import { CategoriaService } from "../services/categoria.service";

const servicio = new CategoriaService();

export const obtenerCategorias = async (req: Request, res: Response) => {
  try {
    const categorias = await servicio.listarCategorias();
    res.json(categorias);
  } catch (error) {
    console.error("Error al obtener categorías:", error);
    res.status(500).json({ error: "Error al listar categorías" });
  }
};

export const crearCategoria = async (req: Request, res: Response) => {
  const { nombreCategoria } = req.body;
  try {
    await servicio.agregarCategoria(nombreCategoria);
    res.status(201).json({ message: "Categoría creada correctamente" });
  } catch (error) {
    console.error("Error al crear categoría:", error);
    res.status(500).json({ error: "Error al crear categoría" });
  }
};

export const eliminarCategoria = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await servicio.eliminarCategoria(Number(id));
    res.json({ message: " Categoría eliminada correctamente" });
  } catch (error) {
    console.error("Error al eliminar categoría:", error);
    res.status(500).json({ error: "Error al eliminar categoría" });
  }
};
