// test-db.ts
import { connectDB } from "./config/database";

const probarConexion = async (): Promise<void> => {
  const connection = await connectDB();
  const [rows] = await connection.query("SELECT NOW() AS fecha_actual");
  console.log("📅 Fecha desde la base de datos:", (rows as any)[0].fecha_actual);
  await connection.end();
};

probarConexion();

