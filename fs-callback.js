const fs = require('fs');

const base = 12;

console.clear();
console.log('=============================');
console.log(` Tabla del: ${base}`);
console.log('============================= \n');

let tabla = '';
for (let i = 1; i < 11; i++) {
	let resultado = base * i;

	tabla += ` ${base} x ${i} = ${resultado} \n`;
}

console.log(tabla);

fs.writeFile(`table-${base}.txt`, tabla, (err) => {
	if (err) throw err;
	console.log(`table-${base}.txt correcta `);
});
