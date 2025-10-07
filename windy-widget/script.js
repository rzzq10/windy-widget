// Initialize Leaflet map
const map = L.map('map').setView([4.9031, 114.9398], 6); // Brunei view

// Add MapTiler base map
L.tileLayer('https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=CAgganf0DMElVWkxBZeq', {
    attribution: '&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a>',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);

// Add animated wind layer
maptiler.weatherLayer({
    map: map,
    key: 'CAgganf0DMElVWkxBZeq',  // replace with your MapTiler key
    type: 'wind',              // could also be 'temperature' or 'precipitation'
    opacity: 0.7
}).addTo(map);
