const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 5533311,
        lat: 14.12313,
        lng: 14.12313,
    }
};

const persona2 = {...persona};
persona2.nombre= 'Petter';

console.log(persona);
console.log(persona2);


