const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

// Inicializaciones
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Configuraciones
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rutas
app.use(require('./routes/index'));

// Sockets
require('./sockets')(io);

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Empieza el servidor
server.listen(3000, () => {
    console.log('Servidor en puerto', 3000);
});