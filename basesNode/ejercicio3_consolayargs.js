const { multiplicarPromesa } = require("./helpers/multiplicar");
const argv = require('./config/yargs');

multiplicarPromesa(argv.b, argv.l)
    .then(nombreArchivo => console.info(`Archivo ${nombreArchivo} generado.`))
    .catch(error => console.error(error))
    .finally(console.info('Gracias por usar mi programa.'));