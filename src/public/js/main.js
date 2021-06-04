const map = L.map('map-template').setView([-24.7831, -65.411], 13);

const socket = io();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

map.locate({
    enableHighAccuracy: true
});

map.on('locationfound', e => {

    const coords = [e.latlng.lat, e.latlng.lng];
    const marker = L.marker(coords)
    .bindPopup('Estás aquí.');
    marker.addTo(map);

    socket.emit('nuevasCoordenadasUsuario', e.latlng);
    console.log('Coordenadas emitidas hacia el socket');

});

socket.on('nuevasCoordenadasUsuario', (coords) => {

    console.log('Coordenadas recibidas del socket');

    const marker = L.marker([coords.lat + 0.5, coords.lng + 0.5])
    .bindPopup('Estás aquí.');
    marker.addTo(map);

});