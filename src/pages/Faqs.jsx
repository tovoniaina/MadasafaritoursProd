import React, { Component } from 'react'
import QA from "../components/Qa"
import GalleryPhoto from '../components/GalleryPhoto'
import TestFooter from '../components/testFooter'
export class Faqs extends Component {
    render() {
        return (
            <main id='Qa'>
                <TestFooter />
                <QA />
                <GalleryPhoto />
                
                
                
            </main>
        )
    }
}

export default Faqs
