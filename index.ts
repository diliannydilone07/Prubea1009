import "reflect-metadata"; // Necesario para los decoradores (siempre de primero)
import express from "express"; // Llamar extensiones que voy a suar
import userRoutes from "./user/routes/user.route.js"; // Llamar a las rutas de usuario
import { AppDataSource } from "./config/db.config.js"; // Llamar a la base de datos

const app = express(); // Crear app basandome en express
const port = process.env.DBPORT || 3000; // Llamar al puesto que voy a usar o el que aclare

app.use(express.json()); // Manera en la que voy a manipular los datos
// solo se usa post, get, put y delete
// express funciona por ruta

app.get("/", (req, res) => {
  // Primera ruta
  res.send("Hola 6to");
});

app.use("/users", userRoutes); // Usar las rutas de usuario

app.listen(port, () => {
  // Escuchar el puerto
  console.log("servidor corriendo");
});

AppDataSource.initialize();