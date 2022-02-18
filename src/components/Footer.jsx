import React from "react";
import logofooter from "../images/logo.png";
// import LocationOnIcon from '@material-ui/icons/LocationOn';
// import PhoneIcon from '@material-ui/icons/Phone';
// import MailIcon from '@material-ui/icons/Mail';
// import WhatsAppIcon from '@material-ui/icons/WhatsApp';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';




function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row py-3">
          <div className="col-lg-4 col-md-6 col-sm-12 text-center">
            <img src={logofooter} alt="logo-madasafaritour" className="logofooter" />
            <p className="description-footer">MADA SAFARI TOUR Bespoke & Luxury holidays throughout Madagascar. Book it now for your dream holiday</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 text-center">
            <h5 className="mx-lg-4">Contact</h5>
            <div className="contact-footer">

              <div className="contact-list ">
                <a href="https://g.page/r/CYgYXrFlcvgfEBA"> Mada Safari Tours S.A, N7 PK2 en façe JADIDA </a> <br />
                <a href="tel:+261 33 63 811"> +261 33 63 811</a> <br />
                <a href="mailto:cs@qerozia.io"> <MailIcon /> cs@madasaritours.com </a> <br />
                <a href="tel:+261 33 63 811"> <WhatsAppIcon /> +261 33 63 811</a> <br />
              </div>

            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 text-center">
            <h5>Retrouvez-nous sur:</h5>
            <div className="social-footer">
              <a href="https://web.facebook.com/qeroziadigital" className="mx-2"><FacebookIcon /></a>
              <a href="https://twitter.com/QeroziaD" className="mx-2"><TwitterIcon /></a>
              <a href="https://www.linkedin.com/company/79306496" className="mx-2"><LinkedInIcon /></a>
              <a href="https://www.instagram.com/qeroziadigital/" className="mx-2"><InstagramIcon /></a>
            </div>

            <div className="legacy mt-4">
              <a href="#term">Term of Condition</a> <br />
              <a href="#terms">Disclaimer</a>
            </div>




          </div>


        </div>
      </div>
      <div className="copyright text-center">
        <p>Copyright © MadaSafariTour 2022 - All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;