const hbs = require('hbs');

//helper para anio
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

//helper para capitalizar 
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});