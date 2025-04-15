import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

export default function Map() {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetch('/api/shops')
      .then(res => res.json())
      .then(data => setShops(data));
  }, []);

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {shops.map((shop, idx) => (
        <Marker key={idx} position={[shop.latitude, shop.longitude]}>
          <Popup>{shop.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
