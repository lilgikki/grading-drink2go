const COORDINATES = {
  lat: 59.968137,
  lng: 30.316272
};
const ZOOM = 20;
const MIN_WIDTH_PIN = 38;
const MIN_HEIGHT_PIN = 50;
const PIN_POSITION_X = 19;
const PIN_POSITION_Y = 50;

const LeafletParameters = {
  TILE_LAYER: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
};

const mainPinIcon = L.icon({
  iconUrl: './img/map-pin.svg',
  iconSize: [MIN_WIDTH_PIN, MIN_HEIGHT_PIN],
  iconAnchor: [PIN_POSITION_X, PIN_POSITION_Y],
});

const map = L.map('map')
  .setView(COORDINATES, ZOOM);

L.tileLayer(
  LeafletParameters.TILE_LAYER,
  LeafletParameters.ATTRIBUTION,
).addTo(map);

const marker = L.marker(
  COORDINATES,
  { icon: mainPinIcon, },
);

marker.addTo(map);
