import React from 'react'
// import Contacts from "../components/Contacts";
import ContactForms from '../components/ContactForms'
import MapSection from '../components/map/Map'


const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }


function Contact() {
    return(
        <main id='Qa'>
        {/* <MapContainer /> */}
        <ContactForms />
        <MapSection location={location} zoomLevel={17} />

    </main>
    )
}

export default Contact
