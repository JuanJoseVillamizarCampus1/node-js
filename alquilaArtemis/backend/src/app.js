//2. Importando framework expresss (Antes desde la terminal con el comando npm i express debemos instalar el framework)
import expresss from "express";
//13.Importando nuestro enrutador desde categorias.routes.js
import CategoriaRoutes from "./routes/categorias.routes.js";

//3.Guardando express en una variable
const app = expresss();

//5. Se estable el puerto 5000 como puerto de escucha solicitudes entrantes
app.set("port",5000);

//14.Rutas use() es un metodo de express que entiende los metodos http 
app.use(CategoriaRoutes)

//4.exportando la constante donde tenemos guardado nuestro framework
export default app;