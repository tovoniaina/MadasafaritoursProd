import React from 'react'
import { Send } from '@mui/icons-material';
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
import EventAvailableIcon from '@mui/icons-material/EventAvailable';




function TourHighlightsCard() {
    return (
        <div className="Services my-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 my-2" >
                        <div class="card">
                            <div class="card-body">
                                <div className="card-icons text-center">

                                </div>
                                <h3 className="card-title text-center">Indri Encouter</h3>
                                <div><img className='card-img-top' src={Indri} alt="" /></div>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content </p>

                                <div className='row infoPratique'>
                                    <div className="col"><span class="badge badge-info place"> <MyLocationIcon />East</span></div>
                                    <div className="col"> <span class="badge badge-info price"><AvTimerIcon /> 4 Days</span> </div>
                                    <div className="col"><span class="badge badge-info price"><MonetizationOnIcon /> From €280</span></div>
                                </div>

                                <div className="button-action">
                                    <button type="button" className="bouton-expertise"><a href="ok">Learn more <Send /></a></button>
                                    <button type="button" className="bouton-expertise droite-btn"><a href="ok">Book Now <EventAvailableIcon /> </a></button>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 my-2" >
                        <div class="card">
                            <div class="card-body">
                                <div className="card-icons text-center">

                                </div>
                                <h3 className="card-title text-center">Eastern Wonder</h3>
                                <div><img className='card-img-top' src={EasternWonder} alt="" /></div>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content </p>

                                <div className='row infoPratique'>
                                    <div className="col"><span class="badge badge-info place"> <MyLocationIcon />East</span></div>
                                    <div className="col"> <span class="badge badge-info price"><AvTimerIcon /> 7 Days</span> </div>
                                    <div className="col"><span class="badge badge-info price"><MonetizationOnIcon /> From €280</span></div>
                                </div>

                                <div className="button-action">
                                    <button type="button" className="bouton-expertise gauche-btn"><a href="ok">Learn more <Send /></a></button>
                                    <button type="button" className="bouton-expertise droite-btn"><a href="ok">Book Now <EventAvailableIcon /> </a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 my-2" >
                        <div class="card">
                            <div class="card-body">
                                <div className="card-icons text-center">

                                </div>
                                <h3 className="card-title text-center">Diving Tour</h3>
                                <div><img className='card-img-top' src={DivingTour} alt="" /></div>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content </p>

                                <div className='row infoPratique'>
                                    <div className="col"><span class="badge badge-info place"> <MyLocationIcon />Northwest</span></div>
                                    <div className="col"> <span class="badge badge-info price"><AvTimerIcon /> 9 Days</span> </div>
                                    <div className="col"><span class="badge badge-info price"><MonetizationOnIcon /> From €280</span></div>
                                </div>

                                <div className="button-action">
                                    <button type="button" className="bouton-expertise gauche-btn"><a href="ok">Learn more <Send /></a></button>
                                    <button type="button" className="bouton-expertise droite-btn"><a href="ok">Book Now <EventAvailableIcon /> </a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 my-2" >
                        <div class="card">
                            <div class="card-body">
                                <div className="card-icons text-center">

                                </div>
                                <h3 className="card-title text-center">Dry Deciduous Birding</h3>
                                <div><img className='card-img-top' src={DryDeciduousBirding} alt="" /></div>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content </p>

                                <div className='row infoPratique'>
                                    <div className="col"><span class="badge badge-info place"> <MyLocationIcon />South</span></div>
                                    <div className="col"> <span class="badge badge-info price"><AvTimerIcon /> 11 Days</span> </div>
                                    <div className="col"><span class="badge badge-info price"><MonetizationOnIcon /> From €750</span></div>
                                </div>

                                <div className="button-action">
                                    <button type="button" className="bouton-expertise gauche-btn"><a href="ok">Learn more <Send /></a></button>
                                    <button type="button" className="bouton-expertise droite-btn"><a href="ok">Book Now <EventAvailableIcon /> </a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 my-2" >
                        <div class="card">
                            <div class="card-body">
                                <div className="card-icons text-center">

                                </div>
                                <h3 className="card-title text-center">Rain Forest Birding</h3>
                                <div><img className='card-img-top' src={RainForestBirding} alt="RainForestBirding" /></div>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content </p>

                                <div className='row infoPratique'>
                                    <div className="col"><span class="badge badge-info place"> <MyLocationIcon />Southeast</span></div>
                                    <div className="col"> <span class="badge badge-info price"><AvTimerIcon /> 10 Days</span> </div>
                                    <div className="col"><span class="badge badge-info price"><MonetizationOnIcon /> From €680</span></div>
                                </div>

                                <div className="button-action">
                                    <button type="button" className="bouton-expertise gauche-btn"><a href="ok">Learn more <Send /></a></button>
                                    <button type="button" className="bouton-expertise droite-btn"><a href="ok">Book Now <EventAvailableIcon /> </a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 my-2" >
                        <div class="card">
                            <div class="card-body">
                                <div className="card-icons text-center">

                                </div>
                                <h3 className="card-title text-center">Vanilla Cruise</h3>
                                <div><img className='card-img-top' src={VanillaCruise} alt="VanillaCruise" /></div>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content </p>

                                <div className='row infoPratique'>
                                    <div className="col"><span class="badge badge-info place"> <MyLocationIcon />Northeast</span></div>
                                    <div className="col"> <span class="badge badge-info price"><AvTimerIcon /> 14 Days</span> </div>
                                    <div className="col"><span class="badge badge-info price"><MonetizationOnIcon /> From €980</span></div>
                                </div>

                                <div className="button-action">
                                    <button type="button" className="bouton-expertise gauche-btn"><a href="ok">Learn more <Send /></a></button>
                                    <button type="button" className="bouton-expertise droite-btn"><a href="ok">Book Now <EventAvailableIcon /> </a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 my-2" >
                        <div class="card">
                            <div class="card-body">
                                <div className="card-icons text-center">

                                </div>
                                <h3 className="card-title text-center">Baobab Safari</h3>
                                <div><img className='card-img-top' src={BaobabSafari} alt="BaobabSafari" /></div>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content </p>

                                <div className='row infoPratique'>
                                    <div className="col"><span class="badge badge-info place"> <MyLocationIcon />West</span></div>
                                    <div className="col"> <span class="badge badge-info price"><AvTimerIcon /> 7 Days</span> </div>
                                    <div className="col"><span class="badge badge-info price"><MonetizationOnIcon /> From €420</span></div>
                                </div>

                                <div className="button-action">
                                    <button type="button" className="bouton-expertise gauche-btn"><a href="ok">Learn more <Send /></a></button>
                                    <button type="button" className="bouton-expertise droite-btn"><a href="ok">Book Now <EventAvailableIcon /> </a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 my-2" >
                        <div class="card">
                            <div class="card-body">
                                <div className="card-icons text-center">

                                </div>
                                <h3 className="card-title text-center">Mada Northern Safari</h3>
                                <div><img className='card-img-top' src={MadaNorthernSafari} alt="MadaNorthernSafari" /></div>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content </p>

                                <div className='row infoPratique'>
                                    <div className="col"><span class="badge badge-info place"> <MyLocationIcon />North</span></div>
                                    <div className="col"> <span class="badge badge-info price"><AvTimerIcon /> 9 Days</span> </div>
                                    <div className="col"><span class="badge badge-info price"><MonetizationOnIcon /> From €620</span></div>
                                </div>

                                <div className="button-action">
                                    <button type="button" className="bouton-expertise gauche-btn"><a href="ok">Learn more <Send /></a></button>
                                    <button type="button" className="bouton-expertise droite-btn"><a href="ok">Book Now <EventAvailableIcon /> </a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 my-2" >
                        <div class="card">
                            <div class="card-body">
                                <div className="card-icons text-center">

                                </div>
                                <h3 className="card-title text-center">Tana Surrounding</h3>
                                <div><img className='card-img-top' src={TanaSurrounding} alt="TanaSurrounding" /></div>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content </p>

                                <div className='row infoPratique'>
                                    <div className="col"><span class="badge badge-info place"> <MyLocationIcon />Highland</span></div>
                                    <div className="col"> <span class="badge badge-info price"><AvTimerIcon /> 4 Days</span> </div>
                                    <div className="col"><span class="badge badge-info price"><MonetizationOnIcon /> From €160</span></div>
                                </div>

                                <div className="button-action">
                                    <button type="button" className="bouton-expertise gauche-btn"><a href="ok">Learn more <Send /></a></button>
                                    <button type="button" className="bouton-expertise droite-btn"><a href="ok">Book Now <EventAvailableIcon /> </a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 my-2" >
                        <div class="card">
                            <div class="card-body">
                                <div className="card-icons text-center">

                                </div>
                                <h3 className="card-title text-center">Southern Trekking</h3>
                                <div><img className='card-img-top' src={SouthernTrekking} alt="SouthernTrekking" /></div>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content </p>

                                <div className='row infoPratique'>
                                    <div className="col"><span class="badge badge-info place"> <MyLocationIcon />Southern</span></div>
                                    <div className="col"> <span class="badge badge-info price"><AvTimerIcon /> 17 Days</span> </div>
                                    <div className="col"><span class="badge badge-info price"><MonetizationOnIcon /> From €1160</span></div>
                                </div>

                                <div className="button-action">
                                    <button type="button" className="bouton-expertise gauche-btn"><a href="ok">Learn more <Send /></a></button>
                                    <button type="button" className="bouton-expertise droite-btn"><a href="ok">Book Now <EventAvailableIcon /> </a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 my-2" >
                        <div class="card">
                            <div class="card-body">
                                <div className="card-icons text-center">

                                </div>
                                <h3 className="card-title text-center">Mada Southern Safari</h3>
                                <div><img className='card-img-top' src={MadaSouthernSafari} alt="MadaSouthernSafari" /></div>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content </p>

                                <div className='row infoPratique'>
                                    <div className="col"><span class="badge badge-info place"> <MyLocationIcon />Southern</span></div>
                                    <div className="col"> <span class="badge badge-info price"><AvTimerIcon /> 12 Days</span> </div>
                                    <div className="col"><span class="badge badge-info price"><MonetizationOnIcon /> From €950</span></div>
                                </div>

                                <div className="button-action">
                                    <button type="button" className="bouton-expertise gauche-btn"><a href="ok">Learn more <Send /></a></button>
                                    <button type="button" className="bouton-expertise droite-btn"><a href="ok">Book Now <EventAvailableIcon /> </a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 my-2" >
                        <div class="card">
                            <div class="card-body">
                                <div className="card-icons text-center">

                                </div>
                                <h3 className="card-title text-center">Post Wedding Safari</h3>
                                <div><img className='card-img-top' src={MarvellousHoneymoonSafari} alt="MarvellousHoneymoonSafari" /></div>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content </p>

                                <div className='row infoPratique'>
                                    <div className="col"><span class="badge badge-info place"> <MyLocationIcon />NorthWest</span></div>
                                    <div className="col"> <span class="badge badge-info price"><AvTimerIcon /> 10 Days</span> </div>
                                    <div className="col"><span class="badge badge-info price"><MonetizationOnIcon /> From €970</span></div>
                                </div>

                                <div className="button-action">
                                    <button type="button" className="bouton-expertise gauche-btn"><a href="ok">Learn more <Send /></a></button>
                                    <button type="button" className="bouton-expertise droite-btn"><a href="ok">Book Now <EventAvailableIcon /> </a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 my-2" >
                        <div class="card">
                            <div class="card-body">
                                <div className="card-icons text-center">

                                </div>
                                <h3 className="card-title text-center">Malagasy Culture Discovery</h3>
                                <div><img className='card-img-top' src={MalagasyCultureDiscovery} alt="MalagasyCultureDiscovery" /></div>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content </p>

                                <div className='row infoPratique'>
                                    <div className="col"><span class="badge badge-info place"> <MyLocationIcon />North</span></div>
                                    <div className="col"> <span class="badge badge-info price"><AvTimerIcon /> 14 Days</span> </div>
                                    <div className="col"><span class="badge badge-info price"><MonetizationOnIcon /> From €900</span></div>
                                </div>

                                <div className="button-action">
                                    <button type="button" className="bouton-expertise gauche-btn"><a href="ok">Learn more <Send /></a></button>
                                    <button type="button" className="bouton-expertise droite-btn"><a href="ok">Book Now <EventAvailableIcon /> </a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 my-2" >
                        <div class="card">
                            <div class="card-body">
                                <div className="card-icons text-center">

                                </div>
                                <h3 className="card-title text-center">River Trip</h3>
                                <div><img className='card-img-top' src={RiverTrip} alt="RiverTrip" /></div>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content </p>

                                <div className='row infoPratique'>
                                    <div className="col"><span class="badge badge-info place"> <MyLocationIcon />Southeast</span></div>
                                    <div className="col"> <span class="badge badge-info price"><AvTimerIcon /> 10 Days</span> </div>
                                    <div className="col"><span class="badge badge-info price"><MonetizationOnIcon /> From €920</span></div>
                                </div>

                                <div className="button-action">
                                    <button type="button" className="bouton-expertise gauche-btn"><a href="ok">Learn more <Send /></a></button>
                                    <button type="button" className="bouton-expertise droite-btn"><a href="ok">Book Now <EventAvailableIcon /> </a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TourHighlightsCard
