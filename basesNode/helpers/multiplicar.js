const fs = require('node:fs');

const multiplicar = (base) => {

    let hasta = 10;
    let salida = '';

    console.log(`Tabla de multiplicar del ${base}`);

    for (let contador = 1; contador <= hasta; contador++) {
        salida += `${base} * ${contador} = ${base * contador}\n`;
    }

    let nombreArchivo = `../logs/Tabla_${base}.log.txt`;
    fs.writeFile(nombreArchivo, salida, (error) => {
        if (error) throw error;

        console.log(`${nombreArchivo} creado.`);
        console.log(`Gracias por usar mi programa. :)`);
    });
}

const multiplicarPromesa = (base) => {
    return new Promise((resolve, reject) => {

        let hasta = 10;
        let salida = '';

        console.log(`Tabla de multiplicar del ${base}`);

        for (let contador = 1; contador <= hasta; contador++) {
            salida += `${base} * ${contador} = ${base * contador}\n`;
        }

        let nombreArchivo = `../logs/Tabla_${base}.log.txt`;
        fs.writeFile(nombreArchivo, salida, (error) => {
            if (error) {
                reject(error);
            }
            resolve(`${nombreArchivo} creado.`);
        });

    })
}

const multiplicarPromesa2 = async (base) => {
    try {
        let hasta = 10;
        let salida = '';

        console.log(`Tabla de multiplicar del ${base}`);

        for (let contador = 1; contador <= hasta; contador++) {
            salida += `${base} * ${contador} = ${base * contador}\n`;
        }

        let nombreArchivo = `../logs/Tabla_${base}.log.txt`;
        fs.writeFileSync(nombreArchivo, salida);
        return `${nombreArchivo} creado.`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    multiplicar,
    multiplicarPromesa,
    multiplicarPromesa2,
}