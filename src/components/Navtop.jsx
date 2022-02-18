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
                <div className="row text-center">
                    <div className="col-6 contact">
                        <a href="tel:+261336381135" className="mx-2"><WhatsAppIcon />+261336381135</a>
                        <a href="mailto:cs@qerozia.io" className="mx-2"><MailIcon />customer@madasafaritours.com</a>
                    </div>
                    <div className="col-6 social">
                        <a href="https://web.facebook.com/qeroziadigital" className="mx-2"><FacebookIcon /></a>
                        <a href="https://twitter.com/QeroziaD" className="mx-2"><TwitterIcon /></a>
                        <a href="https://www.linkedin.com/company/79306496" className="mx-2"><LinkedInIcon /></a>
                        <a href="https://www.instagram.com/qeroziadigital/" className="mx-2"><InstagramIcon /></a>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navtop
