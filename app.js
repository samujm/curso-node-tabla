const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');


console.clear();

crearArchivo( argv.base, argv.listar, argv.hasta )
    .then( nombreArchivo =>console.log(nombreArchivo.rainbow, 'Creado') )
    .catch( err => console.log(err) )


// console.log(process.argv);
// console.log(argv);
// console.log( 'base: yargs', argv.b );
// console.log( 'listar: yargs', argv.l );



// console.log(process.argv);

// const [,,arg3='base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

// console.log(base);

// const base = 1;