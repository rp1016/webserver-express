const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');
// Express HBS engine
//middleware. Se ejecuta siempre no importa que instruccion sea. 

//obtener puerto de escucha
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public")); //folder que quiero servir publico
//express HBS engine.
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');




//utilizando un template engine
app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Rafael'
    });
});

//about path
app.get('/about', (req, res) => {

    res.render('about', {
        anio: new Date().getFullYear()
    });
});



app.listen(port, () => {
    console.log(`Escuchando Peticiones en el ${port} }`);
});