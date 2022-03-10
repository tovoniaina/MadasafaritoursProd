import React from 'react'
import Slider from "../components/Slider"
import {  Outlet } from "react-router-dom"

function Tour() {
    return( 
        <main id='Slider'>
            <Slider />
            <Outlet />  

        </main>

    )
}


export default Tour
