import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import '../css/ContactForm.css'
import logofooter from "../images/logoBottom.png";
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



const Footer = () => {

  return (
    <div className="footer">
      <div className="container">
        <div className="row py-3">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <img src={logofooter} alt="logo-madasafaritour" className="logofooter" />
            <p className="description-footer">MADA SAFARI TOUR Bespoke & Luxury holidays throughout Madagascar. Book it now for your dream holiday</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h5 className="contacts">Address & Contact</h5>
            <div className="contact-footer">

              <div className="contact-list">
                <a href="https://g.page/r/CedDYYYAub90EBA"> <StoreIcon />Mada Safari Tours S.A | License from the ministerial approval: 019-MINTOUR/SG/DGDT/DAIT/SAT-EDBM.18  </a> <br />
                <a href="https://g.page/r/CYgYXrFlcvgfEBA"> <LocationOnIcon />IVM 104 VZ Antetezanaafovoany I - Antananarivo 101 </a> <br />
                <a href="mailto:madasafaritoursagency@gmail.com"> <MailIcon /> madasafaritoursagency@gmail.com </a> <br />
                <a href="tel:+261 34 70 208 20"> <WhatsAppIcon /> +261 34 70 208 20</a> <br />
              </div>

            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h5>Follow us on:</h5>
            <div className="social-footer">
              <a href="https://web.facebook.com/madasafaritour" className="mx-2"><FacebookIcon /></a>
              <a href="https://twitter.com/safarimada" className="mx-2"><TwitterIcon /></a>
              <a href="https://www.linkedin.com/company/79432916" className="mx-2"><LinkedInIcon /></a>
              <a href="https://www.instagram.com/madasafaritour/" className="mx-2"><InstagramIcon /></a>
            </div>


            <div className="legacy mt-4">
              <Link to="/term-of-condition">Terms and Conditions</Link> <br />
              {/* <Link to="/disclaimer">Disclaimer</Link> <br />
              <Link to="/condition-of-services">Condition of services</Link> */}
            </div>


            <div className='my-2'> <NewsletterCute /></div>

          </div>
          <ToastContainer />
        </div>

       

        <div className="text-center">
          We accept these payment method <br />

          <img src={PaymentCard} alt="paymentmethod" className="mx-1 my-1 payment-method" />
        </div>

      </div>
      <div className="copyright text-center py-1">
        <p className="my-1">Copyright © <Link className="copyrightText" to="/">MadaSafariTour</Link> {new Date().getFullYear()} - All rights reserved</p>
      </div>
    </div>
  );

}
export default Footer;