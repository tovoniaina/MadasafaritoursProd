import React from 'react';
import RecommendedTour from '../components/RecommendedTour'
import RecommendedToursSlider from '../components/RecommendedToursSlider'
import Covid from '../components/Covid';



function Home() {
    return (
        <main id='Home'>
            <Covid />
            <RecommendedTour />
            <RecommendedToursSlider />

        </main>

        
    )
}


export default Home
