import React, { Component } from 'react';
import Aboutus from "../components/AboutUs";
import AboutUsTeam from "../components/AboutUsTeam";
// import SubscribeForm from '../components/NewsletterMailchimpAPI/SubscribeForm';


export class AboutUs extends Component {
    render() {
        return (
            <main id="AboutUs">
                <Aboutus />
                <AboutUsTeam />
                {/* <SubscribeForm /> */}

                
                
                
            </main>
        )
    }
}

export default AboutUs