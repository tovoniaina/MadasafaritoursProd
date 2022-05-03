import React from 'react';
import RecommendedTour from '../components/RecommendedTour'
import RecommendedToursSlider from '../components/RecommendedToursSlider'
import Covid from '../components/Covid';
import PremiumTours from '../components/PremiumTours';



function Home() {
    return (
        <main id='Home'>
            <Covid />
            <RecommendedTour />
            <RecommendedToursSlider />
            <PremiumTours />

        </main>

        
    )
}


export default Home
