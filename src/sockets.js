module.exports = (io) => {

    io.on('connection', (socket) => {

        console.log('Nuevas coordenadas del cliente recibidas');

        socket.on('nuevasCoordenadasUsuario', (coords) => {

            socket.broadcast.emit('nuevasCoordenadasUsuario', coords);
            console.log('Nuevas coordenadas del cliente emitidas');

        });

    });

}