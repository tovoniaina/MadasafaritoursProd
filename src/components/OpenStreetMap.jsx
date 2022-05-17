import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


function OpenStreetMap() {
    const position = [-18.91054485054323, 47.503705942889155]

    return (
     
<MapContainer center={position} zoom={16} scrollWheelZoom={false} style={{ height: '70vh', width: '70wh' }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        Mada Safari Tour SA <br /> IVM 104 VZ Antetezanaafovoany I - Antananarivo 101
      </Popup>
    </Marker>
  </MapContainer>
      
        
    )
}

export default OpenStreetMap