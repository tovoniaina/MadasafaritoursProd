import React from 'react'
import { BrowserRouter as  Route, Routes, Outlet, BrowserRouter } from "react-router-dom"

function Tour() {
    return  <Outlet />
    
}

const routes = (
    <BrowserRouter>
        <div>
            <Routes>
                <Route path='' />
            </Routes>
        </div>

    </BrowserRouter>

)

export default Tour
