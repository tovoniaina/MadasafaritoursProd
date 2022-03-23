import React from 'react'
import Slider from "../components/Slider"
import {  Outlet } from "react-router-dom"
import TourCategory from '../components/TourCategory'

function Tour() {
    return( 
        <main id='Slider'>
            <Slider />
            <TourCategory />
            <Outlet />  
        </main>

    )
}


export default Tour
