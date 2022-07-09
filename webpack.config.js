const path = require('path');
const { mainModule } = require('process');
// para autocomlpetado
/** @type {import('webpack').Configuration} */

module.export = {  // aquí vamos a añadir todas las configuraciones 
    entry: './src/index.js',  // esta configuración nos permite indicar cual es el punto de entrada de nuestra aplicación
    // luego preparamos el output, que es hacia donde vamos a enviar lo que prepara webpack 
    // webpack tiene un nombre específico para esta carpeta, llamada dist 
    output: { // en este definimos los elementos internos  para trabajar 
        path: path.resolve(__dirname, 'dist'),  // el método resolve nos permite saber donde se encuentra ubicado nuestro proyecto, en que directorio y poderlo utilizar  
        filename: 'main.js',  // nombre del resultante 
    },
    // ahora vamos a pasarle las extensiones con las que va a trabajar este webpack
    resolve:{
        extensions: ['.js']  // en un arreglo vamos a pasarle las extensiones con las que vaa atrabajar,  
    }
}