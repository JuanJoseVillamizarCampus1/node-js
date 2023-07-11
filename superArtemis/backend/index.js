import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import Categoriasrouter from "./routes/categorias.routes.js";
import Clientesrouter from "./routes/clientes.routes.js";
import routerEmpleados from "./routes/empleados.routes.js";
import routesProductos from "./routes/productos.routes.js";
const app = express();

app.use(express.json())
dotenv.config();

const PORT = process.env.PORT
app.use("/Categoria",Categoriasrouter);
app.use("/Cliente",Clientesrouter);
app.use("/Empleado",routerEmpleados);
app.use("/Producto",routesProductos)
conectarDB()
app.listen(PORT,()=>{
    console.log(`Server web listening on port ${PORT}`);
})

