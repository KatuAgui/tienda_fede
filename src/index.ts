import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/database"; 
import categoriaRoutes from "./routes/categoria.route";
import productoRoutes from "./routes/producto.route";
import inventarioRoutes from "./routes/inventario.route";
import catalogoRoutes from "./routes/catalogo.route";

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors({ origin: "http://localhost:4200" }));

app.use("/categorias", categoriaRoutes);
app.use("/productos", productoRoutes);
app.use("/inventarios", inventarioRoutes);
app.use("/catalogo", catalogoRoutes);

/*
app.get("/categorias", async (req: Request, res: Response) => {
  try {
    const connection = await connectDB();
    const [rows] = await connection.execute("SELECT * FROM categorias");
    res.json(rows);
  } catch (error) {
    console.error("Error al consultar categorías:", error);
    res.status(500).json({ error: "Error al obtener categorías" });
  }
});
*/

app.get("/", (req: Request, res: Response) => {
  res.send("Servidor TypeScript conectado a MySQL correctamente");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
