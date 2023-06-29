1. Con el comando "npm init -y" inicializamos un nuevo proyecto en node.js creará un archivo "package.json" con valores predeterminados para el nombre del proyecto, la versión, la descripción, el punto de entrada del programa, las dependencias y otros detalles del proyecto. Esto te permite comenzar rápidamente un nuevo proyecto sin tener que responder manualmente a todas las preguntas de configuración.

2.Con el comando "npm i express" instalamos el paquete de express en un proyecto node.js

3.En nuestro package.json debemos indicar que es de "type": "module" debajo de description arriba del main.

4.En scripts creamos a dev que contiene nuestro index que ejecuta toda la app
 "scripts": {
    "dev": "node src/index.js"
  }

5. Con el comando "npm i -D nodemon" instalamos el paquete de nodemon como una dependecia de desarrollo Al ejecutar "npm i -D nodemon", NPM buscará el paquete de nodemon en el registro público de paquetes de NPM y lo descargará e instalará en tu proyecto. La opción "-D" (abreviatura de "--save-dev") indica que nodemon se instalará como una dependencia de desarrollo, lo que significa que se utilizará durante el desarrollo del proyecto, pero no será necesario en el entorno de producción.

6. EN nuestro package json cambiamos "scripts": {
    "dev": "nodemon src/index.js"
  }.

7.