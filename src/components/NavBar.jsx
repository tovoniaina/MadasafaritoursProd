import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
import BookModal from './BookModal';
import logoTop from "../images/logoBottom.png";
import NestedMenuNavbar from './NestedMenuNavbar';
import SegmentIcon from '@mui/icons-material/Segment';

function NavBar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-light menu'>

            <div className="container">
                <Link className='navbar-brand' to="/">
                    <img src={logoTop} alt="logo madasafari" className='logo' />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <FontAwesomeIcon icon={faBars} className="faBarsMd" style={{ color: "var(--primary-white)" }} /> */}
                    <SegmentIcon fontSize='large' className="faBarsMd" style={{ color: "var(--primary-white)" }} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <hr />
                    <ul className="navbar-nav ml-auto text-light">
                    
                        <li className="nav-item"> 

                            <Link to="/" data-toggle="collapse" data-target=".navbar-collapse" className="nav-link"> Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/Tour" data-toggle="collapse" data-target=".navbar-collapse" className="nav-link">Tours</Link>
                        </li>

                        <li className='nav-item'>
                        <NestedMenuNavbar />
                        </li>

                        <li className="nav-item">
                            <Link to="/AboutUs" data-toggle="collapse" data-target=".navbar-collapse" className="nav-link">About Us</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/Faqs" data-toggle="collapse" data-target=".navbar-collapse" className="nav-link">Faqs</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/Contact" data-toggle="collapse" data-target=".navbar-collapse" className="nav-link">Contact</Link>
                        </li>

                        <li className="nav-item">

                            <BookModal />

                        </li>


                    </ul>
                </div>
            </div>

        </nav >


    )
}

export default NavBar
