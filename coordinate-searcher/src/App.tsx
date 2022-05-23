import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

/**
 * PLANUNG APP:
 * - Map (Leaflet) für Koordinaten der GTA-Karte
 *    - Koorinaten suchen können (ne search box)
 *    - Koordinaten auf Karte anzeigen lassen (Live wo die maus ist maybe/oder durch klicken)
 *    - (Straßennamen suchen)
 *  
 *  
 */


function App() {
  const position = [51.505, -0.09]
  return (
    <MapContainer
      center={[40.8054, -74.0241]}
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWdlbnRzbWl0dHkiLCJhIjoiY2wzajVvbjAxMDBzNDNjbm04bWRoZG91MyJ9.UMbbODSpHAnBgTrN78GQlw`}
        attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
      />
      <Marker position={[40.8054, -74.0241]} draggable={true} >
        <Popup>Hey ! I live here</Popup>
      </Marker>
    </MapContainer>
  );
}

export default App;
