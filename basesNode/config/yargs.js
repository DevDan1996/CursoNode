const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        describe: 'Es la base de la multiplicación',
        demandOption: true,
    }).option('l', {
        alias: 'listar',
        type: 'boolean',
        describe: 'Indica si quiere visualizar el resultado en pantalla',
        default: false,
    }).check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un número';
        }
        return true;
    }).argv;


module.exports = argv;