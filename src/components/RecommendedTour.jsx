import React from 'react'
import { Send } from '@mui/icons-material';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import EasternWonder from '../images/imagesMst/EasternWonder.png';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import SouthernTrekking from '../images/imagesMst/SouthernTrekking.jpg'
import MadaSouthernSafari from '../images/imagesMst/MadaSouthernSafari.jpg'
import MalagasyCultureDiscovery from '../images/imagesMst/MalagasyCultureDiscovery.jpg'
import MyLocationIcon from '@mui/icons-material/MyLocation';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


function RecommendedTour() {
    const tours = [

        {
            title: 'Eastern wonder',
            img: EasternWonder,
            description: "With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content",
            price: "From €280",
            location: 'East',
            timer: "7 Days",
            learnMore: '/eastern-wonder',
            badge: 'Recommended'
        },

        {
            title: 'Southern Trekking',
            img: SouthernTrekking,
            description: "With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content",
            price: "From €1160",
            location: 'Southern',
            timer: "17 Days",
            learnMore: '/southern-trekking',
            badge: 'Recommended'
        },
        {
            title: 'Mada Southern Safari',
            img: MadaSouthernSafari,
            description: "With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content",
            price: "From €950",
            location: 'Southern',
            timer: "12 Days",
            learnMore: '/mada-southern-safari',
            badge: 'Recommended'
        },

        {
            title: 'Malagasy Culture Discovery',
            img: MalagasyCultureDiscovery,
            description: "With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content",
            price: "From €920",
            location: 'Southeast',
            timer: "10 Days",
            learnMore: '/malagasy-culture-discovery',
            badge: 'Recommended'
        }
    ]
    return (
        <div className="Services my-5">
            <div className="container">
                <div>
                    <h1>Our recommended tours</h1>
                </div>

                <div>
                    We have 14 tours modalities, so you can choose wisely the one suits you <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sed saepe explicabo iste ad, quibusdam beatae neque officia dignissimos necessitatibus sapiente voluptate rem nemo repellendus accusantium, a doloremque exercitationem minus.
                    Maxime asperiores placeat sunt laudantium inventore, quaerat dolore assumenda facilis deserunt quos soluta! Voluptates dolore accusamus fugit saepe quod repellendus eum. Iure, autem blanditiis? Repellendus maxime laudantium sed minus qui?
                </div>
                <div className="row">
                    {tours.map((tour, i) => <div key={i} className="col-lg-6 col-md-12 col-sm-12 my-2" >
                        <div className="card">
                            <div className="card-body">
                                <div className="strips-container">
                                    <div className='strips'> {tour.badge} </div>
                                </div>
                                <div className="card-icons text-center">

                                </div>
                                <h3 className="card-title text-center">{tour.title}</h3>
                                <div><img className='card-img-top' src={tour.img} alt="" /></div>
                                <p className="card-text">{tour.description} </p>

                                <div className='row infoPratique'>
                                    <div className="col"><span className="badge badge-info place"> <MyLocationIcon />{tour.location}</span></div>
                                    <div className="col"> <span className="badge badge-info price"><AvTimerIcon /> {tour.timer}</span> </div>
                                    <div className="col"><span className="badge badge-info price"><MonetizationOnIcon /> {tour.price}</span></div>
                                </div>

                                <div className="button-action">
                                    <button type="button" className="learnMoreBtn"><a href={`/Tour${tour.learnMore}`} target="_blank" rel="noopener noreferrer">Learn more <Send /></a></button>
                                    <button className="RequestQuoteBtn" variant="contained" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> <RequestQuoteIcon />  Ask a quote </button>
                                </div>

                            </div>
                        </div>
                    </div>)}

                </div>
            </div>
        </div>
    )
}

export default RecommendedTour
