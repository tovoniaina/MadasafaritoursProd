import React, { Component } from 'react';
import Aboutus from "../components/AboutUs";
import AboutUsTeam from "../components/AboutUsTeam";

export class AboutUs extends Component {
    render() {
        return (
            <main id="AboutUs">
                <Aboutus />
                <AboutUsTeam />
                
            </main>
        )
    }
}

export default AboutUs

