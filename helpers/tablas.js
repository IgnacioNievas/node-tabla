const fs = require('fs');
const colors = require('colors');

const tablaMulti = async (base, listar, hasta) => {
	try {
		let tabla,
			consola = '';
		for (let i = 1; i <= hasta; i++) {
			let resultado = base * i;

			tabla += ` ${base} x ${i} =  ${resultado} \n`;
			consola += ` ${base} ${'x'.random} ${i} ${'='.green}  ${resultado} \n`;
		}

		if (listar) {
			console.log('============================='.rainbow);
			console.log(`${'Tabla del:'.bgRed} ${colors.red(base)}`);
			console.log('============================= \n'.rainbow);
			console.log(consola);
		}
		fs.writeFileSync(`./salida/table-${base}.txt`, tabla);
		return `table-${base}.txt `;
	} catch (err) {
		throw err;
	}
};

// const tablaMulti = async (base) => {
// 	return new Promise((resolve, reject) => {
// 		console.log('=============================');
// 		console.log(` Tabla del: ${base}`);
// 		console.log('============================= \n');

// 		let tabla = '';
// 		for (let i = 1; i < 11; i++) {
// 			let resultado = base * i;

// 			tabla += ` ${base} x ${i} = ${resultado} \n`;
// 		}

// 		console.log(tabla);
// 		fs.writeFileSync(`table-${base}.txt`, tabla);

// 		resolve(`table-${base}.txt `);
// 	});
// };

module.exports = {
	tablaMulti,
};
