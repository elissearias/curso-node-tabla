
const fs = require ('fs');
const colors = require('colors');

const crearArchivo = async (base, listar, hasta) => {
   
    try{

        let salida = '';
        let consola = '';

        for (let i=1; i<=hasta; i++){
            salida += `${base} X ${i} = ${base*i}\n`;
            consola += colors.magenta(`${base} ${'X'.red} ${i} = ${base*i}\n`);
        }
        
        if (listar===true){
            console.log('===================='.grey);
            console.log('    Tabla del:', colors.blue(base));
            console.log('===================='.grey);

            console.log(consola);
        }

        

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
        
        
    }
    catch (err) {
        throw err;
    }
}


module.exports = {
    crearArchivo
}