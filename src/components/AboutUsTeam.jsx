import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React, { useState } from 'react'
import img1 from "../images/Aristide.png";
import img4 from "../images/Todi.png";
import img3 from "../images/Haingo.png";




function AboutUsTeam() {
    const teamDescription = [
        {
            "name": "Aristide",
            "jobTitle": "Chief Executive Officer",
            "teamDescription": "The customer's satisfaction is our top priority, come and visit Madagascar with Travelia Safari, you will never regret to have chosen us.",
            "linkedin": "https://www.linkedin.com/in/rabemanantsoa-tovoniaina-aristide-7a0454105/",
            "facebook": "https://web.facebook.com/tovoniana",
            "whatsapp": "tel:+261336381135",
            "email": "mailto:hello@traveliasafari.com",
            "teamImage": img1
        },

        {
            "name": "Haingo",
            "jobTitle": "Administrative Assistant",
            "teamDescription": "Through our agency's philosophy, we value a friendly relationship with our clients so that they can easily express their expectations to us and we will go beyond those expectations",
            "linkedin": "https://www.linkedin.com/in/haingomanitra-hajahariniaina-817b48189/",
            "facebook": "https://web.facebook.com/haingomanitrafitiavana.hajahariniaina",
            "whatsapp": "",
            "email": "",
            "teamImage": img3
        },

        {
            "name": "Tody",
            "jobTitle": "Accountant",
            "teamDescription": "Come and visit Madagascar, you will discover incomparable experiences in its biodiversity and nature in its wild state.",
            "linkedin": "",
            "facebook": "https://web.facebook.com/rtodi.v.tomasy",
            "whatsapp": "",
            "email": "",
            "teamImage": img4
        },

    ]

    const [showMore, setShowMore] = useState();

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

                    {teamDescription.map((teams, i) => <div key={i} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="card card-group card-team-each">
                            <div className="card-body">
                                <h5 className="font-weight-bold mt-4 mb-3 nom-team"> {teams.name} </h5>

                                <img className="img1 my-2 z-depth-5 img-fluid" src={teams.teamImage} alt="img1" />

                                <h5 className="card-title text-center nom-poste"> {teams.jobTitle} </h5>
                                {showMore === i ? teams.teamDescription : `${teams.teamDescription.substring(0, 80)}`} {' '}
                                <button className='buttonShowMore' onClick={() => { showMore === i ? setShowMore(undefined) : setShowMore(i) }}>
                                    {showMore === i ? "Show less" : "Show more"}
                                </button>

                                <ul className="list-unstyled mb-2 text-center contact-team">
                                    <a href={teams.facebook} className="mx-2 social-icon"><FacebookIcon /></a>
                                    <a href={teams.linkedin} className="mx-2 social-icon"><LinkedInIcon /></a>
                                    <a href={teams.whatsapp} className="mx-2 social-icon"><WhatsAppIcon /></a>
                                    <a href={teams.email} className="mx-2 social-icon"><MailIcon /></a>
                                </ul>
                            </div>
                        </div>
                    </div>)}
                </div>
            </section>
        </div>
    )
}

export default AboutUsTeam
