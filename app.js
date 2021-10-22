const { tablaMulti } = require('./helpers/tablas');
const { argv } = require('./config/yargs');
require('colors');

console.clear();

//SIN YARGS

// const [, , arg3] = process.argv;

// const [, base = 5] = arg3.split('=');

//CON YARGS

// console.log(process.argv);
console.log(argv);

tablaMulti(argv.b, argv.l, argv.h)
	.then((nombreDelArchivo) => console.log(nombreDelArchivo.rainbow))
	.catch((err) => console.error(err));
