import React from 'react'
import { Send } from '@mui/icons-material';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import Indri from '../images/imagesMst/indri.JPG';
import EasternWonder from '../images/imagesMst/EasternWonder.png';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import DivingTour from '../images/imagesMst/DivingTour.jpg'
import DryDeciduousBirding from '../images/imagesMst/DryDeciduousBirding.jpg'
import RainForestBirding from '../images/imagesMst/RainForestBirding.jpg'
import BaobabSafari from '../images/imagesMst/BaobabSafari.jpg'
import VanillaCruise from '../images/imagesMst/VanillaCruise.jpg'
import MadaNorthernSafari from '../images/imagesMst/MadaNorthernSafari.jpg'
import TanaSurrounding from '../images/imagesMst/TanaSurrounding.jpg'
import SouthernTrekking from '../images/imagesMst/SouthernTrekking.jpg'
import MadaSouthernSafari from '../images/imagesMst/MadaSouthernSafari.jpg'
import MarvellousHoneymoonSafari from '../images/imagesMst/MarvellousHoneymoonSafari.jpg'
import MalagasyCultureDiscovery from '../images/imagesMst/MalagasyCultureDiscovery.jpg'
import RiverTrip from '../images/imagesMst/RiverTrip.jpg'
import MyLocationIcon from '@mui/icons-material/MyLocation';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


function TourHighlightsCard() {
    const tours = [
        {
            title: 'Indri Encouter',
            img: Indri,
            description: "With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content",
            price: "From €280",
            location: 'East',
            timer: "4 Days",
            learnMore:'/indri-encouter',
        }, 
        {
            title: 'Eastern wonder',
            img: EasternWonder,
            description: "With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content",
            price: "From €280",
            location: 'East',
            timer: "7 Days",
            learnMore:'/eastern-wonder',
        },
        {
            title: 'Diving Tour',
            img: DivingTour,
            description: "With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content",
            price: "From €280",
            location: 'Northwest',
            timer: "9 Days",
            learnMore:'/diving-tour',
        },
        {
            title: 'Dry Deciduous Birding',
            img: DryDeciduousBirding,
            description: "With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content",
            price: "From €750",
            location: 'South',
            timer: "11 Days",
            learnMore:'/dry-deciduous-birding',
            quote:""
        },
        {
            title: 'Rain Forest Birding',
            img: RainForestBirding,
            description: "With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content",
            price: "From €680",
            location: 'Southeast',
            timer: "10 Days",
            learnMore:'/rainforest-birding',
        },
        {
            title: 'Vanilla Cruise',
            img: VanillaCruise,
            description: "With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content",
            price: "From €980",
            location: 'Northeast',
            timer: "14 Days",
            learnMore:'/vanilla-cruise',
        },
        {
            title: 'Baobab Safari',
            img: BaobabSafari,
            description: "With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content",
            price: "From €420",
            location: 'West',
            timer: "7 Days",
            learnMore:'/safari',
        },
        {
            title: 'Mada Northern Safari',
            img: MadaNorthernSafari,
            description: "With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content",
            price: "From €620",
            location: 'North',
            timer: "9 Days",
            learnMore:'/mada-northern-safari',
        },
        {
            title: 'Tana Surrounding',
            img: TanaSurrounding,
            description: "With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content",
            price: "From €160",
            location: 'Highland',
            timer: "4 Days",
            learnMore:'/tana-surrounding',
        },
        {
            title: 'Southern Trekking',
            img: SouthernTrekking,
            description: "With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content",
            price: "From €1160",
            location: 'Southern',
            timer: "17 Days",
            learnMore:'/southern-trekking',
        },
        {
            title: 'Mada Southern Safari',
            img: MadaSouthernSafari,
            description: "With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content",
            price: "From €950",
            location: 'Southern',
            timer: "12 Days",
            learnMore:'/mada-southern-safari',
        },
        {
            title: 'Post Wedding Safari',
            img: MarvellousHoneymoonSafari,
            description: "With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content",
            price: "From €970",
            location: 'NorthWest',
            timer: "10 Days",
            learnMore:'/post-wedding-safari',
        },
        {
            title: 'Malagasy Culture Discovery',
            img: MalagasyCultureDiscovery,
            description: "With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content",
            price: "From €920",
            location: 'Southeast',
            timer: "10 Days",
            learnMore:'/malagasy-culture-discovery',
        },
        {
            title: 'River Trip',
            img: RiverTrip,
            description: "With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content",
            price: "From €920",
            location: 'Southeast',
            timer: "10 Days",
            learnMore:'/river-trip',
        }

    ]
    return (
        <div className="Services my-5">
            <div className="container">
                <div>
                    <h1>Feel free to select your tour modality</h1>
                </div>

                <div>
                We have 14 tours modalities, so you can choose wisely the one suits you <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sed saepe explicabo iste ad, quibusdam beatae neque officia dignissimos necessitatibus sapiente voluptate rem nemo repellendus accusantium, a doloremque exercitationem minus.
                Maxime asperiores placeat sunt laudantium inventore, quaerat dolore assumenda facilis deserunt quos soluta! Voluptates dolore accusamus fugit saepe quod repellendus eum. Iure, autem blanditiis? Repellendus maxime laudantium sed minus qui?
                </div>
                <div className="row">
                    {tours.map((tour, i) => <div key={i} className="col-lg-4 col-md-12 col-sm-12 my-2" >
                        <div className="card">
                            <div className="card-body">
                                <div className="card-icons text-center">

                                </div>
                                <h3 className="card-title text-center">{tour.title}</h3>
                                <div><img className='card-img-top' src={tour.img} alt="" /></div>
                                <p className="card-text">{tour.description} </p>

                                <div className='row infoPratique'>
                                    <div className="col"><span class="badge badge-info place"> <MyLocationIcon />{tour.location}</span></div>
                                    <div className="col"> <span class="badge badge-info price"><AvTimerIcon /> {tour.timer}</span> </div>
                                    <div className="col"><span class="badge badge-info price"><MonetizationOnIcon /> {tour.price}</span></div>
                                </div>

                                <div className="button-action">
                                    <button type="button" className="bouton-expertise"><a href={`/Tour${tour.learnMore}`}>Learn more <Send /></a></button>
                                    <button className="bouton-expertise droite-btn" variant="contained" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> <RequestQuoteIcon />  Ask a quote </button>
                                </div>

                            </div>
                        </div>
                    </div>)}

                </div>
            </div>
        </div>
    )
}

export default TourHighlightsCard
