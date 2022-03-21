import React, { Component } from 'react';
import Aboutus from "../components/AboutUs";
import AboutUsTeam from "../components/AboutUsTeam";
import JeanJacques from '../components/JeanJacques';
import Slider from '../components/Slider';


export class AboutUs extends Component {
    render() {
        return (
            <main id="AboutUs">
                <Slider />
                <Aboutus />
                <JeanJacques />

                <AboutUsTeam />
                
                
                
            </main>
        )
    }
}

export default AboutUs