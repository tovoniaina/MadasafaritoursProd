import React from 'react';
import Slider from '../components/Slider';
import RecommendedTour from '../components/RecommendedTour'
import RecommendedToursSlider from '../components/RecommendedToursSlider'
import Covid from '../components/Covid';


function Home() {
    return (

        <main id='Home'>
            <Slider />
            <Covid />
            <RecommendedTour />
            <RecommendedToursSlider />
        </main>
    )
}


export default Home
