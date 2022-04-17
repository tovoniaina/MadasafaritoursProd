import React from 'react'
import { Link } from "react-router-dom";


function Covid() {
  return (
    <div className='text-center covid-info py-2 my-3'>
        <div> <h1>Staying Safe During COVID-19</h1></div>
        <div>We have new ways of keeping you safe and making your adventure more flexible. Check Madagascar National Travel Protocols for more safety info for your trip.
        <br /> We also take care of everyone's health and safety during the trip. Please see the Madagascar measures for Covid.
        <div> <br />
       <Link to="/protocol-covid">
        <button className=" btn btn-primary" variant="contained" > Learn more </button>
        </Link>
        </div>
</div>
    </div>
  )
}

export default Covid