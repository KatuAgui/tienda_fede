"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const categoria_route_1 = __importDefault(require("./routes/categoria.route"));
const producto_route_1 = __importDefault(require("./routes/producto.route"));
const inventario_route_1 = __importDefault(require("./routes/inventario.route"));
const catalogo_route_1 = __importDefault(require("./routes/catalogo.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: "http://localhost:4200" }));
app.use("/categorias", categoria_route_1.default);
app.use("/productos", producto_route_1.default);
app.use("/inventarios", inventario_route_1.default);
app.use("/catalogo", catalogo_route_1.default);
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
app.get("/", (req, res) => {
    res.send("Servidor TypeScript conectado a MySQL correctamente");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
