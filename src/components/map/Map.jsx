import React from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.css'
import FmdGoodIcon from '@mui/icons-material/FmdGood';


const LocationPin = ({ text }) => (
  <div className="pin">
    <FmdGoodIcon icon={FmdGoodIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)


const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBWcate455Za3EG0aIK8EIW8__VnUwrkdM' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
  
  export default Map