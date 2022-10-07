const { describe } = require('yargs');

const argv = require('yargs')
                .options({
                    'b':{
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Is the base of the Multiplication table'
                    },
                    'h':{
                        alias: 'hasta',
                        default: 10,
                        type: 'number',
                        describe: 'Numero final para resolver la tabla'
                    },
                    'l':{
                        alias: 'listar',
                        demandOption: false,
                        type: 'boolean',
                        default: false,
                        describe: 'Show the table in console'
                    }
                })
                .check((argv, option)=>{
                    if (isNaN(argv.b)) {
                        throw 'La base tiene que ser un número';
                    }
                    return true;
                })
                .argv;

module.exports = argv;