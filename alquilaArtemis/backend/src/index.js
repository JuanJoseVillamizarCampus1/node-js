//6. importando nuestra constante que contiene al framework express en este caso app
import app from "./app.js";

// 1.Creando funcion que lance la aplicación
const main = () =>{
    //7.Se inicializa el servidor express (se utiliza para obtener el valor del puerto que se estableció previamente utilizando app.set("port", 5000). El método get se usa para acceder a las propiedades y opciones configuradas en la aplicación de Express.)
    app.listen(app.get("port"));
    console.log(`The company's Server is running on port ${app.get("port")/*Para saber el puerto*/}`);
} 
main();