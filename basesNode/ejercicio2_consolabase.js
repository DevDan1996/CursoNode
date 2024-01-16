const { multiplicarPromesa } = require('./helpers/multiplicar');

// Obtener información de la consola

//* Obtener todos los argumentos
// console.log(process.argv);

//* Obtener un valor por posición, por medio de la desestructuración
const [, , arg3 = 'base=1'] = process.argv;
console.log(arg3);
// Obtener el valor
const [, base = 1] = arg3.split('=');
console.log(base);

multiplicarPromesa(base)
.then(nombreArchivo => console.log(`Archivo generado ${nombreArchivo}`))
.catch(error => console.error(error));


