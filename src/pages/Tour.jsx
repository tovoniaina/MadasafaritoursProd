import React from 'react'
import {  Outlet } from "react-router-dom"
// import TourCategory from '../components/TourCategory'

function Tour() {
    return( 
        <main id='Slider'>
            {/* <TourCategory /> */}
            <Outlet />  
        </main>

    )
}


export default Tour
