//import mysql from "mysql2/promise";
//import dotenv from "dotenv";
import mysql, { Connection } from "mysql2/promise";
import dotenv from "dotenv";
/*
dotenv.config();

export const connectDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      ssl: {
        rejectUnauthorized: true,         
      },
    });
    console.log("Conexión a MySQL exitosa");
    return connection;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al conectar a la base de datos:", error.message);
    } else {
      console.error("Error desconocido al conectar a la base de datos:", error);
    }
    process.exit(1);
  }
};

*/


dotenv.config();

export const connectDB = async (): Promise<Connection> => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      ssl: {
        rejectUnauthorized: false, // 🔹 aceptar certificados autofirmados
      },
    });

    console.log("✅ Conexión a MySQL (Railway) exitosa");
    return connection;
  } catch (error: any) {
    console.error("❌ Error al conectar a la base de datos:", error.message);
    process.exit(1);
  }
};

