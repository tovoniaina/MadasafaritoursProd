import React, { Component } from 'react';
import Aboutus from "../components/AboutUs";
import AboutUsTeam from "../components/AboutUsTeam";
import TransitionsModal from "../components/TransitionsModal"

export class AboutUs extends Component {
    render() {
        return (
            <main id="AboutUs">
                <Aboutus />
                <AboutUsTeam />
                <TransitionsModal />
                
                
            </main>
        )
    }
}

export default AboutUs