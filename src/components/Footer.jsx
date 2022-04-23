import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
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

//Copy data from newsletter input to the airtable


const Footer = () => {

  //Newsletter toastify setting
  const {
    reset
  } = useForm();
  const [ setDisabled] = useState(false);

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast('Great! You have been subscribed', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { email } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = { email };

      emailjs.send('service_wbcqhdh', 'template_copj82l', templateParams, 'GwFaGFV-0KNwOLU8T')
        .then(function (response) {
          console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
          console.log('FAILED...', error);
        });

      // Reset contact form fields after submission
      reset();
      // Display success toast
      toastifySuccess();
      // Re-enable form submission
      setDisabled(false);
    } catch (e) {
      console.log(e);
    }
  };

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
                <a href="https://g.page/r/CYgYXrFlcvgfEBA"> <StoreIcon />Mada Safari Tours S.A | License from the ministerial approval: 019-MINTOUR/SG/DGDT/DAIT/SAT-EDBM.18  </a> <br />
                <a href="https://g.page/r/CYgYXrFlcvgfEBA"> <LocationOnIcon />IVM 104 VZ Antetezanaafovoany I - Antananarivo 101 </a> <br />
                <a href="mailto:*cs@madasaritours.com"> <MailIcon /> cs@madasaritours.com </a> <br />
                <a href="tel:+261 34 70 208 20"> <WhatsAppIcon /> +261 34 70 208 20</a> <br />
              </div>

            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h5>Follow us on:</h5>
            <div className="social-footer">
              <a href="https://web.facebook.com/qeroziadigital" className="mx-2"><FacebookIcon /></a>
              <a href="https://twitter.com/QeroziaD" className="mx-2"><TwitterIcon /></a>
              <a href="https://www.linkedin.com/company/79306496" className="mx-2"><LinkedInIcon /></a>
              <a href="https://www.instagram.com/qeroziadigital/" className="mx-2"><InstagramIcon /></a>
            </div>


            <div className="legacy mt-4">
              <Link to="/term-of-condition">Term of Condition</Link> <br />
              <Link to="/disclaimer">Disclaimer</Link> <br />
              <Link to="/condition-of-services">Condition of services</Link>
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