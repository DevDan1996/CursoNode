// Importar la librería para crear archivos
const fs = require('node:fs');

// Limpiar la consola
console.clear();

let hasta = 10;
let base = 5;
let salida = '';

console.log(`Tabla de multiplicar del ${base}`);

for (let contador = 1; contador <= hasta; contador++) {
    salida += `${base} * ${contador} = ${base * contador}\n`;
}

let nombreArchivo = `../logs/Tabla_${base}.log.txt`;
fs.writeFile(nombreArchivo, salida, ( error ) => {
    if(error) throw error;

    console.log(`${nombreArchivo} creado.`);
    console.log(`Gracias por usar mi programa. :)`);
});