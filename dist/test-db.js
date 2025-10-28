"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// test-db.ts
const database_1 = require("./config/database");
const probarConexion = async () => {
    const connection = await (0, database_1.connectDB)();
    const [rows] = await connection.query("SELECT NOW() AS fecha_actual");
    console.log("📅 Fecha desde la base de datos:", rows[0].fecha_actual);
    await connection.end();
};
probarConexion();
