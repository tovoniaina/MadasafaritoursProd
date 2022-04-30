import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Navtop() {
    return (
        <div className="navbar-top navtop">
            <div className="container">
                <div className="row">
                    <div className="col-7 contact">
                        <a href="tel:+261347020820" className="mx-1"><WhatsAppIcon />Phone us</a>
                        <a href="mailto:madasafaritoursagency@gmail.com" className="mx-1"><MailIcon />Mail us</a>
                    </div>
                    <div className="col-5 social">
                        <a href="https://web.facebook.com/madasafaritour" className="mx-1"><FacebookIcon /></a>
                        <a href="https://twitter.com/safarimada" className="mx-1"><TwitterIcon /></a>
                        <a href="https://www.linkedin.com/company/79432916" className="mx-1"><LinkedInIcon /></a>
                        <a href="https://www.instagram.com/madasafaritour" className="mx-1"><InstagramIcon /></a>

                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default Navtop
