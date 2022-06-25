import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import img1 from "../images/team-4.png";
import img4 from "../images/team-4.png";
import img3 from "../images/team-4.png";


function AboutUsTeam() {
  return (
    <div className="container">
     <section className="team team-section mb-3" id="bg-conf">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <h3 className="text-center">Our amazing Team</h3>
                    <p className="text-center">
                        Lorem ipsum dolor sit amet consfectetur, adipisicing elit. Vel, quibusdam. Ducimus soluta officisa iste eaque!
                 </p>
                </div>
            </div>

            <div className="row mx-4">
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div class="card card-group card-team-each">
                        <div className="card-body">
                            <h5 className="font-weight-bold mt-4 mb-3 nom-team">John Doe</h5>

                            <img className="img1 z-depth-5 img-fluid" src={img1} alt="img1" />

                            <h5 className="card-title text-center nom-poste">Guide</h5>
                            <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <ul className="list-unstyled mb-2 text-center" contact-team>
                                <a href="#FbLink" className="mx-2 social-icon"><FacebookIcon /></a>
                                <a href="#LinkedinLink" className="mx-2 social-icon"><LinkedInIcon /></a>
                                <a href="tel:+261336381135" className="mx-2 social-icon"><WhatsAppIcon /></a>
                                <a href="mailto:idealy371@gmail.com" className="mx-2 social-icon"><MailIcon /></a>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div class="card card-group card-team-each">
                        <div className="card-body">
                            <h5 className="font-weight-bold mt-4 mb-3 nom-team">John Doe</h5>
                            <img className=" img1 rounded-circle z-depth-5 img-fluid" src={img3} alt="img1" />
                            <h5 className="card-title text-center nom-poste">Secretaire</h5>
                            <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <ul className="list-unstyled mb-2 text-center" contact-team>
                            <a href="#FbLink" className="mx-2 social-icon"><FacebookIcon /></a>
                                <a href="#LinkedinLink" className="mx-2 social-icon"><LinkedInIcon /></a>
                                <a href="#PhoneLink" className="mx-2 social-icon"><WhatsAppIcon /></a>
                                <a href="#MailLink" className="mx-2 social-icon"><MailIcon /></a>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div class="card card-group card-team-each">
                        <div className="card-body">
                            <h5 className="font-weight-bold mt-4 mb-3 nom-team">John Doe</h5>
                            <img className=" img1 rounded-circle z-depth-5 img-fluid" src={img4} alt="img1"/>
                            <h5 className="card-title text-center nom-poste">Guide</h5>
                            <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <ul className="list-unstyled mb-2 text-center" contact-team>
                            <a href="#FbLink" className="mx-2 social-icon"><FacebookIcon /></a>
                                <a href="#LinkedinLink" className="mx-2 social-icon"><LinkedInIcon /></a>
                                <a href="#PhoneLink" className="mx-2 social-icon"><WhatsAppIcon /></a>
                                <a href="#MailLink" className="mx-2 social-icon"><MailIcon /></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutUsTeam