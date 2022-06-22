import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import '../css/ContactForm.css'
import logofooter from "../images/travelia.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StoreIcon from '@mui/icons-material/Store';
import { Link } from "react-router-dom";
import PaymentCard from '../images/paymentMethod/payment-cards.png'
import NewsletterCute from './Newsletter/NewsletterCute';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const Footer = () => {

  return (
    <div className="footer">
      <div className="mx-5">
        <div className="row py-3">

          <div className="col-lg-3 col-md-6 col-sm-12">
           <Link to="/"><img src={logofooter} alt="logo-Travelia Safari" className="logofooter" /></Link> 
            <p className="description-footer">Travelia Safari Bespoke & Luxury holidays throughout Madagascar. Book it now for your dream holiday</p>

            <div>
              We accept these payment method <br />
              <img src={PaymentCard} alt="paymentmethod" className="payment-method" />
            </div>

          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <h5 className="contacts">Address & Contact</h5>
            <div className="contact-footer">

              <div className="contact-list">
                <a href="https://g.page/r/CedDYYYAub90EBA"> <StoreIcon />Travelia Safari S.A | License from the ministerial approval: 019-MINTOUR/SG/DGDT/DAIT/SAT-EDBM.18  </a> <br />
                <a href="https://g.page/r/CYgYXrFlcvgfEBA"> <LocationOnIcon />IVM 104 VZ Antetezanaafovoany I - Antananarivo 101 </a> <br />
                <a href="mailto:madasafaritoursagency@gmail.com"> <MailIcon /> madasafaritoursagency@gmail.com </a> <br />
                <a href="tel:+261 33 63 811 35"> <WhatsAppIcon /> +261 33 63 811 35</a> <br />
              </div>

            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <h5>Follow us on:</h5>
            <div className="social-footer">
              <a href="https://web.facebook.com/Travelia Safari" className="mx-2 social-footer"><FacebookIcon /></a>
              <a href="https://twitter.com/safarimada" className="mx-2 social-footer"><TwitterIcon /></a>
              <a href="https://www.linkedin.com/company/79432916" className="mx-2 social-footer"><LinkedInIcon /></a>
              <a href="https://www.instagram.com/Travelia Safari/" className="mx-2 social-footer"><InstagramIcon /></a>
            </div>


            <div className="legacy mt-4">
              <Link to="/term-of-condition">Terms and Conditions</Link> <br />
            </div>


            <div className='my-2'> <NewsletterCute /></div>

          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <h5>Our tours</h5>
            <div className="row">
              <div className="col">

              </div>
            </div>
            <li className='listTours'> <ArrowRightIcon /> <Link className='listTours' to="/Tour/indri-encouter"> Indri Encounter</Link> </li>
            <li className='listTours'> <ArrowRightIcon /> <Link className='listTours' to="/Tour/eastern-wonder"> Eastern wonder </Link> </li>
            <li className='listTours'> <ArrowRightIcon /> <Link className='listTours' to="/Tour/diving-tour"> Diving Tour </Link> </li>
            <li className='listTours'> <ArrowRightIcon /> <Link className='listTours' to="/Tour/dry-deciduous-birding"> Dry Deciduous Birding </Link> </li>
            <li className='listTours'> <ArrowRightIcon /> <Link className='listTours' to="/Tour/rainforest-birding"> Rain Forest Birding </Link> </li>
            <li className='listTours'> <ArrowRightIcon /> <Link className='listTours' to="/Tour/vanilla-cruise"> Vanilla Cruise </Link> </li>
            <li className='listTours'> <ArrowRightIcon /> <Link className='listTours' to="/Tour/safari"> Baobab Safari </Link> </li>
            <li className='listTours'> <ArrowRightIcon /> <Link className='listTours' to="/Tour/mada-northern-safari"> Mada Northern Safari</Link> </li>
            <li className='listTours'> <ArrowRightIcon /> <Link className='listTours' to="/Tour/tana-surrounding"> Tana Surrounding </Link> </li>
            <li className='listTours'> <ArrowRightIcon /> <Link className='listTours' to="/Tour/southern-trekking"> Southern Trekking </Link> </li>
            <li className='listTours'> <ArrowRightIcon /> <Link className='listTours' to="/Tour/mada-southern-safari"> Mada Southern Safari </Link> </li>
            <li className='listTours'> <ArrowRightIcon /> <Link className='listTours' to="/Tour/post-wedding-safari"> Post Wedding Safari </Link> </li>
            <li className='listTours'> <ArrowRightIcon /> <Link className='listTours' to="/Tour/malagasy-culture-discovery"> Malagasy Culture Discovery </Link> </li>
            <li className='listTours'> <ArrowRightIcon /> <Link className='listTours' to="/Tour/river-trip"> River Trip </Link> </li>
          </div>
          <ToastContainer />
        </div>


      </div>
      <div className="copyright text-center py-1">
        <p className="my-1">Copyright © <Link className="copyrightText" to="/">Travelia Safari</Link> {new Date().getFullYear()} - All rights reserved</p>
      </div>
    </div>
  );

}
export default Footer;