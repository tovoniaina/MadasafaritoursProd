import React from "react";
import logofooter from "../images/logo.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StoreIcon from '@mui/icons-material/Store';
import Button from '@mui/material/Button';


function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row py-3">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <img src={logofooter} alt="logo-madasafaritour" className="logofooter" />
            <p className="description-footer">MADA SAFARI TOUR Bespoke & Luxury holidays throughout Madagascar. Book it now for your dream holiday</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h5 className="contacts">Contact</h5>
            <div className="contact-footer">

              <div className="contact-list">
                <a href="https://g.page/r/CYgYXrFlcvgfEBA"> <StoreIcon/>Mada Safari Tours S.A | License from the ministerial approval: 019-MINTOUR/SG/DGDT/DAIT/SAT-EDBM.18  </a> <br />
                <a href="https://g.page/r/CYgYXrFlcvgfEBA"> <LocationOnIcon />IVM 104 VZ Antetezanaafovoany I - Antananarivo 101 </a> <br />
                <a href="mailto:cs@qerozia.io"> <MailIcon /> cs@madasaritours.com </a> <br />
                <a href="tel:+261 34 70 208 20"> <WhatsAppIcon /> +261 34 70 208 20</a> <br />
              </div>
              
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h5>Retrouvez-nous sur:</h5>
            <div className="social-footer">
              <a href="https://web.facebook.com/qeroziadigital" className="mx-2"><FacebookIcon /></a>
              <a href="https://twitter.com/QeroziaD" className="mx-2"><TwitterIcon /></a>
              <a href="https://www.linkedin.com/company/79306496" className="mx-2"><LinkedInIcon /></a>
              <a href="https://www.instagram.com/qeroziadigital/" className="mx-2"><InstagramIcon /></a>
            </div>


            <div className="legacy mt-4">
              <a href="#ok">Term of Condition</a> <br />
              <a href="#terms">Disclaimer</a>
            </div>

            <div className="newsletter">
              <input type="email" name="newsletter" className="mailInput" placeholder="example@email.com"/> <a href="#subs"><Button className='subscribe' variant="contained">Subscribe</Button></a>
                        
            </div>




          </div>


        </div>
      </div>
      <div className="copyright text-center py-1">
        <p className="my-1">Copyright © <a className="copyrightText" href="#Home">MadaSafariTour</a> 2022 - All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;