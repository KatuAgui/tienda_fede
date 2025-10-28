"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connectDB = async () => {
    try {
        const connection = await promise_1.default.createConnection({
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
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error al conectar a la base de datos:", error.message);
        }
        else {
            console.error("Error desconocido al conectar a la base de datos:", error);
        }
        process.exit(1);
    }
};
exports.connectDB = connectDB;
