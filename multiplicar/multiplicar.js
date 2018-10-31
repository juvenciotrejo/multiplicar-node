const fs = require('fs');
const colors = require('colors');

let ListarTabla = (base, limite) => {
    let data = '';

    console.log('============='.green);
    console.log(`tabla de ${base}`.gray);
    console.log('============='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${ base*i}`);
    }
}

let CrearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ${base} no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base*i} \n`;
        }

        fs.writeFile(`tablas/tabla${base}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla${base}.txt`);

        });
    });
}

module.exports = {
    CrearArchivo,
    ListarTabla
}