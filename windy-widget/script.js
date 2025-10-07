// Initialize Leaflet map
const map = L.map('map').setView([4.9031, 114.9398], 6); // BSB center

// Base map from MapTiler
L.tileLayer('https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=CAgganf0DMElVWkxBZeq', {
    attribution: '&copy; <a href="https://www.maptiler.com/">MapTiler</a>',
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 1,
    maxZoom: 18
}).addTo(map);

// Weather layer from MapTiler (wind arrows)
// Replace with MapTiler’s wind layer JS URL if provided
const weatherLayer = L.tileLayer('https://api.maptiler.com/weather/wind/{z}/{x}/{y}.png?key=CAgganf0DMElVWkxBZeq', {
    attribution: 'Weather data &copy; MapTiler',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);

// Optional: add layer control
L.control.layers({
    "Base": L.tileLayer('https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=CAgganf0DMElVWkxBZeq'),
    "Wind": weatherLayer
}).addTo(map);
