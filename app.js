// Initialize the map
const map = L.map('map').setView([12.9716, 77.5946], 13); // Example coordinates (Bangalore)

// Add a tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
}).addTo(map);

// Simulated bus location data
const busData = [
    { id: 1, lat: 12.9716, lng: 77.5946 },
    { id: 2, lat: 12.9616, lng: 77.5846 },
];

// Function to add/update bus markers
const busMarkers = {};
function updateBusLocations(data) {
    data.forEach(bus => {
        if (busMarkers[bus.id]) {
            busMarkers[bus.id].setLatLng([bus.lat, bus.lng]);
        } else {
            busMarkers[bus.id] = L.marker([bus.lat, bus.lng]).addTo(map).bindPopup(`Bus ${bus.id}`);
        }
    });
}

// Simulate real-time updates
setInterval(() => {
    busData.forEach(bus => {
        bus.lat += (Math.random() - 0.5) * 0.01;
        bus.lng += (Math.random() - 0.5) * 0.01;
    });
    updateBusLocations(busData);
}, 3000);
