const express = require('express');
const engine = require('ejs-mate');
const path = require('path');

// Inicializaciones
const app = express();

// Configuraciones
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rutas
app.use(require('./routes/index'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Empieza el servidor
app.listen(3000, () => {
    console.log('Servidor en puerto', 3000);
});