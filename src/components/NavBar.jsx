import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InfoIcon from '@mui/icons-material/Info';
import QuizIcon from '@mui/icons-material/Quiz';
import GroupsIcon from '@mui/icons-material/Groups';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import BookModal from './BookModal';

function NavBar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-light menu'>
            <div className="container">
                <Link className='navbar-brand' to="/">
                    <img src={logo} alt="logo madasafari" className='logo' />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "var(--primary-grey)" }} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto text-light">
                        <li className="nav-item">

                            <Link to="/" className="nav-link"> <HomeRoundedIcon />Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/Tour" className="nav-link"><TravelExploreIcon />Tour</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/Itinerary" className="nav-link"><GroupsIcon />Itinerary</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/AboutUs" className="nav-link"><InfoIcon />About Us</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/Faqs" className="nav-link"><QuizIcon />Faqs</Link>
                        </li>
                       
                        <li className="nav-item">
                            <Link to="/Contact" className="nav-link"><ContactMailIcon />Contact</Link>
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
