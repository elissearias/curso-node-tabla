// Imprimir tabla del 5
// 5 x 1 =

//desestructuración
//const { boolean } = require('yargs');

const {crearArchivo} = require('./helpers/multiplicar');
const colors = require('colors');

//importación
//exportación por defecto
const argv = require('./config/yargs');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo,colors.yellow('creado')))
    .catch(err => console.log(err));




//desestructurar los arreglos
//const [,,arg3='base=5'] = process.argv;

//desestructurar lo que viene de arg3
//const [, base = 5] = arg3.split('=');
//console.log(base);



/*console.log('====================');
console.log('    Tabla del: 5');
console.log('====================');*/

//const base = 5;
//for (let i=1 ; i<=10; i++){
//    console.log(`${base} X ${i} = ${base*i}`);
//}


//const base = 6;






/*let salida = '';

for (let i=1; i<=10; i++){
    salida += `${base} X ${i} = ${base*i}\n`;
}

console.log(salida);

fs.writeFileSync(`tabla-${base}.txt`, salida)

console.log(`tabla-${base}.txt creada`);*/
