import React, { Component } from 'react'
import GalleryPhoto from '../components/GalleryPhoto'
import Faqs from '../components/Faq'
import Slider from '../components/Slider';

export class Faq extends Component {
    render() {
        return (
            <main id='Faq'>
                <Slider />
                <Faqs />
                <GalleryPhoto />
                

                
                
                
            </main>
        )
    }
}

export default Faq
