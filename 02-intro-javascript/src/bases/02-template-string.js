

const nombre = 'Adan';
const apellido = 'Ledesma'


const nombreCompleto = `${nombre} ${apellido}`;


console.log(nombreCompleto);


function getSaludo(nombre){
    return 'Hola Mundo';
}


console.log( `Este es un texto: ${ getSaludo(nombre)}`);