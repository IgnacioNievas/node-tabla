const argv = require('yargs')
	.options({
		b: {
			alias: 'base',
			demandOption: true,
			default: 5,
			type: 'number',
			describe: 'Es la base para tabla de multiplicar',
		},
		l: {
			alias: 'listar',
			default: false,
			type: 'boolean',
			describe: 'Muestra la tabla de multiplicar en consola',
		},
		h: {
			alias: 'hasta',
			default: 10,
			type: 'number',
			describe: 'Hasta que numero multiplica la tabla',
		},
	})
	.check((argv, options) => {
		if (isNaN(argv.b)) {
			throw new Error('Tiene que ser un numero.');
		}
		return true;
	}).argv;

module.exports = {
	argv,
};
